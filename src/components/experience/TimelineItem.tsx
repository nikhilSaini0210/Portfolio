import { fadeInUp } from "@/lib/animations";
import type { ExperienceItem } from "@/types/common.types";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { FC } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface TimelineItemProps {
  item: ExperienceItem;
  isLast: boolean;
}

const TimelineItem: FC<TimelineItemProps> = ({ item, isLast }) => {
  return (
    <motion.div variants={fadeInUp} className="relative flex gap-lg">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface text-primary">
          <Briefcase className="h-4 w-4" aria-hidden="true" />
        </div>
        {!isLast && <div className="mt-xs w-px flex-1 bg-border" />}
      </div>

      <Card className="mb-2xl flex-1">
        <div className="flex flex-col gap-xs sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-text-primary">{item.position}</h3>
          <span className="font-mono text-xs text-text-muted">{item.duration}</span>
        </div>
        <p className="mt-[2px] text-sm font-medium text-primary">{item.company}</p>
        <p className="mt-[2px] text-xs text-text-muted">{item.location}</p>

        <ul className="mt-md flex flex-col gap-xs">
          {item.responsibilities.map((point) => (
            <li key={point} className="flex items-start gap-sm text-sm text-text-secondary">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-text-muted" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

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
