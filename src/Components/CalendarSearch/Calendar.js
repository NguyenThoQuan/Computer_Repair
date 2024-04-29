import React from "react";

export default function Calendar(props) {
    const { calendar } = props

    return (
        <>
            {
                calendar && calendar.map((item) => {
                    return (
                        <form>
                            <div>
                                <h2>Chi tiết lịch hẹn</h2>
                                <div>
                                    <label htmlFor="fullName">Họ và tên</label><br />
                                    <input type="text" value={item.fullName} readOnly /><br />
                                    <label htmlFor="email">Email</label><br />
                                    <input type="text" value={item.email} readOnly /><br />
                                    <label htmlFor="phone">Số điện thoại</label><br />
                                    <input type="text" value={item.phone} readOnly /><br />
                                    <label htmlFor="time">Thời gian lịch hẹn</label><br />
                                    <input type="text" value={item.time} readOnly /><br />
                                    <label htmlFor="service">Dịch vụ sử dụng</label><br />
                                    <input type="text" value={item.service} readOnly /><br />
                                    <label htmlFor="describe">Mô tả</label><br />
                                    <input type="text" value={item.describe} readOnly />
                                </div>
                            </div>
                            <div className="button">
                                <button>Chỉnh sửa</button>
                                <button>Hủy</button>
                            </div>
                        </form>
                    )
                })
            }
        </>
    )
}