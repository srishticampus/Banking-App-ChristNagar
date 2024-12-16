import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import UserNavbar from "../User/UserNavbar";
import { useLocation, useNavigate } from "react-router-dom";

function CustomerLoanIdentity() {
  const [form, setForm] = useState({
    pancardNumber: "",
    panCardFile: null, // Store file object
    aadhaarNumber: "",
    aadhaarFile: null, // Store file object
    votersIDFile: null, // Store file object
    drivingLicenseFile: null, // Store file object
    passportFile: null, // Store file object
  });
  const navigate = useNavigate();
  const location = useLocation();
  const loanDetails = location.state?.loanDetails;
  const [errors, setErrors] = useState({});

  // Store field values
  const store = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input change
  };

  // Handle file uploads
  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) { // 5 MB limit
      setErrors({ ...errors, [fieldName]: "File size must be under 5 MB." });
    } else {
      setForm({ ...form, [fieldName]: file });
      setErrors({ ...errors, [fieldName]: "" });
    }
  };
  

  // Validate form fields
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!form.pancardNumber) {
      newErrors.pancardNumber = "PAN Card Number is mandatory.";
      isValid = false;
    } else if (form.pancardNumber.length !== 10) {
      newErrors.pancardNumber = "PAN Card Number must be 10 characters.";
      isValid = false;
    }

    if (!form.panCardFile) {
      newErrors.panCardFile = "PAN Card file is mandatory.";
      isValid = false;
    }

    if (!form.aadhaarNumber) {
      newErrors.aadhaarNumber = "Aadhaar Number is mandatory.";
      isValid = false;
    } else if (form.aadhaarNumber.length !== 12) {
      newErrors.aadhaarNumber = "Aadhaar Number must be 12 characters.";
      isValid = false;
    }

    if (!form.aadhaarFile) {
      newErrors.aadhaarFile = "Aadhaar file is mandatory.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleContinue = () => {
    if (validate()) {
      const plainData = {
        pancardNumber: form.pancardNumber,
        aadhaarNumber: form.aadhaarNumber,
        panCardFile: form.panCardFile ? form.panCardFile.name : null, // Pass file name or any metadata
        aadhaarFile: form.aadhaarFile ? form.aadhaarFile.name : null,
        votersIDFile: form.votersIDFile ? form.votersIDFile.name : null,
        drivingLicenseFile: form.drivingLicenseFile
          ? form.drivingLicenseFile.name
          : null,
        passportFile: form.passportFile ? form.passportFile.name : null,
      };
  
      const combinedData = {
        ...loanDetails,
        ...plainData, // Include plain object instead of FormData
      };
  
      console.log("Combined Data to Send:", combinedData);
      navigate("/user/applyloanEmpdetails", { state: { combinedData } });
    } else {
      console.log("Validation failed:", errors);
      alert("Please fix the errors before continuing.");
    }
  };
  
  useEffect(() => {
    console.log("Received Loan Details:", loanDetails);
  }, [loanDetails]);

  return (
    <div className="CustLoanIdentity">
      <UserNavbar />
      {/* Progress Bar */}
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <div className="progress-bar-container">
              <div>
                <div className="circle active">1</div>
                <span className="progress-text">Personal Details</span>
              </div>

              <div className="profildetaildline"></div>
              <div>
                <div className="circle active">2</div>
                <span className="progress-text">Identity</span>
              </div>

              <div className="profildetaildline"></div>

              <div>
                <div className="circle">3</div>
                <span className="progress-text">Employment Details</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Form Section */}
      <center>
        <Card className="CustLoanIdentityhorizontal-card">
          <Card.Body>
            <Container>
              <h5 className="CustLoanIdentityHeader">Identity</h5>
              <Row>
                <Col>
                  <div className="form-group">
                    <div>PAN Card Number</div>
                    <input
                      className="customerLoanIdentityformcontrol"
                      type="text"
                      name="pancardNumber"
                      value={form.pancardNumber}
                      onChange={store}
                    />
                    {errors.pancardNumber && (
                      <span className="text-danger">{errors.pancardNumber}</span>
                    )}
                    <div>PAN Card</div>
                    <div className="input-upload">
                      <input
                        type="file"
                        className="customerLoanIdentityformcontrol"
                        onChange={(e) => handleFileUpload(e, "panCardFile")}
                      />
                      <MdOutlineFileUpload className="upload-icon" />
                    </div>
                    {errors.panCardFile && (
                      <span className="text-danger">{errors.panCardFile}</span>
                    )}
                    <div>Aadhaar Number</div>
                    <input
                      className="customerLoanIdentityformcontrol"
                      type="text"
                      name="aadhaarNumber"
                      value={form.aadhaarNumber}
                      onChange={store}
                    />
                    {errors.aadhaarNumber && (
                      <span className="text-danger">
                        {errors.aadhaarNumber}
                      </span>
                    )}
                    <div>Aadhaar</div>
                    <div className="input-upload">
                      <input
                        type="file"
                        className="customerLoanIdentityformcontrol"
                        onChange={(e) => handleFileUpload(e, "aadhaarFile")}
                      />
                      <MdOutlineFileUpload className="upload-icon" />
                    </div>
                    {errors.aadhaarFile && (
                      <span className="text-danger">{errors.aadhaarFile}</span>
                    )}
                  </div>
                </Col>
                <Col>
                  <div className="form-group">
                    <div>Voter's ID</div>
                    <div className="input-upload">
                      <input
                        type="file"
                        className="customerLoanIdentityformcontrol"
                        onChange={(e) => handleFileUpload(e, "votersIDFile")}
                      />
                      <MdOutlineFileUpload className="upload-icon" />
                    </div>
                    <div>Driving License</div>
                    <div className="input-upload">
                      <input
                        type="file"
                        className="customerLoanIdentityformcontrol"
                        onChange={(e) =>
                          handleFileUpload(e, "drivingLicenseFile")
                        }
                      />
                      <MdOutlineFileUpload className="upload-icon" />
                    </div>
                    <div>Passport</div>
                    <div className="input-upload">
                      <input
                        type="file"
                        className="customerLoanIdentityformcontrol"
                        onChange={(e) => handleFileUpload(e, "passportFile")}
                      />
                      <MdOutlineFileUpload className="upload-icon" />
                    </div>
                  </div>
                </Col>
              </Row>
              <button id="CustomerLoanIdentity" onClick={handleContinue}>
                Continue
              </button>
              <FaLongArrowAltRight className="CustLoanIconArrow" />
            </Container>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default CustomerLoanIdentity;
