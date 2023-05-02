"use client";

import FullTimeTechExperience from "./utils/full-time-tech-experience";
import Title from "./utils/title";

export default function TechExperiences() {
  return (
    <section className="mt-4 md:mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-0 pb-0 mb-0 md:pt-0 md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"Tech Experiences"} />
            <div className="md:ml-[0.25rem] md:w-[79%]">
              <h4 className="h4 text-purple-400 md:mb-8"><em>Internships</em></h4>
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
