import React from "react";
import AdminSidebar from "./AdminSidebar";
import "../../Asserts/Styles/LandingPage.css";
function AdminDashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-3  ">
          <AdminSidebar />{" "}
        </div>
        <div className="col-9" id="common">
          <h3 className="mt-4">
            <span className="dashboardheadcolor">ADMIN </span> DASHBOARD
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
