import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdOutlineFileUpload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import './CustLoanDetails.css';

function CustomerLoanpersonDetail() {
    const [form, setForm] = useState({
        Email: "",
        Contact: "",
        Address: "",
        Gender: "",
        Dateofbirth: ""
    });

    const store = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const update = (e) => {
        console.log(form);
    };

    return (
        <div className='CustLoanPersonalDetails'>
            <div className="CustLoanPersonalDetailscirclecontainer">
                <div className="CustLoanPersonalDetailscircle1">1</div>
                <input className='CustLoanPersonalDetailsInput1'/>
                <div className="CustLoanPersonalDetailscircle2">2</div>
                <input  className='CustLoanPersonalDetailsInput2'/>
                <div className="CustLoanPersonalDetailscircle3">3</div>
                
            </div>


            <center>
                <Card className="CustLoanPersonalDetailshorizontal-card" style={{ width: '900px', height: '400px' }}>
                    <Card.Body>
                        <div className="customerform">
                            <Container className="CustLoanPersonalDetailsCustcontainer1">
                                <h5 style={{ color: "#9A00FF" }}>Personal Details</h5>
                                <Row>
                                    <Col>
                                        <div className="CustLoanPersonalDetailsformstyle">
                                            <Container className="CustLoanPersonalDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                        <label >Name</label>
                                                        <input className='CustLoanPersonalDetailsformcontrol' type="text" name="Name" onChange={store} /><br />
                                                        <label>Gender</label><br />
                                                        <label>
                                                            <input type="radio" name="gender" value="male" /> Male
                                                        </label>&nbsp;&nbsp;&nbsp;
                                                        <label>
                                                            <input type="radio" name="gender" value="female" /> Female
                                                        </label>&nbsp;&nbsp;&nbsp;
                                                        <label>
                                                            <input type="radio" name="gender" value="other" /> Other
                                                        </label><br /><br /><br />
                                                        <div className='CustLoanPersonalDetailsDate'>
                                                            <label>Date Of Birth</label>
                                                            <input type="date" name="date" onChange={store} className='CustLoanPersonalDetailsformcontrol' />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="CustLoanPersonalDetailsformstyle">
                                            <Container className="CustLoanPersonalDetailscontainer2">
                                                <Row>
                                                    <Col>
                                                        <label>Phone Number</label><br />
                                                        <input className='CustLoanPersonalDetailsformcontrol' type="text" name="Number" onChange={store} /><br />
                                                        <label >Address</label><br />
                                                        <input className='CustLoanPersonalDetailsformcontrol' type="text" name="address" onChange={store} /><br />
                                                        <label >Profile Picture</label>
                                                        <input type="text" name="profile" placeholder='Upload File' onChange={store} className='CustLoanPersonalDetailsformcontrol' />
                                                        <div className='CustLoanPersonalDetailsIcon'>
                                                            <MdOutlineFileUpload />
                                                        </div>
                                                    </Col>
                                                    <center>
                                                        <button id='CustLoanPersonalDetailsButton'>Continue</button>
                                                        <div className='CustLoanPersonalDetailsArrow'>
                                                            <FaLongArrowAltRight />
                                                        </div>
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
    );
}

export default CustomerLoanpersonDetail;
