"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "./utils/title";

export default function Hero() {
  return (
    <section className="flex-grow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-0 mb-0 md:pt-48 md:pb-12">
          {/* Section header */}
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"About Us"} />
            <div className="flex flex-wrap">
              <div
                className="w-full text-l text-gray-200 md:w-1/2"
                data-aos="fade-left"
              >
                <h5 className="h4 mb-4 text-purple-400">
                  <em>Exploring Machine Learning x Healthcare</em>
                </h5>
                <p className="mb-6  text-justify">
                  Currently pursuing a Bachelor's in Computer Science at the
                  National University of Singapore (NUS). Looking forward to
                  contribute to the health-tech space!
                </p>
                {/* <p className="mb-4">
                  In my free time, you will usually catch me lifting weights or running.
                  But I love staying active in many different ways, including hiking and dancing!
                </p> */}
              </div>
            </div>
            <div className="md:w-1/2 flex space-x-8" data-aos="fade-right">
              <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
              <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
              <FontAwesomeIcon icon={faEnvelope} className="fa-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
