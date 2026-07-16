import { type RippleSpot } from "@/types/common.types";
import { useState, type MouseEvent } from "react";

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleSpot[]>([]);

  const addRipple = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const spot: RippleSpot = {
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, spot]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== spot.id)), 600);
  };

  return { addRipple, ripples };
};
