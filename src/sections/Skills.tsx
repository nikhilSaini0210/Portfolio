import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import { SKILL_CATEGORIES } from "@/data/skills";
import { staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { FC } from "react";

const Skills: FC = () => {
  return (
    <Section id="skills" className="relative overflow-hidden bg-bg-secondary">
      <div
        className="bg-accent/10 pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <SectionTitle
        label="Skills"
        title="Technologies I work with"
        description="A snapshot of the languages, frameworks, and tools I use to build production-grade applications."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CATEGORIES.map((category) => (
          <SkillCategoryCard key={category.id} {...category} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
