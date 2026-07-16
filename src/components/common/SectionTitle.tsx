import { cn } from "@/lib/cn";
import type { FC } from "react";

interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ label, title, description, align, className }) => {
  return (
    <div className={cn("mb-xl max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {label && (
        <span className="mb-sm inline-block font-mono text-sm font-medium tracking-wide text-accent">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-sm text-base text-text-secondary sm:text-lg">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
