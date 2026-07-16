import { type FC } from "react";
import { motion } from "framer-motion";

const SectionDivider: FC = () => {
  return (
    <div className="relative h-px w-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-border" />
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ left: ["-33%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />
    </div>
  );
};

export default SectionDivider;
