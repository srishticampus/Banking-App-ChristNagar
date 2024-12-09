import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { MdOutlineFileUpload } from "react-icons/md";
import UserNavbar from "../User/UserNavbar";
import { useLocation } from "react-router-dom";

function CustomerLoanEmployeDetails() {
  const location = useLocation();
  const combinedData = location.state?.combinedData;

  console.log("Received Data in Employment Details:", combinedData);

  const [form, setForm] = useState({
    nameofemployer: "",
    employercontact: "",
    workexp: "",
    salary: "",
    position: "",
    salaryslip: null, // File upload
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setForm((prevForm) => ({ ...prevForm, [name]: file }));
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("nameofemployer", form.nameofemployer);
    formData.append("employercontact", form.employercontact);
    formData.append("workexp", form.workexp);
    formData.append("salary", form.salary);
    formData.append("position", form.position);
    if (form.salaryslip) formData.append("salaryslip", form.salaryslip);

    // Include previously received data
    if (combinedData) {
      Object.entries(combinedData).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }

    // Logging the FormData contents for debugging
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    // You can send `formData` to the server here
  };

  return (
    <div>
      <div className="CustLoanEmplDetails">
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
                  <div className="circle active">3</div>
                  <span className="progress-text">Employment Details</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <center>
          <Card
            className="CustLoanEmplDetailshorizontalcard"
            style={{ width: "900px", height: "400px" }}
          >
            <Card.Body>
              <div className="CustLoanEmplDetailscustomerform">
                <Container className="CustLoanEmplDetailsCustcontainer1">
                  <h5 style={{ color: "#9A00FF" }}>Employment Details</h5>
                  <Row>
                    <Col>
                      <div className="CustLoanEmplDetailsformstyle">
                        <Container className="CustLoanEmplDetailscontainer2">
                          <Row>
                            <Col>
                              <label>Name Of Employer</label>
                              <input
                                className="CustLoanEmplDetailsformcontrol"
                                type="text"
                                name="nameofemployer"
                                value={form.nameofemployer}
                                onChange={handleChange}
                              />
                              <br />
                              <label>Work Experience</label>
                              <input
                                type="number"
                                name="workexp"
                                value={form.workexp}
                                onChange={handleChange}
                                className="CustLoanEmplDetailsformcontrol"
                              />
                              <label>Position</label>
                              <input
                                type="text"
                                name="position"
                                value={form.position}
                                onChange={handleChange}
                                className="CustLoanEmplDetailsformcontrol"
                              />
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <Container className="container2">
                          <Row>
                            <Col>
                              <label>Employer Contact Number</label>
                              <input
                                type="number"
                                name="employercontact"
                                value={form.employercontact}
                                onChange={handleChange}
                                className="CustLoanEmplDetailsformcontrol"
                              />
                              <br />
                              <label>Salary</label>
                              <input
                                type="number"
                                name="salary"
                                value={form.salary}
                                onChange={handleChange}
                                className="CustLoanEmplDetailsformcontrol"
                              />
                              <label>Salary Slip</label>
                              <input
                                type="file"
                                name="salaryslip"
                                onChange={handleFileChange}
                                className="CustLoanEmplDetailsformcontrol"
                              />
                              <div className="CustLoanEmplDetailsCustIcon">
                                <MdOutlineFileUpload />
                              </div>
                            </Col>
                            <center>
                              <button id="Employ" onClick={handleSubmit}>
                                Confirm
                              </button>
                            </center>
                          </Row>
                        </Container>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Card.Body>
          </Card>
        </center>
      </div>
    </div>
  );
}

export default CustomerLoanEmployeDetails;
