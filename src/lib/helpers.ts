import { SCROLL_OFFSET } from "./constants";

export const scrollToSection = (id: string) => {
  const el = document.getElementById(id);

  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
};
