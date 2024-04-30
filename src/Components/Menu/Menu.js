import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../Style/Menu.scss'

export default function Menu({ setSelectedNavLink }) {
    const [className, setClassName] = useState(
        {
            className1: "border1",
            className2: "",
            className3: "",
            className4: "",
            className5: ""
        }
    )

    const handleNavLinkCDV = () => {
        setClassName({
            className1: "border1"
        })

        setSelectedNavLink("Các dịch vụ");
    }

    const handleNavLinkDLH = () => {
        setClassName({
            className2: "border2"
        })

        setSelectedNavLink("Đặt lịch hẹn");
    }

    const handleNavLinkTCLH = () => {
        setClassName({
            className3: "border3"
        })

        setSelectedNavLink("Tra cứu lịch hẹn");
    }

    const handleNavLinkTTSC = () => {
        setClassName({
            className4: "border4"
        })

        setSelectedNavLink("Tình trạng sửa chữa");
    }

    const handleNavLinkTT = () => {
        setClassName({
            className5: "border5"
        })

        setSelectedNavLink("Thanh toán");
    }

    return (
        <nav className="menu">
            <div className={className.className1}><NavLink to="/" className="active" onClick={handleNavLinkCDV}>CÁC DỊCH VỤ</NavLink></div>
            <div className={className.className2}><NavLink to="/datlichhen" className="active" onClick={handleNavLinkDLH}>ĐẶT LỊCH HẸN</NavLink></div>
            <div className={className.className3}><NavLink to="/tracuulichhen" className="active" onClick={handleNavLinkTCLH}>TRA CỨU LỊCH HẸN</NavLink></div>
            <div className={className.className4}><NavLink to="/tinhtrangsuachua" className="active" onClick={handleNavLinkTTSC}>TÌNH TRẠNG SỬA CHỮA</NavLink></div>
            <div className={className.className5}><NavLink to="/thanhtoan" className="active" onClick={handleNavLinkTT}>THANH TOÁN</NavLink></div>
        </nav>
    )
}