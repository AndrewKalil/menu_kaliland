import React from 'react';
import Products from '../menu_functions/Products'
import MyModal from '../menu_functions/Modal'

// Modal.setAppElement("#root")
// const DEFAULT_LONG = -123
// const DEFAULT_LAT = 48



const Menu = ({items}) => {
    return (
        <>
			<Products/>
			<MyModal/>
        </>
    )
};

export default Menu;
