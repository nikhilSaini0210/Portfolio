import type { SkillCategory } from "@/types/common.types";
import { Cloud, Code2, Database, Radio, Server, ShieldCheck } from "lucide-react";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "React Native", "TailwindCSS", "JavaScript", "Java"],
    color: "hue-6",
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Redis"],
    color: "hue-2",
  },
  {
    id: "auth-payments",
    title: "Auth & Payments",
    icon: ShieldCheck,
    skills: ["JWT", "OTP", "Razorpay", "Stripe", "Google/Facebook Login"],
    color: "hue-3",
  },
  {
    id: "realtime",
    title: "Real-time",
    icon: Radio,
    skills: ["Socket.io", "WebRTC"],
    color: "hue-4",
  },
  {
    id: "state-storage",
    title: "State & Storage",
    icon: Database,
    skills: ["Redux", "Zustand", "Context API", "MMKV", "AsyncStorage"],
    color: "hue-1",
  },
  {
    id: "cloud-tools",
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["AWS", "Firebase (Auth, FCM)", "Git", "Bitbucket", "Postman", "Axios"],
    color: "hue-5",
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
