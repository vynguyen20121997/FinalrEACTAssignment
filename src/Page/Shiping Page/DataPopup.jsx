import React from 'react'
import { Button, Table } from '@mui/material';
import { useContext } from 'react'
import { UserContext } from '../Cart Page/UpdateInfoHandle';
import { useLocation } from 'react-router-dom';


const DataPopup = (props) => {
    const { cusName, cusAdress, cusPhone } = props;
    const location = useLocation()
    console.log("saukhitruyen:", location)

    const cusDta = location.state;
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2%" }}>
                <Table style={{ width: "300px", }}>
                    <thead>
                        <tr>
                            <th colSpan={2}>SUMMARY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Order #:</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Order Date</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Order Total:</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>



                <Table style={{ width: "300px" }}>
                    <thead>
                        <tr>
                            <th colSpan={2}>SHIPPING DETAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{cusDta.cusName}</td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td>{cusDta.cusAdress}</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>{cusDta.cusPhone}</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </>


    )
};

export default DataPopup;