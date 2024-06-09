import React from "react";

export default function UpdateStatus({ status, setStatus, calendar, handleCancel, handlePostStatus }) {

    const handleStatusChange = (index, field, value) => {
        const newStatus = [...status];
        newStatus[index][field] = value;

        // If the field being changed is 'idCalendar', find the corresponding price
        if (field === 'idCalendar') {
            const selectedCalendarItem = calendar.find(item => item.ticketId._id === value);
            if (selectedCalendarItem) {
                newStatus[index]['price'] = selectedCalendarItem.serviceId.expectedPrice;
            } else {
                newStatus[index]['price'] = '';
            }
        }

        setStatus(newStatus);
    };

    return (
        <>
            {
                status.map((item, index) => (
                    <div className="detailStatus" key={item.id}>
                        <h2>Cập nhật tình trạng</h2>
                        <div>
                            <form>
                                <label htmlFor="id">Mã sửa chữa</label><br />
                                <select value={item.idCalendar} onChange={(e) => handleStatusChange(index, 'idCalendar', e.target.value)}>
                                    <option value="">Chọn mã lịch hẹn</option>
                                    {
                                        calendar.map((calendarItem) => (
                                            <option key={calendarItem._id} value={calendarItem.ticketId._id}>{calendarItem.ticketId._id}</option>
                                        ))
                                    }
                                </select><br />
                                <label htmlFor="service">Người sửa chữa</label><br />
                                <input type="text" value={localStorage.getItem("name")} readOnly /><br />
                                <label htmlFor="describe">Mô tả</label><br />
                                <input type="text" value={item.status} onChange={(e) => handleStatusChange(index, 'status', e.target.value)} /><br />
                                <label htmlFor="quote">Báo giá</label><br />
                                <input type="number" value={item.price} readOnly /><br />
                            </form>
                            <div className="button">
                                <button type="button" onClick={handlePostStatus}>Lưu</button>
                                <button type="button" onClick={() => handleCancel(item.id)}>Hủy</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

