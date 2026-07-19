import Container from "@/components/common/Container";
import HeroBackground from "@/components/hero/HeroBackground";
import { type FC } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { scrollToSection } from "@/lib/helpers";
import Button from "@/components/ui/Button";
import { Download, Mail } from "lucide-react";
import SocialIcons from "@/components/common/SocialIcons";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import HeroAvatar from "@/components/hero/HeroAvatar";
import MagneticButton from "@/components/ui/MagneticButton";
import ParticleField from "@/components/hero/ParticleField";
import SplitText from "@/components/hero/SplitText";

const Hero: FC = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <HeroBackground />
      <ParticleField />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-lg text-center"
        >
          <motion.div variants={fadeInUp}>
            <HeroAvatar />
          </motion.div>

          <motion.span
            variants={fadeInUp}
            className="rounded-full border border-border bg-bg-secondary px-md py-xs font-mono text-sm text-text-secondary"
          >
            👋 Available for new opportunities
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl font-bold leading-[1.05] text-text-primary sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              <SplitText text={SITE_CONFIG.name} delay={0.6} />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg font-medium text-text-secondary sm:text-xl"
          >
            {SITE_CONFIG.title}
          </motion.p>

          <motion.p variants={fadeInUp} className="max-w-xl text-base text-text-muted sm:text-lg">
            2.8+ years building scalable SaaS platforms, real-time systems, and fintech applications
            with Node.js, React.js, and React Native.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-md"
          >
            <MagneticButton>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  scrollToSection("projects");
                }}
              >
                View Projects
              </Button>
            </MagneticButton>
            <Button variant="secondary" size="lg" onClick={() => scrollToSection("contact")}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get In Touch
            </Button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-sm rounded-md px-lg py-sm text-lg font-semibold text-text-primary underline-offset-4 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <SocialIcons
              links={[
                { platform: "github", url: SITE_CONFIG.github, label: "GitHub" },
                { platform: "linkedin", url: SITE_CONFIG.linkedin, label: "LinkedIn" },
                { platform: "email", url: `mailto:${SITE_CONFIG.email}`, label: "Email" },
              ]}
            />
          </motion.div>
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
