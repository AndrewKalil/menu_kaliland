import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useGlobalContext } from '../context_api/context'
// import {GrClose} from 'react-icons/gr'
import Summary from './Summary'


const MyModal = () => {
	const {modalIsOpen, closeModal, amount} = useGlobalContext()

	return (
		<Modal show={modalIsOpen} onHide={closeModal}>
			<Modal.Header closeButton>
				<Modal.Title>Tu pedido</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{amount > 0 ? <Summary/> : <h5>Carrito vacio :(</h5>}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={closeModal}>
					Salir
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default MyModal