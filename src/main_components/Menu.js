import React, { useState } from 'react';
import Items from '../menu_functions/Items'
import Summary from '../menu_functions/Summary'
import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'


Modal.setAppElement("#root")
// const DEFAULT_LONG = -123
// const DEFAULT_LAT = 48

export const ItemContext = React.createContext()

const Menu = ({items}) => {
    const [list, setList] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [message, setMessage] = useState("")

    const addItem = (item, setQuantity) => {
        // checks to see if items are repeated
        const repeated = list.some(listItem => listItem.id === item.id)
        // checks to see if we can increase the quantity of a product
        const addMore = list.some(listItem => listItem.name === item.name)
        // checks to see if item from same type but differet product can be added
        const differentType = list.some(listItem => listItem.id === item.id && listItem.name !== item.name)
        // checks if incoming quantity is 0
        const zeroQuantity = item.quantity === 0 ? true : false

        const newItem = item
        if (newItem && !zeroQuantity && !repeated) {
            const newItems=[...list, newItem]
            setList(newItems)
            setQuantity(0)
        }
        if (newItem && !zeroQuantity && addMore) {
            const index = list.indexOf(list.find(listItem => listItem.id === item.id))
            const newItems = [...list]
            newItems[index].quantity += newItem.quantity
            setList(newItems)
            setQuantity(0)
        }
        if (newItem && !zeroQuantity && repeated && differentType) {
            const newItems=[...list, newItem]
            setList(newItems)
            setQuantity(0)
        }
    }

    const createMessage = () => {
        let message = `Hola quisiera pedir: ${list.map((item, index) => {
            return (
                " *" + JSON.stringify(item.name).slice(1, -1) + "*  " +
                "(*" +
                JSON.stringify(item.quantity) +
                "*)"
            )
        })}\n\nTotal sin domicilio: ${Number(
            list.reduce((totalPrice, listItem) =>
                totalPrice + parseFloat(listItem.price * listItem.quantity), 0))
            .toFixed(3)}`
        message = encodeURI(message)
        return message
    }

    const subQuantity = (id) => {
        const index = list.indexOf(list.find(listItem => listItem.id === id))
        const filteredList = list.filter((item) => item.id !== id)
        const newItems = [...list]

        newItems[index].quantity -= 1
        newItems[index].quantity < 1 ? setList(filteredList) : setList(newItems)
    }

    const addQuantity = (id) => {
        const index = list.indexOf(list.find(listItem => listItem.id === id))
        const newItems = [...list]
        newItems[index].quantity += 1
        setList(newItems)
    }

    return (
        <ItemContext.Provider value={
			{
				addItem, subQuantity, addQuantity,
				setMessage, createMessage, message
			}
		}>
			<Items items={items}/>
            <Summary list={list}/>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button
                    className="exit-button"
                    onClick={() => setModalIsOpen(false)}
                >   <GrClose/>
                </button>
                <h1>Aqui se calcula el costo de domicilio</h1>
            </Modal>
        </ItemContext.Provider>
    )
};

export default Menu;
