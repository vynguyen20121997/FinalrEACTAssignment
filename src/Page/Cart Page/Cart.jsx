import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/Shopcontext';
import { ProductCart } from './CartItem';
import "./Cartstyle.css";
import { Link } from 'react-router-dom';
import { Button, InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import UpdateInfoHandle from './UpdateInfoHandle';


const Cart = () => {
  const { cartItem, removeItem } = useContext(ShopContext);


  const totalQuanity = cartItem.reduce((total, item) => {
    return total + item.quantity
  }, 0);

  const getTotalCartAmout = (cartItem) => {
    let tmp = 0;

    cartItem.map((item) => {
      tmp += item.quantity * item.price;
    })
    // setTotalAmount(tmp);
    return tmp;
  };

  const afferShippingAmout = () => {
    let tmp = 0;

    cartItem.map((item) => {
      tmp += item.quantity * item.price;
    })
    return tmp + 20;
  };

  return (
    <>
      <div style={{ padding: "3%", backgroundColor: "grey" }}  >
        <div className='cartpage' style={{ display: "flex", backgroundColor: "white" }}>

          <div className="cart-section" style={{ width: "50%", padding: "1rem" }}>

            <div className="HeadCart" >
              <Link to="/product" style={{ display: "flex", textDecoration: "none", }}>
                <i className="fa-solid fa-arrow-left" style={{ color: "#008080", marginTop: "25px", marginLeft: "10px" }} />
                <h3 style={{ marginLeft: "10px", textDecoration: "none" }}>Continue Shopping</h3>
              </Link>
            </div>
            <hr style={{ width: "100%", marginLeft: "10px" }} />

            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "5px" }}>

              <div style={{ width: "50%" }} >
                <h3>Shopping cart</h3>
                <h4>You have {totalQuanity} items in your cart</h4>
              </div>

              <div className="Sortby" style={{ width: "50%", marginTop: "20px" }}>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel focused id="demo-simple-select-label">Sort by</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select">
                    <MenuItem value={10}>Name A-Z</MenuItem>
                    <MenuItem value={20}>Price</MenuItem>
                  </Select>
                </FormControl>
              </div>

            </div>

            <div className='product-section'>
              {cartItem.map((product) => {
                const productQty = product.price * product.quantity;
                return (
                  <> <div className="productcard" style={{ display: "flex", marginLeft: "5%" }}>
                    <div> <ProductCart data={product} /></div>
                    <div style={{ marginTop: "10%", marginLeft: "45%" }}>${productQty} </div>
                    <div style={{ marginTop: "10%", marginLeft: "5%" }}>
                      <button style={{ border: "0", outline: "0" }}
                        onClick={() => removeItem(product.id)}><i style={{ color: "red" }} class='fa-solid fa-trash-can'></i></button></div>
                  </div>
                  </>
                );
              }
              )}</div>
          </div>



          <div className="checkout-section" style={{ width: "50%", padding: "1rem", height: "auto", backgroundcolor: "red", marginLeft: "10%" }}>

            <UpdateInfoHandle />

            <hr style={{ marginTop: "5%", marginBottom: "5%", width: "100%" }} />
            <div>
              <div className="subtotal" style={{ display: "flex", justifyContent: "space-between" }} >
                <p >Subtotal</p>
                <p style={{ fontweight: "900" }}>{getTotalCartAmout(cartItem)}</p>
              </div>
              <div className="Shiping" style={{ display: "flex", justifyContent: "space-between" }} >
                <p>Shipping</p>
                <p >$20</p>
              </div>
              <div className="subtotal" style={{ display: "flex", justifyContent: "space-between" }} >
                <p>Subtotal</p>
                <p >{afferShippingAmout(cartItem)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Cart;