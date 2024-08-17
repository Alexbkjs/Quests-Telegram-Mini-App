import React from "react";
import { loading_image } from "../assets/images";
import useUserVerification from "../hooks/useUserVerification"; // Import your custom hook
import useTelegramConfig from "../hooks/useTelegramConfig";

const InitialPage: React.FC = () => {
  const { loading, title } = useUserVerification(); // Use the custom hook

  useTelegramConfig();
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${loading_image})` }}
    >
      {loading ? (
        <div className="flex flex-col items-center">
          <div
            className="spinner-border animate-spin text-white"
            role="status"
          ></div>
          <h1 className="text-white text-2xl font-bold mt-4">{title}</h1>
        </div>
      ) : (
        <div className="text-white font-bold">{title}</div>
      )}
    </div>
  );
};

export default InitialPage;
