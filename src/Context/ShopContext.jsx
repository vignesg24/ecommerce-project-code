import React, { createContext, useState } from "react";
import all_product from '../Components/assets/all_product';



export const ShopContext = createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for(let i=0; i < all_product.length+1; i++){
        cart[i]=0;
    }
    return cart;
}

export default function ShopContextProvider(props){

    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for( const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price* cartItems[item];
            }
            return totalAmount;

        }
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    
    const ContextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

