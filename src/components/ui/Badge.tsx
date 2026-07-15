import { cn } from "@/lib/cn";
import type { FC, ReactNode } from "react";

type BadgeVariant = "default" | "primary" | "success" | "warning" | "error";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-bg-secondary text-text-secondary border-border",
  primary: "bg-primary/10 text-primary border-primary/20",
  success: "bg-success/10 text-success border-success/20",
  warning: "bg-warning/10 text-warning border-warning/20",
  error: "bg-error/10 text-error border-error/20",
};

const Badge: FC<BadgeProps> = ({ children, variant = "default", className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-sm py-[2px] font-mono text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
