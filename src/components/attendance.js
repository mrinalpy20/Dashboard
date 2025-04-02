import React, { useEffect, useState } from "react";
import "../output.css";
import DropButton from "./Buttons/DropButton";
import CardHeading from "./Texts/CardHeading";

const attendanceData = {
  January: 85,
  February: 78,
  March: 90,
  April: 88,
  May: 76,
  June: 92,
  July: 80,
  August: 70,
  September: 95,
  October: 75,
  November: 82,
  December: 89,
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Attendance(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [attendance, setAttendance] = useState(attendanceData[selectedMonth]);

  useEffect(() => {
    setCurrentMode(props.mode);
  }, [props.mode]);

  useEffect(() => {
    setAttendance(attendanceData[selectedMonth]);
  }, [selectedMonth]);

  const getGradient = (percentage) => {
    if (percentage >= 90) return "from-[#4CAF50] to-[#2E7D32]"; // Green for high attendance
    if (percentage >= 80) return "from-[#ebff56] to-[#83992b]"; // Yellow-green for moderate
    if (percentage >= 70) return "from-[#FFA726] to-[#EF6C00]"; // Orange for lower
    return "from-[#FF5252] to-[#D32F2F]"; // Red for very low
  };

  return (
    <div
      className={` ${
        currentMode ? "bg-[#95ccf1] border border-[#16222a]" : "bg-[#17232D]"
      } transition-all duration-300 ease-in-out w-[100%] h-[55%] rounded-[20px] flex flex-col items-center `}
    >
      <div className="w-[90%] h-[15%]  mt-[3%] flex flex-row justify-center items-center">
        <div className="w-[60%] ml-1">
          <CardHeading
            text="Attendance"
            textSize="text-[19px]"
            mode={props.mode}
          />
        </div>
        <div>
          <DropButton
            h="h-[42px]"
            w="w-[150px]"
            mode={props.mode}
            text={selectedMonth}
            onSelect={setSelectedMonth}
            months={months}
          />
        </div>
      </div>
      <div
        className={`attendancegradient w-[50%] h-[50%] bg-gradient-to-br ${getGradient(
          attendance
        )} rounded-[100px] flex items-center justify-center mt-[10%]`}
      >
        <div
          className={`w-[80%] h-[80%]  ${
            currentMode ? "bg-[#91CAF0]/85" : "bg-[#2a3844]/95"
          } rounded-[100px] flex  items-center justify-center`}
        >
          <div
            className={`justify-start ${
              currentMode ? "text-[#16222a] " : "text-white"
            }  text-[45px] font-bold font-['Inter']`}
          >
            {attendance}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
