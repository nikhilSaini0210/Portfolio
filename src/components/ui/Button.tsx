import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";
import {
  forwardRef,
  useCallback,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-action text-on-accent hover:bg-action-hover shadow-sm hover:shadow-md",
  secondary: "bg-transparent border border-accent text-accent hover:bg-accent/10",
  ghost: "bg-transparent text-text-primary hover:bg-bg-secondary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-md py-xs text-sm",
  md: "px-lg py-sm text-base",
  lg: "px-xl py-md text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading,
      disabled,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        onClick?.(e);
      },
      [onClick]
    );

    return (
      <button
        ref={ref}
        onClick={handleClick}
        disabled={disabled || isLoading}
        className={cn(
          "relative inline-flex items-center justify-center gap-sm overflow-hidden rounded-md font-semibold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "active:scale-[0.98]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
