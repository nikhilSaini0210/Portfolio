import { useTheme } from "@/hooks/useTheme";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { scrollToSection } from "@/lib/helpers";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sun } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const CommandPalette: FC = () => {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((p) => !p);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = (action: () => void) => {
    setOpen(false);
    action();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[150] flex items-start justify-center bg-black/50 pt-[15vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
          >
            <Command loop>
              <div className="flex items-center border-b border-border px-md">
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent px-0 py-md text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-xs text-text-muted">
                  esc
                </kbd>
              </div>

              <Command.List className="max-h-80 overflow-y-auto p-sm">
                <Command.Empty className="py-lg text-center text-sm text-text-muted">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="px-sm py-xs text-xs font-medium uppercase text-text-muted [&_[cmdk-group-heading]]:mb-xs"
                >
                  {NAV_LINKS.map((item) => (
                    <Command.Item
                      key={item.href}
                      onSelect={() => runCommand(() => scrollToSection(item.href))}
                      className="aria-selected:bg-primary/10 flex cursor-pointer items-center gap-sm rounded-md px-md py-sm text-sm text-text-primary aria-selected:text-primary"
                    >
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="Actions"
                  className="px-sm py-xs text-xs font-medium uppercase text-text-muted [&_[cmdk-group-heading]]:mb-xs"
                >
                  <Command.Item
                    onSelect={() => runCommand(toggleTheme)}
                    className="aria-selected:bg-primary/10 flex cursor-pointer items-center gap-sm rounded-md px-md py-sm text-sm text-text-primary aria-selected:text-primary"
                  >
                    <Sun className="h-4 w-4" aria-hidden="true" />
                    Toggle theme
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => window.open(SITE_CONFIG.github, "_blank"))}
                    className="aria-selected:bg-primary/10 flex cursor-pointer items-center gap-sm rounded-md px-md py-sm text-sm text-text-primary aria-selected:text-primary"
                  >
                    <FaGithub className="h-4 w-4" aria-hidden="true" />
                    Open GitHub
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => window.open(SITE_CONFIG.linkedin, "_blank"))}
                    className="aria-selected:bg-primary/10 flex cursor-pointer items-center gap-sm rounded-md px-md py-sm text-sm text-text-primary aria-selected:text-primary"
                  >
                    <FaLinkedin className="h-4 w-4" aria-hidden="true" />
                    Open LinkedIn
                  </Command.Item>

                  <Command.Item
                    onSelect={() => runCommand(() => window.open(`mailto:${SITE_CONFIG.email}`))}
                    className="aria-selected:bg-primary/10 flex cursor-pointer items-center gap-sm rounded-md px-md py-sm text-sm text-text-primary aria-selected:text-primary"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Send email
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
