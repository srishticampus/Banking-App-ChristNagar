import React from "react";
import logo from "../../Asserts/Images/Logo.png";
import home from "../../Asserts/Images/Home.png";
import manage from "../../Asserts/Images/Management.png";
import customer from "../../Asserts/Images/Customer Insight.png";
import manager from "../../Asserts/Images/Project Manager.png";
import "../../Asserts/Styles/admindashboard.css";
import { Link, useNavigate } from "react-router-dom";
function AdminSidebar() {
  return (
    <div className="sidebardesign">
      <img src={logo}></img>
      <div className="row mt-5 ">
        <div className="col-1"></div>
        <div className="col-1">
          <img src={home}></img>
        </div>
        <div className="col-3">Dashbaord</div>
      </div>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-1">
          <img src={customer}></img>
        </div>
        <div className="col-9">Customer Management</div>
      </div>
      <Link
          to="/admin/viewmanages"
          className="text-decoration-none text-light"
        ></Link>
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-1">
          <img src={manage}></img>
        </div>
        <div className="col-9">
          Clerk Management
        </div>
        <Link
          to="/admin/viewmanages"
          className="text-decoration-none text-light"
        >
          <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-1">
              <img src={manager}></img>
            </div>
            <div className="col-9">Manager Management</div>
            
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;
