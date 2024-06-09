import React, { useState } from "react";
import { login } from "../../Services/ADService";
import { At, LockFill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Login({ handleLoginOrSign }) {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!username || !password) {
            toast.warning("Vui lòng nhập đầy đủ thông tin !!!");
            return;
        } else {
            toast.success("Đăng nhập thành công !!!");
        }

        let res = await login(username, password);
        if (res && res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.staffName);
            localStorage.setItem("id", res.data.userId);
            navigate("/")
        } else {
            if (res && res.status === 404) {
                toast.error(res.data.message);
            }
        }

        console.log(res)
    }


    return (
        <div className="login">
            <span>Đăng nhập</span>
            <form>
                <div>
                    <At className="icon" />
                    <input type="text" placeholder="Tên đăng nhập ..." value={username} onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div>
                    <LockFill className="icon" />
                    <input type="password" placeholder="Mật khẩu ..." value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="button">
                    <button onClick={(event) => handleLogin(event)}>Đăng nhập</button>
                    <button onClick={(event) => handleLoginOrSign(event)}>Đăng kí</button>
                </div>
            </form>
        </div>
    )
}