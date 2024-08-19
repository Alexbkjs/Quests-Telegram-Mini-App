import React from "react";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center text-white">
    {message}
  </div>
);

export default Error;
