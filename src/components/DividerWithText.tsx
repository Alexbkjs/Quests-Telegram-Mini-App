import React from "react";

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full my-4">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-2 text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default DividerWithText;
