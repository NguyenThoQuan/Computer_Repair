import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import "../../Style/Payment.scss"

export default function Payment() {
    const [listStatus] = useState([
        { id: "1", service: "Dịch vụ 1", phone: "0967724934", describe: "Hỏng ...", progress: "Đang sửa chữa", quote: "" },
        { id: "2", service: "Dịch vụ 2", phone: "0934480992", describe: "Hỏng ...", progress: "Hoàn tất sửa chữa", quote: "1.200.000 VND" },
        { id: "3", service: "Dịch vụ 3", phone: "0934480992", describe: "Hỏng ...", progress: "Hoàn tất sửa chữa", quote: "1.500.000 VND" }
    ])

    return (
        <div className="payment">
            <PaymentMethod listStatus={listStatus} />
        </div>
    )
}