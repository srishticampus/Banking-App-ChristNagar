import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import UserNavbar from "../User/UserNavbar";
import creditcardgirl from "../../Asserts/images/image 56.png";
import Applaynow from "../../Asserts/images/ApplyNowBTN.png";
import "../../Asserts/Styles/creaditcardapply.css";

function CustomerApplyLifeInsurance() {
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
                  Apply in just a few <br />
                  minutes and enjoy peace <br />
                  of mind!
                </p>
                <div onClick={handleLoanApply} style={{ cursor: "pointer" }}>
                  <img src={Applaynow} alt="Apply Now Button" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <img src={creditcardgirl} id="custloanapplyimg" alt="Customer" />
            </div>

            <div className="col-4">
              <div className="custloanapplysection1pt1col2">
                <br />
                <br />
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Affordable Premiums</label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp; Flexible Coverage </label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Secure transactions</label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp;Affordable Tax Benefits </label>
                <br />
                <GoDotFill className="custloanapplysection1radiobtn" />
                <label>&nbsp; Match your spending needs </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section2 start */}
      <div  className="custloanapplysection2">
        
        <div className="custloanapplysection2pt2">
          <br />
          <br />
          <center>
            <h3 id="custloanapplysection2pt2h3">Apply Now</h3>
          </center>
        </div>
        {/* Section 1 */}

        <div className="custcreditstatussect2">
          <br />
          <br />
          <div className="custcreditstatussect2pt2">
            <br />
            <center>
              <h3 id="custcreditstatussect2h3">Application Status</h3>
            </center>
            <br />
            <br />
            <div className="custcreditstatussect2formborder1">
              <div className="custcreditstatussect2formpt1">
                <table>
                  <tr>
                    <th className="custcreditstatussect2formth">
                      <label className="custcreditstatussect2datalabel">
                        Name
                      </label>
                    </th>
                    <th className="custcreditstatussect2formth">
                      <label className="custcreditstatussect2datalabel">
                        Contact
                      </label>
                    </th>
                    <th className="custcreditstatussect2formth">
                      <label className="custcreditstatussect2datalabel">
                        Email
                      </label>
                    </th>
                    <th className="custcreditstatussect2formth">
                      <label className="custcreditstatussect2datalabel">
                        Card Type
                      </label>
                    </th>
                    <th className="custcreditstatussect2formth">
                      <label className="custcreditstatussect2datalabel">
                        Credit Card Limit
                      </label>
                    </th>

                    <th className="custcreditstatussect2formthonerow">
                      <label id="custcreditstatussect2formthlabel1">
                        <br />
                        <GoDotFill className="custcreditstatusradiobtn" />
                        Pending
                      </label>
                    </th>
                    <th className="custcreditstatussect2formthonerow">
                      <label id="custcreditstatussect2formthlabel2">
                        <br />
                        View More
                      </label>
                    </th>
                  </tr>

                  <tr>
                    <td className="custcreditstatussect2formtd">
                      <p className="custcreditstatussect2data">Akhila K</p>
                    </td>
                    <td className="custcreditstatussect2formtd">
                      <p className="custcreditstatussect2data">1234567890</p>
                    </td>
                    <td className="custcreditstatussect2formtd">
                      <p className="custcreditstatussect2data">
                        akhila45@gmail.com
                      </p>
                    </td>
                    <td className="custcreditstatussect2formtd">
                      <p className="custcreditstatussect2data">Platinum</p>
                    </td>
                    <td className="custcreditstatussect2formtd">
                      <p className="custcreditstatussect2data">Rs.2,00,000/-</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  );
}

export default CustomerApplyLifeInsurance;
