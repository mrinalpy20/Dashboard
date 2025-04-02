import React, { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

function SliderButton({ text, mode, w, h, onSubjectChange }) {
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    setCurrentMode(mode); // Update mode smoothly when prop changes
  }, [mode]);

  return (
    <div
      className={`${w} ${h} ${
        currentMode
          ? "bg-[#383838]/0 border-2 border-[#16222a]"
          : "bg-neutral-100/10"
      } rounded-[38px] flex flex-row transition-all duration-300 ease-in-out`}
    >
      <button
        className="w-[20%] h-[100%] flex items-center justify-center"
        onClick={() => onSubjectChange("prev")}
      >
        <ChevronLeft
          className={`transition-all duration-300 ease-in-out ${
            currentMode ? "text-[#16222a]" : "text-white"
          }`}
        />
      </button>
      <div
        className={`w-[80%] h-[100%] flex items-center justify-center ${
          currentMode ? "text-[#16222a]" : "text-white"
        } text-[18px]`}
      >
        {text}
      </div>
      <button
        className="w-[20%] h-[100%] flex items-center justify-center"
        onClick={() => onSubjectChange("next")}
      >
        <ChevronRight
          className={`transition-all duration-300 ease-in-out ${
            currentMode ? "text-[#16222a]" : "text-white"
          }`}
        />
      </button>
    </div>
  );
}

export default SliderButton;
