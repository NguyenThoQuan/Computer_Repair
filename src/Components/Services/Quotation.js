import React from "react";

export default function Quotation(props) {
    const { listServices } = props;

    return (
        <div className="table-quotation">
            <table>
                <tr>
                    <th>STT</th>
                    <th>Tên dịch vụ</th>
                    <th>Báo giá dịch vụ</th>
                    <th>Bảo hành</th>
                </tr>
                {
                    listServices.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nameService}</td>
                                <td>{item.quotation}</td>
                                <td>{item.guarantee}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}