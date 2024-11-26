import React,{useState,useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import home from "../../Asserts/images/Home.png";
import loan from "../../Asserts/images/managerloan.png";
import credit from "../../Asserts/images/managercredit.png";
import clerk from "../../Asserts/images/clerkmanager.png";
import transaction from "../../Asserts/images/managertransaction.png";
import logout from "../../Asserts/images/managerlogout.png";
import user from "../../Asserts/images/managerviewuser.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Asserts/images/Logo.png";
import Navbar from "react-bootstrap/Navbar";
import profile from "../../Asserts/images/Customer Service.png";

function ManagerSidebar() {
  const navigate = useNavigate();
  const [tooglebtn,setTooglebtn]=useState(false)

  const togglemangerbtn=()=>{
    setTooglebtn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("managerid");
    alert("Please Login Again");
    navigate("/manager/login");
  };
  
  useEffect(()=>{
    if(localStorage.getItem("managerid")==null){
      navigate("/manager/login")
    }

  },[])
  return (
    <div>
      <div className="main-container">
        <div className="side-nav">
          <div className="profile"></div>
          <Nav  className="flex-column ">
            <div className="col-2 d-flex align-items-center">
              <Navbar.Brand to="">
                <img src={logo} alt="Logo" />
              </Navbar.Brand>
              <Link to={"/manager/profile"}>
                {" "}
                <img src={profile} alt="Logo" />
              </Link>
            </div>
            <Nav.Item className="nav-link mt-3">
              <Link
                to=""
                className="text-decoration-none text-light ms-3"
              >
                <img src={home}></img> Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link ">
              <Link
                to="/manager/home"
                className="text-decoration-none text-light ms-3"
              >
                <img src={loan}></img> Manage Loan
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link ">
              <Link
                to="/manager/home"
                className="text-decoration-none text-light ms-3 "
              >
                <img src={credit}></img> Credit Card
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link
              onClick={togglemangerbtn}
                className="text-decoration-none text-light ms-3 "
              >
                <img src={clerk}></img> Clerk Management
              </Link>
              { tooglebtn==true ? <div className="managermainbtn mt-1">
                <div><Link to="/manager/addclerk" className="managerbtn text-light btn ">Add A Clerk</Link></div>
                <div className="mt-2"><Link to="/manager/viewclerks" className="managerbtn text-light btn mt-1"> View All Clerk</Link></div>
              </div>:""}

            </Nav.Item>
            <Nav.Item className="nav-link ">
              <Link
                to="/manager/home"
                className="text-decoration-none text-light ms-3 "
              >
                <img src={transaction}></img> Transaction
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link ">
              <Link
                to="/manager/viewusers"
                className="text-decoration-none text-light ms-3"
              >
                <img src={user}></img> View Users
              </Link>
            </Nav.Item>
            <Nav.Item className="mt-3 ms-3">
              <Nav.Link onClick={handleLogout}>
                <img src={logout}></img> Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default ManagerSidebar;
