import React, { useEffect, useState } from "react";
import { getStaffAuth, getService, getBooking, getInvoice } from "../../Services/ADService";
import { PersonCircle, Tools, Calendar, Coin } from "react-bootstrap-icons";

export default function Statistical() {
    const [staffAuth, setStaffAuth] = useState([]);
    const [services, setServices] = useState([]);
    const [calendar, setCalendar] = useState([]);
    const [pay, setPay] = useState([]);

    useEffect(() => {
        handleGetData();
    })

    const handleGetData = async () => {
        let res1 = await getStaffAuth();
        let res2 = await getService();
        let res3 = await getBooking();
        let res4 = await getInvoice();

        setStaffAuth(res1.data);
        setServices(res2.data);
        setCalendar(res3.data);
        setPay(res4.data.invoices)
    }

    const totalPay = pay.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <div className="statistical">
            <h1>Thống kê</h1>
            <div className="detail">
                <div className="staff-user">
                    <PersonCircle className="icon"></PersonCircle>
                    <div>
                        <span>Nhân sự</span>
                        <p>{staffAuth.length}</p>
                    </div>
                </div>
                <div className="services">
                    <Tools className="icon"></Tools>
                    <div>
                        <span>Dịch vụ</span>
                        <p>{services.count}</p>
                    </div>
                </div>
                <div className="calendar">
                    <Calendar className="icon"></Calendar>
                    <div>
                        <span>Lịch hẹn</span>
                        <p>{calendar.length}</p>
                    </div>
                </div>
                <div className="pay">
                    <Coin className="icon"></Coin>
                    <div>
                        <span>Thu nhập</span>
                        <p>{totalPay} VND</p>
                    </div>
                </div>
            </div>
        </div>
    )
}