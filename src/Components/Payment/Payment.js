import React, { useEffect, useState } from "react";
import PaymentMethod from "./PaymentMethod";
import { getTicket } from "../../Services/Booking";
import "../../Style/Payment.scss"

export default function Payment() {
    const [listTicket, setListTicket] = useState([]);

    useEffect(() => {
        handleGetTicket();
    })

    const handleGetTicket = async () => {
        let res = await getTicket();
        setListTicket(res.data);
        console.log(res.data)
    }

    return (
        <div className="payment">
            <PaymentMethod listTicket={listTicket} />
        </div>
    )
}