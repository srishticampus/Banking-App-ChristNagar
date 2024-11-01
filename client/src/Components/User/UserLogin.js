import React, { useState } from "react";
import "../../Asserts/Styles/manager.css";
import fmang from "../../Asserts/Images/userlogin.png";
import { FiEyeOff } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa6';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LandingFooter from "../Main/LandingFooter";
import LandingNav from "../Main/LandingNav";
import axiosinstance from "../../apis/axiosinstance";
import { Link } from "react-router-dom";
function UserLogin() {
  const [log, setLog] = useState({
    userMail: "",
    userPassword: "",
  });
  const [errors, setErrors] = useState({});

  const onchg = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const validateForm = () => {
    let formValid = true;
    let newErrors = {};

    if (!log.userMail.trim()) {
      formValid = false;
      newErrors.userMail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(log.userMail)) {
      formValid = false;
      newErrors.userMail = "Email address is invalid";
    }

    if (!log.userPassword.trim()) {
      formValid = false;
      newErrors.userPassword = "Password is required";
    } else if (log.userPassword.length < 6) {
      formValid = false;
      newErrors.userPassword = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return formValid;
  };

  const onclk = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axiosinstance.post("/userlogin", log);
        if (response.status === 200) {
          alert(response.data.msg);
          // Navigate to a different page if needed
        }
      } catch (error) {
        console.error("Login Error:", error);
        alert(error.response?.data?.msg || "Login failed. Please try again.");
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  // const toggleConfirmPasswordVisibility = () => {
  //   setshowConfirmPassword(!showConfirmPassword);
  // };

  return (
    <div>
      <LandingNav />
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
                    type="userMail"
                    name="userMail"
                    className="form-control loginput"
                    value={log.userMail}
                    onChange={onchg}
                  />
                  {errors.userMail && <div className="error">{errors.userMail}</div>}
                  <br />
                  <label>
                    <b>Password</b>
                  </label>
                  <br />
                  <input
                  type={showPassword ? "text" : "password"}
                    name="userPassword"
                    className="form-control loginput"
                    value={log.userPassword}
                    onChange={onchg}
                  />
                  <div className=" Customerforget-pswd-eyeicon" onClick={togglePasswordVisibility}>
                      {showPassword ? <FiEyeOff /> : <FaEye/>}
                </div>
                  {errors.userPassword && <div className="error">{errors.userPassword}</div>}
                  <Link to="/" className="d-flex justify-content-end" id="linkstyle">forgot password</Link>
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
                <img src={fmang} alt="User Login" />
              </div>
            </div>
          </Row>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}

export default UserLogin;
