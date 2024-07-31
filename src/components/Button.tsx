// Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  iconComponent?: React.ReactNode; // Optional icon component
  iconClass?: string; // Font Awesome icon class, if using
  iconColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  iconComponent,
  iconClass,
  iconColor,
}) => (
  <button className="relative w-full flex items-center py-3 bg-[#444444] text-white font-normal rounded-xl justify-center border-2 border-[#601ca3]">
    {iconComponent ? (
      <span className="absolute left-4">{iconComponent}</span>
    ) : (
      iconClass && (
        <i className={`absolute left-4 ${iconClass} ${iconColor}`}></i>
      )
    )}
    <span className="text-center">{text}</span>
  </button>
);

export default Button;
