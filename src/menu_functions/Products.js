import React from 'react'
// import PropTypes from 'prop-types'
// import Pizza from './item_subcomponent/Pizza'
// import Malteadas from './item_subcomponent/Malteadas'
// import Burrito from './item_subcomponent/Burrito'
import Product from  './item_subcomponent/Product'
import { useGlobalContext } from '../context_api/context'


const Products = () => {
	const {products} = useGlobalContext()
	return (
		<div className="section-center">
			{products.map((menuItem) => {
				return(
					<article key={menuItem.id} className="menu-item">
						<Product {...menuItem}/>
					</article>
				)
				// }
			})}
		</div>
	)
}

export default Products