import React, { useEffect, useState } from "react";
import "../../output.css";

function AssignmentCard(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);
  return (
    <div
      className={`h-[25%] w-[85%] ${
        currentMode
          ? " bg-[#a8daef]  border border-[#16222a]"
          : "bg-[#7999aa]/70"
      }  transition-all duration-300 ease-in-out rounded-[13px] flex flex-row mt-1 mb-1`}
    >
      <div className="h-[90%] w-[90%] flex flex-col">
        <div
          className={` font-normal ml-[8%] text-[15px] mt-1.5 ${
            currentMode ? "text-[#16222a] " : "text-white"
          }`}
        >
          Calculus
        </div>
        <div
          className={` font-normal ml-[8%] text-[12px] ${
            currentMode ? "text-[#16222a] " : "text-white"
          }`}
        >
          Maths 24-09-25
        </div>
      </div>
      <div className="h-[100%] w-[10%] flex items-center justify-center">
        <div
          className={`checkbox h-[14px] w-[14px] border ${
            currentMode ? "border border-[#16222a] " : "border"
          } mr-1 rounded-sm`}
        ></div>
      </div>
    </div>
  );
}

export default AssignmentCard;
