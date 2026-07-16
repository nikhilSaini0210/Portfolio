import type { Burst, BurstOrigin } from "@/types/common.types";
import { useState } from "react";

export const useClickBurst = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const fire = (origin: BurstOrigin) => {
    const x = "clientX" in origin ? origin.clientX : origin.x;
    const y = "clientY" in origin ? origin.clientY : origin.y;

    const spot: Burst = { x, y, id: Date.now() + Math.random() };

    setBursts((prev) => [...prev, spot]);
    window.setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== spot.id));
    }, 700);
  };

  return { fire, bursts };
};
