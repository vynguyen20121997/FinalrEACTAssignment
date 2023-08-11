import React from 'react'
import { useState } from 'react';
import { PRODUCT } from '../Ulity/ulity';
import ImageSlider from './ImageSlider';
import Item from './Product-container';
import { Button } from '@mui/material';
import "./styleproductpage.css";
import Carosel from './Carosel';

const Items = (props) => {
  // const [itemList, setItemList] = useState(PRODUCT);



  return (
    <>
      <div style={{ Width: "100%" }}>

        <div><img width={"100%"} height={"600px"} src="https://ak.picdn.net/shutterstock/videos/1063099855/thumb/1.jpg" alt="" /></div>

        <h1 style={{ color: "rgb(0, 128, 128)", }}>PIZZA COLLECTION</h1>

        <div style={{marginTop:"5%", marginBottom:"5%"}}>  
       </div>
       {/* <Carosel/> */}
        <div >
          <ul >
            <li className='productdisplay' >
              {PRODUCT.map((product) => (<Item data={product} />))}
            </li>
          </ul>
        </div>

      </div>
    </>
  )
};

export default Items;

