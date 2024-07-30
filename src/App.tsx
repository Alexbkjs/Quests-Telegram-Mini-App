import { maze } from "./images/index.ts";
import "./App.css";

const appName = "Назва застосунку";

// Button Component
const Button = ({ text, iconClass, iconColor }) => (
  <button className="w-full py-3 bg-[#444444] text-white font-normal rounded-xl flex items-center border-2 border-[#601ca3]">
    <i className={`${iconClass} h-6 w-6 ml-2 ${iconColor}`}></i>
    <span className="relative left-16">{text}</span>
  </button>
);

function App() {
  return (
    <div className="flex justify-center z-10 main">
      <div className="w-full text-white h-screen font-bold flex flex-col max-w-xl top-glow">
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
          <button className="w-full py-3 bg-gradient-to-r from-[#810bf9] to-[#9e44fa] text-white font-normal border-2 border-[#601ca3] rounded-xl flex justify-center items-center">
            Реєстрація
          </button>

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
}

export default App;
