import React from "react";
import Button from "./Button";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon"; // Assume you have these components
import AppleIcon from "../icons/AppleIcon"; // Assume you have these components

const SocialButtons: React.FC = () => {
  const buttonConfigs = [
    {
      text: "Continue with Google",
      iconComponent: <GoogleIcon />, // Pass the SVG component here
    },
    {
      text: "Continue with Facebook",
      iconComponent: <FacebookIcon />, // Pass the SVG component here
    },
    {
      text: "Continue with Apple",
      iconComponent: <AppleIcon />, // Pass the SVG component here
    },
  ];

  return (
    <div className="flex flex-col space-y-3 w-full max-w-md mx-auto mt-4">
      {buttonConfigs.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          iconComponent={button.iconComponent}
        />
      ))}
    </div>
  );
};

export default SocialButtons;
