import { CONTACT_INFO } from "@/data/contact";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { FC } from "react";
import SocialIcons from "../common/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

const ContactInfo: FC = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col gap-lg"
    >
      <motion.p
        variants={fadeInUp}
        className="text-base leading-relaxed text-text-secondary sm:text-lg"
      >
        Have a project in mind, a role you think I&apos;d be a great fit for, or just want to
        connect? My inbox is always open.
      </motion.p>

      <div className="flex flex-col gap-md">
        {CONTACT_INFO.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-center gap-md">
              <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-text-muted">{item.label}</p>
                <p className="text-sm font-medium text-text-primary sm:text-base">{item.value}</p>
              </div>
            </div>
          );

          return (
            <motion.div key={item.label} variants={fadeInUp}>
              {item.href ? (
                <a
                  href={item.href}
                  className="block rounded-lg transition-colors hover:bg-bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div variants={fadeInUp} className="mt-md">
        <p className="mb-sm text-xs uppercase tracking-wide text-text-muted">Find me online</p>
        <SocialIcons
          links={[
            { platform: "github", url: SITE_CONFIG.github, label: "GitHub" },
            { platform: "linkedin", url: SITE_CONFIG.linkedin, label: "LinkedIn" },
            { platform: "email", url: `mailto:${SITE_CONFIG.email}`, label: "Email" },
          ]}
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
