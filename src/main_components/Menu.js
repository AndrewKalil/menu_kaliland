import React from 'react';
import Products from '../menu_functions/Products'
import Summary from '../menu_functions/Summary'
// import Modal from 'react-modal'

// Modal.setAppElement("#root")
// const DEFAULT_LONG = -123
// const DEFAULT_LAT = 48



const Menu = ({items}) => {

    return (
        <>
			<Products/>
            <Summary/>
            {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <button
                    className="exit-button"
                    onClick={() => setModalIsOpen(false)}
                >   <GrClose/>
                </button>
                <h1>Aqui se calcula el costo de domicilio</h1>
            </Modal> */}
        </>
    )
};

export default Menu;
