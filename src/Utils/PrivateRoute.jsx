import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
    let checkToken = localStorage.getItem("token");

    return (
        checkToken ? <Outlet /> : <Navigate to="/login" />
    )
}