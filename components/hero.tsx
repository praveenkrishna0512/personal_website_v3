"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { linkedInLink, githubLink, emailLink } from "./data/links";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-12 mb-0 md:pt-48 md:pb-20">
          {/* Section header */}
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <span>Hello, my name is</span>
            <h1 className="h1 mt-2 mb-2 font-semibold">
              <span data-aos="fade-up">Praveen Krishna</span>
            </h1>
            <div className="flex flex-wrap">
              <div
                className="w-full text-l text-gray-200"
                data-aos="fade-left"
              >
                <h5 className="h4 mb-4 text-purple-400 font-semibold">
                  <em>Exploring Machine Learning x Healthcare</em>
                </h5>
                <p className="mb-6  text-justify  md:w-3/4">
                  Currently pursuing a Bachelor's in Computer Science at the
                  National University of Singapore (NUS). Looking forward to
                  contribute to the health-tech space!
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex space-x-8" data-aos="fade-right">
              <Link href={linkedInLink}>
                <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
              </Link>
              <Link href={githubLink}>
                <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
              </Link>
              <Link href={emailLink}>
                <FontAwesomeIcon icon={faEnvelope} className="fa-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
