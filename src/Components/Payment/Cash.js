import React, { useEffect, useState } from "react";
import Bill from "./Bill";
import { postInvoice } from "../../Services/Booking";
import { getInvoice } from "../../Services/Booking";
import { toast } from "react-toastify";

export default function Cash({ listTicket }) {
    const [cash] = useState("cash");
    const [idTicket, setIdTicket] = useState("");
    const [invoice, setInvoice] = useState("");
    const [pay, setPay] = useState(false);

    const handlePostInvoice = async (event) => {
        event.preventDefault();
        await postInvoice(idTicket, cash);
        handleGetInvoice();
        setPay(true);
    }

    const onSearch = (searchTerm) => {
        setIdTicket(searchTerm);
        localStorage.setItem("idInvoice", searchTerm);
    }

    useEffect(() => {
        handleGetInvoice();
    })

    const handleGetInvoice = async () => {
        let res = await getInvoice();
        setInvoice(res.data.invoices);
    }

    const handlePayment = (event) => {
        event.preventDefault();
        toast.success("Thanh toán thành công !!!")
    }

    return (
        <>
            <div className="cash">
                <form>
                    <h2>Thanh toán bằng tiền mặt</h2>
                    <div>
                        <div>Mã lịch hẹn</div>
                        <input type="text" placeholder="Nhập số điện thoại ..." value={idTicket} onChange={(event) => setIdTicket(event.target.value)} />
                    </div>
                    <div>
                        {
                            listTicket.filter(item => {
                                const searchTerm = idTicket.toLowerCase();
                                const idTK = item.customerId.phoneNumber.toLowerCase();

                                return searchTerm && idTK.startsWith(searchTerm);
                            }).slice(0, 5).map((item) => (
                                <div onClick={() => onSearch(item._id)}>{item._id}</div>
                            ))
                        }
                    </div>
                    <div className="button-cash">
                        <button onClick={(event) => handlePostInvoice(event)}>Tính tiền</button>
                    </div>
                    {
                        pay ?
                            <>
                                <div>
                                    <div>Số tiền cần thanh toán</div>
                                    <input type="text" placeholder="Số tiền cần thanh toán ..." value={invoice[invoice.length - 1].totalPrice} readOnly />
                                </div>
                                <div className="button-cash">
                                    <button onClick={(event) => handlePayment(event)}>Thanh toán</button>
                                </div>
                            </>
                            :
                            <></>
                    }
                </form>
            </div>
        </>
    )
}