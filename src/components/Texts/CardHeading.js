import React, { useEffect, useState } from "react";
import "../../output.css";

function CardHeading(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);
  return (
    <div
      className={`justify-start ${props.textSize} ${
        currentMode ? "text-[#355b6c]" : "text-white "
      }  font-semibold font-['Inter'] transition-all duration-300 ease-in-out `}
    >
      {props.text}
    </div>
  );
}

export default CardHeading;
