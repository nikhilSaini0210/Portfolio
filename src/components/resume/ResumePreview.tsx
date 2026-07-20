import { useState, type FC } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Eye, RotateCw } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { RESUME_FILE_PATH } from "@/data/resume";
import { SITE_CONFIG } from "@/lib/constants";

const ResumePreview: FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div variants={fadeInUp} style={{ perspective: 1200 }}>
      <motion.div
        className="group relative aspect-[3/4] w-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileHover={{ scale: 1.015 }}
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div className="bg-primary/30 absolute -inset-6 -z-10 rounded-2xl opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className="border-primary/25 group-hover:border-primary/50 relative h-full w-full overflow-hidden rounded-xl border-2 bg-surface shadow-lg transition-colors duration-300"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src={`${RESUME_FILE_PATH}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title="Resume preview background"
              tabIndex={-1}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 select-none opacity-70"
              style={{ filter: "blur(3px) brightness(0.55) contrast(1.1)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, var(--color-bg-secondary) 35%, transparent 75%)",
                opacity: 0.92,
              }}
            />
            <div className="from-primary/10 absolute inset-0 bg-gradient-to-br to-transparent" />
          </div>

          <span className="border-accent/40 bg-accent/10 absolute left-md top-md inline-flex items-center gap-1 rounded-full border px-sm py-[2px] text-[11px] font-semibold tracking-wide text-accent">
            PDF
          </span>

          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full" />

          <div className="relative flex h-full w-full flex-col items-center justify-center gap-md p-lg">
            <div className="bg-primary/15 border-primary/50 flex h-16 w-16 items-center justify-center rounded-2xl border-2 text-primary shadow-sm">
              <FileText className="h-7 w-7" aria-hidden="true" />
            </div>

            <div className="text-center">
              <p className="font-display text-xl font-semibold tracking-tight text-text-primary">
                {SITE_CONFIG.name}
              </p>
              <p className="mt-[2px] text-sm text-text-muted">Résumé</p>
            </div>

            <span className="mt-sm inline-flex items-center gap-xs rounded-full bg-primary px-lg py-sm text-xs font-semibold text-bg-primary shadow-sm transition-transform group-hover:scale-105">
              <RotateCw className="h-3 w-3" aria-hidden="true" />
              Click to flip
            </span>
          </div>
        </div>

        <div
          className="border-primary/25 absolute inset-0 flex flex-col items-center justify-center gap-lg overflow-hidden rounded-xl border-2 bg-surface p-lg text-center shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="bg-primary/15 pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl" />
          <div className="bg-accent/10 pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full blur-3xl" />

          <div className="bg-primary/15 border-primary/50 relative flex h-12 w-12 items-center justify-center rounded-xl border text-primary">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>

          <p className="relative text-sm leading-relaxed text-text-secondary">
            Full Stack Software Engineer with 2.5+ years building scalable SaaS platforms, real-time
            systems, and fintech applications.
          </p>

          <div className="relative flex flex-col gap-sm">
            <a
              href={RESUME_FILE_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:bg-primary/10 inline-flex items-center justify-center gap-xs rounded-md border-2 border-primary px-lg py-sm text-sm font-semibold text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
              View Full Resume
            </a>
            <a
              href={RESUME_FILE_PATH}
              download
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center gap-xs rounded-md bg-action px-lg py-sm text-sm font-semibold text-bg-primary shadow-sm transition-colors hover:bg-action-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download PDF
            </a>
          </div>

          <span className="relative text-xs text-text-muted">Click to flip back</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumePreview;
