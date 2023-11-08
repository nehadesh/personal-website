import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaCloud,
  FaDollarSign,
  FaLaptop,
  FaReact,
  FaTruck,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/neha_deshpande.png";
import rmtdevImg from "@/public/neha_deshpande.png";
import wordanalyticsImg from "@/public/neha_deshpande.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Recs",
    hash: "#recs",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    description:
      "I graduated with two degrees in 4.5 years: a B.S. in Computer Science and an M.S. in Machine Learning. While there I also worked as a TA for Data Structures and Algorithms, and a Graduate TA for Databases.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2017 - Dec 2021",
  },
  {
    title: "Software Engineer Intern @ Fiserv",
    location: "Atlanta, GA",
    description:
      "I was selected to work on a special Intern team under the CTO! I designed and developed an AWS tool to analyze posts on X (formerly Twitter) and summarize customer sentiment around various Fiserv products. This automated discovery of product issues by the tech team.",
    icon: React.createElement(FaDollarSign),
    date: "May 2019 - Aug 2019",
  },
  {
    title: "Software Engineer Intern @ Convoy",
    location: "Remote",
    description:
      "I worked on the Data/ ML platform team to develop a dashboard for our internal A/B testing platform. This improved experiment analysis for data scientists. I finished with time to spare so I also added a Slack webhook to alert scientists of changes made to their experiments.",
    icon: React.createElement(FaTruck),
    date: "May 2020 - Aug 2020",
  },
  {
    title: "Software Engineer Intern @ Salesforce",
    location: "Remote",
    description:
      "I worked on the 'Distributed Storage as a Service' team to implement a Kubernetes Job in Go that unlocks efficient vertical scaling in data pods. It works by modifying Persistent Volume Claims. This has led to a 75% reduction in disk storage costs over the long term.",
    icon: React.createElement(FaCloud),
    date: "May 2021 - Aug 2021",
  },
  {
    title: "Software Engineer II @ Convoy",
    location: "Seattle, WA",
    description:
      "After graduating with my masters, I started as an entry-level Software Engineer at Convoy - shipping full-stack web and React Native features in the mobile app. I was promoted within a year to Software Engineer II. During my time at Convoy, I launched a trailer return location selection feature which brought in $50k in weekly revenue. I also worked on several other features that contributed to reduced empty miles, saved engineering hours, and reduced costs for Convoy. I led several projects and organized team social events.",
    icon: React.createElement(FaTruck),
    date: "Jan 2022 - Nov 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const recsData = [
  {
    author: "Vikram Krishnamurthy",
    title: "Senior SWE @ Convoy",
    relation: "Technical Lead on projects I worked on",
    paragraphs: [
      "Neha will be a phenomenal contributor to any team and organization she is a part of, and I would jump at the chance to work with her again. She joined our team at Convoy as a new grad, and immediately demonstrated skills of mid and senior level engineers. ",
      "She quickly ramped up in the very complex space of trailer routing and rebalancing, revamped our new hire guides and on-call run-books, brought an infectiously positive attitude, dramatically raised the bar on the quality of our engineering design docs, is an extremely proactive and efficient communicator, and has an easy going attitude that made her fun to work with.",
      "We worked closely together on a few projects on Convoy (e.g. flexible trailer return locations), and I was amazed at the pace she was able to work while adhering to high code quality standards and writing comprehensive tests. She quickly became a go to for debugging and fixing issues, and she took ownership of several important and impactful extensions of the feature.",
    ],
    imageName: "vikram.jpg",
    linkedIn: "https://www.linkedin.com/in/vikram-krishnamurthy/",
  },
  {
    author: "Adam Anderson",
    title: "Senior Designer @ Convoy",
    relation: "Designer on projects I worked on",
    paragraphs: [
      "If you’re looking for a software engineer who brings an eye for detail and great intuition to your company, please contact Neha. Not only is she incredibly adept at the technical skills, but she is pleasure to be around. She is a wonderful partner to build products with and I will miss working with her. ",
    ],
    imageName: "adam.jpg",
    linkedIn: "https://www.linkedin.com/in/adamandersondesign/",
  },
  {
    author: "Aidan Sullivan",
    title: "PM @ Convoy",
    relation: "Program Manager for a project I led",
    paragraphs: [
      "Neha has been fantastic to work with! Smart, detailed-oriented, super thoughtful. Well liked and respected across a very high functioning team and org. Aside from her technical competencies, I was blown away by her communication and budding leadership skills, which reflect someone who is far beyond her years of experience! Any org. would be lucky to have Neha on their side!",
    ],
    imageName: "aidan.jpg",
    linkedIn: "https://www.linkedin.com/in/aidan-b-sullivan/",
  },
  {
    author: "Michael Manos",
    title: "CTO @ First Data (now Fiserv)",
    relation: "Internship Manager",
    paragraphs: [
      "Neha was simply a force of nature when it came to both demonstrating team leadership and delivering some incredibly complex code for the core product of the project. Demonstrating her strong leadership skills she quickly coalesced the team around the various development efforts. Despite not having first hand knowledge or experience with many of the technologies or concepts involved in the project, she fearlessly led the team ultimately delivering an incredibly successful project.",
      "Neha was one of a very select group of candidates to join a special internship program in the office of the Chief Technology Officer. This program focused on the successful delivery of a specific set of technologies to be used in our production environments over a ten week period. In addition to the technological challenges of the assignment, the program also focused on leadership, driving both accountability and responsibility for the delivery of the program in the hands of the interns themselves. ",
    ],
    imageName: "michael.jpg",
    linkedIn: "https://www.linkedin.com/in/mjmanos/",
  },
  {
    author: "Mikaela Blackler",
    title: "Principal PM @ Convoy",
    relation: "Product Manager for projects I worked on",
    paragraphs: [
      "I was a PM working with Neha at Convoy. First, she writes the most beautiful/comprehensive docs you've ever seen. Second, she is thoughtful and iterative, making sure she fully understands the business problem to make sure she's building the best solution. Third, she is an amazing team player - both in always being a positive energy and also in terms of being very supportive/helpful to everyone else on the team. Lastly, I'll say she was one of the nicest/kindest/smartest people I ever worked with. You want her on your team.",
    ],
    imageName: "mikaela.jpg",
    linkedIn: "https://www.linkedin.com/in/mikaela-blackler-5970b77/",
  },
];

export const skillsData = [
  "AWS",
  "Apollo",
  "CSS",
  "Django",
  "Docker",
  "EC2",
  "Express",
  "Git",
  "GraphQL",
  "HTML",
  "Kafka",
  "Kubernetes",
  "Lambda",
  "MySQL",
  "Next.js",
  "Node.js",
  "NumPy",
  "Pandas",
  "PostgreSQL",
  "PyTorch",
  "Python",
  "RDS",
  "React",
  "React Native",
  "Redis",
  "S3",
  "SNS",
  "SQS",
  "SciKit-Learn",
  "TypeScript",
] as const;
