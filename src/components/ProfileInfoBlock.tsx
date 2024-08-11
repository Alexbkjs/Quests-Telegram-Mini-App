import React from "react";
import { padlock } from "../images";
import { broom } from "../images";

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
    <div className="relative w-full p-16">
      {/* Title - Top Left */}
      <div className="absolute top-0 left-0 m-2 text-l ">{title}</div>

      {/* Main Content - Center, Display up to 4 Icons */}
      <div className="flex justify-center items-center h-full gap-4">
        {icons.slice(0, 4).map((icon, index) => (
          <div key={index} className="relative mx-2">
            <img src={icon.src} alt={`icon-${index}`} className="w-10 h-10" />
            {icon.isLocked && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <img src={padlock} alt="locked" className="w-6 h-6" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Right - Dynamic Text and Broom Image */}
      <div className="absolute bottom-0 right-0 flex flex-col items-center">
        <span className="text-sm mr-8">{dynamicText}</span>
        <img src={broom} alt="broom" className="h-full" />
      </div>
    </div>
  );
};

export default ProfileInfoBlock;
