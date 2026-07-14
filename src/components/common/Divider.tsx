import { cn } from "@/lib/cn";
import type { FC } from "react";

interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

const Divider: FC<DividerProps> = ({ className, orientation = "horizontal" }) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        "bg-border",
        className
      )}
    />
  );
};

export default Divider;
