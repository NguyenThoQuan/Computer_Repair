import React from "react";

export default function ServicesInformation(props) {

    const { listServices } = props;

    return (
        <div className="all-service">
            {
                listServices && listServices.map((item) => {
                    const baseUrl = "http://localhost:3002/";

                    const fullUrl = baseUrl + item.serviceUrl.replace(/\\/g, '/');

                    const parts = item.description.split('+').filter(item => item.trim() !== '');

                    return (
                        <>
                            <div key={item.id} className="service">
                                <img src={fullUrl} width="90px" height="90px" alt="Ảnh dịch vụ" />
                                <div className="info-service">
                                    <div>
                                        <span className="title"> {item.serviceName} </span>
                                    </div>
                                    <div className="content">
                                        {parts.map((item, index) => (
                                            <span key={index}>
                                                + {item.trim()}
                                                <br />
                                            </span>
                                        ))}
                                    </div>
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