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
                                <label htmlFor="maLichHen">Mã lịch hẹn</label><br />
                                <input type="text" value={item.ticketId._id} readOnly /><br />
                                <label htmlFor="fullName">Họ và tên</label><br />
                                <input type="text" value={item.ticketId.customerId.name} readOnly /><br />
                                <label htmlFor="phone">Số điện thoại</label><br />
                                <input type="text" value={item.ticketId.customerId.phoneNumber} readOnly /><br />
                                <label htmlFor="time">Thời gian lịch hẹn</label><br />
                                <input type="text" value={item.ticketId.time} readOnly /><br />
                                <label htmlFor="service">Dịch vụ sử dụng</label><br />
                                <input type="text" value={item.serviceId.serviceName} readOnly /><br />
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
