"use client";

import { useState } from "react";
import Tag from "./tag";

interface FullTimeTechExperienceProps {
  index: number;
  position: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export default function FullTimeTechExperience({
  index,
  position,
  company,
  duration,
  description,
  tags
}: FullTimeTechExperienceProps) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <button
      className="w-full rounded-lg text-left p-5 mb-6 border-purple-600 shadow-[-3px_-3px_12px_-8px_#8D8DFF] hover:border"
      onClick={toggleList}
    >
      <div className="flex flex-row">
        <h5 className="h5 font-semibold text-purple-400 mr-3">0{index}</h5>
        <div className="flex flex-grow flex-col items-start">
          <h5 className="h5 font-semibold mb-1">
            {position} <span className="text-purple-400">@ {company}</span>
          </h5>
          <span className="mb-2 ml-[0.12rem]">{duration}</span>
          {showList && (
            <ul className="list-disc space-y-2 mb-3 w-full ml-4 pr-6 md:pr-0 text-gray-300">
              {description.map((descriptionLine) => {
                return (
                  <li className="text-sm" key={descriptionLine.valueOf()}>
                    {descriptionLine}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="flex flex-row flex-wrap items-start justify-start">
            {tags.map((tag) => {
              return <Tag key={tag.valueOf()} title={tag} />;
            })}
          </div>
        </div>
      </div>
    </button>
  );
}
