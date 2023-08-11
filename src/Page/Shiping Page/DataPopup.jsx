import React from 'react'
import { Button, Table } from '@mui/material';
import { useContext } from 'react'
import { UserContext } from '../Cart Page/UpdateInfoHandle';


const DataPopup = (props) => {
    const { cusName, cusAdress, cusPhone } = props;
    const { cus } = useContext(UserContext)

    console.log("saukhitruyen:", cus)
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

                <UserContext.Consumer>
                    {(cus) => {
                        <Table style={{ width: "300px" }}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>SHIPPING DETAIL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>{cus.cusName}</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>{cus.cusAdress}</td>
                                </tr>
                                <tr>
                                    <td>Phone Number:</td>
                                    <td>{cus.cusPhone}</td>
                                </tr>
                            </tbody>
                        </Table>
                    }}
                </UserContext.Consumer>

            </div>
        </>


    )
};

export default DataPopup;