import React, { useState } from "react";
import InputSearch from "../Search/InputSearch";
import ListPayment from "./ListPayment";
import "../../Style/Payment.scss"

export default function Payment() {
    const [payMent] = useState(
        [
            { id: "1", paymentService: "Dịch vụ 2", phone: "0934480992", needToPay: "1.200.000 VNĐ", payment: "1.200.000 VNĐ" },
            { id: "2", paymentService: "Dịch vụ 3", phone: "0967724934", needToPay: "1.500.000 VNĐ", payment: "1.500.000 VNĐ" },
            { id: "3", paymentService: "Dịch vụ 2", phone: "0934480992", needToPay: "1.200.000 VNĐ", payment: "1.200.000 VNĐ" },
            { id: "4", paymentService: "Dịch vụ 2", phone: "0934480992", needToPay: "1.200.000 VNĐ", payment: "1.200.000 VNĐ" },
        ]
    )

    return (
        <>
            <InputSearch />
            <ListPayment payMent={payMent} />
        </>
    )
}