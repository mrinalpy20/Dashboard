import React, { useEffect, useState } from "react";
import "../../output.css";

function ComponentText(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);
  return (
    <div
      className={`justify-start ${
        currentMode ? "text-[#355b6c]" : "text-white "
      }  font-semibold font-['Inter'] transition-all duration-300 ease-in-out  ${
        props.textSize
      } font-medium font-['Inter']`}
    >
      Home
    </div>
  );
}

export default ComponentText;
