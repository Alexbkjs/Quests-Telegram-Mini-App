import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Header from "../components/Header";
import {
  inventory,
  leaderboard,
  profile,
  quests,
  settings,
  academy,
} from "../images";

// Define a list of items with titles, image sources, and paths
const items = [
  { title: "Профіль", imageSrc: profile, path: "/profile" },
  { title: "Квести", imageSrc: quests, path: "/quests" },
  { title: "Академія", imageSrc: academy, path: "/academy" },
  { title: "Інвертар", imageSrc: inventory, path: "/inventory" },
  { title: "Лідерборд", imageSrc: leaderboard, path: "/leaderboard" },
  { title: "Налаштування", imageSrc: settings, path: "/settings" },
];

// Helper function to generate random gradient colors
const generateRandomGradient = () => {
  const colors = [
    "#ADD8E6", // Light Blue
    "#D8A8F6", // Light Purple
    "#008000", // Green
    "#FFFF00", // Yellow
    "#FF0000", // Red
    "#00FFFF", // Cyan
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${randomColor1} 0%, ${randomColor2} 100%)`;
};

// Small component for each item with a Link for navigation
const SmallComponent: React.FC<{
  title: string;
  imageSrc: string;
  path: string;
}> = ({ title, imageSrc, path }) => {
  return (
    <Link
      to={path}
      className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none"
    >
      <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: generateRandomGradient(),
            filter: "blur(20px)",
            opacity: 0.9, // Adjust opacity for a lighter glow
            zIndex: -1,
          }}
        ></div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-full"
          style={{ filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.3))" }}
        />
      </div>
      <div className="mx-auto mt-2">
        <h3 className="text-lg font-normal text-white">{title}</h3>
      </div>
    </Link>
  );
};

// Main page component
const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-white flex-grow bg-[#141415]">
      <Header pageName="Головний екран" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <div className="px-8 grid grid-cols-2 gap-16">
            {items.map((item, index) => (
              <SmallComponent
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
                path={item.path} // Pass the path to SmallComponent
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
