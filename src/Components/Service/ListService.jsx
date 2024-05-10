import React from "react";

export default function ListService(props) {
    const { listServices } = props;

    return (
        <div className="listService">
            <h1>Danh sách dịch vụ</h1>
            {
                listServices && listServices.map((item) => {
                    return (
                        <div className="service">
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
        </div>
    )
}