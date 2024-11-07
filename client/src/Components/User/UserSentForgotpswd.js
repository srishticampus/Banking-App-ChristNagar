import React, { useState } from "react";
import "../../Asserts/Styles/user.css";
import Registr from "../../Asserts/images/userregister.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LandingNav from "../Main/LandingNav";
import LandingFooter from "../Main/LandingFooter";
import axiosinstance from "../../apis/axiosinstance";
import { useNavigate,Link } from "react-router-dom";
import axiosMultipartInstance from "../../apis/axiosMultipartInstance";
import { FiEyeOff } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa6';

function UserSentForgotpswd() {
  
  return (
    <div className="customerform">
      <LandingNav />
      <div className="container1">
        <Row>
          <Col>
            <div className="formstyle">
              ffff
            </div>
          </Col>
          <Col>
            <div id="imgstyle">
              <img src={Registr} alt="User Registration" />
            </div>
          </Col>
        </Row>
      </div>
      <LandingFooter />
    </div>
  );
}

export default UserSentForgotpswd;
