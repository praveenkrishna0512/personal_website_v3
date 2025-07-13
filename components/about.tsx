"use client";

import Title from "./utils/title";

export default function About() {
  return (
    <section id="about" className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-0 pb-0 mb-0 md:pt-0 md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"About Me"} />
            <div className="flex flex-row flex-wrap md:flex-nowrap items-start text-justify space-y-6 md:space-y-0 md:space-x-8 mb:mt-8">
              <div className="flex flex-col w-full md:w-[44%] space-y-3 items-center justify-start">
                <div className="flex flex-row space-x-6 items-center">
                  <div className="flex justify-center w-[60%] sm:w-[70%]">
                    <p>
                      Welcome! Praveen here, co-founder & CTO @ GrowtricsAI
                    </p>
                  </div>
                  <div
                    className="flex justify-center w-[40%] sm:w-[30%]"
                    data-aos="fade-right"
                  >
                    <img
                      src="./images/about-me-pic-2.jpg"
                      alt="My Picture!"
                      className="self-center rounded-full border-[6px] border-purple-900 border-double hover:shadow-[18px_10px_25px_-15px_#33363A]"
                    />
                  </div>
                </div>
                <div className="w-full" data-aos="fade-left">
                  <p>
                    In my free time, you will usually catch me lifting weights
                    or running. But I love staying active in many different
                    ways, including hiking and dancing!
                  </p>
                </div>
              </div>
              <div className="w-full mt-4 md:mt-0 md:w-[52%]">
                <p>
                  <span className="font-semibold text-purple-400 text-left">
                    My Journey
                  </span>
                  <br />
                  Since my teenage years, I developed a passion for helping uplift others through simple acts like free tutoring, as well as more coordinated efforts like organizing career education programmes for underprivileged students.
                  <br />
                  <br />
                  At the same time, I was in love with code. There was something about the logic and structure of code that always tickled my curiosity. Everything can be understood from first principles, though it looks like magic at first glance.
                  <br />
                  <br />
                  As I slowly figured out how to code and build useful products, I realized that I could combine my passions and build products that could help uplift others.
                  <br />
                  <br />
                  I hope to master the technicals, but we all know the old adage. "If you want to go fast, go alone; but if you want to go far, go together."
                  <br />
                  <br />
                  The ability to lead is extremely important to me, and I constantly work on how I can bring the best out of everyone around me - colleagues, friends, and family. I have a keen heart for mentorship, and I strive to continue learning how to best deliver this impact to others.
                </p>
                <br />
                {/* <div className="mt-4 md:mt-0">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
