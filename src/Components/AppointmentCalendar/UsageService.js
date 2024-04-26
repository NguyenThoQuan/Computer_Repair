import React from "react";

export default function UsageService(props) {
    const { listServices } = props;

    return (
        <>
            <form>
                <h2>Dịch vụ sử dụng</h2>
                <label htmlFor="dichVuSuDung">Chọn dịch vụ</label>
                <select>
                    {
                        listServices.map((item) => {
                            return (
                                <option>{item.nameService}</option>
                            )
                        })
                    }
                </select>
            </form>
        </>
    )
}