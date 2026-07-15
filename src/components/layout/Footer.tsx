import type { FC } from "react";
import Container from "../common/Container";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import SocialIcons from "../common/SocialIcons";
import { scrollToSection } from "@/lib/helpers";

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="min-h-[280px] border-t border-border bg-bg-secondary">
      <Container className="py-2xl">
        <div className="flex flex-col items-center gap-lg sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-mono text-lg font-bold text-text-primary">
              {SITE_CONFIG.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-xs text-sm text-text-muted">{SITE_CONFIG.title}</p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-md">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="rounded-sm text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <SocialIcons
            links={[
              { platform: "github", url: SITE_CONFIG.github, label: "GitHub" },
              { platform: "linkedin", url: SITE_CONFIG.linkedin, label: "LinkedIn" },
              { platform: "email", url: `mailto:${SITE_CONFIG.email}`, label: "Email" },
            ]}
          />
        </div>

        <div className="mt-xl border-t border-border pt-lg text-center">
          <p className="text-sm text-text-muted">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
