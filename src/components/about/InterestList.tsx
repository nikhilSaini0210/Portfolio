import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { FC } from "react";
import Badge from "../ui/Badge";

interface InterestListProps {
  interests: string[];
}

const InterestList: FC<InterestListProps> = ({ interests }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-wrap gap-sm"
    >
      {interests.map((interest) => (
        <motion.div key={interest} variants={fadeInUp}>
          <Badge variant="primary">{interest}</Badge>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InterestList;
