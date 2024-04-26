import React from "react";
import "../../Style/AppointmentCalendar.scss"
import AppointmenInformation from "./AppointmentInformation";
import UsageService from "./UsageService";

export default function AppointmentCalendar() {
    return (
        <div className="appointment-calendar">
            <AppointmenInformation />
            <UsageService />
        </div>
    )
}