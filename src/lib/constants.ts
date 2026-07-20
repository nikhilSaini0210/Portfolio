import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Briefcase, FileText, FolderGit2, Home, Mail, Sparkles, User } from "lucide-react";
import type { NavLink } from "@/types/common.types";

export const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  email: Mail,
};

export const THEME_STORAGE_KEY = "p-theme";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "hero", icon: Home },
  { label: "About", href: "about", icon: User },
  { label: "Skills", href: "skills", icon: Sparkles },
  { label: "Projects", href: "projects", icon: FolderGit2 },
  { label: "Experience", href: "experience", icon: Briefcase },
  { label: "Resume", href: "resume", icon: FileText },
  { label: "Contact", href: "contact", icon: Mail },
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
