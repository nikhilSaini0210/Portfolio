import { useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
}

const TypewriterText: FC<TypewriterTextProps> = ({ phrases, className }) => {
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState(() => (prefersReducedMotion ? phrases[0] : ""));
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < currentPhrase.length) {
          setDisplayed(currentPhrase.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases, prefersReducedMotion]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
        className="ml-[2px] inline-block w-[2px] bg-primary"
        style={{ height: "1em", verticalAlign: "text-bottom" }}
        aria-hidden="true"
      />
    </span>
  );
};

export default TypewriterText;
