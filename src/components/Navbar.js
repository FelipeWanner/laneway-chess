import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-around text-center bg-white py-3 shadow-md">
      <Link to="/" className="text-sm text-black hover:text-gray-600">
        Home
      </Link>
      <Link to="/register" className="text-sm text-black hover:text-gray-600">
        Register
      </Link>
      <Link to="/login" className="text-sm text-black hover:text-gray-600">
        Login
      </Link>
      <Link to="/status" className="text-sm text-black hover:text-gray-600">
        Status
      </Link>
    </nav>
  );
};

export default Navbar;
