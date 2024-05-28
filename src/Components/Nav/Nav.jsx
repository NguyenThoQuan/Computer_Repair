import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HouseGearFill, Calendar, CardChecklist, Coin, Tools, BoxArrowLeft } from "react-bootstrap-icons";
import logo from "../../Images/COMPUTER SERCICE.png";
import "../../Style/Nav.scss"

export default function Nav() {
    const [addClassName, setAddClassName] = useState("0");

    const handleNavClick = (index) => {
        setAddClassName(index)
        localStorage.setItem('addClassName', index);
    }

    useEffect(() => {
        const savedIndex = localStorage.getItem('addClassName');
        if (savedIndex !== null) {
            setAddClassName(parseInt(savedIndex));
        }
    }, []);

    return (
        <nav>
            <div><img src={logo} alt="logo" /></div>
            <div className={addClassName === 0 ? "select option" : "option"}><NavLink to='/' className="navLink" onClick={() => handleNavClick(0)}><HouseGearFill className="icon" />Trang chủ</NavLink></div>
            <div className={addClassName === 1 ? "select option" : "option"}><NavLink to='/serviceManagement' className="navLink" onClick={() => handleNavClick(1)}><Tools className="icon" />Quản lý dịch vụ</NavLink></div>
            <div className={addClassName === 2 ? "select option" : "option"}><NavLink to='/calendarManagement' className="navLink" onClick={() => handleNavClick(2)}><Calendar className="icon" />Quản lý lịch hẹn</NavLink></div>
            <div className={addClassName === 3 ? "select option" : "option"}><NavLink to='/statusUpdate' className="navLink" onClick={() => handleNavClick(3)}><CardChecklist className="icon" />Cập nhật tình trạng</NavLink></div>
            <div className={addClassName === 4 ? "select option" : "option"}><NavLink to='/transactionManagement' className="navLink" onClick={() => handleNavClick(4)}><Coin className="icon" />Quản lý giao dịch</NavLink></div>
            <div className="logout"><NavLink to='/login' className="navLink" onClick={() => handleNavClick(5)}><BoxArrowLeft className="icon" />Đăng xuất</NavLink></div>
        </nav>
    )
}