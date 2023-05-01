"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Title from "./utils/title";

export default function Hero() {
  return (
    <section className="flex-grow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-0 pb-0 mb-0 md:pt-0 md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"About Me"} />
            <div className="flex flex-wrap items-center text-justify">
              <div
                className="w-full text-l text-gray-200 md:w-5/12"
                data-aos="fade-left"
              >
                <p className="mb-6">
                  Hello and welcome to my portfolio site! My name's Praveen, and
                  I am currently pursuing a Computer Science degree in the
                  National University of Singapore (NUS).
                  <br />
                  <br />
                  In my free time, you will usually catch me lifting weights or
                  running. But I love staying active in many different ways,
                  including hiking and dancing!
                </p>
              </div>
              <div
                className="w-full md:w-5/12 mt-0 md:mt-0 ml-5 md:ml-16"
                data-aos="fade-right"
              >
                <img
                  src="./images/about-me-pic-2.jpg"
                  alt="Your Name"
                  className="w-auto h-60 self-center rounded-full"
                />
              </div>
              <div className="w-full md:w-[70%] mt-4 md:mt-8">
                <p>
                  <span className="font-semibold text-purple-400">
                    So Why Health-Tech?
                  </span>
                  <br />
                  Since my teenage years, I developed a passion for tech and
                  human anatomy — two seemingly different fields. However,
                  understanding the potentials of health-tech allowed me to
                  envision the fusion of both passions, into a prospective
                  career path. On top of this, I get to serve the people! It's a
                  win-win.
                  <br />
                  <br />
                  Thus, I am exploring the health-tech space, with the intention
                  to utilize machine learning technologies to improve healthcare
                  outcomes.
                </p>
                <br />
                <span className="font-semibold text-purple-400">
                  Some technologies I used recently
                </span>
                <br />
                <div className="flex flex-row space-x-4 mt-1 md:mt-2 mx-2 md:mx-4 md:w-1/2">
                  <ul className="flex-1 list-disc space-y-2">
                    <li>Numpy</li>
                    <li>PyTorch</li>
                  </ul>
                  <ul className="flex-1 list-disc space-y-2">
                    <li>TensorFlow</li>
                    <li>OpenCV</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
