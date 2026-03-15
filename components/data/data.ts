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
    body: "React 19 and Next.js interfaces designed to stay fast, intentional, and easy to navigate as products scale.",
    Icon: FaReact,
  },
  {
    id: 2,
    title: "Migration Engineering",
    body: "Phased Angular + NgRx to React 19 + TypeScript 5 migrations with stable rollouts and zero business disruption.",
    Icon: SiNextdotjs,
  },
  {
    id: 3,
    title: "Design Engineering",
    body: "Pixel-perfect UI implementation in close collaboration with UX/UI designers — Bootstrap, Material-UI, Styled-Components, and SASS.",
    Icon: RiComputerLine,
  },
  {
    id: 4,
    title: "Backend APIs",
    body: "Node.js and Express REST APIs supporting real-time features, dynamic data retrieval, and mobile integration.",
    Icon: SiExpress,
  },
  {
    id: 5,
    title: "Type-Safe Workflows",
    body: "TypeScript across the stack — keeping components, API contracts, and data flows reliable and easier to evolve.",
    Icon: SiTypescript,
  },
  {
    id: 6,
    title: "State + Build Modernization",
    body: "Redux Toolkit patterns, Vite 7, Vitest, and modern lint/test workflows that improve delivery speed and confidence.",
    Icon: IoLogoNodejs,
  },
  {
    id: 7,
    title: "Data Modeling",
    body: "Both MongoDB (NoSQL) and PostgreSQL (relational) — schema design, queries, and state management for production applications.",
    Icon: SiMongodb,
  },
  {
    id: 8,
    title: "Delivery Discipline",
    body: "4+ years across Agile and Waterfall delivery, partnering with product, design, and engineering teams end to end.",
    Icon: RiComputerLine,
  },
];

export const spotlightMetrics: IMetric[] = [
  {
    id: 1,
    value: "4+",
    label: "Years Experience",
    detail: "Hands-on full-stack delivery from 2021 to present across modernization, migration, and product development.",
  },
  {
    id: 2,
    value: "3",
    label: "Companies",
    detail: "Kloze.Ai, Casperon Technologies, and Confluxus.io across US and India-based teams.",
  },
  {
    id: 3,
    value: "200%",
    label: "Visit Increase",
    detail: "SEO strategies and website modernization drove a 200% increase in unique visits.",
  },
  {
    id: 4,
    value: "10+",
    label: "Modules Rebuilt",
    detail: "Core modules migrated in a phased Angular-to-React modernization at Kloze.Ai.",
  },
];

export const workingPrinciples: IDetailCard[] = [
  {
    id: 1,
    title: "Migration Without Downtime",
    body: "Plan migrations in phases, preserve business continuity, and modernize safely without breaking critical user workflows.",
  },
  {
    id: 2,
    title: "Architecture That Scales",
    body: "Use modular frontend boundaries and service-oriented backend design so features can evolve quickly without monolith friction.",
  },
  {
    id: 3,
    title: "Design Sensibility + Engineering Discipline",
    body: "Strong focus on delivering responsive, visually appealing interfaces through close collaboration with UX/UI designers and pixel-perfect implementation.",
  },
  {
    id: 4,
    title: "Delivery Under Constraints",
    body: "Ship pragmatic solutions under timeline and resource pressure while keeping quality, maintainability, and user impact in focus.",
  },
];

export const experienceHighlights: IMetric[] = [
  {
    id: 1,
    value: "10+",
    label: "Modules Migrated",
    detail: "Dashboards, user management, and alert flows rebuilt during Angular-to-React migration at Kloze.Ai.",
  },
  {
    id: 2,
    value: "200%",
    label: "Visit Growth",
    detail: "SEO modernization initiatives at Casperon Technologies produced significant traffic gains.",
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
    phase: "Kloze.Ai, United States",
    title: "Fullstack Developer · June 2024 – Present",
    summary: "Leading a phased modernization of a legacy Angular 8 + NgRx product to React 19 + TypeScript 5 while protecting existing business workflows.",
    points: [
      "Spearheading phased migration from Angular 8 + NgRx to React 19 + TypeScript 5 with zero disruption to live operations.",
      "Rebuilt 10+ core modules including dashboards, user management, and critical alerts using a modular frontend architecture.",
      "Standardized global state management with Redux Toolkit patterns to reduce duplicated business logic.",
      "Implemented persistent authentication and filter-state restoration for continuity across complex user journeys.",
      "Modernized delivery workflow with Vite 7 and Vitest, resulting in faster iterations and more reliable releases.",
    ],
  },
  {
    id: 2,
    phase: "Casperon Technologies",
    title: "Software Developer · April 2022 – June 2024",
    summary: "Full-stack role focused on feature delivery, architecture modernization, and performance optimization across e-commerce and finance-facing web applications.",
    points: [
      "Worked with cross-functional teams to gather requirements and deliver new product features and enhancements.",
      "Developed reusable frontend systems using HTML5, CSS3, JavaScript (ES6+), React, and Next.js.",
      "Collaborated closely with UX/UI designers to implement pixel-perfect, responsive interfaces.",
      "Built RESTful APIs with Node.js for real-time features and dynamic data retrieval.",
      "Led mobile-centric web delivery and Microfrontend architecture adoption for better load distribution.",
      "Designed and integrated Microservice architecture, significantly reducing system load and enhancing efficiency.",
      "Drove SEO strategies and website modernization, resulting in a 200% increase in unique website visits.",
      "Collaborated with mobile developers to support backend integration across app and web experiences.",
      "Improved website speed through image optimization, caching strategies, and reduced unnecessary re-renders.",
      "Deployed software update that reduced system errors by 30% and improved application performance by 25%.",
    ],
  },
  {
    id: 3,
    phase: "Confluxus.io",
    title: "Software Developer · Sept 2021 – April 2022",
    summary: "Developed web applications for Fantasy Football predictors and sports data platforms, working across a React/Next.js/Node.js stack.",
    points: [
      "Built a React + Next.js application to streamline injury player tracking for fantasy football analysts.",
      "Implemented dynamic metadata and SEO improvements across multiple web applications.",
      "Collaborated in an agile team to test, debug, and optimize responsive UI performance.",
    ],
  },
  {
    id: 4,
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
    title: "Legacy-to-Modern Migration",
    body: "Leading phased migration from Angular 8 + NgRx to React 19 + TypeScript 5 with stable releases and uninterrupted operations.",
  },
  {
    id: 2,
    title: "Architecture for Scale",
    body: "Applied Microfrontend and Microservice architecture patterns to improve load distribution, maintainability, and system efficiency.",
  },
  {
    id: 3,
    title: "Measurable Product Outcomes",
    body: "Delivered quantifiable impact through SEO modernization and reliability work, including 200% traffic growth and 30% fewer system errors.",
  },
];

export const resumeHighlights: IMetric[] = [
  {
    id: 1,
    value: "4+ Yrs",
    label: "Experience",
    detail: "Full-stack delivery across Kloze.Ai, Casperon Technologies, and Confluxus.io from 2021 to present.",
  },
  {
    id: 2,
    value: "10+",
    label: "Modules Migrated",
    detail: "Core modules rebuilt during Angular-to-React modernization work at Kloze.Ai.",
  },
  {
    id: 3,
    value: "200%",
    label: "Visit Growth",
    detail: "SEO and modernization initiatives that significantly increased unique website traffic.",
  },
];

export const resumeCategories: IResumeCategory[] = [
  {
    id: 1,
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript 5", "React 19", "Next.js", "Angular", "Bootstrap", "SASS", "Material-UI", "Styled-Components", "jQuery"],
  },
  {
    id: 2,
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST API", "JWT", "WebSocket", "Microservices", "AJAX", "JSON", "XML"],
  },
  {
    id: 3,
    title: "State & Build",
    items: ["Redux Toolkit", "Vite 7", "Vitest", "Webpack", "ESLint"],
  },
  {
    id: 4,
    title: "Data, Tools & Workflow",
    items: ["MongoDB", "PostgreSQL", "Git", "GitHub", "GitLab", "BitBucket", "TortoiseSVN", "Jira", "Agile", "VS Code", "Sublime Text", "Notepad++"],
  },
];

export const resumeStrengths: IDetailCard[] = [
  {
    id: 1,
    title: "Migration Leadership",
    body: "Own end-to-end frontend modernization strategy, including phased rollout planning, state architecture, and safe legacy replacement.",
  },
  {
    id: 2,
    title: "Performance & Reliability",
    body: "Delivered measurable outcomes including 200% traffic growth, 30% fewer errors, and strong release confidence through modernization.",
  },
  {
    id: 3,
    title: "Agile Cross-Functional Delivery",
    body: "Comfortable across Agile and Waterfall SDLC, collaborating directly with designers, mobile developers, and stakeholders across distributed teams.",
  },
];
