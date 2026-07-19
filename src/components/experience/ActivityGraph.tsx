import { useState, type FC } from "react";
import { motion } from "framer-motion";
import { ACTIVITY_DATA, intensityStyles } from "@/data/activity";
import { cn } from "@/lib/cn";

const ActivityGraph: FC = () => {
  const [hovered, setHovered] = useState<{ month: string; label: string } | null>(null);

  return (
    <div className="relative rounded-lg border border-border bg-surface p-lg shadow-sm">
      <div className="mb-md flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-text-primary">
          Career Activity Overview
        </h3>
        {hovered && (
          <span className="font-mono text-xs text-text-muted">
            {hovered.month} — {hovered.label}
          </span>
        )}
      </div>

      <div className="grid grid-flow-col grid-rows-4 gap-1 overflow-x-auto pb-sm">
        {ACTIVITY_DATA.map((entry, i) => (
          <motion.div
            key={entry.month}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.01, duration: 0.2 }}
            onMouseEnter={() => setHovered({ month: entry.month, label: entry.label })}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "h-3 w-3 shrink-0 cursor-pointer rounded-sm transition-transform hover:scale-125",
              intensityStyles[entry.intensity]
            )}
          />
        ))}
      </div>

      <div className="mt-sm flex items-center justify-end gap-xs text-xs text-text-muted">
        <span>Less</span>
        {intensityStyles.map((style, i) => (
          <div key={i} className={cn("h-3 w-3 rounded-sm", style)} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

export default ActivityGraph;
