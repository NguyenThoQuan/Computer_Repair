import React from "react";
import { createPortal } from "react-dom";
import { Search } from "react-bootstrap-icons";

let searchContainer = document.getElementById("search-container");

if (!searchContainer) {
    const searchContainerDiv = document.createElement("div");
    searchContainerDiv.id = "search-container";
    searchContainerDiv.className = "search-container";
    document.body.appendChild(searchContainerDiv);
    searchContainer = searchContainerDiv;
}
export default function InputSearch() {
    return createPortal(
        <div className="search">
            <Search color="#d0d0d0" className="icon-search" />
            <input type="text" placeholder="Nhập vào số điện thoại ..." />
            <button>Tìm kiếm</button>
        </div>, searchContainer
    )
}