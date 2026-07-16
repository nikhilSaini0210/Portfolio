import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/types/common.types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type FC } from "react";
import Card from "../ui/Card";
import { CheckCircle2 } from "lucide-react";
import TechBadge from "./TechBadge";
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { cn } from "@/lib/cn";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <motion.div variants={fadeInUp}>
      <Card
        hoverEffect
        className="group relative flex h-full flex-col overflow-hidden p-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setActiveImage(0);
        }}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImage}
              src={project.images[activeImage]}
              alt={`${project.title} preview ${activeImage + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </AnimatePresence>
          <div className="from-bg-primary/40 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(idx);
                  }}
                  aria-label={`Show image ${idx + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-lg">
          <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-sm text-sm leading-relaxed text-text-secondary sm:text-base">
            {project.description}
          </p>

          <ul className="mt-md flex flex-col gap-xs">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-sm text-sm text-text-secondary">
                <CheckCircle2
                  className="mt-[2px] h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-lg flex flex-wrap gap-sm">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>

          <div className="mt-lg flex flex-wrap items-center gap-md border-t border-border pt-lg">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FaGithub className="h-4 w-4" aria-hidden="true" /> Code
              </a>
            )}
            {project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <HiOutlineGlobeAlt className="h-4 w-4" aria-hidden="true" /> Website
              </a>
            )}
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FaAndroid className="h-4 w-4" aria-hidden="true" /> Android
              </a>
            )}
            {project.iOSUrl && (
              <a
                href={project.iOSUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <FaApple className="h-4 w-4" aria-hidden="true" /> iOS
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
