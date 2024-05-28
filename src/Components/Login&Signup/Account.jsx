import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "../../Style/Login&Signup.scss";

export default function Account() {
    const [isLogin, setIsLogin] = useState(true)

    const handleLoginOrSign = () => {
            setIsLogin(!isLogin);
    }

    return (
        <div className="account">
            {
                isLogin === true ?
                    <Login isLogin={isLogin} handleLoginOrSign={handleLoginOrSign} />
                    :
                    <Signup handleLoginOrSign={handleLoginOrSign} />
            }
        </div>
    )
}