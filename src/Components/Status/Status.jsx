import React, { useState } from "react";
import InputSearch from "../Search/InputSearch";
import UpdateStatus from "./UpdateStatus";
import { ClipboardPlusFill } from "react-bootstrap-icons";
import "../../Style/Status.scss";

export default function Status() {
    const [status, setStatus] = useState([]);
    let checkLength = status.length;

    const handleCreateStatus = () => {
        setStatus([
            { id: "", service: "", describe: "", progress: "", quote: "" },
            ...status
        ])
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
                            <UpdateStatus status={status} />
                            :
                            <></>
                    }
                </div>
            </div>
        </>
    )
}