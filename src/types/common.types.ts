import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email";
  url: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  features: string[];
  githubUrl?: string;
  webUrl?: string;
  androidUrl?: string;
  iOSUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export type SubmitStatus = "idle" | "success" | "error";

export interface BurstParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export interface ActivityMonth {
  month: string;
  intensity: 0 | 1 | 2 | 3 | 4;
  label: string;
}
