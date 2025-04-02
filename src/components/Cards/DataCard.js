import React, { useEffect, useState } from "react";

const dummyData = {
  Math: { syllabus: 80, marks: 90, timeSpent: 20, color: "#ebff56" },
  Science: { syllabus: 65, marks: 85, timeSpent: 18, color: "#5ee635" },
  English: { syllabus: 70, marks: 78, timeSpent: 15, color: "#ed8224" },
  History: { syllabus: 60, marks: 75, timeSpent: 12, color: "#ff5733" },
};

function DataCard({ mode, subject }) {
  const [currentMode, setCurrentMode] = useState(mode);
  const [data, setData] = useState(dummyData[subject]);

  useEffect(() => {
    setCurrentMode(mode); // Update mode smoothly when prop changes
  }, [mode]);

  useEffect(() => {
    setData(dummyData[subject]);
  }, [subject]);

  return (
    <div
      className={`h-[75%] w-[95%] bg-[#5a7382]/60 rounded-[13px] flex flex-row justify-center items-center ${
        currentMode
          ? " bg-[#a8daef]  border border-[#16222a]"
          : "bg-[#7999aa]/70"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-[90%] w-[30%] flex flex-col justify-center pl-[3%]">
        <div
          className={`${
            currentMode ? "text-[#16222a]" : "text-white"
          } text-xl font-normal`}
        >
          Syllabus
        </div>
        <div
          className={`${
            currentMode ? "text-[#16222a]" : "text-white"
          } text-[49px] font-bold`}
        >
          {data.syllabus}%
        </div>
        <div className="w-[70%] h-2.5 bg-neutral-100/50 rounded-[38px]">
          <div
            className="h-2.5 rounded-[38px]"
            style={{ width: `${data.syllabus}%`, backgroundColor: data.color }}
          />
        </div>
      </div>

      <div className="h-[90%] w-[30%] flex flex-col justify-center pl-[3%]">
        <div
          className={`${
            currentMode ? "text-[#16222a]" : "text-white"
          } text-xl font-normal`}
        >
          Median Marks
        </div>
        <div
          className={`${
            currentMode ? "text-[#16222a]" : "text-white"
          } text-[49px] font-bold`}
        >
          {data.marks}%
        </div>
        <div className="w-[70%] h-2.5 bg-neutral-100/50 rounded-[38px]">
          <div
            className="h-2.5 rounded-[38px]"
            style={{ width: `${data.marks}%`, backgroundColor: data.color }}
          />
        </div>
      </div>

      <div className="h-[90%] w-[30%] flex flex-col justify-center pl-[3%]">
        <div
          className={`${
            currentMode ? "text-[#16222a]" : "text-white"
          } text-xl font-normal`}
        >
          Time Spent
        </div>
        <div
          className={`${
            currentMode ? "text-[#16222a]" : "text-white"
          } text-[49px] font-bold`}
        >
          {data.timeSpent} <span className="text-[20px]">hrs</span>
        </div>
        <div className="w-[70%] h-2.5 bg-neutral-100/50 rounded-[38px]">
          <div
            className="h-2.5 rounded-[38px]"
            style={{
              width: `${(data.timeSpent / 24) * 100}%`,
              backgroundColor: data.color,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DataCard;
