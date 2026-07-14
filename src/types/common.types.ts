import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "email";
  url: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
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
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
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
