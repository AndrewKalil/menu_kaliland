import React, {useState, useEffect} from 'react';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Pizza = ({tipos, desc, img}) => {
	const [index, setIndex] = useState(0)
    const [imgIndex, setImgIndex] = useState(0)
	const {name, price} = tipos[index]

	const checkNumber = (number, array) => {
		if (number > array.length - 1) {
			return 0
		}
		if (number < 0) {
			return array.length -1
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

export default Pizza