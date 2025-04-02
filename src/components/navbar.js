import React, { useEffect, useState } from "react";
import "../output.css";
import Button from "./Buttons/Button";
import Logo from "../Assets/Logo.svg";

function Navbar(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);

  return (
    <div
      className={`w-[18%] h-[95%] ${
        currentMode ? "bg-[#95ccf1] border border-[#16222a]" : "bg-[#121a21]"
      }  rounded-[30px]  ml-[2%] flex flex-col items-center transition-all duration-300 ease-in-out`}
    >
      <div className="h-[8%]"></div>
      <div className="w-[56%] h-[7%]  flex flex-row items-center justify-center">
        <img
          src={Logo}
          alt="Description"
          className="w-[30%] h-[100%] rounded-lg"
        />
        <div
          className={`w-[70%] h-[100%] font-semibold ${
            currentMode ? "text-[#355b6c]" : "text-white "
          } text-[19px] flex items-center justify-center transition-all duration-300 ease-in-out`}
        >
          {" "}
          me Learn
        </div>
      </div>
      <div className="h-[10%]"></div>
      <div className="h-[25%] w-[59%]  flex flex-col justify-between">
        <Button w="w-[150px]" h="h-[40px]" mode={props.mode} text="Home" />
        <Button w="w-[150px]" h="h-[40px]" mode={props.mode} text="Settings" />
        <Button w="w-[150px]" h="h-[40px]" mode={props.mode} text="Logout" />
      </div>
    </div>
  );
}

export default Navbar;
