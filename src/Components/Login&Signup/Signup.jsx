import React, { useState } from "react";
import { At, LockFill, PersonFill } from "react-bootstrap-icons";
import { signup } from "../../Services/ADService";
import { toast } from "react-toastify";

export default function Signup({ handleLoginOrSign }) {
    const [staffName, setStaffName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        if (!staffName || !username || !password) {
            toast.warning("Vui lòng nhập đầy đủ thông tin !!!");
            return;
        } else {
            toast.success("Đăng ký thành công !!!");
        }

        await signup(staffName, username, password);
    }

    return (
        <div className="signup">
            <span>Đăng kí</span>
            <form>
                <div>
                    <PersonFill className="icon" />
                    <input type="text" placeholder="Tên người quản trị ..." value={staffName} onChange={(event) => setStaffName(event.target.value)} />
                </div>
                <div>
                    <At className="icon" />
                    <input type="text" placeholder="Tên đăng nhập ..." value={username} onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div>
                    <LockFill className="icon" />
                    <input type="password" placeholder="Mật khẩu ..." value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="button">
                    <button onClick={handleLoginOrSign}>Đăng nhập</button>
                    <button onClick={handleSignup}>Đăng kí</button>
                </div>
            </form>
        </div>
    )
}