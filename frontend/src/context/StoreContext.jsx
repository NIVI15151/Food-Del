import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../assets/assets';  // Ensure this path is correct

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,  // Correct increment logic
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] === 1) {
        const { [itemId]: _, ...rest } = prev;  // Remove item from cart if count is 1
        return rest;
      } else {
        return {
          ...prev,
          [itemId]: prev[itemId] - 1,  // Correct decrement logic
        };
      }
    });
  };

  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems ){
      if(cartItems[item] > 0){
        let itemInfo=food_list.find((product)=>product._id===item);
      totalAmount+=itemInfo.price* cartItems[item];
      }
      
    }
    return totalAmount;
  }

  const contextValue = { food_list, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
