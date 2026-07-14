import type { EducationItem, Stat } from "@/types/common.types";

export const ABOUT_STATS: Stat[] = [
  { label: "Years of Experience", value: "2.5+" },
  { label: "Companies Worked With", value: "4" },
  { label: "Projects Delivered", value: "6+" },
  { label: "Core Technologies", value: "15+" },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (CSE)",
    institution: "Jaypee University Anoopshahr",
    duration: "2015 – 2019",
    location: "Uttar Pradesh, India",
  },
];

export const ABOUT_INTRO = {
  greeting: "A bit about me",
  paragraphs: [
    "I'm a Full Stack Software Engineer with 2.5+ years of experience building scalable SaaS platforms, real-time systems, and fintech applications. My core strength lies in Node.js, React.js, and React Native — with hands-on expertise across API architecture, payment integrations, and high-performance mobile apps.",
    "Over the course of my career, I've shipped a production SaaS platform with full payments and OTP authentication, built real-time chat and video calling systems using WebRTC and Socket.io, engineered a live-streaming platform handling concurrent users, and delivered a fintech mobile app for international users.",
    "I care about writing production-grade, maintainable code — and I enjoy the craft of turning complex requirements into fast, reliable, and delightful user experiences.",
  ],
};

export const INTERESTS: string[] = [
  "Real-time Systems",
  "API Architecture",
  "Mobile Performance",
  "Fintech Products",
  "Open Source",
  "UI/UX Craftsmanship",
];
