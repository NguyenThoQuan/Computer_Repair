import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HouseGearFill, Calendar, CardChecklist, Coin, Tools } from "react-bootstrap-icons";
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
            <div className={addClassName === 0 ? "select" : ""} onClick={() => handleNavClick(0)}><NavLink to='/' className="navLink"><HouseGearFill className="icon" />Trang chủ</NavLink></div>
            <div className={addClassName === 1 ? "select" : ""} onClick={() => handleNavClick(1)}><NavLink to='/serviceManagement' className="navLink"><Tools className="icon" />Quản lý dịch vụ</NavLink></div>
            <div className={addClassName === 2 ? "select" : ""} onClick={() => handleNavClick(2)}><NavLink to='/calendarManagement' className="navLink"><Calendar className="icon" />Quản lý lịch hẹn</NavLink></div>
            <div className={addClassName === 3 ? "select" : ""} onClick={() => handleNavClick(3)}><NavLink to='/statusUpdate' className="navLink"><CardChecklist className="icon" />Cập nhật tình trạng</NavLink></div>
            <div className={addClassName === 4 ? "select" : ""} onClick={() => handleNavClick(4)}><NavLink to='/transactionManagement' className="navLink"><Coin className="icon" />Quản lý giao dịch</NavLink></div>
        </nav>
    )
}