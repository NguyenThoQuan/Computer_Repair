import React from "react";
import imageServices from "../../Images/ImageServices.jpg"

export default function ServicesInformation(props) {

    const { listServices } = props

    return (
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
    )
}