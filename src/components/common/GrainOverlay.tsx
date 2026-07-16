import type { FC } from "react";

const GrainOverlay: FC = () => {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[2] h-full w-full opacity-[0.025]"
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  );
};

export default GrainOverlay;
