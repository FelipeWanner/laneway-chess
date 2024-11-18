import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/lanewayChess-logo.png";
import chessIMG from "../assets/logo/Chess-removebg.png";
import GenericBTN from "../components/GenericBTN";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: "#EADDBD" }}>
      {/* Logo */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <img src={logo} alt="Laneway logo" />
        <img src={chessIMG} alt="a nice chessboard" />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col space-y-4">
        <GenericBTN text="Login" onClick={() => navigate("/login")} />
        <GenericBTN text="Register" onClick={() => navigate("/register")} />
      </div>
    </div>
  );
}

export default HomePage;
