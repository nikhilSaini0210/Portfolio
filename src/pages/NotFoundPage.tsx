import { type FC } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const NotFoundPage: FC = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-lg">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-7xl font-bold text-primary sm:text-8xl"
        >
          404
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="mt-md text-2xl font-bold text-text-primary sm:text-3xl"
        >
          Page Not Found
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-sm text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-xl">
          <Link to="/">
            <Button variant="primary" size="lg">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
