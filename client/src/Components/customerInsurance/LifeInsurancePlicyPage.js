import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import "../../Asserts/Styles/Loan.css";
import axiosInstance from "../../apis/axiosinstance";
import { useLocation, useNavigate } from "react-router-dom";
import UserNavbar from "../User/UserNavbar";
import LandingFooter from "../Main/LandingFooter";

function LifeInsurancePlicyPage() {

  const [data, setData] = useState({});
  const location = useLocation();
  const loanDetails = location.state;

  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userid");

      const response = await axiosInstance.get(`/view_a_user/${userId}`);
      console.log("User Data:", response.data);
      setData(response.data.data);

    } catch (error) {
      console.error("Error fetching user data:", error);
    }}
    
  useEffect(() => {
    console.log("Received Loan Details:", loanDetails)
    fetchUserData()
    },[])

        const navigate = useNavigate();
  const update = () => {
    navigate("/user/applyloanIdentity", { state: { loanDetails } });
  };

return (
    <div className="CustLoanPersonalDetails">
    <UserNavbar/>
      {/* Progress Bar */}
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <div className="progress-bar-container">
              <div>
                {" "}
                <div className="circle active">1</div>
                <span className="progress-text">Personal Details</span>
              </div>

              <div className="profildetaildline"></div>
              <div>
                {" "}
                <div className="circle">2</div>
                <span className="progress-text">Identity</span>
              </div>

              <div className="profildetaildline"></div>

              <div>
                {" "}
                <div className="circle">3</div>
                <span className="progress-text">Employment Details</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Form Section */}
      <Container>
        <Card
          className="CustLoanPersonalDetailshorizontal-card mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <Card.Body>
            <h5 className="text-center" style={{ color: "#9A00FF" }}>
            Policy Details
            </h5>
            <Row>
              {/* Left Column */}
              <Col md={6}>
                <div className="mb-4">
                  <label>Name</label>
                  <input
                    className="form-control CustLoanPersonalDetailsformcontrol"
                    type="text"
                    name="Name"
                    placeholder={data?.username}
                  />
                </div>

              </Col>
               <Col md={6}>
                <div className="mb-4">
                  <label>Contact Number</label>
                  <input
                    className="form-control CustLoanPersonalDetailsformcontrol"
                    type="text"
                    name="Contact"
                    placeholder={data?.userContact}
                  />
                </div>
                              </Col>
            </Row>

            <h5 className="text-center" style={{ color: "#9A00FF" }}>
            Nominee Information
            </h5>
            {/* Continue Button */}
            <div className="text-center">
              <Button
                id="CustLoanPersonalDetailsButton"
                className="d-inline-flex align-items-center"
                onClick={update}
              >
                Continue
                <FaLongArrowAltRight className="ms-2" />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <LandingFooter/>
    </div>
  );
              }

export default LifeInsurancePlicyPage;
