import type { FC } from "react";
import { motion } from "framer-motion";

const HeroBackground: FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="bg-primary/20 absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-accent/20 absolute -bottom-32 -right-24 h-96 w-96 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.15]" />
    </div>
  );
};

export default HeroBackground;
