import React, {useContext} from 'react'

//importing usecontext
import { ItemContext } from "../main_components/Menu.js"

const Summary = ({list}) => {
	const {subQuantity, addQuantity, setMessage, createMessage, message} = useContext(ItemContext)
	return (
		<div>
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
		</div>
	)
}

export default Summary