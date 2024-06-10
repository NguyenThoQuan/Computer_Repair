import React, { useState } from "react";
import AddService from "./AddService";
import { deleteService, patchService } from "../../Services/ADService";
import { PlusLg } from "react-bootstrap-icons";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";

export default function ListService(props) {
    const { listServices } = props;
    const [clickAdd, setClickAdd] = useState(false);
    const [editService, setEditService] = useState(null);
    const [updatedDescription, setUpdatedDescription] = useState("");

    const handleDeleteService = async (id) => {
        await deleteService(id);
        toast.success("Xoá dịch vụ thành công !!!");
    }

    const handlePatchService = async (id) => {
        await patchService(id, [{ "propName": "description", "value": updatedDescription }]);
        toast.success("Sửa dịch vụ thành công !!!");
        setEditService(null);
    }

    const handleEditButtonClick = (service) => {
        setEditService(service);
        setUpdatedDescription(service.description);
    }

    const handleSave = (event, id) => {
        event.preventDefault();
        handlePatchService(id);
    }

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
                                    parts.map((part, index) => (
                                        <span key={index}>
                                            + {part.trim()}
                                            <br />
                                        </span>
                                    ))
                                }
                                <div className="button">
                                    <button onClick={() => handleEditButtonClick(item)}>Chỉnh sửa</button>
                                    <button onClick={() => handleDeleteService(item._id)}>Xóa</button>
                                </div>
                                {editService && editService._id === item._id && (
                                    <form>
                                        <textarea
                                            value={updatedDescription}
                                            onChange={(e) => setUpdatedDescription(e.target.value)}
                                            rows="4"
                                            cols="50"
                                        />
                                        <button onClick={(event) => handleSave(event, item._id)}>Lưu</button>
                                        <button onClick={() => setEditService(null)}>Hủy</button>
                                    </form>
                                )}
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
