import React from "react";
import "../../Asserts/Styles/LandingPage.css";
import ManagerSidebar from "./ManagerSidebar";
function ManagerHome() {
  return (
    <div>
      <div className="row">
        <div className="col-3  ">
        <ManagerSidebar/>
        </div>
        <div className="col-9" id="common">
          <h3 className="mt-4">
            <span className="dashboardheadcolor">Manager</span> DASHBOARD
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ManagerHome;
