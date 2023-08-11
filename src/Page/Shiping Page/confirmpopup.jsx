import React, { useState } from 'react'
import { Button, Table } from '@mui/material';
import DataPopup from './DataPopup';


// const ExempleData = 
//     {

//     }
// ;
const Shippingpage = (props) => {
    // const [ cusData, SetCusData ] = useState({
    //     cusName: "",
    //     cusPhone: "",
    //     cusAdress: "",
    // })


    // console.log("cusdata:", cusData)


   
    
    return (
        <div style={{ backgroundColor: "grey", height: "500px" }}>
            <div style={{ marginLeft: "10%", backgroundColor: "white", width: "80%", padding: "20px", height: "400px" }}>
                <div>
                    <h1>Thanks For your order</h1>
                    <h4>You'll receive an email when your items are shipped. <br />
                        If you have any questions, call us any time at
                        1-800-672-4399 or simply reply to this email. </h4>
                    <Button variant="contained" color="success">VIEW ORDER STATUS</Button>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "0" }}>

                   <DataPopup />

                </div>
                <Button style={{ marginTop: "2%" }} variant="contained" color="error">CLOSE</Button>
            </div>
        </div>
    )
};

export default Shippingpage;