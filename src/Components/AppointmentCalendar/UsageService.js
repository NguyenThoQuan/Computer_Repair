import React, { useState } from "react";
import { toast } from "react-toastify";

export default function UsageService(props) {
    const { listServices } = props

    const [problem, setProblem] = useState("")

    const handleProblem = (event) => {
        setProblem(event.target.value)
    }

    const handleClickButton = (event) => {
        event.preventDefault();
        toast.success("Đặt lịch hẹn thành công !!!")
    }

    return (
        <>
            <form className="usage-service-information">
                <h2 className="title-usage-service">Dịch vụ sử dụng</h2>
                <label htmlFor="dichVuSuDung">Chọn dịch vụ</label><br />
                <select>
                    {
                        listServices && listServices.map((item) => {
                            return (
                                <option>{item.nameService}</option>
                            )
                        })
                    }
                </select><br /><br />
                <label htmlFor="moTa">Mô tả sự cố</label><br />
                <textarea className="mo-ta-su-co" value={problem} onChange={(event) => handleProblem(event)}></textarea><br /><br />
                <button onClick={handleClickButton}>Xác nhận</button>
            </form>
        </>
    )
}