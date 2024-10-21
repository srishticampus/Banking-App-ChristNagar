import AdminSidebar from "./AdminSidebar";
import addbtn from "../../Asserts/Images/login button.png";
import React, { useEffect, useState } from "react";
import axiosMultipartInstance from "../../apis/axiosMultipartInstance";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../apis/axiosinstance";

function AdminEditAmanagerData() {
  const navigate = useNavigate();

  const [managerdata, setManagerdata] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    qualification: "",
    dob: "",
    address: "",
    destination: "",
    idproof: null, // For file inputs, we set the initial state as null
    profile: null, // For file inputs, we set the initial state as null
    dateofjoining: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    qualification: "",
    dob: "",
    address: "",
    destination: "",
    idproof: "",
    profile: "",
    dateofjoining: "",
  });

  const [profileFileName, setProfileFileName] = useState("");
  const [idproofFileName, setIdproofFileName] = useState("");

  const [error, setError] = useState(null);
  const [errorVideo, setErrorVideo] = useState(null);

  const [manager, setManager] = useState({});
  const { managerid } = useParams();

  const getAData = () => {
    axiosInstance
      .get(`/view_a_manger/${managerid}`)
      .then((res) => {
        setManager(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAData();
  }, [managerid]); // Ensure this is called only when managerid changes.

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerdata({ ...managerdata, [name]: value });
  };

  const handleFileChange = (e) => {
    const profile = e.target.files[0];
    if (!profile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setError("Only JPG, JPEG, PNG, and GIF files are allowed");
      return;
    }
    setError(null);
    setManagerdata({ ...managerdata, profile });
    setProfileFileName(profile.name);
  };

  const handleidproofChange = (e) => {
    const idproof = e.target.files[0];
    if (!idproof.name.match(/\.(pdf|jpg|jpeg|png)$/i)) {
      setErrorVideo("Only PDF, JPG, JPEG, and PNG files are allowed");
      return;
    }
    setErrorVideo(null); // Clear any previous errors if the file is valid
    setManagerdata({ ...managerdata, idproof });
    setIdproofFileName(idproof.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;
    let errors = {};

    if (!managerdata.name.trim()) {
      formValid = false;
      errors.name = "Name is required";
    }
    if (!managerdata.email.trim()) {
      formValid = false;
      errors.email = "Email is required";
    } else if (!managerdata.email.endsWith("@gmail.com")) {
      formValid = false;
      errors.email = "Email must be a valid Gmail address";
    }
    if (!managerdata.contact.trim()) {
      formValid = false;
      errors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(managerdata.contact)) {
      formValid = false;
      errors.contact = "Enter a valid 10-digit contact number";
    }
    if (!managerdata.password.trim()) {
      formValid = false;
      errors.password = "Password is required";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/.test(
        managerdata.password
      )
    ) {
      formValid = false;
      errors.password =
        "Password should be at least 6 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character";
    }
    if (!managerdata.qualification.trim()) {
      formValid = false;
      errors.qualification = "Qualification is required";
    }

    if (!managerdata.dob.trim()) {
      formValid = false;
      errors.dob = "Date of birth is required";
    }
    if (!managerdata.destination.trim()) {
      formValid = false;
      errors.destination = "Destination is required";
    }
    if (!managerdata.address.trim()) {
      formValid = false;
      errors.address = "Address is required";
    }
    if (!managerdata.profile) {
      formValid = false;
      errors.profile = "Profile picture is required";
    }
    if (!managerdata.idproof) {
      formValid = false;
      errors.idproof = "ID proof is required";
    }

    setErrors(errors);

    if (formValid) {
      const formData = new FormData();
      formData.append("name", managerdata.name);
      formData.append("email", managerdata.email);
      formData.append("contact", managerdata.contact);
      formData.append("password", managerdata.password);
      formData.append("qualification", managerdata.qualification);
      formData.append("dob", managerdata.dob);
      formData.append("destination", managerdata.destination);
      formData.append("address", managerdata.address);
      formData.append("dateofjoining", managerdata.dateofjoining);
      formData.append("files", managerdata.idproof);
      formData.append("files", managerdata.profile);

      try {
        const response = await axiosMultipartInstance.post(
          "/editManagerById"+managerid,
          formData
        );
        if (response.status === 200) {
          alert(response.data.msg);
          navigate("/admin/viewmanages"); // Navigate to the managers list page after adding
        }
      } catch (error) {
        console.error("Error:", error);
        let msg = error?.response?.data?.msg || "Error occurred";
        alert(msg);
      }
    } else {
      console.log("Form is not valid", formValid);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9" id="common">
          <h3 className="mt-4 mb-4">
            <span className="dashboardheadcolor">Edit </span> MANAGER
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-5">
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={managerdata.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contact"
                    value={managerdata.contact}
                    onChange={handleInputChange}
                  />
                  {errors.contact && (
                    <div className="text-danger">{errors.contact}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Qualification</label>
                  <input
                    type="text"
                    className="form-control"
                    name="qualification"
                    value={managerdata.qualification}
                    onChange={handleInputChange}
                  />
                  {errors.qualification && (
                    <div className="text-danger">{errors.qualification}</div>
                  )}
                </div>
              </div>
              <div className="col-5">
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={managerdata.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={managerdata.dob}
                    onChange={handleInputChange}
                  />
                  {errors.dob && (
                    <div className="text-danger">{errors.dob}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Destination</label>
                  <input
                    type="text"
                    className="form-control"
                    name="destination"
                    value={managerdata.destination}
                    onChange={handleInputChange}
                  />
                  {errors.destination && (
                    <div className="text-danger">{errors.destination}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={managerdata.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-5">
                <div className="mb-3">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={managerdata.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && (
                    <div className="text-danger">{errors.address}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Date of Joining</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateofjoining"
                    value={managerdata.dateofjoining}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="col-5">
                <div className="mb-3">
                  <label>ID Proof</label>
                  <input
                    className="form-control"
                    type="file"
                    accept="application/pdf, image/*"
                    name="idproof"
                    onChange={handleidproofChange}
                  />
                  {idproofFileName && <p>{idproofFileName}</p>}
                  {errors.idproof && (
                    <div className="text-danger">{errors.idproof}</div>
                  )}
                  {errorVideo && (
                    <div className="text-danger">{errorVideo}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label>Profile Picture</label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    name="profile"
                    onChange={handleFileChange}
                  />
                  {profileFileName && <p>{profileFileName}</p>}
                  {errors.profile && (
                    <div className="text-danger">{errors.profile}</div>
                  )}
                  {error && <div className="text-danger">{error}</div>}
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              <img className="img-fluid" src={addbtn} alt="Submit" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEditAmanagerData;
