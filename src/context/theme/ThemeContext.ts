import type { ThemeContextValue } from "@/types/theme.types";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
