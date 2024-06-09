import React, { useState } from "react";
import { postService } from "../../Services/ADService";
import "../../Style/AddService.scss";
import { toast } from "react-toastify";

export default function AddService({ onClose }) {
    const [nameService, setNameService] = useState("");
    const [description, setDescription] = useState("");
    const [expectedPrice, setExpectedPrice] = useState(0);
    const [serviceUrl, setServiceUrl] = useState()

    const handleAddService = async (event) => {
        event.preventDefault();
        if (nameService === "" || description === "" || expectedPrice === "" || serviceUrl === "") {
            toast.warning("Vui lòng nhập đầy đủ thông tin !!!");
            return;
        } else {
            toast.success("Thêm dịch vụ thành công !!!");
        }

        await postService(nameService, description, expectedPrice, serviceUrl);
    }

    return (
        <div className="addService">
            <form onSubmit={(event) => handleAddService(event)}>
                <h2>Thêm dịch vụ</h2>
                <div>
                    <label htmlFor="nameService">Tên dịch vụ</label><br />
                    <input type="text" value={nameService} onChange={(event) => setNameService(event.target.value)} /><br />
                    <label htmlFor="description">Mô tả</label><br />
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} /><br />
                    <label htmlFor="expectedPrice">Báo giá</label><br />
                    <input type="number" value={expectedPrice} onChange={(event) => setExpectedPrice(event.target.value)} /><br />
                    <label htmlFor="serviceUrl" className="custom-file-upload">Ảnh dịch vụ</label><br />
                    <input type="file" id="serviceUrl" defaultValue={serviceUrl} onChange={(event) => setServiceUrl(event.target.files[0])} />
                </div>
                <div className="button">
                    <button type="submit">Lưu</button>
                    <button onClick={onClose}>Hủy</button>
                </div>
            </form>
        </div>
    )
}