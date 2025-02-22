import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../apis/axiosinstance";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function CustomerWaterBill() {
  const[isChecked,setIsChecked]=useState(false)
  const [formData, setFormData] = useState({
    billNumber: "",
    accountNumber: "",
    amount: "",
  });

  const [errors, setErrors] = useState({
    billNumber: "",
    accountNumber: "",
    amount: "",
  });
  const today = new Date();
  const navigate=useNavigate()
  const UserbackButton = () => {
    if (window.location.pathname === "/bank_app/user/homepage") {
      navigate("/user/homepage");
    } else {
      navigate(-1);
    }
  };
  let userid=localStorage.getItem("userid")
  const [loading, setLoading] = useState(false); // To show loading state
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (name, value) => {
    let error = "";
    if (name === "billNumber") {
      if (!value || value.length !== 8) {
        error = "Bill Number must be exactly 8 characters.";
      }
    } else if (name === "accountNumber") {
      if (!value || value.length !== 15) {
        error = "Account Number must be exactly 15 digits.";
      }
    } else if (name === "amount") {
      if (!value || value <= 0) {
        error = "Amount must be greater than 0.";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate the field and update errors
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async () => {
    const newErrors = {
      billNumber: validateField("billNumber", formData.billNumber),
      accountNumber: validateField("accountNumber", formData.accountNumber),
      amount: validateField("amount", formData.amount),
    };

    setErrors(newErrors);

    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      setLoading(true);
      setSuccessMessage("");
      setErrorMessage("");

      try {
        // Replace with your backend API URL
        const response = await axiosInstance.post("/payWaterBill", {
          userid: userid,
          billnumber: formData.billNumber,
          accountnumber: formData.accountNumber,
          amount: Number(formData.amount),
          month: today.getMonth() + 1,
          year: today.getFullYear(),
    
        });

        setSuccessMessage(response.data.msg);
        setFormData({
          billNumber: "",
          accountNumber: "",
          amount: "",
        });
      } catch (error) {
        console.error("Error submitting the form:", error);
        setErrorMessage(
          error.response?.data?.msg || "An error occurred. Please try again."
        );
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h3 className="fw-bold mb-4 water-bill">Water Bill</h3>
      </div>
      <div className="text-center">
        <h3 className="fw-bold mb-5 water-bill">Enter Account Details</h3>
      </div>

      <div className="row mb-4">
        <div className="col-md-12 bill-number text-center">
          <label className="form-label fw-bold">Bill Number</label>
          <input
            type="number"
            className={`form-control ${errors.billNumber ? "is-invalid" : ""}`}
            placeholder="Enter bill number"
            name="billNumber"
            value={formData.billNumber}
            onChange={handleChange}
          />
          {errors.billNumber && (
            <div className="invalid-feedback">{errors.billNumber}</div>
          )}
        </div>
      </div>

      <div className="row mb-3 d-flex justify-content-center">
        <div className="col-md-4">
          <label className="form-label fw-bold">Account Number</label>
          <input
            type="number"
            className={`form-control ${
              errors.accountNumber ? "is-invalid" : ""
            }`}
            placeholder="Enter Account number"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
          />
          {errors.accountNumber && (
            <div className="invalid-feedback">{errors.accountNumber}</div>
          )}
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold">Amount to be paid</label>
          <input
            type="number"
            className={`form-control ${errors.amount ? "is-invalid" : ""}`}
            placeholder="₹"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          {errors.amount && (
            <div className="invalid-feedback">{errors.amount}</div>
          )}
        </div>
        <p className="mt-4">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              ></input>{" "}
              &nbsp;I have read and agree to the Terms and Conditions of
              Unicread, including the payment policies and dispute resolution
              terms.
              <Link to="/user/termsandcondition" target="_blank">
                terms & conditions.
              </Link>{" "}
            </p>
      </div>

      <div className="text-center">
        <button
          className="btn paynow-btn rounded-pill mt-4"
          onClick={handleSubmit}
          disabled={!isChecked}
          
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
        {successMessage && (
          <div className="alert alert-success text-center">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
      </div>
    </div>
  );
}

export default CustomerWaterBill;
