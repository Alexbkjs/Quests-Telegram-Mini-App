import React from "react";
import { maze } from "../images/index";
import { Link } from "react-router-dom";
import SocialButtons from "../components/SocialButtons";

const Home: React.FC = () => {
  const appName = "IT Academy RPG";

  return (
    <div className="flex flex-col min-h-screen items-center justify-center main">
      <div className="w-full text-white font-bold flex flex-col flex-grow  top-glow">
        <div className="flex justify-center my-auto">
          <div className="ml-3 image-container">
            <img src={maze} alt="maze" />
          </div>
        </div>
        <div className="flex justify-center font-nunito">
          <p className="text-[20px] font-normal tracking-[0.08em]">{appName}</p>
        </div>

        <div className="flex flex-col space-y-3 p-6 w-full max-w-md mx-auto">
          {/* Button 1: Text Only, Custom Gradient Background */}
          <Link
            to="/register"
            className="btn rounded-xl w-full  bg-gradient-to-r from-purple-700 to-purple-600 text-white rounded-md border-2 border-[#6527a4] hover:bg-gradient-to-l"
          >
            Реєстрація
          </Link>

          <SocialButtons />
        </div>

        <div className="footer flex justify-center ">
          <Link to="/login" className="btn btn-ghost py-2 ">
            Вхід
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
