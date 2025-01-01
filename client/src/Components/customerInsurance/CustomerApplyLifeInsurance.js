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
import LandingFooter from "../Main/LandingFooter";
import "../../Asserts/Styles/customerLifeinsurance.css";
import applyinsurance from "../../Asserts/images/applybtnlifecard.png";
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

      <div
        className="custcreditstatussect3 mb-5"
        style={{ backgroundColor: "#f5f2f7" }}
      >
        <br />
        <br />
        <div className="custcreditstatussect3pt3">
          <br />
          <center>
            <h4>LIFE INSURANCE</h4>
            <br />
            <br />
            <h3 id="custcreditstatussect3h3">
              "Secure Your Future with Our Life Insurance Plans”
            </h3>
          </center>
          <br />
          <div className="custcreditstatussect3pt3details">
            <p>
              Apply for life insurance effortlessly and secure your loved ones'
              future. Our simple, step-by-step process ensures quick application
              and transparent policy options. Start today and gain peace of mind
              for tomorrow.
            </p>
            <br />
            <center>
              <div onClick={handleLoanApply} style={{ cursor: "pointer" }}>
                <img src={Applaynow} alt="Apply Now Button" />
              </div>
            </center>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <div class="container">
          <div className="lifeinsuarancecard">
            <div className="details">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <GoDotFill className="custloanapplysection1radiobtn" />
                  <span id="custcreditstatussect3h3">
                    &nbsp; Coverage Amount{" "}
                    <div className="ms-4">₹20,00,000/-</div>
                  </span>
                  <div className="mt-3">
                  <GoDotFill className="custloanapplysection1radiobtn" />
                  <span id="custcreditstatussect3h3" >
                    {" "}
                    &nbsp; Monthly / <div className="ms-4">10 Years</div>
                  </span>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    style={{ width: "100%", height: "90px" }}
                    src={creditcardgirl}
                  ></img>
                </div>
              </div>

              <h2 id="custcreditstatussect3h3" className="mt-3">Family Protector Plan</h2>
              <p className="amount" id="custcreditstatussect3h3">
                Amount to be paid: ₹2,000/-
              </p>
              <p className="description">
                Get comprehensive protection for your loved ones with a flexible
                plan that adapts to your life’s needs. Affordable premiums and
                lifetime peace of mind.
              </p>
          </div>
          <div>
          <img src={applyinsurance}></img></div>
        </div>

        </div>
      </div>
      <LandingFooter />
    </div>
  );
}

export default CustomerApplyLifeInsurance;

// {user && (
//   <div className="custcreditstatussect2">
//       <br />
//       <br />
//       <div className="custcreditstatussect2pt2">
//           <br />
//           <center>
//               <h3 id="custcreditstatussect2h3">Application Status</h3>
//           </center>
//           <br />
//           <br />
//           <div className="custcreditstatussect2formborder1">
//               <div className="custcreditstatussect2formpt1">
//                   <table>

//                       <tbody>
//                           <tr>
//                               <th className="custcreditstatussect2formth">
//                                   <label className="custcreditstatussect2datalabel">
//                                       Name
//                                   </label>
//                               </th>
//                               <th className="custcreditstatussect2formth">
//                                   <label className="custcreditstatussect2datalabel">
//                                       Contact
//                                   </label>
//                               </th>
//                               <th className="custcreditstatussect2formth">
//                                   <label className="custcreditstatussect2datalabel">
//                                       Email
//                                   </label>
//                               </th>
//                               <th className="custcreditstatussect2formth">
//                                   <label className="custcreditstatussect2datalabel">
//                                       Card Type
//                                   </label>
//                               </th>
//                               <th className="custcreditstatussect2formth">
//                                   <label className="custcreditstatussect2datalabel">
//                                       Credit Card Limit
//                                   </label>
//                               </th>

//                           </tr>

//                           {user?.length > 0 ? (
//                               user?.map((data, index) => {
//                                   return (
//                                       <tr key={index}>
//                                           <td className="custcreditstatussect2formtd">
//                                               {data.customername}
//                                           </td>
//                                           <td className="custcreditstatussect2formtd">
//                                               {data.contactnumber}
//                                           </td>
//                                           <td className="custcreditstatussect2formtd">
//                                               {data.emailid}
//                                           </td>
//                                           <td className="custcreditstatussect2formtd">
//                                               {data.cardtype}
//                                           </td>
//                                           <td className="custcreditstatussect2formtd">
//                                               {data.creditcardlimit}
//                                           </td>
//                                           <td className="custcreditstatussect2formthonerow">

//                                               <p className="CACC-p"><GoDotFill className="custcreditstatusradiobtn" />{data.approvalstatus}</p>

//                                           </td>
//                                           <td className="custcreditstatussect2formthonerow">

//                                               <p className="CACC-p-link" onClick={() => navigate(`/user/creditcarddetails/${data._id}`)}>View More</p>

//                                           </td>
//                                       </tr>
//                                   )
//                               })
//                           ) : (
//                               <tr>
//                                   <td><p className=' text-center text-danger'>No Data Found</p></td>
//                               </tr>
//                           )}
//                       </tbody>
//                   </table>
//               </div>
//           </div>
//           <br />
//       </div>
//       <br />
//   </div>
// )}

// {/* Section 2 */}
