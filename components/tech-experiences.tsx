"use client";

import FullTimeTechExperience from "./utils/full-time-tech-experience";
import TechProject from "./utils/tech-projects";
import Title from "./utils/title";

export default function TechExperiences() {
  const workExperiences = [
    {
      position: "Cofounder + CTO",
      company: "GrowtricsAI",
      duration: "Jul 2024 - Present",
      description: [
        "Designing and implementing numerous LLM agentic workflows, involving Multi-Agent Orchestration, Structured Outputs, Reasoning, Vision, Realtime voice API, to power Growtrics' core business usecases. Usecases include but not limited to: Automatic Grading, Live Handwriting Recognition, Video Generation, Realtime Voice AI Tutoring, Learning Resource Generation.",
        "Training/Finetuning a variety of models, from CNNs to Transformers, to spearhead accuracy improvements in our handwriting recognition system.",
        "Architecting and building all internal and external apps used within Growtrics, and all its associated backend endpoints, primarily using Flutter, Firebase, and Flask.",
        "Leveraging broad tech expertise to aid in direction setting, product planning and operational activities alongside co-founder"
      ],
      tags: ["Automated Grading", "Handwriting Recognition", "Video Generation", "Realtime Voice AI Tutoring", "Learning Resource Generation"],
    },
    {
      position: "Data Scientist",
      company: "Aicadium",
      duration: "May 2023 - Aug 2023",
      description: [
        "Ensured reduction in costs to train YOLOX object detection models by 40%, through implementation of a training pipeline that utilizes SageMaker's Managed Spot Training",
        "Improved performance of Aicadium's best YOLOX model by 5% for small object detection, through custom image augmentations with Albumentations and hyperparameter tuning with Optuna",
        "Adapted the StreamPETR model to perform 3D Multi-view Object Detection using stationary cameras",
      ],
      tags: ["Pytorch", "Vision Transformer", "SageMaker", "YOLOX", "Albumentations", "Optuna"],
    },
    {
      position: "Head of Programmes",
      company: "Access Singapore (NGO)",
      duration: "Feb 2021 - May 2023",
      description: [
        "Led a 10-man team to design and execute career exploration programmes for underprivileged students.",
        "Mentored team members through frequent 1-on-1s, to work through their struggles and uplift team morale.",
        "Developed a set of training programmes and team assets, to ensure smooth onboarding of newcomers.",
      ],
      tags: ["Leadership", "Mentoring", "Career Education"],
    },
    {
      position: "Software Engineer",
      company: "Terraformers",
      duration: "May 2022 - Aug 2022",
      description: [
        "Implemented a mobile app from scratch using Flutter, to serve as a Web3 social platform for regenerative travel",
        "Integrated a custom map interface using Google Maps API, to display regenerative travel experiences near users",
        "Built a server using Express and deployed it on AWS EC2, to perform user authentication and data manipulation",
        "Configured a database and relevant schemas in MongoDB, to store data about users and travel experiences",
      ],
      tags: ["Flutter", "Node.js", "MongoDB", "AWS EC2"],
    },
    {
      position: "IT Innovation and UX Research Intern",
      company: "Singapore Police Force",
      duration: "May 2021 - Jul 2021",
      description: [
        "Designed a website using HTML5, to answer FAQs regarding the digital technologies used by officers",
        "Conducted 2 rounds of user testing with 10 officers to gather feedback on an internal mobile application (EEVA)",
        "Consolidated user sentiments on EEVA using Mural, thus aiding the delivery of improved UI mockups",
      ],
      tags: ["HTML5", "Figma"],
    },
  ];

  const projects = [
    {
      name: "Cyberlife",
      githubLink: "",
      productLink: "",
      duration: "Jul 2023 - Sep 2023",
      description: [
        "Developed a mobile app on Flutter that can reduce consultation times in spine clinics by 10%, through AI-powered triaging."
      ],
      tags: ["Flutter", "Healthcare"],
    },
    {
      name: "Synthetic generation of brain MRI scans",
      githubLink: "https://github.com/owen-yap/4catalyzer-hackathon",
      productLink: "",
      duration: "Jul 2023 - Jul 2023",
      description: [
        "Fine-tuned Stable Diffusion with InstructPix2Pix pipeline to curate synthetic brain MRI scans with inserted stroke lesions."
      ],
      tags: ["Stable Diffusion", "InstructPix2Pix", "MRI"],
    },
    {
      name: "Automated Essay Grading",
      githubLink: "",
      productLink: "https://www.tinyurl.com/AEGreport",
      duration: "Feb 2023 - May 2023",
      description: [
        "Investigated the use of LSTM + CNN layers for automated essay grading based on 6 scoring categories",
      ],
      tags: ["LSTM", "CNN", "BERT"],
    },
    {
      name: "Docedex",
      githubLink: "https://github.com/AY2223S2-CS2103T-F12-1/tp",
      productLink: "",
      duration: "Feb 2023 - May 2023",
      description: [
        "Architected and developed the UI and Storage components of a desktop patient management system using Java",
        "Curated a comprehensible User Guide and Developer Guide in Markdown, with appropriate use of UML diagrams",
      ],
      tags: ["Java", "JavaFX", "PlantUML"],
    },
    {
      name: "Guess Your Digit!",
      githubLink: "https://github.com/praveenkrishna0512/guess-your-digit",
      productLink: "",
      duration: "Nov 2022 - Nov 2022",
      description: [
        "Trained a Convolution Neutral Network using Pytorch and the MNIST database, to predict handwritten digits",
        "Developed a GUI using tkInter, to allow users to write digits on their screen and obtain a prediction",
      ],
      tags: ["PyTorch", "NumPy"],
    },
    {
      name: "JustShareLah!",
      githubLink: "https://github.com/summerthia02/JustShareLah",
      productLink: "",
      duration: "Apr 2022 - Aug 2022",
      description: [
        "Co-created a mobile app using Flutter and Firebase, to serve as a communal sharing platform within NUS",
        "Implemented extensive unit testing to ensure intended functionality of our app",
        "Leveraged GitHub Actions to automatically verify that no build errors exist, before pushing the builds to Releases",
        "Conducted regular code reviews with my team, to learn from our mistakes and keep updated on everyone's tasks",
      ],
      tags: ["Flutter", "Firebase"],
    },
    {
      name: "Shan Royale Bot",
      githubLink: "https://github.com/praveenkrishna0512/shan-royale-2022",
      productLink: "",
      duration: "Jul 2022 - Aug 2022",
      description: [
        "Built a Telegram bot using Python and SQLite to facilitate an orientation game involving 120 simultaneous players",
      ],
      tags: ["Python", "Telegram"],
    },
    {
      name: "Interseed.co",
      githubLink: "",
      productLink: "https://app.interseed.co",
      duration: "Mar 2022 - Nov 2022",
      description: [
        "Implemented a web feature with React.js, React-Bootstrap and MongoDB, to allow organisation focused on sustainability to post volunteering opportunities",
        "Improved existing frontend features through user testing and subsequent bug fixing"
      ],
      tags: ["React.js", "MongoDB", "Node.js", "React-Bootstrap"],
    },
    {
      name: "Jio Cup",
      githubLink: "https://github.com/praveenkrishna0512/JioCup2021",
      productLink: "",
      duration: "Aug 2021 - Sep 2021",
      description: [
        "Created a Python script for a college event, to scrape Telegram chats for keywords and track scores in a database"
      ],
      tags: ["Python"],
    },
  ];

  return (
    <section id="tech-experiences" className="mt-16 md:mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative md:pb-12">
          <div className="max-w-5xl mx-auto pb-12 md:pb-16" data-aos="fade-up">
            <Title title={"Experiences"} />
            <div className="mt-4 ml-[0.25rem]">
              <h4 className="h4 text-purple-400 mb-8">
                <em>Work Experiences</em>
              </h4>
              <div className="timeline">
                {workExperiences.map((exp, index) => (
                  <div
                    key={exp.company}
                    className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  >
                    <FullTimeTechExperience {...exp} />
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-[0.25rem]">
              <h4 className="h4 text-purple-400 mb-8 mt-12 md:mt-8">
                <em>Projects</em>
              </h4>
              <div className="timeline">
                {projects.map((project, index) => (
                  <div
                    key={project.name}
                    className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                  >
                    <TechProject {...project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
