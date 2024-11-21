import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:7001/login",
        formData
      );
      console.log(response);
      if (response.status === 200) {
        // Save token (if needed)
        localStorage.setItem("authToken", response.data.token);

        // Redirect to dashboard/home page
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error ||
          "Invalid email or password. Please try again."
      );
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row login-card shadow-lg w-100">
        {/* Image Section */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Eiffel_Tower_at_Night_in_Paris.jpg"
            alt="Login Visual"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-5">
          <h2 className="text-center mb-4">LOGIN</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="login-form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="username"
                className="form-control"
                placeholder="Enter your email address"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            {/* Password Input */}
            <div className="login-form-group mb-4 position-relative">
              <label htmlFor="password" className="form-label">
                Password
              </label>
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
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </span>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-danger text-center">{errorMessage}</p>
            )}

            {/* Login Button */}
            <button
              className="btn btn-primary w-100 mb-3 login-btn"
              type="submit"
            >
              LOGIN
            </button>

            {/* Sign Up Link */}
            <p className="text-center">
              Need an account?{" "}
              <Link to="/signup" className="text-primary">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
