import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';
import "./styleproductpage.css";
import { Button } from '@mui/material';


const Item = (props) => {
    const { addToCart, cartItem } = useContext(ShopContext);
    const { name, price, id, img } = props.data;



    const quantityShow = () => {

    };

    return (
        <section className='itemcart'>
            <div className='productdetail' style={{ padding: "0" }} >
                <div>
                    <img width={200} src={"https://yt3.googleusercontent.com/LEpz4Ig9TN-IEjD2cA6WTkyVQ_uHSC2WKtFZh8l2q7PBfrizeN35zGDu3LMC7oYdBRJOw7bW_w=s900-c-k-c0x00ffffff-no-rj"}
                    /></div>


                <div className="productlike" style={{ paddingTop: "10px", display: "flex", justifyContent: "center" }}>
                    <label htmlFor=""></label> <br />
                    <i className="fa-solid fa-heart" style={{ color: "yellow", }}></i>
                    <i className="fa-solid fa-heart" style={{ color: "yellow", }}></i>
                    <i className="fa-regular fa-heart" style={{ color: "yellow", }}></i>
                    <i className="fa-regular fa-heart" style={{ color: "yellow", }}></i>
                </div>

                <div style={{marginBottom:"10px"}}>
                    <p>{name}</p>
                    <p style={{ color: "red" }}>{price}</p>
                </div>



            </div> 
            <div >
                <Button variant="outlined" color="secondary" 
                 onClick={() => addToCart({ id, name, price })}
                >ADD TO CART </Button>


            </div>

        </section>
    )
};

export default Item;


