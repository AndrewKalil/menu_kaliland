import React, {useState} from 'react';

const Normal = ({desc, img, title, price, addItem, id}) => {
    const [quantity, setQuantity] = useState(0)

    const preventNegative = (number) => {
        if (number < 0) {
            return 0
        }
        return number
    }

	return (
		<>
            <img src={img} alt={title} className='photo'/>
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

export default Normal