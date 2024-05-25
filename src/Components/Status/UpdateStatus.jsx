import React from "react";

export default function UpdateStatus({ status }) {
    return (
        <>
            {
                status && status.map((item) => {
                    return (
                        <div className="detailStatus" key={item.id}>
                            <h2>Cập nhật tình trạng</h2>
                            <div>
                                <form>
                                    <label htmlFor="id">Mã sửa chữa</label><br />
                                    <input type="text" value={item.id} /><br />
                                    <label htmlFor="service">Dịch vụ sử dụng</label><br />
                                    <input type="text" value={item.service} /><br />
                                    <label htmlFor="describe">Mô tả</label><br />
                                    <input type="text" value={item.progress} /><br />
                                    <label htmlFor="quote">Báo giá</label><br />
                                    <input type="text" value={item.quote} /><br />
                                </form>
                                <div className="button">
                                    <button>Lưu</button>
                                    <button>Hủy</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}