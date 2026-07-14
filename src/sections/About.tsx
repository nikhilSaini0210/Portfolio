import EducationCard from "@/components/about/EducationCard";
import InterestList from "@/components/about/InterestList";
import StatCard from "@/components/about/StatCard";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { ABOUT_INTRO, ABOUT_STATS, EDUCATION, INTERESTS } from "@/data/about";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { FC } from "react";

const About: FC = () => {
  return (
    <Section id="about">
      <SectionTitle label="About Me" title="Get to know me a little better" />

      <div className="grid grid-cols-1 gap-2xl lg:grid-cols-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-3"
        >
          {ABOUT_INTRO.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="mb-md text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.div variants={fadeInUp} className="mt-lg">
            <h3 className="mb-sm text-sm font-semibold uppercase tracking-wide text-text-muted">
              Areas of Interest
            </h3>
            <InterestList interests={INTERESTS} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-lg lg:col-span-2"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="mb-sm text-sm font-semibold uppercase tracking-wide text-text-muted">
              Education
            </h3>
            <div className="flex flex-col gap-md">
              {EDUCATION.map((item) => (
                <EducationCard key={item.institution} {...item} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-2xl grid grid-cols-2 gap-md sm:grid-cols-4"
      >
        {ABOUT_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </motion.div>
    </Section>
  );
};

export default About;
