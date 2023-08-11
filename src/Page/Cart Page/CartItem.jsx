import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import Button from '@mui/material/Button';
import "./Cartstyle.css";

export const ProductCart = (props) => {
  const { name, price, id, quantity, img } = props.data;
  const { addToCart, removeToCart } = useContext(ShopContext);

  console.log("hahahe:", { name, price, id, quantity, img })
  return (
    <div style={{ display: "flex", }}>
      <img style={{ width: "200px" }} src={img} alt="" />


      <div>
        <p>{name}</p>
        <p>${price}</p>
        <div style={{ display: "flex", }}>
          <Button onClick={() => addToCart({ name, price, id, img })} >+</Button>
          <p>{quantity}</p>
          <Button onClick={() => removeToCart({ name, price, id, img})} >-</Button>
        </div>


      </div>

    </div>
  )
};


