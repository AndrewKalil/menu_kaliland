import React, { useState, useContext, useEffect } from 'react'
import items from '../data/data'

const AppContext = React.createContext()

//categories setter
const allCategories = ['todos', ...new Set(items.map((item) => item.category))]

// for getting data from localStorage
const getData = (keyName) => {
	let data = window.localStorage.getItem(keyName)
	if (data) {
		return JSON.parse(data)
	}
	return []
}

const AppProvider = ({children}) => {
	// state values
	const [products, setProducts] = useState(items)
	const [categories] = useState(allCategories)
	const [cart, setCart] = useState(getData("cart"))
	const [message, setMessage] = useState("")

	// clear cart in localstorage
	useEffect(() => {
		let quantity = cart.reduce((totalQuantity, listItem) => totalQuantity + listItem.quantity, 0)
		if (quantity <= 0) {
			removeData("cart")
		}
	}, [cart])

	// filter categories function
	const filterItems = (category) => {
        if (category === 'todos') {
            setProducts(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setProducts(newItems)
    }

	// create a predifined message for whatsapp
	const createMessage = () => {
        let message = `Hola quisiera pedir: ${cart.map((item, index) => {
            return (
                " *" + JSON.stringify(item.name).slice(1, -1) + "*  " +
                "(*" +
                JSON.stringify(item.quantity) +
                "*)"
            )
        })}\n\nTotal sin domicilio: ${Number(
            cart.reduce((totalPrice, cartItem) =>
                totalPrice + parseFloat(cartItem.price * cartItem.quantity), 0))
            .toFixed(3)}`
        message = encodeURI(message)
        return message
    }

	// add or subtract quantity of product
	const subQuantity = (id) => {
        const index = cart.indexOf(cart.find(cartItem => cartItem.id === id))
        const filteredList = cart.filter((item) => item.id !== id)
        const newItems = [...cart]

        newItems[index].quantity -= 1
        newItems[index].quantity < 1 ? setCart(filteredList) : setCart(newItems)
		saveData("cart", newItems)
    }

    const addQuantity = (id) => {
        const index = cart.indexOf(cart.find(cartItem => cartItem.id === id))
        const newItems = [...cart]
        newItems[index].quantity += 1
        setCart(newItems)
		saveData("cart", newItems)
    }

	// add items to cart
	const addItem = (item, setQuantity) => {
		// iterates through the list and returns false (not repeated) if id of
		// product is not found and true if otherwise
        const repeated = cart.some(cartItem => cartItem.id === item.id)
        // iterates through the list and returns false if name of
		// product is not found and true if otherwise. This is done prevent product duplication
		// in list when adding quantity
        const addMore = cart.some(cartItem => cartItem.name === item.name)
        // iterates through the list and returns true if id of product is found
		// but has a different name
        const differentType = cart.some(cartItem => cartItem.id === item.id && cartItem.name !== item.name)
        // checks if incoming quantity is 0
        const zeroQuantity = item.quantity === 0 ? true : false

        const newItem = item
        if (newItem && !zeroQuantity && !repeated) {
            const newItems=[...cart, newItem]
            setCart(newItems)
			saveData("cart", newItems)
            setQuantity(0)
        }
        if (newItem && !zeroQuantity && addMore) {
            const index = cart.indexOf(cart.find(cartItem => cartItem.id === item.id))
            const newItems = [...cart]
            newItems[index].quantity += newItem.quantity
            setCart(newItems)
			saveData("cart", newItems)
            setQuantity(0)
        }
        if (newItem && !zeroQuantity && repeated && differentType) {
            const newItems=[...cart, newItem]
            setCart(newItems)
			saveData("cart", newItems)
            setQuantity(0)
        }
    }

	//save cart to localstorage
	const saveData = (keyName, data) => {
		if (data) {
			window.localStorage.setItem(keyName, JSON.stringify(data))
		}
	}

	const removeData = (keyName) => {
		window.localStorage.removeItem(keyName)
	}

	return (
		<AppContext.Provider
			value={{
				products,
				categories,
				filterItems,
				cart,
				createMessage,
				subQuantity,
				addQuantity,
				addItem,
				message,
				setMessage,
				saveData
			}}>
			{children}
		</AppContext.Provider>)
}

// custom hook
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppProvider}