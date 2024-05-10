import React from "react";
import { Search } from "react-bootstrap-icons";
import "../../Style/InputSearch.scss";

export default function InputSearch() {
    return (
        <div className="inputSearch">
            <Search className="icon" />
            <input type="text" placeholder="Tìm kiếm ..." />
            <button>Tìm kiếm</button>
        </div>
    )
}