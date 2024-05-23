import React from "react";
import InputSearch from "../Search/InputSearch";
import { ClipboardPlusFill } from "react-bootstrap-icons";
import "../../Style/Status.scss";

export default function Status() {
    return (
        <>
            <InputSearch />
            <div className="status">
                <h1>Cập nhật tình trạng</h1>
                <div className="updateStatus">
                    <div className="addStatus">
                        <div className="iconCreate">
                            <ClipboardPlusFill color="#696CFF" className="icon" />
                        </div>
                        <div className="line"></div><br></br>
                        <span>Báo cáo tình trạng sửa chữa</span>
                    </div>
                </div>
            </div>
        </>
    )
}