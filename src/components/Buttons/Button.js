import React, { useEffect, useState } from "react";
import "../../output.css";
function Button(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);
  return (
    <div
      className={`${props.w} ${props.h} ${
        currentMode
          ? "bg-[#383838]/0 border-2 border-[#16222a]"
          : "bg-neutral-100/10 text-white"
      } rounded-[38px] flex flex-row transition-all duration-300 ease-in-out flex items-center justify-center`}
    >
      {" "}
      {props.text}
    </div>
  );
}

export default Button;
