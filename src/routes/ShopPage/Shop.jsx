import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../contexts/products'
import Button from '../../components/button/button.component'
import './Shop.scss'
import { CartContext } from '../../contexts/CartContext'

function Shop() {
    const {products} = useContext(ProductContext)
    const {addItemTocart} = useContext(CartContext)
    
    return (
        <div className='shop-container'>
            {products.map( (product) => {
                const  {id, name, price, imageUrl} = product;

                return(
                    <div key= {id} className='card-container'>
                        <img src={imageUrl} alt={`${name}`}/>
                        <div className='description'>
                            <span className='name'>{name}</span>
                            <span className='price'>${price}</span>
                    </div>
                    <Button onClick={() => addItemTocart(product)}>Add</Button>
                </div>
                )
                   
})}
            </div>
  )
}

export default Shop