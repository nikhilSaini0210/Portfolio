import type { FC } from "react";
import { hashToHue } from "@/lib/constants";

interface TechBadgeProps {
  tech: string;
}
const TechBadge: FC<TechBadgeProps> = ({ tech }) => {
  const hue = hashToHue(tech);

  return (
    <span
      className="inline-flex items-center rounded-full border px-sm py-[2px] font-mono text-xs font-medium"
      style={{
        backgroundColor: `color-mix(in srgb, var(--color-${hue}) 12%, transparent)`,
        borderColor: `color-mix(in srgb, var(--color-${hue}) 30%, transparent)`,
        color: `var(--color-${hue})`,
      }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
