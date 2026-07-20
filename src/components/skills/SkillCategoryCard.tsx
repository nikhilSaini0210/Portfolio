import { useRef, type FC, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { fadeInUp } from "@/lib/animations";
import type { SkillCategory } from "@/types/common.types";

const SkillCategoryCard: FC<SkillCategory> = ({ title, icon: Icon, skills, color }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div variants={fadeInUp} style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full overflow-hidden rounded-lg border border-border bg-surface p-lg shadow-sm transition-shadow duration-300 hover:shadow-xl"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, color-mix(in srgb, var(--color-${color}) 18%, transparent) 0%, transparent 60%)`,
          }}
        />

        {/* Top accent bar in the category's color */}
        <div
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
          style={{ backgroundColor: `var(--color-${color})` }}
        />

        <div className="relative" style={{ transform: "translateZ(20px)" }}>
          <div className="mb-md flex items-center gap-sm">
            <div
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `color-mix(in srgb, var(--color-${color}) 15%, transparent)`,
                color: `var(--color-${color})`,
              }}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <div
                className="absolute inset-0 rounded-md opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundColor: `color-mix(in srgb, var(--color-${color}) 30%, transparent)`,
                }}
              />
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary">{title}</h3>
          </div>

          <div className="flex flex-wrap gap-sm">
            {skills.map((skill) => (
              <Badge key={skill} variant="default">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCategoryCard;
