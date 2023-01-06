import './CartDropDown.scss'
import Button from '../button/button.component'
import CartItems from '../CartItems/CartItems';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()
    const gotoCheckout = () => {
        navigate('/checkout')
    }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => (
                <CartItems key={item.id} Items={item}/>
            ) 
            )}
        </div>
        <Button onClick={gotoCheckout}> Go to Checkout</Button>
    </div>
  )
}
export default CartDropDown;
