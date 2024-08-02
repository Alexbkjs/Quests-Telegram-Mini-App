import React from "react";
import { maze } from "../images/index";
import { Link } from "react-router-dom";
import SocialButtons from "../components/SocialButtons";

const Home: React.FC = () => {
  const appName = "Назва застосунку";

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

        <div className="flex flex-col space-y-3 p-6 w-full max-w-md mx-auto mt-4">
          {/* Button 1: Text Only, Custom Gradient Background */}
          <Link
            to="/register"
            className="btn w-full py-3 bg-gradient-to-r from-[#810bf9] to-[#9e44fa] text-white font-normal border-2 border-[#601ca3] rounded-xl flex justify-center items-center"
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
