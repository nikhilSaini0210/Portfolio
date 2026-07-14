import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/types/common.types";
import { motion } from "framer-motion";
import type { FC } from "react";
import Card from "../ui/Card";
import { CheckCircle2, ExternalLink } from "lucide-react";
import TechBadge from "./TechBadge";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card hoverEffect className="group flex h-full flex-col overflow-hidden p-0">
        <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-lg">
          <h3 className="text-lg font-semibold text-text-primary sm:text-xl">{project.title}</h3>
          <p className="mt-sm text-sm leading-relaxed text-text-secondary sm:text-base">
            {project.description}
          </p>

          <ul className="mt-md flex flex-col gap-xs">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-sm text-sm text-text-secondary">
                <CheckCircle2
                  className="mt-[2px] h-4 w-4 shrink-0 text-success"
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

          <div className="mt-lg flex items-center gap-md border-t border-border pt-lg">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
