// components/MenuItem.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Quest } from "../utils/types"; // Adjust the import path as necessary

interface MenuItemProps {
  title: string;
  imageSrc: string;
  path: string;
  gradient: string;
  questsData: Quest[]; // Use the specific type here
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  imageSrc,
  path,
  gradient,
  questsData,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path, { state: { quests: questsData } });
  };

  return (
    <div
      onClick={handleNavigate}
      className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
    >
      <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: gradient,
            filter: "blur(20px)",
            opacity: 0.9,
            zIndex: -1,
          }}
        ></div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-full"
          style={{
            filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.3))",
          }}
        />
      </div>
      <div className="mx-auto mt-2">
        <h3 className="text-lg font-normal text-white">{title}</h3>
      </div>
    </div>
  );
};

export default MenuItem;
