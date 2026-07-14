import type { Project } from "@/types/common.types";

export const PROJECTS: Project[] = [
  {
    id: "scoreboat",
    title: "ScoreBoat — AI Powered Web & Mobile Application",
    description:
      "A full-stack SaaS platform for student exam preparation, using AI-based question generation and learning tools. Built across React (web), React Native (Android), and a Node.js backend.",
    image: "/images/projects/scoreboat.png",
    technologies: ["React", "React Native", "Node.js", "MongoDB", "Razorpay", "JWT", "OTP"],
    features: [
      "Secure JWT + OTP authentication with WhatsApp/SMS fallback",
      "Razorpay payments with webhook handling and subscription lifecycle",
      "PDF invoice generation with Unicode support and branding",
      "Centralized Axios API layer with auto-refresh tokens",
    ],
    githubUrl: "https://github.com/nikhilSaini0210/AI-Learning.git",
    liveUrl: "https://scoreboat.com",
    featured: true,
  },
  {
    id: "jamrack",
    title: "JamRack — Live Streaming Application",
    description:
      "A real-time live streaming and video calling application built with WebRTC and Socket.io, enabling users to interact and communicate in real-time with low latency.",
    image: "/images/projects/jamrack.png",
    technologies: ["React Native", "Node.js", "WebRTC", "Socket.io"],
    features: [
      "Real-time video/audio calling (1:1 and group)",
      "Scalable signaling servers for low-latency communication",
      "Live streaming with support for concurrent users",
    ],
    githubUrl: "https://github.com/nikhilSaini0210/JamRack-App.git",
    liveUrl: "https://play.google.com/store/apps/details?id=com.jamrack&pcampaignid=web_share",
    featured: true,
  },
];
