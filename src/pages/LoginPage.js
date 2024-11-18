import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService"; // Import login function
import GenericBTN from "../components/GenericBTN";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Authenticate user and retrieve token
      await loginUser({ email, password });
      // Redirect to PlayPage on successful login
      navigate("/play");
    } catch (err) {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: "#EADDBD" }}
    >
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6" style={{ color: "#7F553C" }}>
        Login
      </h1>

      {/* Form */}
      <form
        className="w-80 bg-white p-6 rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
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
        <div className="mb-6">
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

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {/* Login Button */}
        <div className="flex justify-center">
          <GenericBTN text="Login" type="submit" />
        </div>
      </form>

      {/* OR and Create Account Link */}
      <div className="mt-4 text-center">
        <p className="text-black font-bold">OR</p>
        <Link
          to="/register"
          className="text-black underline mt-2 hover:text-gray-600"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
