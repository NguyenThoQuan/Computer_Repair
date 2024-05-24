import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../Style/Cancel.scss";

export default function Cancel({ onClose, appointment }) {
    const [formData, setFormData] = useState({ ...appointment });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSave = (event) => {
        event.preventDefault();
        toast.success("Chỉnh sửa lịch hẹn thành công !!!");
        onClose();
    }

    return (
        <div className="cancel">
            <form onSubmit={handleSave}>
                <h2>Chi tiết lịch hẹn</h2>
                <div>
                    <label htmlFor="fullName">Họ và tên</label><br />
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="text" name="email" value={formData.email} onChange={handleChange} /><br />
                    <label htmlFor="phone">Số điện thoại</label><br />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} /><br />
                    <label htmlFor="time">Thời gian lịch hẹn</label><br />
                    <input type="text" name="time" value={formData.time} onChange={handleChange} /><br />
                    <label htmlFor="service">Dịch vụ sử dụng</label><br />
                    <input type="text" name="service" value={formData.service} onChange={handleChange} /><br />
                    <label htmlFor="describe">Mô tả</label><br />
                    <input type="text" name="describe" value={formData.describe} onChange={handleChange} />
                </div>
                <div className="button">
                    <button type="submit">Lưu</button>
                    <button type="button" onClick={onClose}>Hủy</button>
                </div>
            </form>
        </div>
    )
}

