import React from "react";

export default function ListPayment(props) {
    const { payMent } = props;

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