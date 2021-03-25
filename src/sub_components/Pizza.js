import React, {useState, useEffect} from 'react';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Pizza = ({tipos, desc, img, title, addItem}) => {
	const [index, setIndex] = useState(0)
    const [imgIndex, setImgIndex] = useState(0)
	const [quantity, setQuantity] = useState(0)
    const {name, price, id} = tipos[index]
	const [readMore, setReadMore] = useState(false)

	const checkNumber = (number, array) => {
		if (number > array.length - 1) {
			return 0
		}
		if (number < 0) {
			return array.length -1
		}
		return number
	}

    const preventNegative = (number) => {
        if (number < 0) {
            return 0
        }
        return number
    }

    useEffect(() => {
		let slider = setInterval(() => {
			setImgIndex(checkNumber(imgIndex + 1, img))
		}, 3000)
		return () => clearInterval(slider)
	},[imgIndex, img])

	const nextItem = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex, tipos)
		})
	}

	const prevItem = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex, tipos)
		})
	}

	return (
		<>
            <img src={img[imgIndex]} alt={name} className='photo'/>
            <div className="item-info">
                <h4>{title}</h4>
                <header>
                    <button
                        className="prev-btn"
                        onClick={prevItem}>
                        <FaChevronLeft/>
                    </button>
                    <h4>{name}</h4>
                    <button
                        className="next-btn"
                        onClick={nextItem}>
                        <FaChevronRight/>
                    </button>
                    <h4 className='price'>{price}</h4>
                </header>
                {/* <p className='item-text'>{desc}</p> */}
				<p className='item-text'>
                    {readMore? `${desc} ` : `${desc.substring(0, 200)}... `}
                    <button
						className="readMoreBtn"
                        onClick={() => setReadMore(!readMore)}
                    >{readMore? "Leer menos" : "Leer mas"}</button>
                </p>
            </div>
            <div className='my-btn-container'>
                <div className="add_subtract">
                    <button onClick={() => setQuantity(preventNegative(quantity - 1))}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button
                    onClick={() => addItem({name: name, quantity: quantity, id: id, price: price}, setQuantity)}
                    className='add-to-cart-btn'>
                        Añadir
                </button>
            </div>
		</>
	)
}

export default Pizza