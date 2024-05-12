import React from "react";

export default function ListCalendar(props) {
    const { calendar } = props;

    return (
        <>
            <h1>Quản lý lịch hẹn</h1>
            <div className="listCalendar">
                {
                    calendar && calendar.map((item) => {
                        return (
                            <div className="detailCalendar" key={item.id}>
                                <h2>Thông tin lịch hẹn</h2><br></br>
                                <span>Mã lịch hẹn: {item.id}</span><br></br>
                                <span>Họ và tên: {item.fullName}</span><br></br>
                                <span>Email: {item.email}</span><br></br>
                                <span>SĐT: {item.phone}</span><br></br>
                                <span>Thời gian lịch hẹn: {item.time}</span><br></br>
                                <span>Dịch vụ sử dụng: {item.service}</span><br></br>
                                <span>Mô tả: {item.describe}</span><br /><br />
                                <div>
                                    <button>Chỉnh sửa</button>
                                    <button>Xóa</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}