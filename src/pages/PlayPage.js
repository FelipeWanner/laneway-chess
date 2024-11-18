import React from "react";
import GenericBTN from "../components/GenericBTN";
import Chessboard from "../chess/chessComponents/Chessboard";
import Navbar from "../components/Navbar";

const PlayPage = () => {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#EADDBD" }}>
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Chessboard */}
        <Chessboard />

        {/* Play Button */}
        <GenericBTN className="mt-4" text="Play" onClick={() => console.log("Play button clicked!")} />
      </div>
        <Navbar/>
    </div>
  );
};

export default PlayPage;
