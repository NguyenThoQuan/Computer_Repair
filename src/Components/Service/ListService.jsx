import React from "react";
import { PlusLg } from "react-bootstrap-icons";

export default function ListService(props) {
    const { listServices } = props;

    return (
        <div className="listService">
            <h1>Danh sách dịch vụ</h1>
            {
                listServices && listServices.map((item) => {
                    return (
                        <div className="service" key={item.id}>
                            <h3>{item.nameService}</h3>
                            <span>{item.detailService}</span>
                            <div>
                                <button>Chỉnh sửa</button>
                                <button>Xóa</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className="create">
                <PlusLg className="iconCreate" />
                <span className="tooltip">Thêm dịch vụ</span>
            </div>
        </div>
    )
}