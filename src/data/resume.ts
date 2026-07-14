import type { Achievement, Certification } from "@/types/common.types";

// No certifications currently listed on the resume.
// Add entries here when available — the section will render automatically once populated.
export const CERTIFICATIONS: Certification[] = [];

export const KEY_ACHIEVEMENTS: Achievement[] = [
  {
    id: "scoreboat-saas",
    text: "Built and deployed a production SaaS platform (ScoreBoat) with payments integration, OTP authentication, and invoice system.",
  },
  {
    id: "realtime-systems",
    text: "Developed real-time chat and video calling systems using WebRTC and Socket.io, enabling low-latency communication.",
  },
  {
    id: "live-streaming",
    text: "Engineered a live streaming platform capable of handling concurrent users with a scalable Node.js backend.",
  },
  {
    id: "fintech-app",
    text: "Delivered a fintech mobile application (AEON Net Banking) for international users with secure API integrations and transaction flows.",
  },
];

export const RESUME_FILE_PATH = "/resume.pdf";
