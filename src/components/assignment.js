import React, { useEffect, useState } from "react";
import "../output.css";
import AssignmentCard from "./Cards/AssignmentCard";
import CardHeading from "./Texts/CardHeading";

function Assignment(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);
  return (
    <div
      className={`w-[100%] h-[43%] bg-[#17232D] rounded-[20px] ${
        currentMode ? "bg-[#95ccf1] border border-[#16222a]" : "bg-[#17232D]"
      } transition-all duration-300 ease-in-out flex flex-col`}
    >
      {/* Heading Section */}
      <div className="w-[100%] h-[15%] flex items-center justify-start ml-[8%] mt-[2%]">
        <CardHeading
          text="Assignments"
          textSize="text-[19px]"
          mode={props.mode}
        />
      </div>

      {/* Scrollable Cards Section */}
      <div className="w-[100%] h-[75%] flex flex-col items-center mt-1 overflow-y-auto scrollbar-none">
        <AssignmentCard mode={props.mode} />
        <AssignmentCard mode={props.mode} />
        <AssignmentCard mode={props.mode} />
        <AssignmentCard mode={props.mode} />
        <AssignmentCard mode={props.mode} />
        <AssignmentCard mode={props.mode} />
      </div>
    </div>
  );
}

export default Assignment;
