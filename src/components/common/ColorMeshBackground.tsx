import { motion } from "framer-motion";
import type { FC } from "react";

const ColorMeshBackground: FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="bg-hue-6/10 absolute left-[10%] top-[5%] h-96 w-96 rounded-full blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-hue-4/10 absolute right-[5%] top-[30%] h-80 w-80 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-hue-3/10 absolute left-[20%] top-[60%] h-96 w-96 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="bg-hue-1/10 absolute right-[15%] top-[80%] h-80 w-80 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ColorMeshBackground;
