import React, { useState, useEffect } from "react";
import { addDays, format } from 'date-fns';
import { customers, getCustomers, postTicket, postTicketDetails, getTicket } from "../../Services/Booking";
import { toast } from "react-toastify";

export default function AppointmenInformation({ listServices }) {
    const [onClickButton1, setOnClickButton1] = useState(false);
    const [onClickButton2, setOnClickButton2] = useState(false);
    const [nameCustomer, setNameCustomer] = useState("");
    const [phoneCustomer, setPhoneCustomer] = useState("");
    const [selectServiceId, setSelectServiceId] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [listCustomers, setListCustomers] = useState([]);
    const [listTicket, setListTicket] = useState([]);

    const handleOnClickButton1 = () => {
        if (nameCustomer === "" || phoneCustomer === "") {
            toast.warning("Vui lòng nhập đầy đủ thông tin cá nhân !!!");
            return
        }

        setOnClickButton1(true);
        toast.success("Đã xác nhận thông tin cá nhân !!!");
        postCustomers();
    }

    const handleOnClickButton2 = () => {
        setOnClickButton2(true);
        handlePostTicket();
    }

    const handleOnClickButton3 = () => {
        handlePostTicketDetails();
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

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
        const DT = event.target.value + " " + selectedTime;
        setDateTime(DT);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        const DT = selectedDay + " " + event.target.value;
        setDateTime(DT);
    };

    const handleSelectedServiceId = (event) => {
        setSelectServiceId(event.target.value);
    }

    useEffect(() => {
        handleGetCustomers();
        handleGetTicket();
    }, []);

    const handleGetCustomers = async () => {
        let res = await getCustomers();
        setListCustomers(res.data.customers);
        console.log(res)
    }

    const postCustomers = async () => {
        await customers(nameCustomer, phoneCustomer);
        handleGetCustomers();
    }

    const handlePostTicket = async () => {
        await postTicket(listCustomers[listCustomers.length - 1]._id, dateTime);
        handleGetTicket();
    }

    const handlePostTicketDetails = async () => {
        await postTicketDetails(listTicket[listTicket.length - 1]._id, selectServiceId);
    }

    const handleGetTicket = async () => {
        let res = await getTicket();
        setListTicket(res.data.result)
        console.log(res);
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
                                <select className="day" value={selectedDay} onChange={handleDayChange}>
                                    <option value="">Chọn ngày hẹn</option>
                                    {
                                        sevenDay && sevenDay.map((item, index) => {
                                            return (
                                                <option key={index}>{item} </option>
                                            )
                                        })
                                    }
                                </select>
                                <select className="time" value={selectedTime} onChange={handleTimeChange}>
                                    <option value="">Chọn thời gian hẹn</option>
                                    <option value="7h30">7h30</option>
                                    <option value="8h30">8h30</option>
                                    <option value="9h30">9h30</option>
                                    <option value="10h30">10h30</option>
                                    <option value="13h30">13h30</option>
                                    <option value="14h30">14h30</option>
                                    <option value="15h30">15h30</option>
                                    <option value="16h30">16h30</option>
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
                                <select className="service" onChange={handleSelectedServiceId}>
                                    <option value="">Chọn dịch vụ</option>
                                    {
                                        listServices && listServices.map((item) => {
                                            return (
                                                <option key={item.id} value={item._id}>{item.serviceName}</option>
                                            )
                                        })
                                    }
                                </select>
                            </form>
                            <button onClick={handleOnClickButton3}>Xác nhận thông tin</button>
                        </>
                        :
                        <></>
                }
            </div>
        </>
    )
}