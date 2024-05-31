import React, { useEffect, useState } from "react";
import { getServices } from "../../Services/Booking";
import "../../Style/Services.scss"
import Quotation from "./Quotation";
import ServicesInformation from "./ServicesInformation";

export default function Services() {
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
        <div className="services">
            <ServicesInformation listServices={listServices} />
            <Quotation listServices={listServices} />
        </div>
    )
}