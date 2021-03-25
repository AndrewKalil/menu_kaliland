import React, {useState, useEffect} from 'react';

const Burrito = ({desc, img, title, price, addItem, id}) => {
    const [imgIndex, setImgIndex] = useState(0)
    const [quantity, setQuantity] = useState(0)

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

	return (
		<>
            <img src={img[imgIndex]} alt={title} className='photo'/>
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
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
                    onClick={() => addItem({name: title, quantity: quantity, id: id, price: price}, setQuantity)}
                    className='add-to-cart-btn'>
                        Añadir
                </button>
            </div>
		</>
	)
}

export default Burrito