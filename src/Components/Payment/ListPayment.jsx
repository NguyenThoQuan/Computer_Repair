import React from "react";
import { toast } from "react-toastify";

export default function ListPayment(props) {
    const { payMent } = props;

    const handleInHoaDon = (event) => {
        event.preventDefault();
        toast.success("In hoá đơn thành công !!!")
    }
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
                                            <td>{item._id}</td>
                                        </tr>
                                        <tr>
                                            <td>Họ và tên </td>
                                            <td>{item.ticketId.customerId.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Số điện thoại khách hàng </td>
                                            <td>{item.ticketId.customerId.phoneNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>Số tiền thanh toán </td>
                                            <td>{item.totalPrice}</td>
                                        </tr>
                                        <tr>
                                            <td>Hình thức thanh toán</td>
                                            <td>{item.payment}</td>
                                        </tr>
                                    </table>
                                    <button onClick={handleInHoaDon}>In hóa đơn</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}