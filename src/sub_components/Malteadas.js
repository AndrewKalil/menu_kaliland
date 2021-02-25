import React, {useState} from 'react';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Malteadas = ({tipos, desc, price, title, addItem}) => {
    const [index, setIndex] = useState(0)
	const {name, img, id} = tipos[index]
    const [quantity, setQuantity] = useState(0)

	const checkNumber = (number) => {
		if (number > tipos.length - 1) {
			return 0
		}
		if (number < 0) {
			return tipos.length -1
		}
		return number
	}


    const preventNegative = (number) => {
        if (number < 0) {
            return 0
        }
        return number
    }

	const nextItem = () => {
		setIndex((index) => {
			let newIndex = index + 1
			return checkNumber(newIndex)
		})
	}

	const prevItem = () => {
		setIndex((index) => {
			let newIndex = index - 1
			return checkNumber(newIndex)
		})
	}

	return (
		<>
            <img src={img} alt={name} className='photo'/>
            <div className="item-info">
                <h4>{title}</h4>
                <header>
                    {tipos && <button
                        className="prev-btn"
                        onClick={prevItem}>
                        <FaChevronLeft/>
                    </button>}
                    <h4>{name}</h4>
                    {tipos && <button
                        className="next-btn"
                        onClick={nextItem}>
                        <FaChevronRight/>
                    </button>}
                    <h4 className='price'>{price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
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

export default Malteadas