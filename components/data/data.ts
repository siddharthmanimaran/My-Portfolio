import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import {
  IAboutData,
  IDetailCard,
  IExperienceEntry,
  IMetric,
  IResumeCategory,
} from "./type";

export const aboutData: IAboutData[] = [
  {
    id: 1,
    title: "Frontend Systems",
    body: "React and Next.js interfaces designed to feel fast, intentional, and easy to navigate.",
    Icon: FaReact,
  },
  {
    id: 2,
    title: "Design Engineering",
    body: "Pixel-perfect UI implementation in close collaboration with UX/UI designers — Bootstrap, Material-UI, Styled-Components, and SASS.",
    Icon: SiNextdotjs,
  },
  {
    id: 3,
    title: "Backend APIs",
    body: "Node.js and Express REST APIs supporting real-time features, dynamic data retrieval, and mobile app backend integration.",
    Icon: IoLogoNodejs,
  },
  {
    id: 4,
    title: "Type-Safe Workflows",
    body: "TypeScript across the stack — keeping components, API contracts, and data flows reliable and easier to evolve.",
    Icon: SiTypescript,
  },
  {
    id: 5,
    title: "Data Modeling",
    body: "Both MongoDB (NoSQL) and PostgreSQL (relational) — schema design, queries, and state management for production applications.",
    Icon: SiPostgresql,
  },
  {
    id: 6,
    title: "Delivery Discipline",
    body: "Full SDLC experience — Agile and Waterfall — with a track record of leading projects from concept to deployment within strict timelines.",
    Icon: RiComputerLine,
  },
];

export const spotlightMetrics: IMetric[] = [
  {
    id: 1,
    value: "3+",
    label: "Years Experience",
    detail: "Hands-on full-stack delivery across modern web stacks from 2021 to 2024.",
  },
  {
    id: 2,
    value: "2",
    label: "Companies",
    detail: "Casperon Technologies and Confluxus.io — spanning e-commerce, finance, and sports tech.",
  },
  {
    id: 3,
    value: "200%",
    label: "Visit Increase",
    detail: "SEO strategies and website modernization drove a 200% increase in unique visits.",
  },
  {
    id: 4,
    value: "30%",
    label: "Fewer Errors",
    detail: "Software update deployment cut system errors by 30% and improved performance by 25%.",
  },
];

export const workingPrinciples: IDetailCard[] = [
  {
    id: 1,
    title: "Design Sensibility + Engineering Discipline",
    body: "Strong focus on delivering responsive, visually appealing interfaces through close collaboration with UX/UI designers and pixel-perfect implementation.",
  },
  {
    id: 2,
    title: "Architecture That Scales",
    body: "From Microfrontend load distribution to Microservice decoupling — building systems designed to grow without becoming a burden to maintain.",
  },
  {
    id: 3,
    title: "Delivery Under Constraints",
    body: "Demonstrated adaptability and problem-solving skills, consistently delivering solutions within strict timelines and resource constraints.",
  },
];

export const experienceHighlights: IMetric[] = [
  {
    id: 1,
    value: "200%",
    label: "Visit Growth",
    detail: "SEO strategies and website modernization initiatives at Casperon Technologies.",
  },
  {
    id: 2,
    value: "30%",
    label: "Error Reduction",
    detail: "Targeted software deployment cut system errors and improved overall application reliability.",
  },
  {
    id: 3,
    value: "25%",
    label: "Perf Gain",
    detail: "Application performance boost through image optimization, caching, and reduced re-renders.",
  },
];

export const experienceJourney: IExperienceEntry[] = [
  {
    id: 1,
    phase: "Casperon Technologies",
    title: "Software Developer · April 2022 – June 2024",
    summary: "Full-stack role focused on feature delivery, architecture modernization, and performance optimization across e-commerce and finance-facing web applications.",
    points: [
      "Built pixel-perfect UIs using HTML5, CSS3, JavaScript (ES6+), React, and Next.js in close collaboration with UX/UI designers.",
      "Led Microfrontend architecture implementation to optimize user load distribution across existing projects.",
      "Designed and integrated Microservice architecture, significantly reducing system load and enhancing efficiency.",
      "Built RESTful APIs with Node.js to support real-time features and dynamic data retrieval.",
      "Drove SEO strategies and website modernization, resulting in a 200% increase in unique website visits.",
      "Deployed software update that reduced system errors by 30% and improved application performance by 25%.",
      "Optimized performance through image optimization, caching strategies, and reducing unnecessary re-renders.",
    ],
  },
  {
    id: 2,
    phase: "Confluxus.io",
    title: "Software Developer · September 2021 – April 2022",
    summary: "Developed web applications for Fantasy Football predictors and sports data platforms, working across a React/Next.js/Node.js stack.",
    points: [
      "Developed a ReactJS web application that streamlined management of injury player lists for Fantasy Football Predictors.",
      "Significantly reduced the time required to identify current injury players in the application.",
      "Implemented dynamic metadata to optimize website pages for SEO purposes.",
      "Built 3+ responsive web applications using React with smooth UI performance.",
      "Performed testing and debugging source code within an agile team of 3 individuals.",
    ],
  },
  {
    id: 3,
    phase: "SRM, Chennai",
    title: "B.Tech · Electronics Engineering · Graduated March 2020",
    summary: "Bachelor of Technology in Electronics Engineering from SRM University, Chennai. Bridged hardware fundamentals with a growing focus on software and web development.",
    points: [
      "Strong grounding in engineering principles and analytical problem-solving.",
      "Transitioned into full-stack web development post-graduation, building on technical foundations.",
    ],
  },
];

export const deliveryModes: IDetailCard[] = [
  {
    id: 1,
    title: "Microfrontend & Microservices",
    body: "Led architecture changes at Casperon that decoupled frontend modules and reduced back-end load — improving both scalability and deployment confidence.",
  },
  {
    id: 2,
    title: "SEO & Performance",
    body: "Drove a 200% increase in unique visits through SEO modernization and performance work — faster pages, better metadata, and optimized rendering.",
  },
  {
    id: 3,
    title: "Cross-Functional Collaboration",
    body: "Worked closely with designers, mobile developers, and clients from e-commerce and finance to translate requirements into reliable, user-centric features.",
  },
];

export const resumeHighlights: IMetric[] = [
  {
    id: 1,
    value: "3 Yrs",
    label: "Experience",
    detail: "Full-stack delivery at Casperon Technologies and Confluxus.io from 2021 to 2024.",
  },
  {
    id: 2,
    value: "200%",
    label: "Visit Growth",
    detail: "SEO and modernization work that tripled unique website traffic.",
  },
  {
    id: 3,
    value: "30%",
    label: "Error Reduction",
    detail: "Targeted software deployment that cut system errors and boosted app performance by 25%.",
  },
];

export const resumeCategories: IResumeCategory[] = [
  {
    id: 1,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Redux", "Bootstrap", "SASS", "Material-UI", "Styled-Components", "jQuery"],
  },
  {
    id: 2,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API", "JWT", "WebSocket", "Microservices", "AJAX"],
  },
  {
    id: 3,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "GitLab", "BitBucket", "Jira", "ESLint", "Webpack", "Agile", "VS Code"],
  },
];

export const resumeStrengths: IDetailCard[] = [
  {
    id: 1,
    title: "Architecture Leadership",
    body: "Led Microfrontend and Microservice architecture implementations that improved scalability, deployment isolation, and system load distribution.",
  },
  {
    id: 2,
    title: "Performance & SEO",
    body: "Delivered measurable results — 200% more visits via SEO work, 30% fewer errors and 25% better performance through targeted optimization.",
  },
  {
    id: 3,
    title: "Agile Cross-Functional Delivery",
    body: "Experienced in SDLC across Agile and Waterfall, collaborating with designers, mobile developers, and clients across e-commerce and finance sectors.",
  },
];
