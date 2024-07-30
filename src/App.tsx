import { useState } from "react";
import { maze } from "./images";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center z-10 main ">
        <div className="w-full text-white h-screen font-bold flex flex-col max-w-xl top-glow ">
          <div className="flex items-center m-3 mt-16">
            <div className="ml-3 image-container ">
              <img src={maze} alt="maze"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
