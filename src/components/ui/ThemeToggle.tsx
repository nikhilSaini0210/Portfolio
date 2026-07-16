import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/cn";
import { Moon, Sun } from "lucide-react";
import { useCallback, type FC, type MouseEvent } from "react";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      toggleTheme({ x: e.clientX, y: e.clientY });
    },
    [toggleTheme]
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface",
        "transition-colors duration-200 hover:bg-bg-secondary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 text-text-primary" aria-hidden="true" />
      ) : (
        <Sun className="h-4 w-4 text-text-primary" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
