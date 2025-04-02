import React, { useState } from "react";
import "../output.css";
import GraphCard from "./Cards/GraphCard";
import CardHeading from "./Texts/CardHeading";
import DropButton from "./Buttons/DropButton2";

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

const subjects = ["Math", "Science", "History", "English"];

const dummyData = {
  Math: [
    { month: "January", marks: 85 },
    { month: "February", marks: 90 },
    { month: "March", marks: 80 },
  ],
  Science: [
    { month: "January", marks: 75 },
    { month: "February", marks: 78 },
    { month: "March", marks: 85 },
  ],
  History: [
    { month: "January", marks: 60 },
    { month: "February", marks: 65 },
    { month: "March", marks: 70 },
  ],
  English: [
    { month: "January", marks: 95 },
    { month: "February", marks: 92 },
    { month: "March", marks: 90 },
  ],
};

function Marks({ mode }) {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div
      className={`w-[100%] h-[55%] ${
        mode ? "bg-[#95ccf1] border border-[#16222a]" : "bg-[#17232D]"
      } rounded-[20px] flex flex-col items-center justify-center transition-all duration-300 ease-in-out`}
    >
      <div className="w-[95%] h-[15%] flex flex-row mt-2">
        <div className="w-[40%] h-[100%] flex items-center">
          <CardHeading text="Marks" textSize="text-[19px]" mode={mode} />
        </div>
        <div className="w-[60%] h-[100%] flex items-center justify-end">
          <DropButton h="h-[40px]" w="w-[170px]" mode={mode} options={months} />
          <div className="w-[3%]"></div>
          <DropButton
            h="h-[40px]"
            w="w-[170px]"
            mode={mode}
            options={subjects}
            onSelect={setSelectedSubject} // ✅ Pass onSelect to update subject
          />
        </div>
      </div>
      <div className="w-[100%] h-[92%] flex items-center justify-center">
        <GraphCard mode={mode} data={dummyData[selectedSubject]} />
      </div>
    </div>
  );
}

export default Marks;
