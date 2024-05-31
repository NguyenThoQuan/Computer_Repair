import React from "react";
import "../../Style/Services.scss"

export default function Quotation(props) {
    const { listServices } = props;

    return (
        <div className="table-quotation">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên dịch vụ</th>
                    <th>Báo giá dịch vụ</th>
                </tr>
                {
                    listServices.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.serviceName}</td>
                                <td>{item.expectedPrice}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}