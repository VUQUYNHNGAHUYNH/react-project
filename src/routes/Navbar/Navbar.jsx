import React from 'react'
import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../../components/Cart-Icon/CartIcon'
import CartDropDown from '../../components/CartDropDown/CartDropDown'
import { CartContext } from '../../contexts/CartContext'
import './Navbar.scss'

const Navbar= () => {
    const {isCartOpen} = useContext(CartContext)
  return (
    <>
     <div className='navigation'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
     </div>
    <Outlet/>
  
    </>)
   
}

export default Navbar