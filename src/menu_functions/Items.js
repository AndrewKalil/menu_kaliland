import React, { useContext, useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Pizza from './item_subcomponent/Pizza'
import Malteadas from './item_subcomponent/Malteadas'
import Burrito from './item_subcomponent/Burrito'
import Normal from  './item_subcomponent/Normal'

import { ItemContext } from "../main_components/Menu.js";


const Items = ({items}) => {
	const {addItem} = useContext(ItemContext)
	return (
		<div className="section-center">
			{items.map((menuItem) => {
				const {title, desc, price, img, id} = menuItem

				// return (
				// 	<article className="menu-item">
				// 		<Item {...menuItem}/>
				// 	</article>
				// )

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
	)
}

// const Item = ({id, title, img, desc, price, tipos}) => {
// 	const [quantity, setQuantity] = useState(0)
// 	const [readMore, setReadMore] = useState(false)
// 	const [imgIdx, setImgIdx] = useState(0)

// 	const {addItem} = useContext(ItemContext)

// 	const preventNegative = (number) => {
//         if (number < 0) {
//             return 0
//         }
//         return number
//     }

// 	// const checkNumber = (number, array) => {
// 	// 	if (number > array.length - 1) {
// 	// 		return 0
// 	// 	}
// 	// 	if (number < 0) {
// 	// 		return array.length -1
// 	// 	}
// 	// 	return number
// 	// }

// 	// useEffect(() => {
// 	// 	let slider = setInterval(() => {
// 	// 		setImgIdx(checkNumber(imgIdx + 1, img))
// 	// 	}, 3000)
// 	// 	return () => clearInterval(slider)
// 	// },[imgIdx, img])


// 	// const tipos_name = tipos && tipos[nameIdx].name
// 	// const tipos_price = tipos && tipos[nameIdx].name
// 	// const tipos_id = tipos && tipos[nameIdx].name

// 	return (
// 		<>
//             <img src={img} alt={title} className='photo'/>
//             <div className="item-info">
//                 <header>
//                     <h4>{title}</h4>
//                     <h4 className='price'>{price}</h4>
//                 </header>
//                 <p className='item-text'>
//                     {readMore? `${desc} ` : `${desc.substring(0, 250)} `}
//                     {desc.length > 250 && <button
// 						className="readMoreBtn"
//                         onClick={() => setReadMore(!readMore)}
//                     >{readMore ? "...Leer menos" : "...Leer mas"}</button>}
//                 </p>
//             </div>
//             <div className='my-btn-container'>
//                 <div className="add_subtract">
//                     <button onClick={() => setQuantity(preventNegative(quantity - 1))}>-</button>
//                     <p>{quantity}</p>
//                     <button onClick={() => setQuantity(quantity + 1)}>+</button>
//                 </div>
//                 <button
//                     onClick={() => addItem({name: title, quantity: quantity, id: id, price: price}, setQuantity)}
//                     className='add-to-cart-btn'>
//                         Añadir
//                 </button>
//             </div>
// 		</>
// 	)
// }

export default Items