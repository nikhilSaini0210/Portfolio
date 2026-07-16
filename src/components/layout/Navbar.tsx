import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/cn";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { scrollToSection } from "@/lib/helpers";
import { useEffect, useState, type FC } from "react";
import Container from "../common/Container";
import ThemeToggle from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollPosition();
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.href));

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-bg-primary/80 border-b border-border shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <button
            onClick={() => handleNavClick("hero")}
            className="rounded-sm font-mono text-lg font-bold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {SITE_CONFIG.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </button>

          <ul className="hidden items-center gap-lg md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200",
                    "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    activeId === link.href
                      ? "text-primary"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                  {activeId === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_var(--color-primary)]"
                      transition={{ type: "spring", stiffness: 380, bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-md md:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-sm md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      <div
        id="mobile-nav-panel"
        inert={!mobileOpen ? true : undefined}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
          mobileOpen ? "max-h-96 border-b border-border" : "max-h-0"
        )}
      >
        <Container>
          <ul className="flex flex-col gap-xs py-md">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "w-full rounded-md px-md py-sm text-left text-sm font-medium transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    activeId === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
