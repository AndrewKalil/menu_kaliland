import React from 'react'
import logo from '../images/Kalilandlogo.png'
import {FaShoppingCart} from 'react-icons/fa'
import {useGlobalContext} from '../context_api/context'


const Navbar = () => {
	const {openModal, amount} = useGlobalContext()

	let prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("myNavbar").style.top = "0";
		} else {
			document.getElementById("myNavbar").style.top = "-50px";
		}
		prevScrollpos = currentScrollPos;
	}

	return (
		<nav id="myNavbar" className="navbar navbar-light">
			<div className="container-fluid">
				<a
					href="/">
					<img
						style={{height: "45px"}}
						src={logo}
						alt="logo"/>
				</a>
				<button
					onClick={openModal}
					className="btn my-navbar-btn"
					style={{
						color: "white"
					}}>
					<FaShoppingCart className="my_button"/>
					<p>{amount}</p>
				</button>

			</div>
		</nav>
	)
}

export default Navbar