import React, { useState } from "react";
import UsageService from "./UsageService";
import { toast } from "react-toastify";

export default function AppointmenInformation(props) {
    const { listServices } = props;
    const [isSuccess, setIsSuccess] = useState(false)

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleFullName = (event) => {
        setFullName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleClickButton = (event) => {
        event.preventDefault();
        if (fullName === "" || email === "" || phone === "") {
            toast.warning("Không được bỏ trống thông tin !!!")
            return;
        } else {
            setIsSuccess(true)
        }
    }

    return (
        <>
            <form className="appointmen-information">
                <h2 className="title-appointmen-information">Thông tin lịch hẹn</h2>
                <label htmlFor="hoVaTen">Họ và tên</label><br />
                <input type="text" value={fullName} onChange={(event) => handleFullName(event)}></input><br /><br />
                <label htmlFor="email">Email</label><br />
                <input type="text" value={email} onChange={(event) => handleEmail(event)}></input><br /><br />
                <label htmlFor="sdt">Số điện thoại</label><br />
                <input type="sdt" value={phone} onChange={(event) => handlePhone(event)}></input><br /><br />
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
                <button onClick={handleClickButton}>Xác nhận</button>
            </form>
            {
                isSuccess === false ?
                    <></>
                    :
                    <UsageService listServices={listServices} />
            }
        </>
    )
}