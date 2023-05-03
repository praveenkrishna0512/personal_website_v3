"use client";

import Title from "./utils/title";

export default function About() {
  return (
    <section className="mt-4 md:mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-0 pb-0 mb-0 md:pt-0 md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"About Me"} />
            <div className="flex flex-wrap items-center text-justify w-[90%] md:w-[80%]">
              <div
                className="w-full text-l text-gray-200 md:w-[65%] lg:w-[75%]"
                data-aos="fade-left"
              >
                <p>
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
                className="flex justify-center w-full py-8 md:w-[35%] lg:w-[25%] md:pr-2 md:pl-8 md:py-0"
                data-aos="fade-right"
              >
                <img
                  src="./images/about-me-pic-2.jpg"
                  alt="My Picture!"
                  className="w-auto h-40 self-center rounded-full border-[6px] border-purple-900 border-double hover:shadow-[18px_10px_25px_-15px_#33363A]"
                />
              </div>
              <div className="w-full md:w-full mt-2 md:mt-4">
                <p>
                  <span className="font-semibold text-purple-400 text-left">
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
                <div className="mt-4 md:mt-0">
                  <span className="font-semibold text-purple-400">
                    Tech I used recently
                  </span>
                  <br />
                  <div className="flex flex-row space-x-4 mt-2 mx-4 md:w-1/2">
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
      </div>
    </section>
  );
}
