import React from "react";
import { maze } from "../images/index";
import { Link } from "react-router-dom";

// Define a TypeScript interface for Button props
interface ButtonProps {
  text: string;
  iconClass: string;
  iconColor: string;
}

// Button Component with typed props
const Button: React.FC<ButtonProps> = ({ text, iconClass, iconColor }) => (
  <button className="relative w-full flex items-center w-full py-3 bg-[#444444] text-white font-normal rounded-xl justify-center  border-2 border-[#601ca3]">
    <i className={`absolute left-4 ${iconClass} ${iconColor}`}></i>
    <span className="text-center">{text}</span>
  </button>
);

const Home: React.FC = () => {
  const appName = "Назва застосунку";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center main ">
      <div className="w-full text-white font-bold flex flex-col max-w-xl top-glow">
        <div className="flex justify-center m-3 mt-16">
          <div className="ml-3 image-container">
            <img src={maze} alt="maze" />
          </div>
        </div>
        <div className="mt-9 flex justify-center font-nunito">
          <p className="text-[20px] font-normal tracking-[0.08em]">{appName}</p>
        </div>

        <div className="flex flex-col space-y-3 p-6 w-full max-w-md mx-auto mt-4">
          {/* Button 1: Text Only, Custom Gradient Background */}
          <Link
            to="/register"
            className="w-full py-3 bg-gradient-to-r from-[#810bf9] to-[#9e44fa] text-white font-normal border-2 border-[#601ca3] rounded-xl flex justify-center items-center"
          >
            Реєстрація
          </Link>

          {/* Button 2: Google Icon and Text */}
          <Button
            text="Continue with Google"
            iconClass="fab fa-google"
            iconColor="text-red-400"
          />

          {/* Button 3: Facebook Icon and Text */}
          <Button
            text="Continue with Facebook"
            iconClass="fab fa-facebook-f"
            iconColor="text-blue-400"
          />

          {/* Button 4: Apple Icon and Text */}
          <Button
            text="Continue with Apple"
            iconClass="fab fa-apple"
            iconColor="text-white-700"
          />
        </div>
        <div className="footer flex justify-center ">
          <p>Вхід</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
