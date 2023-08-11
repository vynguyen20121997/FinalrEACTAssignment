import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext';
import "./styleproductpage.css";
import { Button } from '@mui/material';


const Item = (props) => {
    const { addToCart, cartItem } = useContext(ShopContext);
    const { name, price, id, img, categorie } = props.data;
    return (
        <section className='itemcart'>
            <div className='productdetail' style={{ padding: "0" }} >
                <div>
                    <img width={200} height={150} src={img} />
                </div>
                <div className="textcontainer">
                    <div className="productlike" style={{ paddingTop: "10px", display: "flex", justifyContent: "center" }}>
                        <label htmlFor=""></label> <br />
                        <i className="fa-solid fa-heart" style={{ color: "yellow", }}></i>
                        <i className="fa-solid fa-heart" style={{ color: "yellow", }}></i>
                        <i className="fa-regular fa-heart" style={{ color: "yellow", }}></i>
                        <i className="fa-regular fa-heart" style={{ color: "yellow", }}></i>
                    </div>
                    <div >
                        <p>{name}</p>
                        <p style={{ color: "red" }}>{price}</p>
                    </div>
                </div>
            </div>
            <div >
                <Button variant="outlined" color="secondary"
                    onClick={() => addToCart({ id, name, price, img })}
                >ADD TO CART </Button>
            </div>
        </section>
    )
};

export default Item;


