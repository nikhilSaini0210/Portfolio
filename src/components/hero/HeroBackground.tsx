import type { FC } from "react";
import { motion } from "framer-motion";

const HeroBackground: FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="bg-primary/25 absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-accent/20 absolute -bottom-40 -right-24 h-[26rem] w-[26rem] rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-primary/10 absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.12]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-primary to-transparent" />
    </div>
  );
};

export default HeroBackground;
