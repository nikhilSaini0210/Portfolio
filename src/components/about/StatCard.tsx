import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp } from "@/lib/animations";
import type { Stat } from "@/types/common.types";
import { motion } from "framer-motion";
import type { FC } from "react";

const StatCard: FC<Stat> = ({ label, value, suffix }) => {
  const isDecimal = !Number.isInteger(value);
  const { count, ref } = useCountUp(isDecimal ? Math.round(value * 10) : value);
  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="rounded-lg border border-border bg-surface p-lg text-center shadow-sm"
    >
      <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-xs text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
};

export default StatCard;
