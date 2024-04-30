import React from "react";
import { toast } from "react-toastify"

export default function Bill(props) {
    const { phoneNumber, selectedService, paymentAmount, selectedQuote } = props;

    const handleOnClick = (event) => {
        event.preventDefault();
        toast.success("In hóa đơn thành công !!!")
    }

    return (
        <div className="bill">
            <form>
                <h2>Thông tin hóa đơn</h2>
                <label htmlFor="id">Mã hóa đơn</label><br />
                <input type="text" readOnly /><br />
                <label htmlFor="service">Dịch vụ thanh toán</label><br />
                <input type="text" value={selectedService} readOnly /><br />
                <label htmlFor="phone">Số điện thoại khách hàng</label><br />
                <input type="text" value={phoneNumber} readOnly /><br />
                <label htmlFor="quote">Số tiền cần thanh toán</label><br />
                <input type="text" value={selectedQuote} readOnly /><br />
                <label htmlFor="pay">Số tiền thanh toán</label><br />
                <input type="text" value={paymentAmount} readOnly /><br />
                <button onClick={(event) => handleOnClick(event)}>In hóa đơn</button>
            </form>
        </div>
    );
}
