import React, { useEffect, useState } from "react";
import axiosInstance from "../../apis/axiosinstance";
import imgurl from "../../apis/imgURL";
import { useNavigate, useParams } from "react-router-dom";
import '../../Asserts/Styles/ManagerViewLoanDetails.css'
import ManagerSideBar from "./ManagerSidebar";

function ManagerViewLoanDetails() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { data } = useParams();

    const GetUserData = async () => {
        try {
            const response = await axiosInstance.post(`/viewonenonapprovedloan/${data}`);
            if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                setUser(response.data.data[0]);
            } else {
                console.error("Unexpected API response structure.");
            }
            console.log("API Response:", response.data.data);
        } catch (error) {
            // alert("Failed to fetch user details. Please try again.");
            console.error("Error fetching user data:", error);
        }
    };

    const CancelbuttonOnClick = () => {

        navigate("/manager/managermanageloan");

    }

    const VerifybuttonOnClick = async () => {
        try {
            await axiosInstance.post(`/approveloan/${user._id}`);
            alert("Loan approved Successfully");
            navigate("/manager/managermanageloan");
        } catch (error) {
            console.error("Error verifying loan:", error);
        }
    };


    useEffect(() => {
        GetUserData();
    }, [data]);

    if (!user) {
        return <div>Loading user details...</div>;
    }

    return (

        <div className="MVLD-MainDiv">

            {console.log('user', user)}
            {console.log('id', user._id)}

            <div className="MVLD-MainDiv-ContainDiv">

                <div>
                    <ManagerSideBar />
                </div>

                <div className="MVLD-MainDiv-ContainDiv-ContentDiv">

                    <div className="MVLD-MainDiv-ContainDiv-HeaderDiv">
                        <h1 className="MVLD-h1">View</h1>
                        <h1 className="MVLD-h2">Details</h1>
                    </div>

                    <div className="MVLD-MainDiv-ContainDiv-Content">

                        <div>
                            <img className="MVLD-profile-img" src={`${imgurl}/${user.userid.userPicture.originalname}`} alt="PROFILE" />
                        </div>

                        <div>
                            <h1 className="MVLD-h3">{user.userid.username}</h1>
                        </div>

                        <div className="MVLD-MainDiv-ContainDiv-Content-Card-Upper">

                            {/* Personal Details */}
                            <div className="MVLD-MainDiv-ContainDiv-Content-Card">

                                <h1 className="MVLD-h5">Personal Details</h1>

                                <div className="MVLD-MainDiv-ContainDiv-Content-Card-Contain">

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left">


                                        <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left-Details">

                                            <div classname='MVLD-txt-contain'>
                                                <label for="email" className="MVLD-label">E-mail</label>
                                                <h1 name='email' className="MVLD-h4">{user.userid.userMail}</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="DOB" className="MVLD-label">Date Of Birth</label>
                                                <h1 name='DOB' className="MVLD-h4">{new Date(user.userid.userDate).toLocaleDateString('en-GB')}</h1>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Right">

                                        <div classname='MVLD-txt-contain'>
                                            <label for="Contact" className="MVLD-label">Contact</label>
                                            <h1 name='Contact' className="MVLD-h4">{user.userid.userContact}</h1>
                                        </div>

                                        <div classname='MVLD-txt-contain'>
                                            <label for="address" className="MVLD-label">Address</label>
                                            <h1 name='address' className="MVLD-h4">{user.userid.userAddress}</h1>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Identity */}
                            <div className="MVLD-MainDiv-ContainDiv-Content-Card">

                                <h1 className="MVLD-h5">Identity</h1>

                                <div className="MVLD-MainDiv-ContainDiv-Content-Card-Contain">

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left">

                                        <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left-Details">

                                            <div classname='MVLD-txt-contain'>
                                                <label for="email" className="MVLD-label">PAN Card Number</label>
                                                <h1 name='email' className="MVLD-h4">{user.pancardnumber}</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="pancard" className="MVLD-label">PAN Card</label>
                                                <h1 name='pancard' className="MVLD-h4">View File</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="aadhaarnum" className="MVLD-label">Aadhaar Number</label>
                                                <h1 name='aadhaarnum' className="MVLD-h4">{user.aadharnumber}</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="aadhaarcard" className="MVLD-label">Aadhaar Card</label>
                                                <h1 name='aadhaarcard' className="MVLD-h4">View File</h1>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Right">

                                        <div classname='MVLD-txt-contain'>
                                            <label for="votersid" className="MVLD-label">Voter's ID</label>
                                            <h1 name='votersid' className="MVLD-h4">View File</h1>
                                        </div>

                                        <div classname='MVLD-txt-contain'>
                                            <label for="dl" className="MVLD-label">Driving License</label>
                                            <h1 name='dl' className="MVLD-h4">View File</h1>
                                        </div>

                                        <div classname='MVLD-txt-contain'>
                                            <label for="passport" className="MVLD-label">Passport</label>
                                            <h1 name='passport' className="MVLD-h4">View File</h1>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="MVLD-MainDiv-ContainDiv-Content-Card-Lower">

                            {/* Employment Details */}
                            <div className="MVLD-MainDiv-ContainDiv-Content-Card">

                                <h1 className="MVLD-h5">Employment Details</h1>

                                <div className="MVLD-MainDiv-ContainDiv-Content-Card-Contain">

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left">


                                        <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left-Details">

                                            <div classname='MVLD-txt-contain'>
                                                <label for="empname" className="MVLD-label">Name Of Employer</label>
                                                <h1 name='empname' className="MVLD-h4">{user.nameofemployer}</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="workexp" className="MVLD-label">Work Experience</label>
                                                <h1 name='workexp' className="MVLD-h4">{user.workexp} Years</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="Position" className="MVLD-label">Position</label>
                                                <h1 name='Position' className="MVLD-h4">{user.position}</h1>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Right">

                                        <div classname='MVLD-txt-contain'>
                                            <label for="Contact" className="MVLD-label">Contact</label>
                                            <h1 name='Contact' className="MVLD-h4">{user.employercontact}</h1>
                                        </div>

                                        <div classname='MVLD-txt-contain'>
                                            <label for="address" className="MVLD-label">Salary</label>
                                            <h1 name='address' className="MVLD-h4">₹{user.salary}/-</h1>
                                        </div>

                                        <div classname='MVLD-txt-contain'>
                                            <label for="salslip" className="MVLD-label">Salary Slip</label>
                                            <h1 name='salslip' className="MVLD-h4">View File</h1>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Loan Details */}
                            <div className="MVLD-MainDiv-ContainDiv-Content-Card">

                                <h1 className="MVLD-h5">Loan Details</h1>

                                <div className="MVLD-MainDiv-ContainDiv-Content-Card-Contain">

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left">

                                        <div className="MVLD-MainDiv-ContainDiv-Content-Card-Left-Details">

                                            <div classname='MVLD-txt-contain'>
                                                <label for="loantype" className="MVLD-label">Loan Type</label>
                                                <h1 name='loantype' className="MVLD-h4">{user.loantype}</h1>
                                            </div>

                                            <div classname='MVLD-txt-contain'>
                                                <label for="loanpurpose" className="MVLD-label">Purpose Of Loan</label>
                                                <h1 name='loanpurpose' className="MVLD-h4">{user.loanpurpose}</h1>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="MVLD-MainDiv-ContainDiv-Content-Card-Right">

                                        <div classname='MVLD-txt-contain'>
                                            <label for="loanamount" className="MVLD-label">Amount Required</label>
                                            <h1 name='loanamount' className="MVLD-h4">₹{user.loanamount}/-</h1>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        {!user.loanapproval && (
                            <div className="MVLD-MainDiv-ContainDiv-Content-Card-Button">
                                <button className="MVLD-button1" onClick={CancelbuttonOnClick}>Cancel</button>
                                <button className="MVLD-button2" onClick={VerifybuttonOnClick}>Approve</button>
                            </div>
                        )}
                    </div>

                </div>

            </div>

        </div>

    );

}

export default ManagerViewLoanDetails;
