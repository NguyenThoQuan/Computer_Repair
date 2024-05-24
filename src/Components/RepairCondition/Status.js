import React from "react";

export default function Status(props) {
    const { listStatus } = props

    const hasResults = listStatus.length > 0;

    return (
        <>
            {
                hasResults ? (
                    listStatus.map((item) => (
                        <form key={item.id} className="status">
                            <h2>Tình trạng sửa chữa</h2>
                            <label htmlFor="id">Mã sửa chữa</label><br />
                            <input type="text" value={item.id} readOnly /><br /><br />
                            <label htmlFor="dichVuSuDung">Dịch vụ sử dụng</label><br />
                            <input type="text" value={item.service} readOnly /><br /><br />
                            <label htmlFor="moTa">Mô tả</label><br />
                            <input type="text" value={item.describe} readOnly /><br /><br />
                            <label htmlFor="tienDo">Tiến độ</label><br />
                            <input type="text" value={item.progress} readOnly /><br /><br />
                            <label htmlFor="baoGia">Báo giá</label><br />
                            <input type="text" value={item.quote} readOnly /><br /><br />
                            <button className={item.progress === "Đang sửa chữa" ? "not-progress" : "progress"}>Thanh toán</button>
                        </form>
                    ))
                )
                    :
                    <h1 className="notification">Không có tình trạng sửa chữa nào !!!</h1>
            }
        </>
    )
}