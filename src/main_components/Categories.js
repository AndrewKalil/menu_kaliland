import React from 'react';
import { useGlobalContext } from '../context_api/context'

const Categories = () => {
	const {filterItems, categories} = useGlobalContext()
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        className="filter-btn"
                        key={index}
                        type='button'
                        onClick={() => filterItems(category)}>
                            {category}
                    </button>
                )
            })}
        </div>
    )
};

export default Categories;
