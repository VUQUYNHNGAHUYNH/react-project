import { useState } from "react";
import { createContext } from "react";
import ShopData from '../assets/shop-data.json'

export const ProductContext = createContext({
    products: []
})

export const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(ShopData)
    const value = {products}
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}