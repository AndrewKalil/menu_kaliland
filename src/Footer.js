import React from 'react'

const Footer = () => {
    let numeros = [
        {name: "Andrew", number: "+573137936776"},
        {name: "Luis", number: "+573008825415"},
        {name: "Andy", number: "+573022955334"},
        {name: "juan", number: "+573116010528"}
    ]
    return (
        <footer className="footer text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Contactanos</h5>
                    <ul className="list-unstyled mb-0">
                        {numeros.map((numero, index) => {
                            const {name, number} = numero
                            return (
                                <li key={index}><a className='text-dark' href={`https://api.whatsapp.com/send?phone=${number}`}>contacta a {name}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Formas de pago</h5>
                    <ul className="list-unstyled mb-0">
                        <li className='text-dark'>Nequi: 3137936776</li>
                        <li className='text-dark'>A la entrega</li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright: Kaliland
            </div>
        </footer>
    )
}

export default Footer