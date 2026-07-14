import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { SiNextdotjs, SiTypescript, SiExpress, SiMongodb, SiSalesforce } from "react-icons/si";
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
    body: "React 19 and Next.js interfaces designed to stay fast, intentional, and easy to navigate as enterprise products scale.",
    Icon: FaReact,
  },
  {
    id: 2,
    title: "Migration Engineering",
    body: "Phased Angular 8 to React 19 migrations — rebuilding 12+ modules with stable rollouts and zero production disruption.",
    Icon: SiNextdotjs,
  },
  {
    id: 3,
    title: "AI-Powered Product Features",
    body: "AWS Bedrock (Claude) workflows for meeting intelligence, email summarization, CRM insights, and sales next-best actions.",
    Icon: RiRobot2Line,
  },
  {
    id: 4,
    title: "CRM & Workspace Integrations",
    body: "Salesforce, HubSpot, Gmail, Outlook, and Google Workspace Domain-Wide Delegation for enterprise auth and data sync.",
    Icon: SiSalesforce,
  },
  {
    id: 5,
    title: "Backend APIs",
    body: "Node.js, Express, and REST services — plus cross-microservice dashboards over Spring Boot APIs with Feign clients.",
    Icon: SiExpress,
  },
  {
    id: 6,
    title: "Type-Safe Workflows",
    body: "TypeScript across the stack — keeping components, API contracts, and data flows reliable and easier to evolve.",
    Icon: SiTypescript,
  },
  {
    id: 7,
    title: "State + Build Modernization",
    body: "Redux Toolkit patterns, Vite 7, Vitest, Webpack, ESLint, and Jest workflows that improve delivery speed and release confidence.",
    Icon: IoLogoNodejs,
  },
  {
    id: 8,
    title: "Architecture & Data",
    body: "Micro-frontend and microservice patterns with MongoDB and PostgreSQL — built for load distribution and maintainability.",
    Icon: SiMongodb,
  },
];

export const spotlightMetrics: IMetric[] = [
  {
    id: 1,
    value: "4.9",
    label: "Years Experience",
    detail: "Full-stack delivery from 2021 to present across CRM, sales, finance, e-commerce, and AI-assisted product work.",
  },
  {
    id: 2,
    value: "12+",
    label: "Modules Rebuilt",
    detail: "Core modules migrated in a phased Angular 8 to React 19 modernization at Kloze.Ai.",
  },
  {
    id: 3,
    value: "80%",
    label: "Fewer Errors",
    detail: "Software update at Kloze.Ai that cut system errors while improving rendering performance by 2.5×.",
  },
  {
    id: 4,
    value: "200%",
    label: "Visit Increase",
    detail: "SEO strategies and website modernization at Casperon drove a 200% increase in unique visits.",
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
    title: "AI That Ships on Real Data",
    body: "Ground generative AI features in CRM, email, and meeting data so insights are actionable for sales and operations teams.",
  },
  {
    id: 3,
    title: "Architecture That Scales",
    body: "Use modular frontend boundaries and service-oriented backend design so features evolve without monolith friction.",
  },
  {
    id: 4,
    title: "Delivery Under Constraints",
    body: "Ship pragmatic solutions under timeline pressure while keeping quality, security, and measurable business impact in focus.",
  },
];

export const experienceHighlights: IMetric[] = [
  {
    id: 1,
    value: "12+",
    label: "Modules Migrated",
    detail: "Dashboards, alerts, user management, and sales workflows rebuilt during Angular-to-React migration at Kloze.Ai.",
  },
  {
    id: 2,
    value: "2.5×",
    label: "Render Perf",
    detail: "Rendering performance improvement paired with an 80% reduction in system errors at Kloze.Ai.",
  },
  {
    id: 3,
    value: "40%",
    label: "Revenue Support",
    detail: "Contributed to initiatives supporting a 40% sales revenue increase through CRM dashboards and engagement insights.",
  },
  {
    id: 4,
    value: "200%",
    label: "Visit Growth",
    detail: "SEO modernization initiatives at Casperon Technologies produced significant traffic gains.",
  },
];

export const experienceJourney: IExperienceEntry[] = [
  {
    id: 1,
    phase: "Kloze.Ai, United States",
    title: "Fullstack Developer · June 2024 – Present",
    summary:
      "Building AI-driven sales intelligence on CRM and workspace data while leading a phased Angular 8 to React 19 modernization with no disruption to production workflows.",
    points: [
      "Built AI-driven sales intelligence workflows that analyze customer emails, meetings, and CRM data to generate lead summaries, company profiles, MEDDIC insights, and recommended next actions.",
      "Implemented AI-powered meeting intelligence using speech-to-text transcription and AWS Bedrock to generate summaries, extract decisions and action items, surface customer pain points, and perform sentiment analysis.",
      "Developed AI-powered email intelligence using the Gmail API and AWS Bedrock to summarize conversations, identify buying signals, and generate contextual CRM updates.",
      "Leading phased migration from legacy Angular 8 to React 19, rebuilding 12+ modules with no disruption to production workflows.",
      "Designed role-based Executive, Manager, and Seller dashboards with dynamic permission-based navigation for secure access to sales analytics and operational workflows.",
      "Developed CRM and email integration flows (Salesforce, Gmail, Outlook, HubSpot) and Google/Outlook SSO with persistent auth and session filter restoration.",
      "Delivered Critical Alerts, KAI Insights, User Management, and Excel export features supporting day-to-day sales operations.",
      "Developed Google Workspace Domain-Wide Delegation (DWD) integration for enterprise Gmail access without per-user OAuth, including Admin Directory API sync and DWD health verification.",
      "Built a cross-microservice SLA monitoring dashboard aggregating email sync, Salesforce CRM sync, and email write-back issues across 3 Spring Boot services using Feign clients and REST APIs.",
      "Deployed updates that reduced system errors by 80% and improved rendering performance by 2.5×; contributed to initiatives supporting a 40% increase in sales revenue.",
    ],
  },
  {
    id: 2,
    phase: "Casperon Technologies, India",
    title: "Software Developer · April 2022 – June 2024",
    summary:
      "Full-stack role focused on reusable React and Next.js systems, Node.js APIs, micro-frontend and microservice architecture, and measurable SEO and performance outcomes.",
    points: [
      "Developed reusable frontend systems using HTML5, CSS3, JavaScript (ES6+), React, and Next.js.",
      "Collaborated with UX/UI designers to implement pixel-perfect, responsive interfaces.",
      "Built RESTful APIs with Node.js to support real-time features and dynamic data retrieval.",
      "Led mobile-centric web delivery and micro-frontend architecture to optimize load distribution across existing projects.",
      "Designed and integrated microservice architecture, reducing system load and improving efficiency.",
      "Drove SEO modernization initiatives resulting in a 200% increase in unique website visits.",
      "Collaborated with mobile app developers on backend support and seamless web/app integration.",
      "Improved website speed through image optimization, caching strategies, and fewer unnecessary re-renders.",
      "Deployed a software update that reduced system errors by 30% and improved application performance by 25%.",
    ],
  },
  {
    id: 3,
    phase: "Confluxus.io, India",
    title: "Software Developer · Sept 2021 – April 2022",
    summary:
      "Built React and Next.js products for fantasy football and sports data platforms, with a focus on responsive UI, SEO, and agile delivery.",
    points: [
      "Built a React + Next.js application to streamline injury player tracking for fantasy football analysts, reducing identification time.",
      "Implemented responsive, adaptive UI components across desktop, tablet, and mobile with modern accessibility and usability standards.",
      "Implemented dynamic metadata and SEO optimizations across 3+ web applications, improving search visibility and organic reach.",
      "Collaborated in an agile team of 3 on testing, debugging, and performance optimization for reliable user interfaces.",
    ],
  },
  {
    id: 4,
    phase: "SRM, Chennai",
    title: "B.E. · Electronics Engineering · Graduated March 2020",
    summary:
      "Bachelor of Engineering in Electronics Engineering from SRM, Chennai. Bridged hardware fundamentals with a growing focus on software and web development.",
    points: [
      "Strong grounding in engineering principles and analytical problem-solving.",
      "Transitioned into full-stack web development post-graduation, building on technical foundations.",
    ],
  },
];

export const deliveryModes: IDetailCard[] = [
  {
    id: 1,
    title: "AI on Enterprise Workflows",
    body: "Shipped Bedrock-powered meeting, email, and CRM intelligence that turns real customer data into summaries, buying signals, and next actions for sales teams.",
  },
  {
    id: 2,
    title: "Legacy-to-Modern Migration",
    body: "Leading phased Angular 8 to React 19 modernization across 12+ modules with stable releases and uninterrupted operations.",
  },
  {
    id: 3,
    title: "Measurable Product Outcomes",
    body: "Delivered quantifiable impact including 80% fewer errors, 2.5× render performance, 200% traffic growth, and support for 40% sales revenue growth.",
  },
];

export const resumeHighlights: IMetric[] = [
  {
    id: 1,
    value: "4.9 Yrs",
    label: "Experience",
    detail: "Full-stack delivery across Kloze.Ai, Casperon Technologies, and Confluxus.io from 2021 to present.",
  },
  {
    id: 2,
    value: "12+",
    label: "Modules Migrated",
    detail: "Core modules rebuilt during Angular-to-React modernization work at Kloze.Ai.",
  },
  {
    id: 3,
    value: "80%",
    label: "Fewer Errors",
    detail: "Reliability win at Kloze.Ai paired with 2.5× rendering performance improvement.",
  },
];

export const resumeCategories: IResumeCategory[] = [
  {
    id: 1,
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React 19",
      "Next.js",
      "Angular",
      "Micro-Frontend Architecture",
      "SASS",
      "Bootstrap",
      "Material-UI",
      "Styled-Components",
      "Tailwind",
    ],
  },
  {
    id: 2,
    title: "Backend & APIs",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "Python",
      "Microservices",
      "JWT",
      "WebSocket",
      "Swagger",
      "Spring Boot (integration)",
    ],
  },
  {
    id: 3,
    title: "AI, Cloud & DevOps",
    items: [
      "AWS Bedrock",
      "Claude Code",
      "Cursor AI",
      "Prompt Engineering",
      "AWS",
      "Docker",
      "Jenkins",
      "CI/CD",
    ],
  },
  {
    id: 4,
    title: "State, Data & Tools",
    items: [
      "Redux Toolkit",
      "Vite 7",
      "Vitest",
      "Jest",
      "Webpack",
      "ESLint",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "GitHub",
      "GitLab",
      "BitBucket",
      "Jira",
    ],
  },
];

export const resumeStrengths: IDetailCard[] = [
  {
    id: 1,
    title: "AI + CRM Delivery",
    body: "Own AI-assisted sales workflows grounded in Salesforce, Gmail, Outlook, and HubSpot data — from summarization to MEDDIC insights and next actions.",
  },
  {
    id: 2,
    title: "Migration Leadership",
    body: "Own end-to-end frontend modernization strategy, including phased Angular-to-React rollout, role-based dashboards, and safe legacy replacement.",
  },
  {
    id: 3,
    title: "Performance & Business Impact",
    body: "Delivered measurable outcomes including 80% fewer errors, 2.5× render performance, 200% traffic growth, and support for 40% sales revenue growth.",
  },
];
