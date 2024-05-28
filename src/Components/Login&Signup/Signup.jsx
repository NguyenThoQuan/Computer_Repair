import React from "react";
import { At } from "react-bootstrap-icons";
import { LockFill } from "react-bootstrap-icons";

export default function Signup({ handleLoginOrSign }) {
    return (
        <div className="signup">
            <span>Đăng kí</span>
            <form>
                <div>
                    <At className="icon" />
                    <input type="text" placeholder="Tên đăng nhập ..." />
                </div>
                <div>
                    <LockFill className="icon" />
                    <input type="password" placeholder="Mật khẩu ..." />
                </div>
                <div>
                    <LockFill className="icon" />
                    <input type="password" placeholder="Mật khẩu ..." />
                </div>
                <div className="button">
                    <button onClick={handleLoginOrSign}>Đăng nhập</button>
                    <button>Đăng kí</button>
                </div>
            </form>
        </div>
    )
}