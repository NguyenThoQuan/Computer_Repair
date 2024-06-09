import React, { useState } from "react";
import Cash from "./Cash";
import BankTransfer from "./BankTransfer";

export default function PaymentMethod({ listTicket }) {
    const [chooseMethod, setChooseMethod] = useState(true)

    const handleOnClickCash = (event) => {
        event.preventDefault();
        setChooseMethod(true)
    }

    const handleOnClicBankTransfer = (event) => {
        event.preventDefault();
        setChooseMethod(false)
    }

    return (
        <>
            <div className="method">
                <div onClick={
                    (event) => handleOnClickCash(event)
                }
                    className={
                        chooseMethod === true ? "color choose-method" : "choose-method"
                    }>
                    Tiền mặt
                </div>
                <div onClick={
                    (event) => handleOnClicBankTransfer(event)
                }
                    className={
                        chooseMethod === false ? "color choose-method" : "choose-method"
                    }>
                    Tài khoản ngân hàng
                </div>
            </div>
            <div className="handle-pay">
                {
                    chooseMethod === true ?
                        <Cash listTicket={listTicket} />
                        :
                        <BankTransfer listTicket={listTicket} />
                }
            </div>
        </>
    )
}