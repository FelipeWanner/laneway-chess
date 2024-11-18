import React from "react";

const GenericBTN = ({ text, onClick, className = "", style = {} }) => {
  return (
    <button
      className={`px-4 py-2 text-white rounded-md hover:opacity-90 ${className}`}
      style={{ backgroundColor: "#7F553C", ...style }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GenericBTN;
