import React, { useEffect, useState } from "react";
import Bill from "./Bill"
import { fetchBank } from "../../Services/BankService";
import QR from "../../Images/QR.png"

export default function BankTransfer(props) {
    const { listStatus } = props
    const [listBank, setListBank] = useState([])
    const [phoneNumber, setPhoneNumber] = useState("");
    const [foundCustomer, setFoundCustomer] = useState([]);
    const [selectedQuote, setSelectedQuote] = useState("");

    useEffect(() => {
        getBank();
    }, [])

    const getBank = async () => {
        let res = await fetchBank();
        if (res && res.data && res.data.data) {
            setListBank(res.data.data)
        }
    }

    const handlePhoneNumberChange = (event) => {
        const { value } = event.target;
        setPhoneNumber(value);
        if (value.length === 0) {
            setFoundCustomer([])
        } else {
            let customer = listStatus.filter((item) => item.phone.includes(value));
            setFoundCustomer(customer);
        }
        setSelectedQuote("");
    }

    const handleServiceSelect = (event) => {
        const selectedService = event.target.value;
        const selectedCustomer = foundCustomer.find((item) => item.service === selectedService);
        if (selectedCustomer) {
            setSelectedQuote(selectedCustomer.quote);
        } else {
            setSelectedQuote("");
        }
    };

    return (
        <>
            <div className="bank-transfer">
                <form>
                    <h2>Thanh toán bằng tài khoản ngân hàng</h2>
                    <div>
                        <div>Chọn ngân hàng</div>
                        <select>
                            {
                                listBank && listBank.length > 0 && listBank.map((item) => {
                                    return (
                                        <option key={item.id}>
                                            <img src={item.logo} alt="logoBank" />
                                            {item.name} - {item.shortName}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <div>Nhập số tài khoản</div>
                        <input type="number" placeholder="Nhập số tài khoản" />
                    </div>
                    <div>
                        <div>Nhập số điện thoại</div>
                        <input type="text" placeholder="Nhập số điện thoại khách hàng ..." value={phoneNumber} onChange={handlePhoneNumberChange} />
                    </div>
                    <div>
                        <div>Chọn dịch vụ muốn thanh toán</div>
                        <select onChange={handleServiceSelect}>
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
                        <input type="text" value={selectedQuote} readOnly />
                    </div>
                    <div>
                        <div>Số tiền thanh toán</div>
                        <input type="text" />
                    </div>
                    <div className="button-bank-transfer">
                        <button>Thanh toán</button>
                    </div>
                </form>
            </div>
            <img src={QR} alt="QR" />
            <Bill />
        </>
    )
}