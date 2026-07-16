import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const useCountUp = (target: number, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return { count, ref };
};
