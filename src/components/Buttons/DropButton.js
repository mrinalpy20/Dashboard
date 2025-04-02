import React, { useEffect, useState } from "react";
import "../../output.css";
import { ChevronDown } from "lucide-react";

function DropButton(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);
  const [selectedMonth, setSelectedMonth] = useState(props.text); // Use prop for initial month
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setCurrentMode(props.mode);
  }, [props.mode]);

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
    props.onSelect(month); // Notify parent component
  };

  return (
    <div className="relative">
      <div
        className={`${props.w} ${props.h} ${
          currentMode
            ? "bg-[#383838]/0 border-2 border-[#16222a]"
            : "bg-neutral-100/10"
        } rounded-[38px] flex flex-row transition-all duration-300 ease-in-out`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div
          className={`w-[90%] h-[100%] text-[19px] flex items-center justify-center ${
            currentMode ? "text-[#16222a]" : "text-white"
          }`}
        >
          {selectedMonth}
        </div>
        <button className="w-[25%] h-[100%] flex items-center justify-center">
          <ChevronDown
            className={`transition-all duration-300 ease-in-out ${
              currentMode ? "text-[#16222a]" : "text-white"
            }`}
          />
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className={`absolute top-full left-0 w-full ${
            currentMode ? "bg-white text-black" : "bg-[#17232D] text-white"
          } border border-gray-300 rounded-md shadow-md z-10`}
        >
          {props.months.map((month) => (
            <div
              key={month}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelectMonth(month)}
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropButton;
