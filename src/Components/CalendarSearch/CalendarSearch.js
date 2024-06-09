import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import InputSearch from "../RepairCondition/Search";
import { getBookingDetails } from "../../Services/Booking";
import "../../Style/CalendarSearch.scss"

export default function CalendarSearch() {
    const [calendar, setCalendar] = useState([])

    const [searchPhone, setSearchPhone] = useState("");

    const handleSearch = () => {
        const filteredCalendar = calendar.filter(item => item.ticketId.customerId.phoneNumber.includes(searchPhone));
        return filteredCalendar;
    };

    useEffect(() => {
        getCalendar();
    }, [])

    const getCalendar = async () => {
        let res = await getBookingDetails();
        setCalendar(res.data);
        console.log("Check data", res.data);
    }

    return (
        <div className="calendar-search">
            <Calendar calendar={searchPhone ? handleSearch() : calendar} set />
            <InputSearch setSearchPhone={setSearchPhone} />
        </div>
    )
}