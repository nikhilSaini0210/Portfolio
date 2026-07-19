import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import AchievementList from "@/components/resume/AchievementList";
import CertificationCard from "@/components/resume/CertificationCard";
import ResumePreview from "@/components/resume/ResumePreview";
import { CERTIFICATIONS, KEY_ACHIEVEMENTS } from "@/data/resume";
import { staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import type { FC } from "react";

const Resume: FC = () => {
  return (
    <Section id="resume">
      <SectionTitle
        label="Resume"
        title="My experience, at a glance"
        description="Preview or download my full resume for a complete look at my experience and skills."
      />

      <div className="grid grid-cols-1 gap-2xl lg:grid-cols-5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-2"
        >
          <ResumePreview />
        </motion.div>

        <div className="lg:col-span-3">
          <h3 className="mb-md text-sm font-semibold uppercase tracking-wide text-text-muted">
            Key Achievements
          </h3>
          <AchievementList achievements={KEY_ACHIEVEMENTS} />

          {CERTIFICATIONS.length > 0 && (
            <div className="mt-2xl">
              <h3 className="mb-md text-sm font-semibold uppercase tracking-wide text-text-muted">
                Certifications
              </h3>
              <div className="flex flex-col gap-md">
                {CERTIFICATIONS.map((cert) => (
                  <CertificationCard key={cert.id} {...cert} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Resume;
