import React from "react";

export default function Status(props) {
    const { listStatus } = props

    const hasResults = listStatus.length > 0;

    return (
        <>
            {
                hasResults ? (
                    listStatus.map((item) => (
                        <form key={item.id} className="status">
                            <h2>Tình trạng sửa chữa</h2>
                            <label htmlFor="id">Mã sửa chữa</label><br />
                            <input type="text" value={item._id} readOnly /><br />
                            <label htmlFor="tenKhachHang">Tên khách hàng</label><br />
                            <input type="text" value={item.ticketId.customerId.name} readOnly /><br />
                            <label htmlFor="sdt">Số điện thoại khách hàng</label><br />
                            <input type="text" value={item.ticketId.customerId.phoneNumber} readOnly /><br />
                            <label htmlFor="nhanVienSuaChua">Nhân viên sửa chữa</label><br />
                            <input type="text" value={item.staffUserId.staffName} readOnly /><br />
                            <label htmlFor="time">Thời gian đặt lịch</label>
                            <input type="text" value={item.ticketId.time} readOnly />
                            <label htmlFor="moTa">Vấn đề</label><br />
                            <input type="text" value={item.status} readOnly /><br />
                            <label htmlFor="baoGia">Báo giá</label><br />
                            <input type="text" value={item.price} readOnly /><br /><br />
                            <button className="progress">Thanh toán</button>
                        </form>
                    ))
                )
                    :
                    <h1 className="notification">Không có tình trạng sửa chữa nào !!!</h1>
            }
        </>
    )
}