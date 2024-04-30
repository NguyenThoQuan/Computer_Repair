import React, { useState } from "react";

export default function Cash(props) {
    const { listStatus } = props;
    const [phoneNumber, setPhoneNumber] = useState("");
    const [foundCustomer, setFoundCustomer] = useState([]);

    const handlePhoneNumberChange = (event) => {
        const { value } = event.target;
        setPhoneNumber(value);
        if (value.length === 0) {
            setFoundCustomer([])
        } else {
            let customer = listStatus.filter((item) => item.phone.includes(value));
            setFoundCustomer(customer);
        }
    }

    return (
        <div className="cash">
            <form>
                <h2>Thanh toán bằng tiền mặt</h2>
                <div>
                    <div>Nhập số điện thoại</div>
                    <input type="text" placeholder="Nhập số điện thoại khách hàng ..." value={phoneNumber} onChange={handlePhoneNumberChange} />
                </div>
                <div>
                    <div>Chọn dịch vụ muốn thanh toán</div>
                    <select>
                        <option>Chọn dịch vụ</option>
                        {
                            foundCustomer && foundCustomer.map((item) => {
                                return (
                                    <option key={item.id}>{item.service}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <div>Số tiền cần thanh toán</div>
                    <input type="text" />
                </div>
                <div>
                    <div>Số tiền thanh toán</div>
                    <input type="text" />
                </div>
                <div className="button">
                    <button>Thanh toán</button>
                </div>
            </form>
        </div>
    )
}