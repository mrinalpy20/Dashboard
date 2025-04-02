import logo from "./logo.svg";
import React, { useState } from "react";
import "./output.css";
import Navbar from "./components/navbar";
import Marks from "./components/marks";
import Progress from "./components/progress";
import Attendance from "./components/attendance";
import Assignment from "./components/assignment";
import { Sun, Moon } from "lucide-react";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div
      className={`w-[1433px] h-[725px] flex flex-col items-center justify-center transition-all duration-300 ${
        isLightMode
          ? "bg-gradient-to-r from-[#8dd1ff] to-[#bed1d9]"
          : "bg-gradient-to-r from-[#16222a] to-[#355b6c]"
      }`}
    >
      {/* Toggle Button */}
      <div className="h-[5%] flex flex-row justify-end w-[90%]">
        <button
          type="button"
          onClick={() => setIsLightMode((prevMode) => !prevMode)}
          className={`p-2 rounded-full transition-all duration-300 ease-in-out ${
            isLightMode
              ? "bg-gray-300 hover:bg-gray-400"
              : "bg-[#17232D] hover:bg-[#1f2d3d]"
          }`}
        >
          {isLightMode ? (
            <Sun className="text-yellow-500 w-6 h-6 transition-all duration-300" />
          ) : (
            <Moon className="text-white w-6 h-6 transition-all duration-300" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div
        className={`w-[90%] h-[90%] rounded-[20px] flex flex-row items-center mt-5 transition-all duration-300 
              ${
                isLightMode
                  ? "bg-[#272727]/25 border border-[#17232d]"
                  : "bg-neutral-100/20"
              }`}
      >
        <Navbar mode={isLightMode} />
        <div className="w-[51%] h-[95%] ml-[1%] flex flex-col">
          <Marks mode={isLightMode} />
          <div className="h-[2%]"></div>
          <Progress mode={isLightMode} />
        </div>
        <div className="w-[25%] h-[95%] ml-[1%] flex flex-col">
          <Attendance mode={isLightMode} />
          <div className="h-[2%]"></div>
          <Assignment mode={isLightMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
