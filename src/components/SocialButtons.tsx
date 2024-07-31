import React from "react";
import Button from "./Button";

const SocialButtons: React.FC = () => {
  const buttonConfigs = [
    {
      text: "Continue with Google",
      iconClass: "fab fa-google",
      iconColor: "text-red-400",
    },
    {
      text: "Continue with Facebook",
      iconClass: "fab fa-facebook-f",
      iconColor: "text-blue-400",
    },
    {
      text: "Continue with Apple",
      iconClass: "fab fa-apple",
      iconColor: "text-white-700",
    },
  ];

  return (
    <div className="flex flex-col space-y-3 w-full max-w-md mx-auto mt-4">
      {buttonConfigs.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          iconClass={button.iconClass}
          iconColor={button.iconColor}
        />
      ))}
    </div>
  );
};

export default SocialButtons;
