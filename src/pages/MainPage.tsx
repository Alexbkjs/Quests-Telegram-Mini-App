import React from "react";
import Header from "../components/Header";
import {
  inventory,
  leaderboard,
  profile,
  quests,
  settings,
  academy,
} from "../images"; // Adjust the path to where your images are located

// Define a list of items with titles and image sources
const items = [
  { title: "Профіль", imageSrc: profile },
  { title: "Квести", imageSrc: quests },
  { title: "Академія", imageSrc: academy },
  { title: "Інвертар", imageSrc: inventory },
  { title: "Лідерборд", imageSrc: leaderboard },
  { title: "Налаштування", imageSrc: settings },
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

// Small component for each item
const SmallComponent: React.FC<{ title: string; imageSrc: string }> = ({
  title,
  imageSrc,
}) => {
  return (
    <button
      className="relative flex flex-col items-center justify-center p-2 rounded-lg transition-transform transform hover:scale-105 active:scale-95 focus:outline-none"
      style={{
        border: "none",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0.3)", // Subtle shadow effect
      }}
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
    </button>
  );
};

// Main page component
const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-white flex-grow bg-[#141415]">
      {/* Set the background color here */}
      <Header pageName="Головний екран" />
      <div className="w-full p-4 my-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex-grow">
        <div className="mx-auto max-w-md">
          <div className="px-8 grid grid-cols-2 gap-16">
            {items.map((item, index) => (
              <SmallComponent
                key={index}
                title={item.title}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
