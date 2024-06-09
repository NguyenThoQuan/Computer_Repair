import React, { useEffect, useState } from "react";
import InputSearch from "../Search/InputSearch";
import ListCalendar from "./ListCalendar";
import { getBooking } from "../../Services/ADService";
import "../../Style/Calendar.scss";

export default function Calendar() {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        handleGetCalendar();
    }, []);

    const handleGetCalendar = async () => {
        let res = await getBooking();
        setCalendar(res.data);
        console.log(res);
    }

    return (
        <>
            <InputSearch />
            <ListCalendar calendar={calendar} />
        </>
    )
}