import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['todos', ...new Set(items.map((item) => item.category))]

function App() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'todos') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Nuestro Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories}
                            filterItems={filterItems}/>
                <Menu items={menuItems}/>
            </section>
        </main>
    )
}

export default App;
