import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import StatCard from "@/components/about/StatCard";
import EducationCard from "@/components/about/EducationCard";
import InterestList from "@/components/about/InterestList";
import { ABOUT_STATS, EDUCATION, ABOUT_INTRO, INTERESTS } from "@/data/about";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { UserRound } from "lucide-react";
import SectionBackground from "@/components/common/SectionBackground";
import type { FC } from "react";

const About: FC = () => {
  return (
    <Section id="about" className="relative overflow-hidden">
      <SectionBackground variant="dots" hue="hue-6" />
      <div className="relative">
        <SectionTitle label="About Me" icon={UserRound} title="Get to know me a little better" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-md md:grid-cols-6 md:grid-rows-[auto_auto]"
        >
          <motion.div
            variants={fadeInUp}
            className="rounded-lg border border-border bg-surface p-lg shadow-sm md:col-span-4 md:row-span-2"
          >
            {ABOUT_INTRO.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mb-md text-base leading-relaxed text-text-secondary last:mb-0 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-lg">
              <h3 className="mb-sm text-sm font-semibold uppercase tracking-wide text-text-muted">
                Areas of Interest
              </h3>
              <InterestList interests={INTERESTS} />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-2">
            <EducationCard {...EDUCATION[0]} />
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-md md:col-span-2">
            {ABOUT_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
