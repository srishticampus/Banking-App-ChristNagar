import React, { useEffect, useRef, useState } from "react";
import "../../Asserts/Styles/Loan.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaArrowRightLong } from "react-icons/fa6";
import customer from "../../Asserts/images/custloan.png";
import UserNavbar from "../User/UserNavbar";
import { GoDotFill } from "react-icons/go";
import Applaynow from "../../Asserts/images/ApplyNowBTN.png";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../apis/axiosinstance";
import LandingFooter from "../Main/LandingFooter";

function CustomerApplyLoan() {
  const [user, setUser] = useState(null);
  const applayref = useRef();
  const navigate = useNavigate();

  const [loanDetails, setLoanDetails] = useState({
    loanType: "",
    loanAmount: "",
    loanPurpose: "",
  });

  const [errors, setErrors] = useState({
    loanType: "",
    loanAmount: "",
    loanPurpose: "",
  });

  const handleLoanApply = () => {
    applayref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const GetUserData = async () => {
    const data = localStorage.getItem("userid");

    try {
      const response = await axiosInstance.post(`/viewauserloan/${data}`);
      console.log("resp-resp", response);
      if (Array.isArray(response.data.data) && response.data.data.length > 0) {
        setUser(response.data.data);
      } else {
        console.error("Unexpected API response structure.");
        setUser(null);
      }
      console.log("API resp", response.data.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateFields = () => {
    let valid = true;
    const newErrors = {};

    if (!loanDetails.loanType) {
      newErrors.loanType = "Please select a loan type.";
      valid = false;
    }
    if (!loanDetails.loanAmount || isNaN(loanDetails.loanAmount) || loanDetails.loanAmount <= 0) {
      newErrors.loanAmount = "Please enter a valid loan amount.";
      valid = false;
    }
    if (!loanDetails.loanPurpose || loanDetails.loanPurpose.length < 10) {
      newErrors.loanPurpose = "Loan purpose must be at least 10 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      navigate("/user/applyloanpersonaldetail", { state: loanDetails });
      console.log("Loan Details Submitted: ", loanDetails);
    }
  };

  useEffect(() => {
    GetUserData();
  }, []);

  return (
    <div>
      <UserNavbar />
      <div className="custloanapplysection1">
        <div className="custloanapplysection1pt1">
          <div className="row">
            <div className="col-4">
              <div className="custloanapplysection1pt1col1">
                <br />
                <br />
                <br />
                <br />
                <br />
                <p id="custloanapplysection1pt1col1p1">Start Your Application Today:</p>
                <p id="custloanapplysection1pt1col1p2">
                  Easy online application with
                  <br />
                  quick processing!
                </p>
                <div onClick={handleLoanApply} style={{ cursor: "pointer" }}>
                  <img src={Applaynow} alt="Apply Now Button" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <img src={customer} id="custloanapplyimg" alt="Customer" />
            </div>
            <div className="col-4">
              <div className="custloanapplysection1pt1col2">
                <br />
                <br />
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Flexible Payment</label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Low Interest Rates </label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Fast Approval </label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Customized Solutions </label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;24/7 Support </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section2 Start */}
      <div className="custloanapplysection2">
        <div ref={applayref} className="custloanapplysection2pt2">
          <br />
          <br />
          <center>
            <h3 id="custloanapplysection2pt2h3">Apply Now</h3>
          </center>
          <br />
          <br />
          <div className="custloanapplysection2pt2formborder">
            <div className="custloanapplysection2pt2formpt">
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <Form.Group controlId="formBasicText" id="custloanapplytypebox">
                      <Form.Label>Loan Type</Form.Label>
                      <Form.Select
                        name="loanType"
                        value={loanDetails.loanType}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Choose Loan Type
                        </option>
                        <option value="Personal Loan">Personal Loan</option>
                        <option value="Home Loan">Home Loan</option>
                        <option value="Car Loan">Car Loan</option>
                      </Form.Select>
                      {errors.loanType && <p className="text-danger">{errors.loanType}</p>}
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group controlId="formBasicText" id="custloanapplyamtrequiredbox">
                      <Form.Label>Amount Required</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Rs.0/-"
                        name="loanAmount"
                        value={loanDetails.loanAmount}
                        onChange={handleChange}
                      />
                      {errors.loanAmount && <p className="text-danger">{errors.loanAmount}</p>}
                    </Form.Group>
                  </div>
                </div>
                <Row>
                  <Form.Group controlId="formBasicText" id="custloanapplypurposeloanbox">
                    <Form.Label>Purpose Of Loan</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Description"
                      name="loanPurpose"
                      value={loanDetails.loanPurpose}
                      onChange={handleChange}
                    />
                    {errors.loanPurpose && <p className="text-danger">{errors.loanPurpose}</p>}
                  </Form.Group>
                </Row>
                <br />
                <br />
                <center>
                  <Button type="submit" id="custloanapplysubmitbtn">
                    Next &nbsp;
                    <FaArrowRightLong />
                  </Button>
                </center>
                <br />
              </Form>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
}

export default CustomerApplyLoan;
