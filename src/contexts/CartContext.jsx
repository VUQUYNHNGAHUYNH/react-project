import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

//helper funciton: find inside the exsiting array any cart Item match the id of productToAdd
const addCartItem = (cartItems, productToAdd ) => {

    // find if cartItems contains productToAdd
    const existingCartITem= cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id) 

    //if found it, increase quanity of existing cart items
    if (existingCartITem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    //return new array with new cart item
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem  = (cartItems, productToDecrease) => {
    //find the cart item to remove
    const existingCartITem = cartItems.find(
        (cartItem) => cartItem.id === productToDecrease.id)
   
    //if quantity = 1, remove 
    if (existingCartITem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToDecrease.id )
    }
    //return back cartitems with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === productToDecrease.id 
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
)
}

const clearCartItem = (cartItems, producToClear) => {
   return cartItems.filter(cartItem => cartItem.id !== producToClear.id )
}

export const CartContext = createContext({

    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemTocart: () => {},
    decreaseItemfromCart: () => {},
    clearItem: () => {},
    cartCount : 0,
})

export const CartProvider = ({children}) =>{
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setcartCount] = useState(0)
    const [cartTotal, setcartTotal] = useState(0)

// recount the total quanity every time the cart items change
useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setcartCount(newCartCount)
}, [cartItems])

useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setcartTotal(newCartTotal)
}, [cartItems])

// addItemTocart: give back the appropriate array we want to upate for cart items
const addItemTocart = (productToAdd) => {
    setCartItems(addCartItem(cartItems,productToAdd))
}

const removeItemfromCart = (productToDecrease) => {
    setCartItems(removeCartItem(cartItems, productToDecrease))
}
const clearItem = (producToClear) => {
    setCartItems(clearCartItem(cartItems, producToClear))
}

    const value = {isCartOpen, setIsCartOpen, addItemTocart, cartItems, cartCount, removeItemfromCart, clearItem, cartTotal}
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
