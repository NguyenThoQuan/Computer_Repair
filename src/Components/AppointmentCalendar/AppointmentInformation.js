import React, { useState } from "react";

export default function AppointmenInformation() {
    const [appointmenInformation, setAppointmenInformatio] = useState(
        {
            fullName: "",
            email: "",
            phone: "",
            time: "",
        }
    )

    const handleFullName = (event) => {
        setAppointmenInformatio({ fullName: event.target.value });
    }

    const handleEmail = (event) => {
        setAppointmenInformatio({ email: event.target.value });
    }

    const handleNumberPhone = (event) => {
        setAppointmenInformatio({ phone: event.target.value });
    }

    return (
        <>
            <form className="appointmen-information">
                <h2 className="title-appointmen-information">Thông tin lịch hẹn</h2>
                <label htmlFor="hoVaTen">Họ và tên</label><br />
                <input type="text" value={appointmenInformation.fullName} onChange={(event) => handleFullName(event)}></input><br /><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" value={appointmenInformation.email} onChange={(event) => handleEmail(event)}></input><br /><br />
                <label htmlFor="sdt">Số điện thoại</label><br />
                <input type="sdt" value={appointmenInformation.sdt} onChange={(event) => handleNumberPhone(event)}></input><br /><br />
                <label htmlFor="time">Thời gian lịch hẹn</label><br />
                <select>
                    <option>7:00 AM - 8:00 AM</option>
                    <option>8:00 AM - 9:00 AM</option>
                    <option>9:00 AM - 10:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>13:00 PM - 14:00 AM</option>
                    <option>14:00 PM - 15:00 PM</option>
                    <option>15:00 PM - 16:00 PM</option>
                    <option>16:00 PM - 17:00 PM</option>
                </select><br /><br />
                <button>Xác nhận</button>
            </form>
        </>
    )
}