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

    const [user, setUser] = useState(null)
    const applayref = useRef();
    const navigate = useNavigate()

    const [loanDetails, setLoanDetails] = useState({
        loanType: "",
        loanAmount: "",
        loanPurpose: "",
    })


    const handleLoanApply = () => {
        applayref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const GetUserData = async () => {

        const data = localStorage.getItem("userid");

        try {
            const response = await axiosInstance.post(`/viewauserloan/${data}`);
            console.log('resp-resp', response);
            if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                setUser(response.data.data);
            } else {
                console.error("Unexpected API response structure.");
                setUser(null)
            }
            console.log('API resp', response.data.data)
        }
        catch (error) {
            console.error('Error fetching user data', error);
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoanDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/user/applyloanpersonaldetail', { state: loanDetails })
        console.log("Loan Details Submitted: ", loanDetails);
        // Add your logic to send loanDetails to the backend
    };

    useEffect(() => {
        GetUserData();
    }, [])

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
            <div  className="custloanapplysection2">
                <br />
                <br />

                {user && (
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
                                                    Loan Type
                                                </label>
                                            </th>
                                            <th className="custcreditstatussect2formth">
                                                <label className="custcreditstatussect2datalabel">
                                                    Amount Required
                                                </label>
                                            </th>


                                        </tr>

                                        {user.length > 0 ? (
                                            user.map((data, index) => {

                                                return (

                                                    <tr key={index}>
                                                        <td className="custcreditstatussect2formtd">
                                                            {data.userid.username}
                                                        </td>
                                                        <td className="custcreditstatussect2formtd">
                                                            {data.userid.userNumber}
                                                        </td>
                                                        <td className="custcreditstatussect2formtd">
                                                                {data.userid.userMail}
                                                        </td>
                                                        <td className="custcreditstatussect2formtd">
                                                            {data.loantype}
                                                        </td>
                                                        <td className="custcreditstatussect2formtd">
                                                            ₹{data.loanamount}/-
                                                        </td>
                                                        <td className="custcreditstatussect2formthonerow">

                                                            <p className="CAL-p"><GoDotFill className="custcreditstatusradiobtn" />{data.loanapproval}</p>

                                                        </td>
                                                        <td className="custcreditstatussect2formthonerow">

                                                            <p className="CAL-p-link" onClick={() => navigate(`/user/viewloandetails/${data._id}`)}>View More</p>

                                                        </td>
                                                    </tr>)

                                            })
                                        ) : (
                                            <tr>
                                                <td><p className=' text-center text-danger'>No Data Found</p></td>
                                            </tr>
                                        )}
                                    </table>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />
                    </div>
                )}

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
                            <Form onSubmit={handleSubmit}>                <div className="row">
                                <div className="col-6">
                                    <Form.Group
                                        className=""
                                        controlId="formBasicText"
                                        id="custloanapplytypebox"
                                    >
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
                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicText"
                                        id="custloanapplyamtrequiredbox"
                                    >
                                        <Form.Label>Amount Required</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Rs.0/-"
                                            name="loanAmount"
                                            value={loanDetails.loanAmount}
                                            onChange={handleChange}
                                        />                    </Form.Group>
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
                                            name="loanPurpose"
                                            value={loanDetails.loanPurpose}
                                            onChange={handleChange}
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
            <LandingFooter/>
        </div>
    );
}

export default CustomerApplyLoan;
