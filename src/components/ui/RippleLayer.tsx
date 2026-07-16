import type { RippleSpot } from "@/types/common.types";
import { AnimatePresence, motion } from "framer-motion";
import { type FC } from "react";

interface Props {
  ripples: RippleSpot[];
}

const RippleLayer: FC<Props> = ({ ripples }) => {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            initial={{ opacity: 0.35, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-white/60 dark:bg-white/25"
            style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
          />
        ))}
      </AnimatePresence>
    </span>
  );
};

export default RippleLayer;
