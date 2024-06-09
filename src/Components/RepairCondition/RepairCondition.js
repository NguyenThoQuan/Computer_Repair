import React, { useEffect, useState } from "react";
import Status from "./Status";
import InputSearch from "./Search";
import { getStatus } from "../../Services/Booking";
import "../../Style/RepairCondition.scss";

export default function RepairCondition() {
    const [listStatus, setListStatus] = useState([]);

    const [searchPhone, setSearchPhone] = useState("");

    const handleSearch = () => {
        const filteredStatus = listStatus.ticketId.customerId.filter(item => item.phone.includes(searchPhone));
        return filteredStatus;
    };

    useEffect(() => {
        handleGetStatus();
    })

    const handleGetStatus = async () => {
        let res = await getStatus();
        setListStatus(res.data.docs);
    }

    return (
        <div className="repair-condition">
            <Status listStatus={searchPhone ? handleSearch() : listStatus} />
            <InputSearch setSearchPhone={setSearchPhone} />
        </div>
    )
}