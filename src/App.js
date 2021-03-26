import React from 'react';
import Products from './main_components/Menu';
import Categories from './main_components/Categories';
import Footer from './main_components/Footer'
import logo from './images/Kalilandlogo.png'


function App() {

    return (
        <main>
            <section className="menu section">
				<div style={{display: "flex", alignItems: "center"}}>
					<img className="logo" src={logo} alt="Kaliland"/>
				</div>
                <div className="title">
                    <h2>Nuestro Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories/>
				<Products/>
            </section>
            <Footer/>
        </main>
    )
}

export default App;
