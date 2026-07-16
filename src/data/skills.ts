import type { SkillCategory } from "@/types/common.types";
import { Cloud, Code2, Database, Radio, Server, ShieldCheck } from "lucide-react";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "React Native", "TailwindCSS", "JavaScript", "Java"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Redis"],
  },
  {
    id: "auth-payments",
    title: "Auth & Payments",
    icon: ShieldCheck,
    skills: ["JWT", "OTP", "Razorpay", "Stripe", "Google/Facebook Login"],
  },
  {
    id: "realtime",
    title: "Real-time",
    icon: Radio,
    skills: ["Socket.io", "WebRTC"],
  },
  {
    id: "state-storage",
    title: "State & Storage",
    icon: Database,
    skills: ["Redux", "Zustand", "Context API", "MMKV", "AsyncStorage"],
  },
  {
    id: "cloud-tools",
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS", "Firebase (Auth, FCM)", "Git", "Bitbucket", "Postman", "Axios"],
  },
];

export const TECH_STACK = [
  "React",
  "React Native",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "Redis",
  "Socket.io",
  "WebRTC",
  "Razorpay",
  "Firebase",
  "AWS",
  "Express.js",
];
