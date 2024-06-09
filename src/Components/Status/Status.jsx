import React, { useState, useEffect } from "react";
import InputSearch from "../Search/InputSearch";
import UpdateStatus from "./UpdateStatus";
import { getBooking, postStatus } from "../../Services/ADService";
import { ClipboardPlusFill } from "react-bootstrap-icons";
import "../../Style/Status.scss";

export default function Status() {
    const [calendar, setCalendar] = useState([]);
    const [status, setStatus] = useState([{
        id: Math.random(),
        idCalendar: "",
        idAd: localStorage.getItem("id"),
        status: "",
        price: 0,
    }]);
    let checkLength = status.length;

    const handleCreateStatus = () => {
        setStatus([
            { id: Math.random(), idCalendar: "", idAd: localStorage.getItem("id"), status: "", price: 0 },
            ...status
        ])
    }

    const handleCancel = (id) => {
        const newState = status.filter(item => item.id !== id);
        setStatus(newState);
    }

    useEffect(() => {
        handleGetCalendar();
    }, []);

    const handleGetCalendar = async () => {
        let res = await getBooking();
        setCalendar(res.data);
        console.log(res);
    }

    const handlePostStatus = async () => {
        await postStatus(status[0].idCalendar, status[0].idAd, status[0].status, status[0].price);
    }

    return (
        <>
            <InputSearch />
            <div className="status">
                <h1>Cập nhật tình trạng</h1>
                <div className="updateStatus">
                    <div className="addStatus" onClick={handleCreateStatus}>
                        <div className="iconCreate">
                            <ClipboardPlusFill color="#696CFF" className="icon" />
                        </div>
                        <div className="line"></div><br></br>
                        <span>Báo cáo tình trạng sửa chữa</span>
                    </div>
                    {
                        checkLength > 0 ?
                            <UpdateStatus status={status} setStatus={setStatus} calendar={calendar} handleCancel={handleCancel} handlePostStatus={handlePostStatus} />
                            :
                            <></>
                    }
                </div>
            </div>
        </>
    )
}
