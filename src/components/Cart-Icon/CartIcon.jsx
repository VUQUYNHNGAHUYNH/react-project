import { useContext } from "react"
import {ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { CartContext } from "../../contexts/CartContext"
import './CartIcon.scss'

function CartIcon() {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    const toggleCart = () => { setIsCartOpen (!isCartOpen) }
    const {cartCount} = useContext(CartContext)

    return (
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
  )
}

export default CartIcon