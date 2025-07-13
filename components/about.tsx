"use client";

import Title from "./utils/title";

export default function About() {
  return (
    <section id="about" className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-0 pb-0 mb-0 md:pt-0 md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"About Me"} />
            <div className="flex flex-col space-y-8 mt-8">
              {/* Top Row - Photo, Name and Beyond Tech */}
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                {/* Photo and Name Section */}
                <div className="flex flex-row space-x-6 items-center md:w-1/2">
                  <div
                    className="flex justify-center w-[40%] sm:w-[30%]"
                    data-aos="fade-right"
                  >
                    <img
                      src="./images/about-me-pic-2.jpg"
                      alt="My Picture!"
                      className="self-center rounded-full border-[6px] border-purple-900 border-double hover:shadow-[18px_10px_25px_-15px_#33363A] transition-shadow duration-300"
                    />
                  </div>
                  <div className="flex justify-center w-[60%] sm:w-[70%]">
                    <p className="text-xl">
                      <span className="font-bold text-purple-400">Praveen Krishna</span>
                      <br/>
                      <span className="text-gray-300">Cofounder & CTO @ GrowtricsAI</span>
                    </p>
                  </div>
                </div>
                
                {/* Beyond Tech Section */}
                <div className="md:w-1/2 text-center space-y-4 p-6 bg-gray-800/30 rounded-lg shadow-inner" data-aos="fade-left">
                  <h3 className="h4 text-purple-400 mb-4 text-left">
                    Beyond Tech
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    In my free time, you will usually catch me lifting weights or running. But I love staying active in many different ways, including hiking and dancing!
                  </p>
                </div>
              </div>
              
              {/* Bottom Row - Who I am and My Philosophy */}
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                {/* Who I am Section */}
                <div className="md:w-1/2 p-6 bg-gray-800/30 rounded-lg">
                  <h3 className="h4 text-purple-400 mb-4 text-left">
                    Who I am
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Since my teenage years, I developed a passion for helping uplift others through simple acts like free tutoring, as well as more coordinated efforts like organizing career education programmes for underprivileged students.
                    <br /><br />
                    At the same time, I was in love with code. There was something about the logic and structure of code that always tickled my curiosity. Everything can be understood from first principles, though it looks like magic at first glance.
                  </p>
                </div>
                
                {/* My Philosophy Section */}
                <div className="md:w-1/2 p-6 bg-gray-800/30 rounded-lg">
                  <h3 className="h4 text-purple-400 mb-4 text-left">
                    My Philosophy
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    As I slowly figured out how to code and build useful products, I realized that I could combine my passions and build products that could help uplift others. I hope to master the technicals, but we all know the old adage. "If you want to go fast, go alone; but if you want to go far, go together."
                    <br /><br />
                    The ability to lead is extremely important to me, and I constantly work on how I can bring the best out of everyone around me - colleagues, friends, and family. I have a keen heart for mentorship, and I strive to continue learning how to best deliver this impact to others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
