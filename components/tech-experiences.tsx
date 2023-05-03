"use client";

import FullTimeTechExperience from "./utils/full-time-tech-experience";
import TechProject from "./utils/tech-projects";
import Title from "./utils/title";

export default function TechExperiences() {
  return (
    <section className="mt-16 md:mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"Tech Experiences"} />
            <div className="mt-4 ml-[0.25rem]">
              <h4 className="h4 text-purple-400 mb-8">
                <em>Internships</em>
              </h4>
              <FullTimeTechExperience
                index={1}
                position={"Software Engineer Intern"}
                company={"Terraformers"}
                duration={"May 2022 - Aug 2022"}
                description={[
                  "Implemented a mobile app from scratch using Flutter, to serve as a Web3 social platform for regenerative travel",
                  "Integrated a custom map interface using Google Maps API, to display regenerative travel experiences near users",
                  "Built a server using Express and deployed it on AWS EC2, to perform user authentication and data manipulation",
                  "Configured a database and relevant schemas in MongoDB, to store data about users and travel experiences",
                ]}
                tags={["Flutter", "Node.js", "MongoDB", "AWS EC2"]}
              />
              <FullTimeTechExperience
                index={2}
                position={"IT Innovation and UX Research Intern"}
                company={"Singapore Police Force"}
                duration={"May 2021 - Jul 2021"}
                description={[
                  "Designed a website using HTML5, to answer FAQs regarding the digital technologies used by officers",
                  "Conducted 2 rounds of user testing with 10 officers to gather feedback on an internal mobile application (EEVA)",
                  "Consolidated user sentiments on EEVA using Mural, thus aiding the delivery of improved UI mockups",
                ]}
                tags={["HTML5", "Figma"]}
              />
            </div>
            <div className="ml-[0.25rem]">
              <h4 className="h4 text-purple-400 mb-8 mt-12 md:mt-8">
                <em>Projects</em>
              </h4>
              <TechProject
                index={1}
                name={"Guess Your Digit!"}
                githubLink={
                  "https://github.com/praveenkrishna0512/guess-your-digit"
                }
                productLink={""}
                duration={"Nov 2022 - Nov 2022"}
                description={[
                  "Trained a Convolution Neutral Network using Pytorch and the MNIST database, to predict handwritten digits",
                  "Developed a GUI using tkInter, to allow users to write digits on their screen and obtain a prediction",
                ]}
                tags={["PyTorch", "NumPy"]}
              />
              <TechProject
                index={2}
                name={"JustShareLah!"}
                githubLink={"https://github.com/summerthia02/JustShareLah"}
                productLink={""}
                duration={"Apr 2022 - Aug 2022"}
                description={[
                  "Co-created a mobile app using Flutter and Firebase, to serve as a communal sharing platform within NUS",
                  "Implemented extensive unit testing to ensure intended functionality of our app",
                  "Leveraged GitHub Actions to automatically verify that no build errors exist, before pushing the builds to Releases",
                  "Conducted regular code reviews with my team, to learn from our mistakes and keep updated on everyone’s tasks",
                ]}
                tags={["Flutter", "Firebase"]}
              />
              <TechProject
                index={3}
                name={"Shan Royale Bot"}
                githubLink={
                  "https://github.com/praveenkrishna0512/shan-royale-2022"
                }
                productLink={""}
                duration={"Jul 2022 - Aug 2022"}
                description={[
                  "Built a Telegram bot using Python and SQLite to facilitate an orientation game involving 120 simultaneous players",
                ]}
                tags={["Python", "Telegram"]}
              />
              <TechProject
                index={4}
                name={"Interseed.co"}
                githubLink={""}
                productLink={"https://app.interseed.co"}
                duration={"Mar 2022 - Nov 2022"}
                description={[
                  "Implemented a web feature with React.js, React-Bootstrap and MongoDB, to allow organisation focused on sustainability to post volunteering opportunities",
                  "Improved existing frontend features through user testing and subsequent bug fixing"
                ]}
                tags={["React.js", "MongoDB", "Node.js", "React-Bootstrap"]}
              />
              <TechProject
                index={5}
                name={"Jio Cup"}
                githubLink={
                  "https://github.com/praveenkrishna0512/JioCup2021"
                }
                productLink={""}
                duration={"Aug 2021 - Sep 2021"}
                description={[
                  "Created a Python script for a college event, to scrape Telegram chats for keywords and track scores in a database"
                ]}
                tags={["Python"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
