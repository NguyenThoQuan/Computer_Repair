import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../Style/Menu.scss'

export default function Menu() {
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
    }

    const handleNavLinkDLH = () => {
        setClassName({
            className2: "border2"
        })
    }

    const handleNavLinkTCLH = () => {
        setClassName({
            className3: "border3"
        })
    }

    const handleNavLinkTTSC = () => {
        setClassName({
            className4: "border4"
        })
    }

    const handleNavLinkTT = () => {
        setClassName({
            className5: "border5"
        })
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