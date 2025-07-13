"use client";

import { useState } from "react";
import Tag from "./tag";

interface FullTimeTechExperienceProps {
  position: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
}

export default function FullTimeTechExperience({
  position,
  company,
  duration,
  description,
  tags,
}: FullTimeTechExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showFullDescription = isExpanded || isHovered;

  return (
    <div
      className="content cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h5 className="h5 font-semibold mb-1">
        {position} <span className="text-purple-400">@ {company}</span>
      </h5>
      <span className="mb-2 ml-[0.12rem] text-sm text-gray-400">
        {duration}
      </span>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showFullDescription ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-disc space-y-2 mb-3 w-full ml-4 pr-6 md:pr-0 text-gray-300 mt-2">
          {description.map((descriptionLine) => {
            return (
              <li className="text-sm" key={descriptionLine.valueOf()}>
                {descriptionLine}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start">
        {tags.map((tag) => {
          return <Tag key={tag.valueOf()} title={tag} />;
        })}
      </div>
    </div>
  );
}
