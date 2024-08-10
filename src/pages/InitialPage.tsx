import React, { useEffect, useState } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useNavigate } from "react-router-dom";
import { loading_image } from "../images";

const InitialPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Loading...");
  const navigate = useNavigate();
  const tma = window.Telegram.WebApp;

  tma.isClosingConfirmationEnabled = true; // Confirmation for closing app
  tma.isVerticalSwipesEnabled = true; // Disabling vertical swipes to go into bottom side pop-up
  tma.setHeaderColor("#011627"); // Changing the background of top and bottom side bars

  console.log(tma.ready());

  useEffect(() => {
    const verifyUser = async () => {
      const { initDataRaw } = retrieveLaunchParams();
      console.log(initDataRaw);

      try {
        console.log("initDataRaw", initDataRaw);
        const response = await fetch(
          "https://e219-176-105-196-4.ngrok-free.app/api/auth",
          {
            method: "POST",
            headers: {
              Authorization: `tma ${initDataRaw}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Received token from back:", data);

          // Redirect to profile page after successful verification
          navigate("/main");
        } else {
          setTitle("Error occurred");
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setTitle("Error occurred");
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      verifyUser();
    }, 5000);

    // verifyUser();
  }, [navigate]);

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${loading_image})` }}
    >
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="spinner-border animate-spin text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">{title}</h1>
        </div>
      ) : (
        <div className="text-white font-bold">{title}</div>
      )}
      <button
        onClick={() => {
          tma.close(() => console.log("Closed"));
        }}
      >
        HELLLLLLLLLOLLLLLOOOOOOOOOO
      </button>
    </div>
  );
};

export default InitialPage;
