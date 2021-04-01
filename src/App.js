import React from 'react';
import Navbar from './main_components/Navbar'
import Categories from './main_components/Categories';
import Products from './main_components/Menu';
import Footer from './main_components/Footer'
import './App.scss';

function App() {

    return (
        <main>
			<Navbar/>
            <section className="menu section">
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
