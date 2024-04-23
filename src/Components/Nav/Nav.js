import React from "react";
import logo from '../../Images/COMPUTER SERCICE.png'
import { GlobeAmericas } from "react-bootstrap-icons";
import '../../Style/Nav.scss'

export default function Nav() {
    return (
        <div className="Nav">
            <img src={logo} alt="logo" />
            <div>
                <a href="/">Liên hệ </a><span> | </span>
                <GlobeAmericas color="black" className="icon-global" />
                <select>
                    <option>Tiếng Việt</option>
                    <option>English</option>
                </select>
            </div>
        </div>
    )
}