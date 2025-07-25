"use client";

import Link from "next/link";
import Tag from "./tag";
import { useState, useEffect } from "react";

interface TechProjectProps {
  name: string;
  githubLink: string;
  productLink: string;
  duration: string;
  description: string[];
  tags: string[];
}

export default function TechProject({
  name,
  githubLink,
  productLink,
  duration,
  description,
  tags,
}: TechProjectProps) {
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
      <h5 className="h5 font-semibold mb-1">{name}</h5>
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
          <div className="text-sm mb-2">
            <ul className="list-disc space-y-2 mb-3 w-full ml-4 pr-6 md:pr-0 text-gray-300 mt-2">
              {description.map((descriptionLine) => {
                return <li key={descriptionLine.valueOf()}>{descriptionLine}</li>;
              })}
            </ul>
            <div className="text-purple-400 space-x-4">
              {productLink && (
                <a target="_blank" href={productLink} rel="noopener noreferrer">
                  <em>Product Link</em>
                </a>
              )}
              {githubLink && (
                <a target="_blank" href={githubLink} rel="noopener noreferrer">
                  <em>GitHub</em>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start mt-3">
        {tags.map((tag) => {
          return <Tag key={tag.valueOf()} title={tag} />;
        })}
      </div>
    </div>
  );
}
