import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import imgurl from '../../apis/imgURL';
import axiosInstance from '../../apis/axiosinstance';
import '../../Asserts/Styles/UserCreditApplicationDetails.css'

function UserCreditApplicationDetails() {

    const [user, setUser] = useState(null);
    const { data } = useParams();

    const openFileInNewTab = (filePath) => {
        window.open(`${imgurl}/${filePath}`, "_blank");
    };

    const GetUserData = async () => {
        try {
            const response = await axiosInstance.post(
                `/viewonecreditapplication/${data}`
            );
            if (Array.isArray(response.data.data) && response.data.data.length > 0) {
                console.log("response-response", response);
                setUser(response.data.data[0]);
            } else {
                console.error("Unexpected API response structure.");
            }
            console.log("API Response:", response.data.data);
        } catch (error) {
            alert("Failed to fetch user details. Please try again.");
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        GetUserData();
    }, []);

    if (!user) {
        return <div>Loading user details...</div>;
    }

    return (
        <div className="UCAD-MainDiv">
            {console.log("user", user)}

            <div className="UCAD-MainDiv-ContainDiv">

                <div className="UCAD-MainDiv-ContainDiv-ContentDiv">
                    <div className="UCAD-MainDiv-ContainDiv-HeaderDiv">
                        <h1 className="UCAD-h1">Application Details</h1>
                    </div>

                    <div className="UCAD-MainDiv-ContainDiv-Content">
                        <div>
                            <img
                                className="UCAD-profile-img"
                                src={`${imgurl}/${user?.userid?.userPicture?.originalname}`}
                                alt="PROFILE"
                            />
                        </div>

                        <div>
                            <h1 className="UCAD-h3">{user?.userid?.username}</h1>
                        </div>

                        {/* Personal Details */}
                        <div className="UCAD-MainDiv-ContainDiv-Content-Card-Upper">
                            <div className="UCAD-MainDiv-ContainDiv-Content-Card">
                                <h1 className="UCAD-h5">Personal Details</h1>

                                <div className="UCAD-MainDiv-ContainDiv-Content-Card-Contain">
                                    <div className="UCAD-MainDiv-ContainDiv-Content-Card-Left">
                                        <div className="UCAD-MainDiv-ContainDiv-Content-Card-Left-Details">
                                            <div className="UCAD-textcontain">
                                                <label for="email" className="UCAD-label">
                                                    E-mail
                                                </label>
                                                <h1 name="email" className="UCAD-h4">
                                                    {user?.userid?.userMail}
                                                </h1>
                                            </div>

                                            <div className="UCAD-textcontain">
                                                <label for="DOB" className="UCAD-label">
                                                    Date Of Birth
                                                </label>
                                                <h1 name="DOB" className="UCAD-h4">
                                                    {new Date(user?.userid?.userDate).toLocaleDateString(
                                                        "en-GB"
                                                    )}
                                                </h1>
                                            </div>

                                            <div className="UCAD-textcontain">
                                                <label for="email" className="UCAD-label">
                                                    PAN Card Number
                                                </label>
                                                <h1 name="email" className="UCAD-h4">
                                                    {user?.pancardnumber}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="UCAD-MainDiv-ContainDiv-Content-Card-Right">
                                        <div className="UCAD-textcontain">
                                            <label for="Contact" className="UCAD-label">
                                                Contact
                                            </label>
                                            <h1 name="Contact" className="UCAD-h4">
                                                {user?.userid?.userContact}
                                            </h1>
                                        </div>

                                        <div className="UCAD-textcontain">
                                            <label for="address" className="UCAD-label">
                                                Address
                                            </label>
                                            <h1 name="address" className="UCAD-h4">
                                                {user?.userid?.userAddress}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Detail */}
                            <div className="UCAD-MainDiv-ContainDiv-Content-Card">
                                <h1 className="UCAD-h5">Card Details</h1>

                                <div className="UCAD-MainDiv-ContainDiv-Content-Card-Contain">
                                    <div className="UCAD-MainDiv-ContainDiv-Content-Card-Left">
                                        <div className="UCAD-MainDiv-ContainDiv-Content-Card-Left-Details">

                                            <div className="UCAD-textcontain">
                                                <label for="email" className="UCAD-label">
                                                    Card Type
                                                </label>
                                                <h1 name="email" className="UCAD-h4">
                                                    {user?.cardtype}
                                                </h1>
                                            </div>

                                            <div className="UCAD-textcontain">
                                                <label for="email" className="UCAD-label">
                                                    Salary
                                                </label>
                                                <h1 name="email" className="UCAD-h4">
                                                    ₹{user?.salary}/-
                                                </h1>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="UCAD-MainDiv-ContainDiv-Content-Card-Right">
                                        <div className="UCAD-textcontain">
                                            <label for="email" className="UCAD-label">
                                                Credit Card Limit
                                            </label>
                                            <h1 name="email" className="UCAD-h4">
                                                ₹{user?.creditcardlimit}/-
                                            </h1>
                                        </div>

                                        <div className="UCAD-textcontain">
                                            <label htmlFor="dl" className="UCAD-label">
                                                ID Proof
                                            </label>
                                            {user?.drivinglicensefile?.filename ? (
                                                <h1
                                                    name="dl"
                                                    className="UCAD-h4"
                                                    onClick={() =>
                                                        openFileInNewTab(user?.idproof?.filename)
                                                    }
                                                >
                                                    View File
                                                </h1>
                                            ) : (
                                                <h1
                                                    name="dl"
                                                    className="UCAD-h4"
                                                    style={{ color: "gray" }}
                                                >
                                                    No file found
                                                </h1>
                                            )}
                                        </div>

                                        <div className="UCAD-textcontain">
                                            <label for="passport" className="UCAD-label">
                                                Income Proof
                                            </label>
                                            {user?.passportfile?.filename ? (
                                                <h1
                                                    name="passport"
                                                    className="UCAD-h4"
                                                    onClick={() =>
                                                        openFileInNewTab(user?.incomeproof?.filename)
                                                    }
                                                >
                                                    View File
                                                </h1>
                                            ) : (
                                                <h1
                                                    name="passport"
                                                    className="UCAD-h4"
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
                    </div>
                </div>
            </div>
        </div>
    );


}

export default UserCreditApplicationDetails