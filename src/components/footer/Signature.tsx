import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import type { FC } from "react";

const Signature: FC = () => {
  return (
    <motion.p
      initial={{ opacity: 0, letterSpacing: "0.3em" }}
      whileInView={{ opacity: 1, letterSpacing: "0.15em" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="font-display text-sm font-medium uppercase text-text-muted"
    >
      Built by{" "}
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {SITE_CONFIG.name}
      </span>
    </motion.p>
  );
};

export default Signature;
