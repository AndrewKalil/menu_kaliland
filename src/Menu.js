import React from 'react';
import Pizza from './sub_components/Pizza'
import Malteadas from './sub_components/Malteadas'
import Burrito from './sub_components/Burrito'

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
                                title={title}
                                tipos={tipos}
                                desc={desc}
                                price={price}
                                img={img}/>
                        </article>
                    )

                } else if (title === 'malteadas') {
                    const {tipos} = menuItem
                    return(
                        <article key={id} className="menu-item">
                            <Malteadas
                                title={title}
                                tipos={tipos}
                                desc={desc}
                                price={price}/>
                        </article>
                    )

                } else if (title === 'Burricaballo') {
                    return(
                        <article key={id} className="menu-item">
                            <Burrito
                                desc={desc}
                                price={price}
                                img={img}
                                title={title}/>
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
