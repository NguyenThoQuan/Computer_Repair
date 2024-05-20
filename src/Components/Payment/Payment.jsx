import React, { useState } from "react";
import "../../Style/Payment.scss"

export default function Payment() {
    const [payMent] = useState(
        [
            { id: "1", paymentService: "Dịch vụ 2", phone: "0934480992", needToPay: "1.200.000 VNĐ", payment: "1.200.000 VNĐ" },
            { id: "2", paymentService: "Dịch vụ 3", phone: "0967724934", needToPay: "1.500.000 VNĐ", payment: "1.500.000 VNĐ" }
        ]
    )

    return (
        <div className="payment">
            <h1>Quản lý giao dịch</h1>
            <div className="listPayment">
                {
                    payMent && payMent.map((item) => {
                        return (
                            <div className="detailPayment">
                                <h2>Hóa đơn thanh toán</h2>
                                <div className="tablePayment">
                                    <table>
                                        <tr>
                                            <td>Mã hóa đơn </td>
                                            <td>{item.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Dịch vụ sử dụng </td>
                                            <td>{item.paymentService}</td>
                                        </tr>
                                        <tr>
                                            <td>Số điện thoại khách hàng </td>
                                            <td>{item.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Số tiền cần thanh toán </td>
                                            <td>{item.needToPay}</td>
                                        </tr>
                                        <tr>
                                            <td>Số tiền thanh toán </td>
                                            <td>{item.payment}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}