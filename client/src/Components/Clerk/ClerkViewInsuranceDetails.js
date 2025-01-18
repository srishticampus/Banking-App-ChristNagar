import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imgurl from "../../apis/imgURL";
import axiosInstance from "../../apis/axiosinstance";
import "../../Asserts/Styles/UserCreditApplicationDetails.css";
import LandingFooter from "../Main/LandingFooter";
import checkmark from "../../Asserts/images/Vector.png";
import UserNavbar from "../User/UserNavbar";
import { Col, Container, Row } from "react-bootstrap";
import ClerkSideBar from "./ClerkSideBar";

function ClerkViewInsuranceDetails() {
  const [user, setUser] = useState({});
  const { planapplicationid } = useParams();

  const openFileInNewTab = (filePath) => {
    window.open(`${imgurl}/${filePath}`, "_blank");
  };

  const navigate=useNavigate()

  const GetUserData = async () => {
    try {
      const response = await axiosInstance.post(
        `/viewOneapplyedinsuranceapplication/${planapplicationid}`
      );
      setUser(response.data.data);
      console.log("API Response:", response.data.data);
    } catch (error) {
      alert("Failed to fetch user details. Please try again.");
      console.error("Error fetching user data:", error);
    }
  };
  const CancelbuttonOnClick = () => {
    navigate("/clerk/clerkviewinsurance");
};

const VerifybuttonOnClick = async () => {
    try {
        await axiosInstance.post(`/verifyinginsuranceapplication/${planapplicationid}`);
        alert("Application Verified Successfully");
        navigate("/clerk/clerkviewinsurance");
    } catch (error) {
        console.error("Error verifying Application:", error);
    }
};

  useEffect(() => {
    GetUserData();
    console.log(user, "p");
  }, []);

  if (!user) {
    return <div>Loading user details...</div>;
  }

  return (
    <div className="row">
      <div className="col-3">
        <ClerkSideBar />
      </div>

      <div className="col-9 UCAD-MainDiv">
        {console.log("user", user)}

        <div className="UCAD-MainDiv-ContainDiv-Content-Card-'Right">
          <div className="UCAD-MainDiv-ContainDiv-Content">
            <div>
              <img
                className="UCAD-profile-img"
                src={`${imgurl}/${user?.userid?.userPicture?.filename}`}
                alt="PROFILE"
              />
            </div>

            <div>
              <h1 className="UCAD-h3">{user?.userid?.username}</h1>
            </div>

            <div>
              {/* Progress Bar */}
              <Container>
                <Row className="justify-content-center">
                  <Col md={8} className="text-center">
                    <div className="UCADcirclecontainer">
                      <div className="UCADcirclecontainer-1">
                        <div className="circlecontainerdiv">
                          <div className="UCADcircle active">
                            <img src={checkmark} alt="checkmark" />
                          </div>
                          <span className="UCAD-progress-text">Apply</span>
                        </div>
                      </div>

                      {user?.insuranceverification ? (
                        <>
                          <div className="UCAD-profildetaildline active" />
                          <div className="UCADcirclecontainer-2">
                            <div className="circlecontainerdiv">
                              <div className="UCADcircle active">
                                <img src={checkmark} alt="checkmark" />
                              </div>
                              <span className="UCAD-progress-text">
                                Clerk Verify
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="UCAD-profildetaildline" />
                          <div className="UCADcirclecontainer-2">
                            <div className="circlecontainerdiv">
                              <div className="UCADcircle"></div>
                              <span className="UCAD-progress-text">
                                Clerk Verify
                              </span>
                            </div>
                          </div>
                        </>
                      )}

                      {user?.approvalstatus === "Approved" ? (
                        <>
                          <div className="UCAD-profildetaildline active" />
                          <div className="UCADcirclecontainer-3">
                            <div className="circlecontainerdiv">
                              <div className="UCADcircle active">
                                <img src={checkmark} alt="checkmark" />
                              </div>
                              <span className="UCAD-progress-text">
                                Manager Approval
                              </span>
                            </div>
                          </div>

                          <div className="UCAD-profildetaildline active" />
                          <div className="UCADcirclecontainer-4">
                            <div className="circlecontainerdiv">
                              <div className="UCADcircle active">
                                <img src={checkmark} alt="checkmark" />
                              </div>
                              <span className="UCAD-progress-text">
                                Card Approved
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="UCAD-profildetaildline" />
                          <div className="UCADcirclecontainer-3">
                            <div className="circlecontainerdiv">
                              <div className="UCADcircle"></div>
                              <span className="UCAD-progress-text">
                                Manager Approval
                              </span>
                            </div>
                          </div>

                          <div className="UCAD-profildetaildline" />
                          <div className="UCADcirclecontainer-4">
                            <div className="circlecontainerdiv">
                              <div className="UCADcircle"></div>
                              <span className="UCAD-progress-text">
                                Card Approved
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </Col>
                </Row>
                <div className="CVCD-MainDiv-ContainDiv-Content-Card-Upper">
                  {/* Personal Details */}
                  <div className="CVCD-MainDiv-ContainDiv-Content-Card">
                    <h1 className="CVCD-h5">Personal Details</h1>

                    <div className="CVCD-MainDiv-ContainDiv-Content-Card-Contain">
                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left">
                        <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left-Details">
                          <div className="CVCD-textcontain">
                            <label for="email" className="CVCD-label">
                              E-mail
                            </label>
                            <h1 name="email" className="CVCD-h4">
                              {user?.userid?.userMail}
                            </h1>
                          </div>

                          <div className="CVCD-textcontain">
                            <label for="DOB" className="CVCD-label">
                              Date Of Birth
                            </label>
                            <h1 name="DOB" className="CVCD-h4">
                              {new Date(
                                user?.userid?.userDate
                              ).toLocaleDateString("en-GB")}
                            </h1>
                          </div>

                          
                        </div>
                      </div>

                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Right">
                        <div className="CVCD-textcontain">
                          <label for="Contact" className="CVCD-label">
                            Contact
                          </label>
                          <h1 name="Contact" className="CVCD-h4">
                            {user?.userid?.userContact}
                          </h1>
                        </div>

                        <div className="CVCD-textcontain">
                          <label for="address" className="CVCD-label">
                            Address
                          </label>
                          <h1 name="address" className="CVCD-h4">
                            {user?.userid?.userAddress}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Detail */}
                  <div className="CVCD-MainDiv-ContainDiv-Content-Card">
                    <h1 className="CVCD-h5">Nominee Information</h1>

                    <div className="CVCD-MainDiv-ContainDiv-Content-Card-Contain">
                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left">
                        <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left-Details">
                          <div className="CVCD-textcontain">
                            <label for="email" className="CVCD-label">
                              Nominee Information
                            </label>
                            <h1 name="email" className="CVCD-h4">
                              {user?.nomineename}
                            </h1>
                          </div>

                          <div className="CVCD-textcontain">
                            <label for="email" className="CVCD-label">
                              Relation Ship
                            </label>
                            <h1 name="email" className="CVCD-h4">
                              {user?.nomineerelationship}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Right">
                        <div className="CVCD-textcontain">
                          <label for="email" className="CVCD-label">
                            Contact
                          </label>
                          <h1 name="email" className="CVCD-h4">
                            {user?.nomineecontactnumber}
                          </h1>
                        </div>

                        <div className="CVCD-textcontain">
                          <label htmlFor="dl" className="CVCD-label">
                            Address
                          </label>
                          <h6>{user?.nomineeaddress}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CVCD-MainDiv-ContainDiv-Content-Card-Upper mt-5">
                  {/* Personal Details */}
                  <div className="CVCD-MainDiv-ContainDiv-Content-Card">
                    <h1 className="CVCD-h5">Health Information</h1>

                    <div className="CVCD-MainDiv-ContainDiv-Content-Card-Contain">
                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left">
                        <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left-Details">
                          <div className="CVCD-textcontain">
                            <label for="email" className="CVCD-label">
                              Pre-existing Conditions
                            </label>
                            <h1 name="email" className="CVCD-h4">
                              {user?.existingconditions}
                            </h1>
                          </div>

                          <div className="CVCD-textcontain">
                            <label for="email" className="CVCD-label">
                              Smoking
                            </label>
                            <h1 name="email" className="CVCD-h4">
                              {user?.smoking}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Right">
                        <div className="CVCD-textcontain">
                          <label for="Contact" className="CVCD-label">
                            Current Medication
                          </label>
                          <h1 name="Contact" className="CVCD-h4">
                            {user?.currentmedication}
                          </h1>
                        </div>

                        <div className="CVCD-textcontain">
                          <label for="address" className="CVCD-label">
                            Address
                          </label>
                          <h1 name="address" className="CVCD-h4">
                            {user?.userid?.userAddress}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Detail */}
                  <div className="CVCD-MainDiv-ContainDiv-Content-Card">
                    <h1 className="CVCD-h5">Documentation</h1>

                    <div className="CVCD-MainDiv-ContainDiv-Content-Card-Contain">
                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left">
                        <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left-Details">
                          <div className="CVCD-textcontain">
                            <label for="passport" className="CVCD-label">
                              ID Proof
                            </label>
                            {user?.idproof?.filename ? (
                              <h1
                                name="idproof"
                                className="CVCD-h4 text-decoration-underline"
                                onClick={() =>
                                  openFileInNewTab(user?.idproof?.filename)
                                }
                              >
                                View File
                              </h1>
                            ) : (
                              <h1
                                name="idproof"
                                className="CVCD-h4"
                                style={{ color: "gray" }}
                              >
                                No file found
                              </h1>
                            )}{" "}
                          </div>
                          <div className="CVCD-textcontain">
                            <label for="passport" className="CVCD-label">
                              Income Proof
                            </label>
                            {user?.incomeproof?.filename ? (
                              <h1
                                name="incomeproof"
                                className="CVCD-h4 text-decoration-underline"
                                onClick={() =>
                                  openFileInNewTab(user?.incomeproof?.filename)
                                }
                              >
                                View File
                              </h1>
                            ) : (
                              <h1
                                name="passport"
                                className="CVCD-h4"
                                style={{ color: "gray" }}
                              >
                                No file found
                              </h1>
                            )}{" "}
                          </div>
                        </div>
                      </div>

                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Right">
                        <div className="CVCD-textcontain">
                          <label for="passport" className="CVCD-label">
                            Medical Report
                          </label>
                          {user?.medicalreport?.filename ? (
                            <h1
                              name="medicalreport"
                              className="CVCD-h4 text-decoration-underline"
                              onClick={() =>
                                openFileInNewTab(user?.medicalreport?.filename)
                              }
                            >
                              View File
                            </h1>
                          ) : (
                            <h1
                              name="passport"
                              className="CVCD-h4"
                              style={{ color: "gray" }}
                            >
                              No file found
                            </h1>
                          )}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CVCD-MainDiv-ContainDiv-Content-Card-Upper mt-5">
                  {/* Personal Details */}
                  <div className="CVCD-MainDiv-ContainDiv-Content-Card">
                    <h1 className="CVCD-h5">Policy Details</h1>

                    <div className="CVCD-MainDiv-ContainDiv-Content-Card-Contain">
                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left">
                        <div className="CVCD-MainDiv-ContainDiv-Content-Card-Left-Details">
                          <div className="CVCD-textcontain">
                            <label for="insuranceplan" className="CVCD-label">
                              Insurance Plan
                            </label>
                            <h1 name="insuranceplan" className="CVCD-h4">
                              {user?.planid?.planname}
                            </h1>
                          </div>

                          <div className="CVCD-textcontain">
                            <label
                              for="paymentfrequency"
                              className="CVCD-label"
                            >
                              Payment Frequency
                            </label>
                            <h1 name="paymentfrequency" className="CVCD-h4">
                              {user?.planid?.paymentfrequency}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div className="CVCD-MainDiv-ContainDiv-Content-Card-Right">
                        <div className="CVCD-textcontain">
                          <label for="coverageamount" className="CVCD-label">
                            Coverage Amount
                          </label>
                          <h1 name="coverageamount" className="CVCD-h4">
                            {user?.planid?.coverageamount}
                          </h1>
                        </div>

                        <div className="CVCD-textcontain">
                          <label for="policyterm" className="CVCD-label">
                            Policy Term
                          </label>
                          <h1 name="policyterm" className="CVCD-h4">
                            {user?.planid?.policyterm}
                          </h1>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {!user.insuranceverification && (
                            <div className="CVD-MainDiv-ContainDiv-Content-Card-Button">
                                <button className="CVD-button1" onClick={CancelbuttonOnClick}>
                                    Cancel
                                </button>
                                <button className="CVD-button2" onClick={VerifybuttonOnClick}>
                                    Verify
                                </button>
                            </div>
                        )}
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClerkViewInsuranceDetails;
