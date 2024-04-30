import React, { useState, useEffect } from "react";
import Bill from "./Bill";
import { toast } from "react-toastify";

export default function Cash(props) {
    const { listStatus } = props;
    const [phoneNumber, setPhoneNumber] = useState("");
    const [foundCustomer, setFoundCustomer] = useState([]);
    const [selectedQuote, setSelectedQuote] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [paymentAmount, setPaymentAmount] = useState("");
    const [id, setId] = useState('');

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
        setSelectedService(selectedService)
        const selectedCustomer = foundCustomer.find((item) => item.service === selectedService);
        if (selectedCustomer) {
            setSelectedQuote(selectedCustomer.quote);
        } else {
            setSelectedQuote("");
        }
    };

    const handlePaymentAmountChange = (event) => {
        const { value } = event.target;
        setPaymentAmount(value);
    }

    const handleOnClick = (event) => {
        event.preventDefault();
        if (phoneNumber === "" || selectedService === "" || paymentAmount === "") {
            toast.warning("Không được bỏ trống thông tin !!!")
            return
        } else if (selectedQuote === "") {
            toast.info("Bạn chưa thể thanh toán cho dịch vụ này !!!")
        } else {
            toast.success("Thanh toán thành công !!!")
        }
    }

    useEffect(() => {
        generateRandomId();
    }, []);

    const generateRandomId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        const length = 10;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setId(result);
    };

    return (
        <>
            <div className="cash">
                <form>
                    <h2>Thanh toán bằng tiền mặt</h2>
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
                        <input type="text" value={paymentAmount} onChange={handlePaymentAmountChange} />
                    </div>
                    <div className="button-cash">
                        <button onClick={(event) => handleOnClick(event)}>Thanh toán</button>
                    </div>
                </form>
            </div>
            <Bill
                id={id}
                phoneNumber={phoneNumber}
                selectedService={selectedService}
                selectedQuote={selectedQuote}
                paymentAmount={paymentAmount}
            />
        </>
    )
}