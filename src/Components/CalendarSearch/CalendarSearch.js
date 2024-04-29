import React, { useState } from "react";
import Calendar from "./Calendar";
import InputSearch from "../RepairCondition/Search";
import "../../Style/CalendarSearch.scss"

export default function CalendarSearch() {
    const [calendar] = useState([
        { id: "1", fullName: "Nguyen Tho Quan", email: "nguyenthoquan@gmail.com", phone: "0967724934", time: "8:00 AM - 9:00 AM", service: "Dịch vụ 1", describe: "Hỏng ..." },
        { id: "2", fullName: "Nguyen Viet Hoang", email: "nguyenviethoang@gmail.com", phone: "0934480992", time: "9:00 AM - 10:00 AM", service: "Dịch vụ 3", describe: "Hỏng ..." }
    ])

    return (
        <div className="calendar-search">
            <Calendar calendar={calendar} />
            <InputSearch />
        </div>
    )
}