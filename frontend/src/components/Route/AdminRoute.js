import React from 'react';
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const AdminRoute = () => {

    const { isAuthenticated, user } = useSelector((state) => state.user);

    return (isAuthenticated === false || user.role !== "admin") ? <Navigate to="/login" /> : <Outlet />;
}

export default AdminRoute
