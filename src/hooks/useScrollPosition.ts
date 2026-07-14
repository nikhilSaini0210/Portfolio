import { useEffect, useState } from "react";

const getScrolled = (threshold: number): boolean => {
  return window.scrollY > threshold;
};

export const useScrollPosition = (threshold = 20): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(() => getScrolled(threshold));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(getScrolled(threshold));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};
