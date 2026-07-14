import { RESUME_FILE_PATH } from "@/data/resume";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import type { FC } from "react";

const ResumePreview: FC = () => {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-lg border border-border bg-surface shadow-sm"
    >
      <a
        href={RESUME_FILE_PATH}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume preview in a new tab"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <object
          data={RESUME_FILE_PATH}
          type="application/pdf"
          className="hidden aspect-[3/4] w-full sm:block"
          aria-label="Resume preview"
        >
          <div className="flex aspect-[3/4] w-full items-center justify-center bg-bg-secondary">
            <FileText className="h-12 w-12 text-text-muted" aria-hidden="true" />
          </div>
        </object>

        <div className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-md bg-bg-secondary sm:hidden">
          <FileText className="h-14 w-14 text-text-muted" aria-hidden="true" />
          <p className="text-sm font-medium text-text-secondary">Tap to preview resume</p>
        </div>

        <div className="bg-bg-primary/0 group-hover:bg-bg-primary/60 absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-200 group-hover:opacity-100">
          <span className="rounded-full bg-primary px-lg py-sm text-sm font-semibold text-white shadow-lg">
            View Full Preview
          </span>
        </div>
      </a>
    </motion.div>
  );
};

export default ResumePreview;
