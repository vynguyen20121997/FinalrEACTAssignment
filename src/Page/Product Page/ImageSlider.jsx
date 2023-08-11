import React from 'react'
import { useState } from 'react';
const ImageSlider = () => {
  
    const photosData = [
        {
            title: 'one',
            url: 'https://i.redd.it/toev9j2e3xn91.jpg'
        },
        {
            title: 'two',
            url: 'https://yt3.googleusercontent.com/LEpz4Ig9TN-IEjD2cA6WTkyVQ_uHSC2WKtFZh8l2q7PBfrizeN35zGDu3LMC7oYdBRJOw7bW_w=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            title: 'three',
            url: 'https://i.imgur.com/mtEU0B2.jpg'
        },
    ];
    const [currentPic, setCurrentPic] = useState(0);
    const slideStyles = {
        width: "100%",
        height: "280px",
        backgroundPosition: "center",
        backgroundSize: "cover",
    };
    const sliderStyles = {
        height: "280px",
        width: "100%",
        display: "flex"
    };
    const onHandleNext = () => {
        const isLastSlide = currentPic === photosData.length - 1;
        const newIndex = isLastSlide ? 0 : currentPic + 1;
        setCurrentPic(newIndex);
    };

    const onHandlPrev = () => {
        const isFirstSlide = currentPic === 0;
        const newIndex = isFirstSlide ? photosData.length - 1 : currentPic - 1;
        setCurrentPic(newIndex);
    };
    return (
        <>

            <div style={sliderStyles} >

                <div style={{ width: "10%", marginTop:"5%", }} onClick={onHandlPrev}><svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                </div>

                <div style={{ width: "80%" }}>
                    <img style={slideStyles}
                        src={photosData[currentPic].url}
                        alt={photosData[currentPic].title} />
                </div>

                <div style={{ width: "10%",marginTop:"5%" }} onClick={onHandleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" h fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg></div>
            </div>
        </>);
};

export default ImageSlider;
