import React, { useRef } from "react";
import "../../Asserts/Styles/Loan.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import customer from "../../Asserts/images/custloan.png";
import UserNavbar from "../User/UserNavbar";

import Applaynow from "../../Asserts/images/ApplyNowBTN.png";

function CustomerApplyLoan() {
  const applayref = useRef();

  const handleLoanApply = () => {
    applayref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
                <p id="custloanapplysection1pt1col1p1">
                  Start Your Application Today:
                </p>
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
      {/* section2 start */}
      <div ref={applayref} className="custloanapplysection2">
        <br />
        <br />
        <div className="custloanapplysection2pt2">
          <br />
          <br />
          <center>
            <h3 id="custloanapplysection2pt2h3">Apply Now</h3>
          </center>
          <br />
          <br />
          <div className="custloanapplysection2pt2formborder">
            <div className="custloanapplysection2pt2formpt">
              <Form>
                <div className="row">
                  <div className="col-6">
                    <Form.Group
                      className=""
                      controlId="formBasicText"
                      id="custloanapplytypebox"
                    >
                      <Form.Label>Loan Type</Form.Label>
                      <Form.Select defaultValue="">
                        <option value="" disabled>
                          Choose Loan Type
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-6">
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicText"
                      id="custloanapplyamtrequiredbox"
                    >
                      <Form.Label>Amount Required</Form.Label>
                      <Form.Control type="text" placeholder="Rs.0/-" />
                    </Form.Group>
                  </div>
                </div>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicText"
                    id="custloanapplypurposeloanbox"
                  >
                    <Form.Label>Purpose Of Loan</Form.Label>
                    <Form.Control
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Description"
                    />
                  </Form.Group>
                </Row>
                <br />
                <br />
                <br />
                <center>
                  <Button type="submit" id="custloanapplysubmitbtn">
                    Next &nbsp;
                    <FaArrowRightLong />
                  </Button>
                </center>
                <br />
                <br />
              </Form>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      {/* section2 end */}
    </div>
  );
}

export default CustomerApplyLoan;
