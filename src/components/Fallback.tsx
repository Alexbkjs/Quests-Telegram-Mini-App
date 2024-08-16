import React from "react";
import "../styles/Fallback.css";

const Fallback: React.FC = () => {
  return (
    <div className="fallback-container">
      <div className="spinner"></div>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Fallback;
