import './CheckOut.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export default function CheckOut() {
    const {cartItems, removeItemfromCart, addItemTocart, clearItem, cartTotal} = useContext(CartContext)

  return (
    <div className='checkout-container'>
        <div className='header-blocks'>
            <div className='block'>
                <span>Product</span>
            </div>
            <div className='block'>
                <span>Description</span>
            </div>
            <div className='block'>
                <span>Quantity</span>
            </div>
            <div className='block'>
                <span>Price</span>
            </div>
            <div className='block'>
                <span>Remove</span>
            </div>
        </div>
       
            {cartItems.map( (cartItem) => {
                const {id, imageUrl,name, quantity, price} = cartItem;
                return (
                    <div key={id} className="checkout-items">
                        <img src={imageUrl} alt={`${name}`} />
                        <span className='name'>{name}</span>

                        <span className='quantity'>
                            <span className="arrow" onClick={() => removeItemfromCart(cartItem)}> &#10094; </span>
                            {quantity}
                            <span className="arrow" onClick={() => addItemTocart(cartItem)}> &#10095; </span>
                        </span>
                       
                        <span className='price'>{price}</span>
                        <span className='remove' onClick={() => clearItem(cartItem)}> &#10005; </span>
                    </div>
                )
                })}

        <span className='total'>Total: ${cartTotal} </span>
    </div>
  )
}
