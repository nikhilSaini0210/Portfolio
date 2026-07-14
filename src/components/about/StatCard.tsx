import { fadeInUp } from "@/lib/animations";
import type { Stat } from "@/types/common.types";
import { motion } from "framer-motion";
import type { FC } from "react";

const StatCard: FC<Stat> = ({ label, value }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-lg border border-border bg-surface p-lg text-center shadow-sm"
    >
      <p className="font-mono text-3xl font-bold text-primary sm:text-4xl">{value}</p>
      <p className="mt-xs text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
};

export default StatCard;
