import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../Asserts/images/Logo.png";
import login from "../../Asserts/images/Customer Service.png";
import logo2 from "../../Asserts/images/Menu (1).png";
import logo3 from "../../Asserts/images/Menu (2).png";
import { Link } from "react-router-dom";
function UserNavbar() {
  return (
    <Navbar className="usernavbar">
      <Container>
        <div className="col-2 d-flex align-items-center">
          <Navbar.Brand to="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        </div>

        <div className="col-9 d-flex justify-content-center">
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <Link to="/user/homepage" className="me-5 text-light text-decoration-none">
                Home
              </Link>
              <Link to="#about" className="me-5 text-light text-decoration-none">
                {" "}
                Loan
              </Link>
              <Link
                to="#contact"
                className="me-5 text-light text-decoration-none"
              >
                Credit Card
              </Link>
              <Link to="#about" className="me-5 text-light text-decoration-none">
                {" "}
                Life Insiurance
              </Link>

              <Dropdown className="d-inline me-5 btn-outline-dark">
                <Dropdown.Toggle variant="outline-dark text-light">
                  Transaction
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item to="#/faqs">FAQs</Dropdown.Item>
                  <Dropdown.Item to="#/feedbacks">Feedbacks</Dropdown.Item>
                  <Dropdown.Item to="#/complaints">Complaints</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Link to="#about" className="me-5 text-light text-decoration-none">
                {" "}
                Bill Payment
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>

        <div className="col d-flex justify-content-end align-items-center">
          <Link to="#login" className="text-light text-decoration-none">

            <Dropdown className="d-inline me-5 btn-outline-dark">
            <Dropdown.Toggle variant="outline-dark text-dark">
            <img src={login} alt="Login Icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item to="#/faqs" className="text-dark"> <img className="text-dark" src={logo2} alt="Login Icon" /> </Dropdown.Item>
              <Dropdown.Item to="#/feedbacks"><img className="text-dark" src={logo3} alt="Login Icon" /></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
