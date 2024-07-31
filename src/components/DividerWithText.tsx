import React from "react";

interface DividerWithTextProps {
  text: string;
}

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center w-full my-6">
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="mx-1 text-[0.9rem] text-gray-400">{text}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default DividerWithText;
