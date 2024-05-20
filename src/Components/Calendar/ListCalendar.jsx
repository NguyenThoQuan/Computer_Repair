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
                                <h2>Thông tin lịch hẹn</h2>
                                <div className="tableCalendar">
                                    <table>
                                        <tr>
                                            <td>Mã lịch hẹn</td>
                                            <td>{item.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Họ và tên</td>
                                            <td>{item.fullName}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{item.email}</td>
                                        </tr>
                                        <tr>
                                            <td>SĐT</td>
                                            <td>{item.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Thời gian lịch hẹn</td>
                                            <td>{item.time}</td>
                                        </tr>
                                        <tr>
                                            <td>Dịch vụ sử dụng</td>
                                            <td>{item.service}</td>
                                        </tr>
                                        <tr>
                                            <td>Mô tả</td>
                                            <td>{item.describe}</td>
                                        </tr>
                                    </table>
                                </div>
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