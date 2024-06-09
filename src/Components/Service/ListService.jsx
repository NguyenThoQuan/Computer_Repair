import React, { useState } from "react";
import AddService from "./AddService";
import { PlusLg } from "react-bootstrap-icons";
import { createPortal } from "react-dom";

export default function ListService(props) {
    const { listServices } = props;
    const [clickAdd, setClickAdd] = useState(false);

    return (
        <div className="listService">
            <h1>Danh sách dịch vụ</h1>
            <div className="service">
                {
                    listServices && listServices.map((item) => {
                        const parts = item.description.split('+').filter(item => item.trim() !== '');

                        return (
                            <div className="detailService" key={item.id}>
                                <h3>{item.serviceName}</h3>
                                {
                                    parts.map((item, index) => (
                                        <span key={index}>
                                            + {item.trim()}
                                            <br />
                                        </span>
                                    ))
                                }
                                <div className="button">
                                    <button>Chỉnh sửa</button>
                                    <button>Xóa</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="create" onClick={() => setClickAdd(true)}>
                <PlusLg className="iconCreate" />
                <span className="tooltip">Thêm dịch vụ</span>
            </div>
            {
                clickAdd === true && createPortal(
                    <AddService onClose={() => setClickAdd(false)} />, document.body
                )
            }
        </div>
    )
}