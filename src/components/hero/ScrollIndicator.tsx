import type { FC } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/helpers";
import { ChevronDown } from "lucide-react";

const ScrollIndicator: FC = () => {
  return (
    <motion.button
      onClick={() => scrollToSection("about")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      aria-label="Scroll to About section"
      className="absolute bottom-lg left-1/2 -translate-x-1/2 rounded-full text-text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" aria-hidden="true" />
      </motion.div>
    </motion.button>
  );
};

export default ScrollIndicator;
