import React, { useEffect, useState } from "react";
import InputSearch from "../Search/InputSearch";
import ListService from "./ListService";
import { getService } from "../../Services/ADService";
import "../../Style/Service.scss"

export default function Service() {
    const [listServices, setListServices] = useState([]);

    useEffect(() => {
        getListService();
    }, []);

    const getListService = async () => {
        let res = await getService();
        setListServices(res.data.services);
        console.log(res)
    }

    return (
        <>
            <InputSearch />
            <ListService listServices={listServices} />
        </>
    )
}