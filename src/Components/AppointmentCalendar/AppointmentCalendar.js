import React, { useState, useEffect } from "react";
import { getServices } from "../../Services/Booking";
import "../../Style/AppointmentCalendar.scss"
import AppointmenInformation from "./AppointmentInformation";
import Quotation from "../Services/Quotation";

export default function AppointmentCalendar() {
    const [listServices, setListServices] = useState([])

    useEffect(() => {
        handleGetServices();
    }, []);

    const handleGetServices = async () => {
        let res = await getServices();
        setListServices(res.data.services);
        console.log(res)
    }

    return (
        <div className="appointment-calendar">
            <AppointmenInformation listServices={listServices} />
            <Quotation listServices={listServices} />
        </div>
    )
}