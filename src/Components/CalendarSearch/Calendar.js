import React, { useState } from "react";
import Cancel from "./Cancel";
import { createPortal } from "react-dom";

export default function Calendar({ calendar }) {
    const [showCancel, setShowCancel] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const hasResults = calendar.length > 0;

    const handleShowCancel = (event, appointment) => {
        event.preventDefault();
        setSelectedAppointment(appointment);
        setShowCancel(true);
    }

    return (
        <>
            {hasResults ? (
                calendar && calendar.map((item) => (
                    <form key={item.id}>
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
                            <button onClick={(event) => handleShowCancel(event, item)}>Chỉnh sửa</button>
                            <button>Hủy</button>
                        </div>
                    </form>
                ))
            ) : (
                <h1 className="notification">Không có lịch hẹn nào !!!</h1>
            )}

            {
                showCancel && createPortal(
                    <Cancel onClose={() => setShowCancel(false)} appointment={selectedAppointment} />, document.body
                )
            }
        </>
    )
}
