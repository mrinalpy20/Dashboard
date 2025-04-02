import React, { useState } from "react";
import "../../output.css";
function DropButton({ h, w, mode, options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option); // Call onSelect when an option is clicked
    }
  };

  return (
    <div
      className={`${h} ${w}  rounded-full flex items-center justify-center pr-[3px]`}
    >
      <select
        className={`w-full h-full px-2 rounded-full pr-[3px] ${
          mode
            ? "bg-[#383838]/0 border-2 border-[#16222a] "
            : "bg-neutral-100/10 text-white"
        }`}
        value={selectedOption}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className={`${
              mode ? "bg-white text-black" : "bg-[#17232D] text-white"
            }`}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropButton;
