import React, { useEffect, useState } from "react";
import DataCard from "./Cards/DataCard";
import CardHeading from "./Texts/CardHeading";
import SliderButton from "./Buttons/SliderButton";

const subjects = ["Math", "Science", "English", "History"];

function Progress(props) {
  const [currentMode, setCurrentMode] = useState(props.mode);
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]); // Default to Math

  useEffect(() => {
    setCurrentMode(props.mode); // Update mode smoothly when prop changes
  }, [props.mode]);

  const handleSubjectChange = (direction) => {
    const currentIndex = subjects.indexOf(selectedSubject);
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % subjects.length
        : (currentIndex - 1 + subjects.length) % subjects.length;
    setSelectedSubject(subjects[nextIndex]);
  };

  return (
    <div
      className={`w-[100%] h-[43%] bg-[#17232D] rounded-[20px] flex flex-col items-center ${
        currentMode ? "bg-[#95ccf1] border border-[#16222a]" : "bg-[#17232D]"
      } transition-all duration-300 ease-in-out `}
    >
      <div className="h-[20%] w-[92%] flex flex-row">
        <div className="w-[50%] h-[100%] flex items-center">
          <CardHeading
            text={`Progress `}
            textSize="text-[20px]"
            mode={props.mode}
          />
        </div>
        <div className="w-[50%] h-[100%] flex items-center justify-end">
          <SliderButton
            w="w-[250px]"
            h="h-[37px]"
            mode={props.mode}
            text={selectedSubject}
            onSubjectChange={handleSubjectChange}
          />
        </div>
      </div>
      <DataCard mode={props.mode} subject={selectedSubject} />
    </div>
  );
}

export default Progress;
