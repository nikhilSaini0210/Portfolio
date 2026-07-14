import { motion, AnimatePresence } from "framer-motion";
import type { FC } from "react";

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader: FC<PageLoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary"
        >
          <motion.span
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="font-mono text-2xl font-bold text-text-primary"
          >
            NS<span className="text-primary">.</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
