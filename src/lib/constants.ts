import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";
import type { NavLink } from "@/types/common.types";

export const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  email: Mail,
};

export const THEME_STORAGE_KEY = "p-theme";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Resume", href: "resume" },
  { label: "Contact", href: "contact" },
];

export const SITE_CONFIG = {
  name: "Nikhil Saini",
  title: "Full Stack & React Native Developer",
  email: "nikhilsaini0210@gmail.com",
  phone: "+91-9837669528",
  location: "Bulandshahr, UP, India",
  github: "https://github.com/nikhilSaini0210",
  linkedin: "https://www.linkedin.com/in/nikhil-saini-6429a6138",
};

export const SCROLL_OFFSET = 80;
