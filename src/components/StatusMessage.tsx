import React from "react";

interface StatusMessageProps {
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      {message}
    </div>
  );
};

export default StatusMessage;
