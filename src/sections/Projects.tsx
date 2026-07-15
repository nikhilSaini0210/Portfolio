import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { FC } from "react";

const Projects: FC = () => {
  return (
    <Section id="projects">
      <SectionTitle
        label="Projects"
        title="Things I've built"
        description="A selection of production applications I've designed and shipped end-to-end."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0, margin: "0px 0px -100px 0px" }}
        className="grid grid-cols-1 gap-lg lg:grid-cols-2"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
