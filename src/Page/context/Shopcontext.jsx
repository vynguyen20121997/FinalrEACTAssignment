import React from 'react'
import { createContext } from 'react'
import { PRODUCT } from '../Ulity/ulity';
import { useState } from 'react';
import { Alert } from '@mui/material';

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);


  const addToCart = ({ name, price, id, img }) => {
    const products = [...cartItem];
    const itemIndex = products.findIndex(i => i.id === id)
    console.log(itemIndex);
    if (itemIndex === -1) {
      setCartItem([...products, { id, name, price, quantity: 1, img }])
    } else {
      products[itemIndex].quantity += 1;
      setCartItem(products)
    }
  };


  const removeToCart = ({ id, name, price, quantity, img }) => {
    const products = [...cartItem];
    const itemIndex = products.findIndex(i => i.id === id)
    if (products[itemIndex].quantity <= 0) {
      setCartItem([...products])
    } else {
      products[itemIndex].quantity -= 1;
      setCartItem(products)
    }
  };

 
  const removeItem = ( id ) => { 
    const newList = cartItem.filter((item) => item.id !== id);
    setCartItem(newList);
    console.log("haha:", newList);

  }

  


  const contextValue = { addToCart, removeToCart, removeItem, cartItem };

  return (
    <div>
      <ShopContext.Provider value={contextValue}> {props.children}
      </ShopContext.Provider>
    </div>
  )
};

