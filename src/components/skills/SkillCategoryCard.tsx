import { fadeInUp } from "@/lib/animations";
import type { SkillCategory } from "@/types/common.types";
import { motion } from "framer-motion";
import type { FC } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";

const SkillCategoryCard: FC<SkillCategory> = ({ title, icon: Icon, skills }) => {
  return (
    <motion.div variants={fadeInUp}>
      <Card hoverEffect className="h-full">
        <div className="mb-md flex items-center gap-sm">
          <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-sm">
          {skills.map((skill) => (
            <Badge key={skill} variant="default">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default SkillCategoryCard;
