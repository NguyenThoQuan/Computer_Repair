import React, { useState } from "react";
import { deleteCalendar, patchTickets } from "../../Services/ADService";
import { toast } from "react-toastify";

export default function ListCalendar(props) {
    const { calendar } = props;
    const [editStates, setEditStates] = useState({});
    const [time, setTime] = useState("");

    const handleUpdate = (id) => {
        setEditStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const handleDeleteCalendar = async (id) => {
        await deleteCalendar(id);
        toast.success("Xoá lịch hẹn thành công !!!");
    }

    const handlePatchCustomer = async (id) => {
        await patchTickets(id, [{ "propName": "time", "value": time }])
        toast.success("Chỉnh sửa lịch hẹn thành công !!!");
    }

    return (
        <>
            <h1>Quản lý lịch hẹn</h1>
            <div className="listCalendar">
                {
                    calendar && calendar.map((item) => {
                        const isEditing = editStates[item._id] || false;
                        return (
                            <div className="detailCalendar" key={item._id}>
                                <h2>Thông tin lịch hẹn</h2>
                                <div className="tableCalendar">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Mã lịch hẹn</td>
                                                <td><input type="text" value={item._id} readOnly /></td>
                                            </tr>
                                            <tr>
                                                <td>Họ và tên</td>
                                                <td><input type="text" value={item.ticketId.customerId.name} /></td>
                                            </tr>
                                            <tr>
                                                <td>SĐT</td>
                                                <td><input type="text" value={item.ticketId.customerId.phoneNumber} /></td>
                                            </tr>
                                            <tr>
                                                <td>Thời gian lịch hẹn</td>
                                                <td><input type="text" value={isEditing ? time : item.ticketId.time} onChange={(e) => setTime(e.target.value)} /></td>
                                            </tr>
                                            <tr>
                                                <td>Dịch vụ sử dụng</td>
                                                <td><input type="text" value={item.serviceId.serviceName} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    {
                                        !isEditing ?
                                            <button onClick={() => handleUpdate(item._id)}>Chỉnh sửa</button> :
                                            <button onClick={() => { handleUpdate(item._id); handlePatchCustomer(item.ticketId._id) }}>Xác nhận</button>
                                    }
                                    <button onClick={() => handleDeleteCalendar(item._id)}>Xóa</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
