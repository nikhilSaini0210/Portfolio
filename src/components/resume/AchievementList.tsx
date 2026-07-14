import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { Achievement } from "@/types/common.types";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import type { FC } from "react";

interface AchievementListProps {
  achievements: Achievement[];
}

const AchievementList: FC<AchievementListProps> = ({ achievements }) => {
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-md"
    >
      {achievements.map((achievement) => (
        <motion.li
          key={achievement.id}
          variants={fadeInUp}
          className="flex items-start gap-md rounded-lg border border-border bg-surface p-md"
        >
          <div className="bg-accent/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-accent">
            <Award className="h-4 w-4" aria-hidden="true" />
          </div>
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            {achievement.text}
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default AchievementList;
