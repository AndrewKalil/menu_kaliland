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
                    {/* <ul className="list-unstyled mb-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> */}
                    <ul className="list-unstyled mb-0">
                        {numeros.map((numero, index) => {
                            const {name, number} = numero
                            return (
                                <li><a className='text-dark' href={`https://api.whatsapp.com/send?phone=${number}`}>contacta a {name}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Footer text</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                    molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                    aliquam voluptatem veniam, est atque cumque eum delectus sint!
                    </p>
                </div>
                </div>
            </div>

            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}

export default Footer