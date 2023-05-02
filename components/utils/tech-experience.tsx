"use client";

import { useState } from "react";

interface TechExperienceProps {
  index: number;
  position: string;
  company: string;
  duration: string;
  description: string[];
}

export default function TechExperience({
  index,
  position,
  company,
  duration,
  description,
}: TechExperienceProps) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <button className="w-full rounded-lg text-left p-5 mb-2 md:mb-6 border-purple-600 shadow-[-3px_-3px_12px_-8px_#8D8DFF] hover:border " onClick={toggleList}>
      <div className="flex flex-row">
        <h5 className="h5 font-semibold text-purple-400 md:mr-3">0{index}</h5>
        <div className="flex flex-grow flex-col items-start">
          <h5 className="h5 font-semibold md:mb-1">
            {position} <span className="text-purple-400">@ {company}</span>
          </h5>
          <span className="md:mb-2 md:ml-[0.12rem]">{duration}</span>
          {showList && (
            <ul className="list-disc space-y-2 w-full md:w-full md:ml-4 text-gray-300">
              {description.map((descriptionLine) => {
                return (
                  <li className="text-sm" key={descriptionLine.valueOf()}>
                    {descriptionLine}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </button>
  );
}