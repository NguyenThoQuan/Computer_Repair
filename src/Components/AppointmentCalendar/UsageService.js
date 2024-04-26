import React from "react";

export default function UsageService(props) {
    const { listServices } = props

    console.log(listServices)

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
                <textarea className="mo-ta-su-co"></textarea><br /><br />
                <button>Xác nhận</button>
            </form>
        </>
    )
}