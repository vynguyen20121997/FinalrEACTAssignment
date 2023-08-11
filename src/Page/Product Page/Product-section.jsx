import React from 'react'
import { useState } from 'react';
import { PRODUCT } from '../Ulity/ulity';
import ImageSlider from './ImageSlider';
import Item from './Product-container';
import { Button } from '@mui/material';
import "./styleproductpage.css";
import Carosel from './Carosel';

const Items = (props) => {


  const bankok = PRODUCT.filter(function (value, index) {
    return value.categorie == "BANGKOK";
  })
  const sea = PRODUCT.filter(function (value, index) {
    return value.categorie == "SEAFOOD";
  })
  const meat = PRODUCT.filter(function (value, index) {
    return value.categorie == "MEAT";
  })
  const kid = PRODUCT.filter(function (value, index) {
    return value.categorie == "KID";
  })


  return (
    <>
      <div style={{ Width: "100%" }}>

        <div><img width={"100%"} height={"600px"} src="https://ak.picdn.net/shutterstock/videos/1063099855/thumb/1.jpg" alt="" /></div>

        <h1 style={{ color: "rgb(0, 128, 128)", }}>PIZZA COLLECTION</h1>





        <h3 style={{ color: "rgb(0, 128, 128)", }}> BANGKOK PIZZA</h3>

        <div  >
          <ul >
            <li className='productdisplay' >
              {bankok.map((product) => {
                return <Item data={product} />
              })}
            </li>
          </ul>
        </div>


        <h3 style={{ color: "rgb(0, 128, 128)", }}>SEAFOOD PIZZA</h3>
        <div>
          <ul >
            <li className='productdisplay' >
              {sea.map((product) => {
                return <Item data={product} />
              })}
            </li>
          </ul>
        </div>

        <h3 style={{ color: "rgb(0, 128, 128)", }}>MEAT PIZZA</h3>

        <div >
          <ul >
            <li className='productdisplay' >
              {meat.map((product) => {
                return <Item data={product} />
              })}
            </li>
          </ul>
        </div>

        <h3 style={{ color: "rgb(0, 128, 128)", }}>KID</h3>

        <div >
          <ul >
            <li className='productdisplay' >
              {kid.map((product) => {
                return <Item data={product} />
              })}
            </li>
          </ul>
        </div>

      </div >  </>
  )
};

export default Items;

