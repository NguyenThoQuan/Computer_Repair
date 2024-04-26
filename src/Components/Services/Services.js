import React, { useState } from "react";
import "../../Style/Services.scss"
import Quotation from "./Quotation";
import ServicesInformation from "./ServicesInformation";
import UsageService from "../AppointmentCalendar/UsageService";

export default function Services() {
    const [listServices] = useState(
        [
            { id: "1", nameService: "Dịch vụ 1", detailService: "Chi tiết dịch vụ 1", quotation: "100.000 VND - 300.000 VND", guarantee: "1 năm" },
            { id: "2", nameService: "Dịch vụ 2", detailService: "Chi tiết dịch vụ 2", quotation: "200.000 VND - 400.000 VND", guarantee: "1 năm" },
            { id: "3", nameService: "Dịch vụ 3", detailService: "Chi tiết dịch vụ 3", quotation: "500.000 VND - 1.000.000 VND", guarantee: "1 năm" },
            { id: "4", nameService: "Dịch vụ 4", detailService: "Chi tiết dịch vụ 4", quotation: "100.000 VND - 1.000.000 VND", guarantee: "1 năm" },
            { id: "5", nameService: "Dịch vụ 5", detailService: "Chi tiết dịch vụ 5", quotation: "1.000.000 VND - 2.000.000 VND", guarantee: "1 năm" }
        ]
    )

    return (
        <div className="services">
            <ServicesInformation listServices={listServices} />
            <Quotation listServices={listServices} />
            <div style={{ display: "none" }}>
                <UsageService listServices={listServices} />
            </div>
        </div>
    )
}