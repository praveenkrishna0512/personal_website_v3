"use client";

import Link from "next/link";
import { useState } from "react";
import Tag from "./tag";

interface TechProjectProps {
  index: number;
  name: string;
  githubLink: string;
  productLink: string;
  duration: string;
  description: string[];
  tags: string[];
}

export default function TechProject({
  index,
  name,
  githubLink,
  productLink,
  duration,
  description,
  tags,
}: TechProjectProps) {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <button
      className="w-full rounded-lg text-left p-5 mb-2 md:mb-6 border-purple-600 shadow-[-3px_-3px_12px_-8px_#8D8DFF] hover:border "
      onClick={toggleList}
    >
      <div className="flex flex-row">
        <h5 className="h5 font-semibold text-purple-400 mr-3">0{index}</h5>
        <div className="flex flex-grow flex-col items-start">
          <h5 className="h5 font-semibold mb-1">{name}</h5>
          <span className="mb-2 ml-[0.12rem]">{duration}</span>
          {showList && (
            <div className="text-sm mb-2">
              <ul className="list-disc space-y-2 mb-2 w-full md:w-full md:ml-4 text-gray-300">
                {description.map((descriptionLine) => {
                  return (
                    <li key={descriptionLine.valueOf()}>{descriptionLine}</li>
                  );
                })}
              </ul>
              <div className="text-purple-400">
                {productLink ? (
                  <a
                    target="_blank"
                    href={productLink}
                    rel="noopener noreferrer"
                  >
                    <em>Click here to look at the product!</em>
                  </a>
                ) : (
                  <></>
                )}
                {githubLink ? (
                  <a
                    target="_blank"
                    href={githubLink}
                    rel="noopener noreferrer"
                  >
                    <em>Click here to look through the GitHub repository!</em>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-row items-start space-x-2">
            {tags.map((tag) => {
              return <Tag key={tag.valueOf()} title={tag} />;
            })}
          </div>
        </div>
      </div>
    </button>
  );
}
