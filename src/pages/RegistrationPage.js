import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GenericBTN from "../components/GenericBTN";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const navigate = useNavigate();

  const { username, email, password, confirmPassword } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4505/api/register", {
        username,
        email,
        password,
      });

      if (response.data.accessToken) {
        setSuccessMessage(true);
        setErrorMessage(""); // Clear error message
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      setErrorMessage(
        err.response?.data?.msg || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: "#EADDBD" }}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#7F553C" }}>
        Register
      </h1>

      {/* Form */}
      {!successMessage && (
        <form
          className="w-80 bg-white p-6 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username"
              value={username}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {/* Create Account Button */}
          <div className="flex justify-center mb-4">
            <GenericBTN text="Create Account" type="submit" />
          </div>
          <div className="flex justify-center">
            <GenericBTN text="Home" onClick={() => navigate("/")} />
          </div>
        </form>
      )}

      {/* Success Message with Login Button */}
      {successMessage && (
        <div className="text-center">
          <p className="text-green-500 text-lg mb-4">
            Registration successful! You can now log in.
          </p>
          <GenericBTN
            text="Go to Login"
            onClick={() => navigate("/login")}
          />
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
