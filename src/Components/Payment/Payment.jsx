import React, { useEffect, useState } from "react";
import InputSearch from "../Search/InputSearch";
import ListPayment from "./ListPayment";
import { getInvoice } from "../../Services/ADService";
import "../../Style/Payment.scss"

export default function Payment() {
    const [payMent, setPayMent] = useState([]);

    useEffect(() => {
        handleGetInvoice();
    })

    const handleGetInvoice = async () => {
        let res = await getInvoice();
        setPayMent(res.data.invoices)
        console.log(res)
    }

    return (
        <>
            <InputSearch />
            <ListPayment payMent={payMent} />
        </>
    )
}