import { useEffect, useState } from "react";

const getScrollProgress = (): number => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
};

export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState<number>(getScrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getScrollProgress());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};
