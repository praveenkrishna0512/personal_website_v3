"use client";

import { useState, useEffect } from "react";
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
    }
  };

  const showFullDescription = isExpanded || isHovered;

  return (
    <div
      className="content cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h5 className="h5 font-semibold mb-1">
        {position} <span className="text-purple-400">@ {company}</span>
      </h5>
      <span className="mb-2 ml-[0.12rem] text-sm text-gray-400">
        {duration}
      </span>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showFullDescription
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
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
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start">
        {tags.map((tag) => {
          return <Tag key={tag.valueOf()} title={tag} />;
        })}
      </div>
    </div>
  );
}
