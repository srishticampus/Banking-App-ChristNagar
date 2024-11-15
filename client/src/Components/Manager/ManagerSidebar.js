import React from "react";
import Nav from "react-bootstrap/Nav";
import home from "../../Asserts/images/Home.png";
import loan from "../../Asserts/images/managerloan.png";
import credit from "../../Asserts/images/managercredit.png";
import clerk from "../../Asserts/images/clerkmanager.png";
import transaction from "../../Asserts/images/managertransaction.png";
import logout from "../../Asserts/images/managerlogout.png";
import user from "../../Asserts/images/managerviewuser.png";
import { Link } from "react-router-dom";

function ManagerSidebar() {
  return (
    <div>
      <div className="main-container">
        <div className="side-nav">
          <div className="profile"></div>
          <Nav defaultActiveKey="/home" className="flex-column mt-5">
            <Nav.Item>
              <Link to="/manager/home"><img src={home}></img> Dashboard</Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#manage-loan"><img src={loan}></img> Manage Loan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#credit-card"><img src={credit}></img> Credit Card</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Item>
                <Nav.Link href="#clerk-management"><img src={clerk}></img> Clerk Management</Nav.Link>
              </Nav.Item>
              <Nav.Link href="#transaction"><img src={transaction}></img> Transaction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#view-users"><img src={user}></img> View Users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#logout"><img src={logout}></img> Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default ManagerSidebar;
