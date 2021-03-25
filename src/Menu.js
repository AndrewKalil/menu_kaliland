import React, { useState } from 'react';
import Pizza from './sub_components/Pizza'
import Malteadas from './sub_components/Malteadas'
import Burrito from './sub_components/Burrito'
import Normal from  './sub_components/Normal'
import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'


Modal.setAppElement("#root")
// const DEFAULT_LONG = -123
// const DEFAULT_LAT = 48

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
        <div>
            <div className="section-center">
                {items.map((menuItem) => {
                    const {id, title, img, desc, price} = menuItem

                    if (title === 'pizza') {
                        const {tipos} = menuItem
                        return(
                            <article key={id} className="menu-item">
                                <Pizza
                                    title={title}
                                    tipos={tipos}
                                    desc={desc}
                                    price={price}
                                    img={img}
                                    addItem={addItem}/>
                            </article>
                        )

                    } else if (title === 'malteadas') {
                        const {tipos} = menuItem
                        return(
                            <article key={id} className="menu-item">
                                <Malteadas
                                    addItem={addItem}
                                    title={title}
                                    tipos={tipos}
                                    desc={desc}
                                    price={price}/>
                            </article>
                        )

                    } else if (title === 'Burricaballo') {
                        return(
                            <article key={id} className="menu-item">
                                <Burrito
                                    addItem={addItem}
                                    id={id}
                                    desc={desc}
                                    price={price}
                                    img={img}
                                    title={title}/>
                            </article>
                        )

                    } else {
                        return(
                            <article key={id} className="menu-item">
                                <Normal
                                    id={id}
                                    title={title}
                                    desc={desc}
                                    price={price}
                                    img={img}
                                    addItem={addItem}/>
                            </article>
                        )
                    }
                })}
            </div>
            {list.length > 0 && <div className="summary" style={list.length > 0 ? {border: "darkslategrey solid 2px"} : {}}>
                <div
                    className="summary-item"
                    style={{backgroundColor: "hsl(205, 86%, 81%)",
                            height: "30px",
                            paddingTop: "6px",
                            marginBottom: "5px",
                            borderRadius: "5px"
                    }}>
                    <h4>Cantidad</h4>
                    <h4>producto</h4>
                    <h4>Precio</h4>
                </div>
                {list.map((listItem) => {
                    const {quantity, name, price, id} = listItem
                    return (
                        <div key={id} className="summary-item">
                            <div className="add_subtract">
                                <button onClick={() => subQuantity(id)}>-</button>
                                <p style={{marginRight: "4px", marginLeft: "4px"}}>{quantity}</p>
                                <button onClick={() => addQuantity(id)}>+</button>
                            </div>
                            <h4 style={{textAlign:"center"}}>{name}</h4>
                            <h4>{Number(price * quantity).toFixed(3)}</h4>
                        </div>
                    )
                })}
                <br/>
                <div className="summary-item highlight-darkblue">
                    <h4>{list.reduce((totalQuantity, listItem) => totalQuantity + listItem.quantity, 0)}</h4>
                    <h4>Total</h4>
                    <h4>{Number(list.reduce((totalPrice, listItem) => totalPrice + parseFloat(listItem.price * listItem.quantity), 0)).toFixed(3)}</h4>
                </div>
                <br/><br/>
                <div className="summary-item">
                    <p></p>
                    {/* <button
                        className="summary-pedir-btn"
                        onClick={() => setModalIsOpen(true)}>
                            pedir
                    </button> */}
                    <a
                        onClick={() => {setMessage(createMessage)}}
                        className="summary-pedir-btn"
                        href={`https://api.whatsapp.com/send?phone=${'+573137936776'}&text=${message}`}>
                        <button>Pedir</button>
                    </a>
                    <p></p>
                </div>
            </div>}
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button
                    className="exit-button"
                    onClick={() => setModalIsOpen(false)}
                >   <GrClose/>
                </button>
                <h1>Aqui se calcula el costo de domicilio</h1>
            </Modal>
        </div>
    )
};

export default Menu;
