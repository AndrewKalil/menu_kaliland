import React from 'react';
import Pizza from './Pizza'
import Malteadas from './Malteadas'

const Menu = ({items}) => {
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                const {id, title, img, desc, price} = menuItem

                if (title === 'pizza') {
                    const {tipos} = menuItem
                    return(
                        <article key={id} className="menu-item">
                            <Pizza
                                tipos={tipos}
                                desc={desc}
                                price={price}
                                img={img}/>
                        </article>
                    )

                } else if (title === 'kalimalteadas') {
                    const {tipos} = menuItem
                    return(
                        <article key={id} className="menu-item">
                            <Malteadas
                                tipos={tipos}
                                desc={desc}
                                price={price}/>
                        </article>
                    )

                } else {
                    return(
                        <article key={id} className="menu-item">
                            <img src={img} alt={title} className='photo'/>
                            <div className="item-info">
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className='price'>{price}</h4>
                                </header>
                                <p className='item-text'>{desc}</p>
                            </div>
                        </article>
                    )
                }
            })}
        </div>
    )
};

export default Menu;
