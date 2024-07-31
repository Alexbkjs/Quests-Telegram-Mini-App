import React from "react";

interface ButtonProps {
  text: string;
  iconClass: string;
  iconColor: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconClass,
  iconColor,
  className,
}) => (
  <button
    className={`relative flex items-center py-3 bg-[#444444] text-white font-normal rounded-xl justify-center border-2 border-[#601ca3] ${className}`}
  >
    <i className={`absolute left-4 ${iconClass} ${iconColor}`}></i>
    <span className="text-center">{text}</span>
  </button>
);

export default Button;
