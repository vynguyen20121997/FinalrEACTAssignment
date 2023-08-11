import React, { useState } from 'react'
import { Button, Table } from '@mui/material';
import DataPopup from './DataPopup';
import { Link } from 'react-router-dom';


const Shippingpage = (props) => {

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
                <Link to="/" ><Button style={{ marginTop: "5%" }} variant="contained" color="error">CLOSE</Button></Link>
            </div>
        </div>
    )
};

export default Shippingpage;