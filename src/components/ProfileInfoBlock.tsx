import React from "react";
import { padlock } from "../assets/images";
import { broom } from "../assets/images";

interface IconData {
  src: string;
  isLocked: boolean;
}

interface ProfileInfoBlockProps {
  title: string;
  icons: IconData[]; // Array of icon data with lock status
  dynamicText: string;
}

const ProfileInfoBlock: React.FC<ProfileInfoBlockProps> = ({
  title,
  icons,
  dynamicText,
}) => {
  return (
    <div className="min-h-20 flex flex-col w-full p-1 gap-6 mt-2 text-white">
      {/* Title - Top Left */}
      <div className="text-l ">{title}</div>

      {/* Main Content - Center, with Rounded Purple Borders */}
      <div className="flex justify-center items-center gap-4">
        {icons.slice(0, 4).map((icon, index) => (
          <div
            key={index}
            className="relative p-[0.2rem] border-[0.05rem] border-purple-600 rounded-lg"
          >
            <img src={icon.src} alt={`icon-${index}`} />
            {icon.isLocked && (
              <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center rounded-lg">
                <img src={padlock} alt="locked" className="w-full h-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative flex justify-end items-center">
        <button
          className="relative w-24 h-6  text-white  rounded-full flex items-center justify-center overflow-hidden"
          onClick={() => console.log("clicked")}
          // Assuming you have a click handler function
        >
          {/* Broom Image - Positioned Diagonally */}
          <img
            src={broom}
            alt="broom"
            className="absolute inset-0 w-full h-full object-cover transform "
          />

          {/* Dynamic Text - Top Left Corner */}
          <span className="absolute left-2 top-0 bottom-2 text-[0.6rem] font-light z-10 tracking-wider">
            {dynamicText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfileInfoBlock;
