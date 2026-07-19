import { motion } from "framer-motion";
import type { FC } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const SplitText: FC<SplitTextProps> = ({ text, className, delay = 0 }) => {
  const letters = text.split("");

  return (
    <span className={className} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, y: 20, rotateX: -60 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: delay + i * 0.03, duration: 0.4, ease: "easeOut" }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default SplitText;
