import React, { Fragment } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
    return (
        <Fragment>
            <div className="sidebar">
                <Link to="/admin/dashboard"> <p> <DashboardIcon /> Dashboard </p> </Link>
                <Link to="/admin/products"> <p> <PostAddIcon /> Products </p> </Link>
                <Link to="/admin/product"> <p> <AddIcon /> Add Product </p> </Link>
                <Link to="/admin/orders"> <p> <ListAltIcon /> Orders </p> </Link>
                <Link to="/admin/users"> <p>  <PeopleIcon /> Users </p> </Link>
                <Link to="/admin/reviews"> <p> <RateReviewIcon /> Reviews </p> </Link>
            </div>
        </Fragment>
    );
};

export default Sidebar;