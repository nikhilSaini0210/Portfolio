import type { FC } from "react";
import { motion } from "framer-motion";

const HeroAvatar: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48"
    >
      <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl" />
      <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-surface shadow-lg">
        <img
          src="/images/profile.jpg"
          alt="Nikhil Saini"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-bg-primary bg-success">
        <span className="sr-only">Available for work</span>
      </div>
    </motion.div>
  );
};

export default HeroAvatar;
