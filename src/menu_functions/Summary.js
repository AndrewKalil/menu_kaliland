import React from 'react'

//importing usecontext
import { useGlobalContext } from '../context_api/context'

const Summary = () => {
	const {subQuantity, addQuantity, setMessage, createMessage, message, cart, amount, total} = useGlobalContext()
	return (
		<div>
			{cart && cart.length > 0 && <div className="summary" style={cart.length > 0 ? {border: "darkslategrey solid 2px"} : {}}>
				<div
					className="summary-item"
					style={{backgroundColor: "hsl(205, 86%, 81%)",
							height: "30px",
							paddingTop: "6px",
							marginBottom: "5px",
							borderRadius: "5px",
							alignContent: "center"
					}}>
					<h5>Cantidad</h5>
					<h5>producto</h5>
					<h5>Precio</h5>
				</div>
				{cart.map((listItem) => {
					const {quantity, name, price, id} = listItem
					return (
						<div key={id} className="summary-item">
							<div className="add_subtract">
								<button onClick={() => subQuantity(id)}>-</button>
								<p style={{marginRight: "4px", marginLeft: "4px"}}>{quantity}</p>
								<button onClick={() => addQuantity(id)}>+</button>
							</div>
							<h6 style={{textAlign:"center"}}>{name}</h6>
							<h6>{Number(price * quantity).toFixed(3)}</h6>
						</div>
					)
				})}
				<br/>
				<div className="summary-item highlight-darkblue">
					<h6>{amount}</h6>
					<h6>Total</h6>
					<h6>{total}</h6>
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