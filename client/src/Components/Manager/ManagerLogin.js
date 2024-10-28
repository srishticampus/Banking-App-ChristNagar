import React, { useState } from "react";
import "../../Asserts/Styles/manager.css";
import fmang from "../../Asserts/Images/managerlogin.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import LandingNav from "../Main/LandingNav";
import LandingFooter from "../Main/LandingFooter";

function ManagerLogin() {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });

  const onchg = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };
  const onclk = (e) => {
    console.log(log);
  };
  return (
    <div>
    <LandingNav/>
      <div id="bd">
        <div className="row1">
          <Row>
            <div className="col-6">
              <div className="box1">
                <center>
                  <label className="loglab">
                    <b>Login Now</b>
                  </label>
                </center>
                <br />
                <div className="logcont">
                  <label>
                    <b>Email</b>
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    className="form-control loginput"
                    onChange={onchg}
                  />
                  <br />
                  <label>
                    <b>Password</b>
                  </label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    className="form-control loginput"
                    onChange={onchg}
                  ></input>
                  <br />
                  <br />
                  <div className="text-center">
                    <button name="submit" id="submit" onClick={onclk}>
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div id="imgstyle">
                <img src={fmang}></img>
              </div>
            </div>
          </Row>
        </div>
      </div>
      <LandingFooter/>
    </div>
  );
}

export default ManagerLogin;
