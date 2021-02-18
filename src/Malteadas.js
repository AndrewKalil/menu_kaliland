import React, {useState} from 'react';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Malteadas = ({tipos, desc, price}) => {
	const [index, setIndex] = useState(0)
	const {name, img} = tipos[index]

	const checkNumber = (number) => {
		if (number > tipos.length - 1) {
			return 0
		}
		if (number < 0) {
			return tipos.length -1
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
                <p className='item-text'>{desc}</p>
            </div>
		</>
	)
}

export default Malteadas