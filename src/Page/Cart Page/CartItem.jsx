import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Button from '@mui/material/Button';
import "./Cartstyle.css";

export const ProductCart = (props) => {
  const { name, price, id, quantity } = props.data;
  const { addToCart, removeToCart } = useContext(ShopContext);

  return (
    <div style={{ display: "flex", }}>
      <img style={{ width: "100px" }} src="https://yt3.googleusercontent.com/LEpz4Ig9TN-IEjD2cA6WTkyVQ_uHSC2WKtFZh8l2q7PBfrizeN35zGDu3LMC7oYdBRJOw7bW_w=s900-c-k-c0x00ffffff-no-rj" alt="" />


      <div>
        <p>{name}</p>
        <p>${price}</p>
        <div style={{ display: "flex", }}>
          <Button onClick={() => addToCart({ name, price, id, })} >+</Button>
          <p>{quantity}</p>
          <Button onClick={() => removeToCart({ name, price, id, })} >-</Button>
        </div>


      </div>

    </div>
  )
};


