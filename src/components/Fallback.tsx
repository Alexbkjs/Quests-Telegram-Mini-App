import React from "react";
import "../styles/Fallback.css";

const Fallback: React.FC = () => {
  return (
    <div className="fallback-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Fallback;
