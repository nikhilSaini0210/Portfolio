import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import AchievementList from "@/components/resume/AchievementList";
import CertificationCard from "@/components/resume/CertificationCard";
import ResumePreview from "@/components/resume/ResumePreview";
import Button from "@/components/ui/Button";
import { CERTIFICATIONS, KEY_ACHIEVEMENTS, RESUME_FILE_PATH } from "@/data/resume";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
          <motion.div variants={fadeInUp} className="mt-lg">
            <a href={RESUME_FILE_PATH} download className="block">
              <Button variant="primary" size="lg" className="w-full">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
            </a>
          </motion.div>
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
