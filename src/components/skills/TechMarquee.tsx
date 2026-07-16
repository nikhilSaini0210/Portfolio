import { TECH_STACK } from "@/data/skills";
import { type FC } from "react";

const TechMarquee: FC = () => {
  const doubled = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-secondary py-lg">
      <div className="flex w-max animate-marquee gap-2xl">
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-text-muted/40 font-display text-2xl font-semibold sm:text-3xl"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-secondary to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-secondary to-transparent" />
    </div>
  );
};

export default TechMarquee;
