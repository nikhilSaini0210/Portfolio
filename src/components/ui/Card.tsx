import { cn } from "@/lib/cn";
import { forwardRef, useRef, type HTMLAttributes, type MouseEvent } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  spotlight?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hoverEffect = false, spotlight = false, className, children, onMouseMove, ...props }, ref) => {
    const innerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      if (spotlight) {
        const rect = innerRef.current?.getBoundingClientRect();
        if (rect) {
          innerRef.current?.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
          innerRef.current?.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
        }
      }
      onMouseMove?.(e);
    };

    return (
      <div
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative rounded-lg border border-border bg-surface p-lg shadow-sm transition-all duration-200",
          hoverEffect && "hover:-translate-y-1 hover:shadow-lg",
          spotlight &&
            "before:pointer-events-none before:absolute before:inset-0 before:rounded-lg before:opacity-0 before:transition-opacity before:duration-300 before:[background:radial-gradient(200px_circle_at_var(--spotlight-x)_var(--spotlight-y),color-mix(in_srgb,var(--color-primary)_15%,transparent),transparent_70%)] hover:before:opacity-100",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
