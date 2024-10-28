import React, { useState } from "react";
import "../../Asserts/Styles/user.css";
import Registr from "../../Asserts/Images/userregister.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LandingNav from "../Main/LandingNav";
import LandingFooter from "../Main/LandingFooter";

function UserRegister() {
  const [form, setForm] = useState({
    username: "",
    userContact: "",
    userAddress: "",
    userCode: "",
    userPassword: "",
    userMail: "",
    userDate: "",
    userNumber: "",
    userPicture: "",
    userConfirmpass: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const update = (e) => {
    console.log(form);
  };
  return (
    <div className="customerform">
    <LandingNav/>
      <div className="container1">
        <Row>
          <Col>
            <div className="formstyle">
              <center>
                <h4 id="regheading">Register Now</h4>
              </center>
              <Container className="container2">
                <Row>
                  <Col>
                    <label>Name</label>
                    <br></br>
                    <input
                      className="form-control"
                      type="text"
                      name="Name"
                      onChange={handleChange}
                    ></input>
                    <label>Contact</label>
                    <br></br>
                    <input
                      type="text"
                      name="Contact"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>Address</label>
                    <br></br>
                    <input
                      type="address"
                      name="Address"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>IFSC Code</label>
                    <br></br>
                    <input
                      type="text"
                      name="Code"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>Password</label>
                    <br></br>
                    <input
                      type="password"
                      name="Password"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                  </Col>
                  <Col>
                    <label>E-mail</label>
                    <br></br>
                    <input
                      type="email"
                      name="Mail"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>Date Of Birth</label>
                    <br></br>
                    <input
                      type="date"
                      name="Date"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>Account Number</label>
                    <br></br>
                    <input
                      type="text"
                      name="Number"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>Profile Picture</label>
                    <br></br>
                    <input
                      type="file"
                      name="Picture"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                    <label>Confirm Password</label>
                    <br></br>
                    <input
                      type="password"
                      name="Confirmpass"
                      onChange={handleChange}
                      className="form-control"
                    ></input>
                  </Col>
                </Row>
              </Container>
              <center>
                <br></br>
                <button onClick={update} id="regbutton">
                  Register
                </button>
                <br></br>
                <br></br>
                <p id="foot">
                  Already have an account?{" "}
                  <div className="text-center">
                  <a id="linkstyle" >
                    <b>Sign In</b>
                  </a></div>
                </p>
              </center>
            </div>
          </Col>
          <Col>
            <div id="imgstyle">
              <img src={Registr}></img>
            </div>
          </Col>
        </Row>
      </div>
      <LandingFooter/>
    </div>
  );
}

export default UserRegister;
