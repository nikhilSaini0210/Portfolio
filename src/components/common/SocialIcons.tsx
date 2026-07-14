import type { FC } from "react";
import { cn } from "@/lib/cn";
import type { SocialLink } from "@/types/common.types";
import { iconMap } from "@/lib/constants";

interface SocialIconsProps {
  links: SocialLink[];
  className?: string;
  iconClassName?: string;
}

const SocialIcons: FC<SocialIconsProps> = ({ links, className, iconClassName }) => {
  return (
    <div className={cn("flex items-center gap-md", className)}>
      {links.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform !== "email" ? "_blank" : undefined}
            rel={link.platform !== "email" ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-secondary",
              "transition-colors duration-200 hover:border-primary hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              iconClassName
            )}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
