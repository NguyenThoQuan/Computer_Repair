import React, { useState } from "react";
import Status from "./Status";
import InputSearch from "./Search";
import "../../Style/RepairCondition.scss";

export default function RepairCondition() {
    const [listStatus] = useState([
        { id: "1", nameService: "Dịch vụ 1", describe: "Hỏng ...", progress: "Đang sửa chữa", quote: "" },
        { id: "2", nameService: "Dịch vụ 2", describe: "Hỏng ...", progress: "Hoàn tất sửa chữa", quote: "1.200.000 VND" }
    ])

    return (
        <div className="repair-condition">
            <Status listStatus={listStatus} />
            <InputSearch />
        </div>
    )
}