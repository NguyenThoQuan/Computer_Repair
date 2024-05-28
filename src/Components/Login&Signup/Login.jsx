import React from "react";
import { At } from "react-bootstrap-icons";
import { LockFill } from "react-bootstrap-icons";

export default function Login({ isLogin, handleLoginOrSign }) {
    return (
        <div className="login">
            <span>Đăng nhập</span>
            <form>
                <div>
                    <At className="icon" />
                    <input type="text" placeholder="Tên đăng nhập ..." />
                </div>
                <div>
                    <LockFill className="icon" />
                    <input type="password" placeholder="Mật khẩu ..." />
                </div>
                <div className="button">
                    <button>Đăng nhập</button>
                    <button onClick={(event) => handleLoginOrSign(event)}>Đăng kí</button>
                </div>
            </form>
        </div>
    )
}