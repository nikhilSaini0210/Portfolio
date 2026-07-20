import Section from "@/components/common/Section";
import SectionBackground from "@/components/common/SectionBackground";
import SectionTitle from "@/components/common/SectionTitle";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import { SKILL_CATEGORIES } from "@/data/skills";
import { staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { FC } from "react";

const Skills: FC = () => {
  return (
    <Section id="skills" className="relative overflow-hidden bg-bg-secondary">
      <SectionBackground variant="circuit" hue="hue-2" />
      <div className="relative">
        <SectionTitle
          label="Skills"
          title="Technologies I work with"
          icon={Sparkles}
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
      </div>
    </Section>
  );
};

export default Skills;
