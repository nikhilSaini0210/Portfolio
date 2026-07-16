import type { Theme, ThemeContextValue } from "@/types/theme.types";
import { ThemeContext } from "./ThemeContext";
import { useCallback, useEffect, useState, type FC, type ReactNode } from "react";
import { THEME_STORAGE_KEY } from "@/lib/constants";

const getInitialTheme = (): Theme => {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
    const flip = () => setTheme((p) => (p === "light" ? "dark" : "light"));

    const supportsViewTransition =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsViewTransition || !origin) {
      flip();
      return;
    }

    const x = origin.x;
    const y = origin.y;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = (
      document as Document & {
        startViewTransition: (cb: () => void) => { ready: Promise<void> };
      }
    ).startViewTransition(flip);

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 550,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, []);

  const value: ThemeContextValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
