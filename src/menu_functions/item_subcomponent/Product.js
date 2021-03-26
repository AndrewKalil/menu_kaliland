import React, {useState, useEffect} from 'react';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useGlobalContext } from '../../context_api/context'

const Product = ({desc, img, title, price, id, tipos}) => {
	const {addItem} = useGlobalContext()

    const [quantity, setQuantity] = useState(0)
	const [productIdx, setProductIdx] = useState(0)
	const [passIdx, setPassIdx] = useState(0)
	const [readMore, setReadMore] = useState(false)

    const preventNegative = (number) => {
        if (number < 0) {
            return 0
        }
        return number
    }

	const nextItem = () => {
		setProductIdx((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex, tipos)
		})
	}

	const prevItem = () => {
		setProductIdx((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex, tipos)
		})
	}

	const checkNumber = (number, array) => {
		if (typeof(array) === "object" && number > array.length - 1) {
			return 0
		}
		if (typeof(array) === "object" && number < 0) {
			return array.length -1
		}
		return number
	}

	useEffect(() => {
		let slider = setInterval(() => {
			let newIdx = passIdx + 1
			if (typeof(img) === "object") {
				if (newIdx > img.length - 1) {
					newIdx = 0
				}
			}
			setPassIdx(newIdx)
		}, 3000)

		return () => clearInterval(slider)
	},[passIdx, img])

	return (
		<>
            <img
				src={
					(tipos && tipos[productIdx].img) ||
					(typeof(img) === "string" && img) ||
					(typeof(img) === "object" && img[passIdx])
				}
				alt={title} className='photo'/>
            <div className="item-info">
                <header>
					{tipos ? <div style={{display: "flex"}}>
						<button
							className="prev-btn"
							onClick={prevItem}>
							<FaChevronLeft/>
						</button>
						<h4>{tipos[productIdx].name}</h4>
						<button
							className="next-btn"
							onClick={nextItem}>
							<FaChevronRight/>
						</button>
					</div> :
                    <h4>{title}</h4>}
                    <h4 className='price'>{price || tipos[productIdx].price}</h4>
                </header>
                <p className='item-text'>
                    {readMore? `${desc} ` : `${desc.substring(0, 200)} `}
                    {desc.length > 200 && <button
						className="readMoreBtn"
                        onClick={() => setReadMore(!readMore)}
                    >{readMore? "...Leer menos" : "...Leer mas"}</button>}
                </p>
            </div>
            <div className='my-btn-container'>
                <div className="add_subtract">
                    <button onClick={() => setQuantity(preventNegative(quantity - 1))}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button
                    onClick={() => addItem({
						name: tipos && tipos[productIdx].name? tipos[productIdx].name : title,
						quantity: quantity,
						id: tipos && tipos[productIdx].id? tipos[productIdx].id : id,
						price: tipos && tipos[productIdx].price ? tipos[productIdx].price : price}, setQuantity)}
                    className='add-to-cart-btn'>
                        Añadir
                </button>
            </div>
		</>
	)
}

export default Product