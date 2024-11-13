import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../Asserts/images/Logo.png";
import login from "../../Asserts/images/Customer Service.png";

function UserNavbar() {
  return (
    <Navbar className="usernavbar">
      <Container>
        <div className="col-2 d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        </div>

        <div className="col-10 d-flex justify-content-center">
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <a href="/user/homepage" className="me-5 text-light text-decoration-none">
                Home
              </a>
              <a href="#about" className="me-5 text-light text-decoration-none">
                {" "}
                Loan
              </a>
              <a
                href="#contact"
                className="me-5 text-light text-decoration-none"
              >
                Credit Card
              </a>
              <a href="#about" className="me-5 text-light text-decoration-none">
                {" "}
                Life Insiurance
              </a>

              <Dropdown className="d-inline me-5 btn-outline-dark">
                <Dropdown.Toggle variant="outline-dark text-light">
                  Transaction
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/faqs">FAQs</Dropdown.Item>
                  <Dropdown.Item href="#/feedbacks">Feedbacks</Dropdown.Item>
                  <Dropdown.Item href="#/complaints">Complaints</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <a href="#about" className="me-5 text-light text-decoration-none">
                {" "}
                Bill Payment
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </div>

        <div className="col d-flex justify-content-end align-items-center">
          <a href="#login" className="text-light text-decoration-none">
            <img src={login} alt="Login Icon" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;
