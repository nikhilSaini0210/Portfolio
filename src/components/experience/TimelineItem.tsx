import { fadeInUp } from "@/lib/animations";
import type { ExperienceItem } from "@/types/common.types";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState, type FC } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { cn } from "@/lib/cn";

interface TimelineItemProps {
  item: ExperienceItem;
  isLast: boolean;
  index: number;
}

const TimelineItem: FC<TimelineItemProps> = ({ item, isLast, index }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const visibleResponsibilities = expanded
    ? item.responsibilities
    : item.responsibilities.slice(0, 2);

  return (
    <motion.div variants={fadeInUp} className="relative flex gap-lg">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-surface transition-colors duration-300",
            expanded
              ? "border-primary text-primary shadow-[0_0_12px_var(--color-primary)]"
              : "border-border text-text-muted"
          )}
        >
          <Briefcase className="h-4 w-4" aria-hidden="true" />
        </motion.div>
        {!isLast && (
          <div className="relative mt-xs w-px flex-1 overflow-hidden bg-border">
            <motion.div
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-primary to-accent"
              initial={{ height: "0%" }}
              whileInView={{ height: expanded ? "100%" : "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        )}
      </div>

      <Card
        hoverEffect
        spotlight
        className="mb-2xl flex-1 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex items-start justify-between gap-md">
          <div className="flex-1">
            <div className="flex flex-col gap-xs sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-display text-lg font-semibold text-text-primary">
                {item.position}
              </h3>
              <span className="font-mono text-xs text-text-muted">{item.duration}</span>
            </div>
            <p className="mt-[2px] text-sm font-medium text-primary">{item.company}</p>
            <p className="mt-[2px] text-xs text-text-muted">{item.location}</p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1 shrink-0 text-text-muted"
          >
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </motion.div>
        </div>

        <ul className="mt-md flex flex-col gap-xs">
          {visibleResponsibilities.map((point) => (
            <li key={point} className="flex items-start gap-sm text-sm text-text-secondary">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-text-muted" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {!expanded && item.responsibilities.length > 2 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-xs text-xs font-medium text-primary"
            >
              +{item.responsibilities.length - 2} more — click to expand
            </motion.p>
          )}
        </AnimatePresence>

        <div className="mt-md flex flex-wrap gap-sm">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default TimelineItem;
