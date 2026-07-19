import { type FC } from "react";
import { motion } from "framer-motion";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { EXPERIENCE } from "@/data/experience";
import { staggerContainer } from "@/lib/animations";
import TimelineItem from "@/components/experience/TimelineItem";
// import ActivityGraph from "@/components/experience/ActivityGraph";

const Experience: FC = () => {
  return (
    <Section id="experience" className="bg-bg-secondary">
      <SectionTitle
        label="Experience"
        title="Where I've worked"
        description="A timeline of the companies and roles that shaped my engineering experience."
      />

      {/* <div className="mx-auto mb-2xl max-w-3xl">
        <ActivityGraph />
      </div> */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-3xl"
      >
        {EXPERIENCE.map((item, index) => (
          <TimelineItem
            key={item.id}
            index={index}
            item={item}
            isLast={index === EXPERIENCE.length - 1}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
