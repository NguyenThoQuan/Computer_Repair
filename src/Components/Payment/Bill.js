import React from "react";
import { toast } from "react-toastify"

export default function Bill() {

    const handleOnClick = (event) => {
        event.preventDefault();
        toast.success("In hóa đơn thành công !!!")
    }

    return (
        <div className="bill">
            <form>
                <h2>Thông tin hóa đơn</h2>
                <label htmlFor="name">Họ tên khách hàng</label><br />
                <input type="text" value readOnly /><br />
                <label htmlFor="phone">Số điện thoại khách hàng</label><br />
                <input type="text" value readOnly /><br />
                <label htmlFor="method">Phương thức thanh toán</label><br />
                <input type="text" value readOnly /><br />
                <label htmlFor="pay">Số tiền thanh toán</label><br />
                <input type="text" value readOnly /><br />
                <button onClick={(event) => handleOnClick(event)}>In hóa đơn</button>
            </form>
        </div>
    );
}
