import { useClickBurst } from "@/hooks/useClickBurst";
import { motion, AnimatePresence } from "framer-motion";
import { type FC } from "react";

const BurstLayer: FC = () => {
  const { bursts } = useClickBurst();

  return (
    <AnimatePresence>
      {(bursts ?? []).map((b) => (
        <div
          key={b.id}
          aria-hidden="true"
          className="pointer-events-none fixed z-[9999]"
          style={{ left: b.x, top: b.y }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <motion.span
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos(angle) * 42,
                  y: Math.sin(angle) * 42,
                  opacity: 0,
                  scale: 0,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute h-1.5 w-1.5 rounded-full bg-primary"
              />
            );
          })}
        </div>
      ))}
    </AnimatePresence>
  );
};

export default BurstLayer;
