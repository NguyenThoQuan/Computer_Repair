import React, { useState } from "react";
import imageServices from "../../Images/ImageServices.jpg"
import "../../Style/Services.scss"
import Quotation from "./Quotation";

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
            <div className="all-service">
                {
                    listServices && listServices.length > 0 && listServices.map((item) => {
                        return (
                            <>
                                <div key={item.id} className="service">
                                    <img src={imageServices} width="90px" height="90px" alt="Ảnh dịch vụ" />
                                    <div className="info-service">
                                        <div><span className="title"> {item.nameService} </span></div>
                                        <div className="content"><span> {item.detailService} </span></div>
                                        <><button>Sử dụng dịch vụ</button></>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <Quotation listServices={listServices} />
        </div>
    )
}