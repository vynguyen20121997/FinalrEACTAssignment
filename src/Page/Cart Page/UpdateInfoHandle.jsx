import React from 'react'
import { useEffect, useState,createContext } from "react";
import { Button, InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';



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
   
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setCus({
            ...cus,
            [name]: value,
        });
    };
console.log("hehe:",cus )
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
                        <TextField id="cusName" name="cusName" value={cus.cusName} onChange={onChangeHandler} required style={{ marginTop: "2%", width: "90%" }} label="Name" variant="standard" />
                        <br />
                        <TextField id="cusPhone" name="cusPhone" value={cus.cusPhone} onChange={onChangeHandler} required style={{ marginTop: "2%", width: "90%" }} label="Phone Number" variant="standard" />
                        <br />
                        <TextField id="cusAdress" name="cusAdress" value={cus.cusAdress} onChange={onChangeHandler} required style={{ marginTop: "2%", width: "90%" }} label="Address" variant="standard" />
                    </div>

                    <div className="inputcard" style={{ padding: "0", marginTop: "50px" }}>
                        <h4 style={{ marginBottom: "0" }}>Paying Menthod</h4>
                        <div>
                            <TextField style={{ marginTop: "2%", width: "90%" }} id="standard-basic" label="Card Holder Name" variant="standard" />
                            <br />
                            <TextField style={{ marginTop: "2%", width: "90%" }} id="standard-basic" label="Card Number" variant="standard" />
                        </div>
                        <div className="ex" style={{ display: "flex", marginTop: "2%", justifyContent: "center" }}>
                            <TextField focused type="date" style={{ width: "40%" }} id="standard-basic" label="Expiration" variant="standard" />
                            <TextField style={{ width: "40%", marginLeft: "10%" }} id="standard-basic" label="Cvv" variant="standard" />
                        </div>
                    </div>

                </div>
                <ButtonConfirm />

            </form>

            <div>
                <UserContext.Provider value={cus}> 
                </UserContext.Provider>
            </div>

        </>
    )

};

export default UpdateInfoHandle;






