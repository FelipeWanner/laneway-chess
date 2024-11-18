import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  // If no token, redirect to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children; // Render the protected component
};

export default PrivateRoute;
