import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      if (response.status === 200) {
        setSuccessMessage("Sign up successful! You can now log in.");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Failed to sign up. Please try again."
      );
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row signup-card shadow-lg w-100">
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Eiffel_Tower_at_Night_in_Paris.jpg"
            alt="SignUp Visual"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-5">
          <h2 className="text-center mb-4">SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="signup-form-group mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div className="signup-form-group mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div className="signup-form-group mb-4 position-relative">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="password-toggle-icon position-absolute"
                onClick={togglePasswordVisibility}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>

            {/* Confirm Password Input */}
            <div className="signup-form-group mb-4 position-relative">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="password-toggle-icon position-absolute"
                onClick={toggleConfirmPasswordVisibility}
              >
                <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>

            {/* Error and Success Messages */}
            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
            {successMessage && <p className="text-success text-center">{successMessage}</p>}

            {/* Sign Up Button */}
            <button className="btn btn-primary w-100 mb-3 signup-btn" type="submit">
              SIGN UP
            </button>

            {/* Login Link */}
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
