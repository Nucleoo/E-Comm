import React from "react";
import { useSelector } from "react-redux";
// import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";


const ProtectedRoute = () => {

    const { isAuthenticated } = useSelector((state) => state.user);

    return (isAuthenticated === false) ? <Navigate to="/login" /> : <Outlet />;

}

export default ProtectedRoute;

