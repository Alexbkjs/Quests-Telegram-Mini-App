import React from "react";
import Button from "./Button";
import GoogleIcon from "../icons/GoogleIcon";
import FacebookIcon from "../icons/FacebookIcon";
import AppleIcon from "../icons/AppleIcon";

const SocialButtons: React.FC = () => {
  const buttonConfigs = [
    {
      text: "Continue with Google",
      iconComponent: <GoogleIcon />,
    },
    {
      text: "Continue with Facebook",
      iconComponent: <FacebookIcon />,
    },
    {
      text: "Continue with Apple",
      iconComponent: <AppleIcon />,
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
