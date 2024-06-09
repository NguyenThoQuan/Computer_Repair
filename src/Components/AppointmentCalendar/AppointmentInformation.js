import React, { useState, useEffect } from "react";
import { addDays, format } from 'date-fns';
import { customers, getCustomers, postTicket } from "../../Services/Booking";
import { toast } from "react-toastify";

export default function AppointmenInformation({ listServices }) {
    const [onClickButton1, setOnClickButton1] = useState(false);
    const [onClickButton2, setOnClickButton2] = useState(false);
    const [nameCustomer, setNameCustomer] = useState("");
    const [phoneCustomer, setPhoneCustomer] = useState("");
    // const [selectService, setSelectService] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [listCustomers, setListCustomers] = useState([]);
    const [lastCustomer, setLastCustomer] = useState(null);

    const handleOnClickButton1 = () => {
        if (nameCustomer === "" || phoneCustomer === "") {
            toast.warning("Vui lòng nhập đầy đủ thông tin cá nhân !!!");
            return
        }

        setOnClickButton1(true);
        toast.success("Đã xác nhận thông tin cá nhân !!!");
        // postCustomers();
    }

    const handleOnClickButton2 = () => {
        setOnClickButton2(true);
        handlePostTicket();
    }

    const getSevenDays = () => {
        const daysList = [];
        for (let i = 1; i <= 7; i++) {
            const nextDay = addDays(new Date(), i);
            daysList.push(format(nextDay, 'dd/MM/yyyy'));
        }
        return daysList;
    }

    const sevenDay = getSevenDays();

    const postCustomers = async () => {
        await customers(nameCustomer, phoneCustomer);
    }

    const handlePostTicket = async () => {
        await postTicket();
    }

    useEffect(() => {
        handleGetCustomers();
    }, []);

    const handleGetCustomers = async () => {
        let res = await getCustomers();
        setListCustomers(res.data.customers);

        if (res.data.customers.length > 0) {
            setLastCustomer(res.data.customers[res.data.customers.length - 1]);
        }
        console.log(res)
        console.log(lastCustomer)
    }

    return (
        <>
            <div className="infoBooking">
                <form>
                    <label htmlFor="fullNameCustomer">Họ và tên</label>
                    <input type="text" value={nameCustomer} onChange={(event) => setNameCustomer(event.target.value)} />
                </form>
                <form>
                    <label htmlFor="phoneCustomer">Số điện thoại</label>
                    <input type="text" value={phoneCustomer} onChange={(event) => setPhoneCustomer(event.target.value)} />
                </form>
                <button onClick={handleOnClickButton1}>Xác nhận thông tin</button>
                {
                    onClickButton1 === true ?
                        <>
                            <form>
                                <label htmlFor="dateTime">Thời gian lịch hẹn</label>
                                <select className="day">
                                    {
                                        sevenDay && sevenDay.map((item, index) => {
                                            return (
                                                <option key={index}>{item} </option>
                                            )
                                        })
                                    }
                                </select>
                                <select className="time">
                                    <option>7h30</option>
                                    <option>8h30</option>
                                    <option>9h30</option>
                                    <option>10h30</option>
                                    <option>13h30</option>
                                    <option>14h30</option>
                                    <option>15h30</option>
                                    <option>16h30</option>
                                </select>
                            </form>
                            <button onClick={handleOnClickButton2}>Xác nhận thông tin</button>
                        </>
                        :
                        <></>
                }
                {
                    onClickButton2 === true ?
                        <>
                            <form>
                                <label htmlFor="selectService">Chọn dịch vụ</label>
                                <select className="service">
                                    {
                                        listServices && listServices.map((item) => {
                                            return (
                                                <option key={item.id} value={item.serviceName}>{item.serviceName}</option>
                                            )
                                        })
                                    }
                                </select>
                            </form>
                            <button>Đặt lịch hẹn</button>
                        </>
                        :
                        <></>
                }
            </div>
        </>
    )
}