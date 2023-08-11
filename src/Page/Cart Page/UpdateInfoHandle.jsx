import React from 'react'
import { useEffect, useState, createContext } from "react";
import { Button, InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export const ButtonConfirm = (props) => {

    return (
        <div>
            <Button type="submit" variant="contained" color="success">CONFIRM</Button>
        </div>
    )
};


const initialState = {
    cusName: "",
    cusPhone: "",
    cusAdress: "",
};

export const UserContext = createContext()


const UpdateInfoHandle = (props) => {
    const [cus, setCus] = useState(initialState);

const navigate = useNavigate();

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setCus({
            ...cus,
            [name]: value,
        });
    };
    console.log("hehe:", cus)
    const onSubmitHander = (event) => {

        return
    };

    return (
        <>
            <div><h3  >Shipping Details</h3></div>
            <form onSubmit={onSubmitHander}>
                <div className="carttype" style={{ padding: "0", marginTop: "10px" }}>

                    <h4 style={{ marginBottom: "0" }}>Contact</h4>
                    <div className="inputcard">
                        <TextField id="cusName" name="cusName" value={cus.cusName} onChange={onChangeHandler} required style={{ marginTop: "2%", width: "90%" }} label="cusName" variant="standard" />
                        <br />
                        <TextField id="cusPhone" name="cusPhone" value={cus.cusPhone} onChange={onChangeHandler} required style={{ marginTop: "2%", width: "90%" }} label="cusPhone" variant="standard" />
                        <br />
                        <TextField id="cusAdress" name="cusAdress" value={cus.cusAdress} onChange={onChangeHandler} required style={{ marginTop: "2%", width: "90%" }} label="cusAdress" variant="standard" />
                    </div>
                </div>
                <Button 
                    color="primary" type="submit" onClick={(e) => {navigate("/shipping", {state:cus })}}
                    > CONFIRM </Button>
            </form>
            <div>
            </div>

        </>
    )

};

export default UpdateInfoHandle;






