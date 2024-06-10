import React from "react";
import InputSearch from "../Search/InputSearch";
import Statistical from "./Statistical";
import "../../Style/Home.scss";

export default function Home() {
    return (
        <>
            <InputSearch />
            <Statistical />
        </>
    )
}