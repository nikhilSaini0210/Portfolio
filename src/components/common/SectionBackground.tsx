import { motion } from "framer-motion";
import { type FC, type ReactNode } from "react";

type BackgroundVariant =
  "dots" | "grid" | "diagonal-lines" | "circuit" | "waves" | "code-blocks" | "tech-scene";

interface SectionBackgroundProps {
  variant: BackgroundVariant;
  hue: "hue-1" | "hue-2" | "hue-3" | "hue-4" | "hue-5" | "hue-6";
  children?: ReactNode;
}

const SectionBackground: FC<SectionBackgroundProps> = ({ variant, hue }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {variant === "dots" && (
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle, var(--color-${hue}) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      )}

      {variant === "grid" && (
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(var(--color-${hue}) 1px, transparent 1px), linear-gradient(90deg, var(--color-${hue}) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      )}

      {variant === "diagonal-lines" && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--color-${hue}) 0, var(--color-${hue}) 1px, transparent 1px, transparent 16px)`,
          }}
        />
      )}

      {variant === "circuit" && (
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]">
          <defs>
            <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
              <path
                d="M10 10 L70 10 L70 40 L40 40 L40 70"
                fill="none"
                stroke={`var(--color-${hue})`}
                strokeWidth="1.5"
              />
              <circle cx="10" cy="10" r="2" fill={`var(--color-${hue})`} />
              <circle cx="70" cy="40" r="2" fill={`var(--color-${hue})`} />
              <circle cx="40" cy="70" r="2" fill={`var(--color-${hue})`} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      )}

      {variant === "waves" && (
        <svg
          className="absolute inset-x-0 bottom-0 h-full w-full opacity-[0.1]"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,160 C320,100 420,220 740,160 C1060,100 1160,220 1480,160 L1480,400 L0,400 Z"
            fill={`var(--color-${hue})`}
            animate={{
              d: [
                "M0,160 C320,100 420,220 740,160 C1060,100 1160,220 1480,160 L1480,400 L0,400 Z",
                "M0,180 C320,220 420,100 740,180 C1060,220 1160,100 1480,180 L1480,400 L0,400 Z",
                "M0,160 C320,100 420,220 740,160 C1060,100 1160,220 1480,160 L1480,400 L0,400 Z",
              ],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      )}

      {variant === "code-blocks" && (
        <div className="absolute inset-0 flex flex-wrap gap-4 p-8 opacity-[0.06]">
          {["{ }", "</>", "( )", "=>", "[ ]", "&&", "//"].map((symbol, i) => (
            <motion.span
              key={i}
              className="font-mono text-4xl font-bold"
              style={{ color: `var(--color-${hue})` }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              {symbol}
            </motion.span>
          ))}
        </div>
      )}

      {variant === "tech-scene" && (
        <div className="absolute inset-0 bg-bg-primary dark:bg-[#0a0a14]">
          {/* Deep gradient wash */}
          <div className="from-hue-3/[0.08] to-hue-6/[0.1] absolute inset-0 bg-gradient-to-br via-transparent" />

          {/* Dot-field stars */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle, var(--color-${hue}) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating rotating hexagons */}
          {[
            { top: "12%", left: "8%", size: 70, duration: 24 },
            { top: "60%", left: "5%", size: 50, duration: 30 },
            { top: "20%", left: "88%", size: 90, duration: 26 },
            { top: "70%", left: "82%", size: 60, duration: 22 },
            { top: "40%", left: "48%", size: 45, duration: 28 },
          ].map((hex, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 100 100"
              className="absolute opacity-[0.15]"
              style={{ top: hex.top, left: hex.left, width: hex.size, height: hex.size }}
              animate={{ rotate: 360, y: [0, -14, 0] }}
              transition={{
                rotate: { duration: hex.duration, repeat: Infinity, ease: "linear" },
                y: { duration: hex.duration / 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <polygon
                points="50 3 95 25 95 75 50 97 5 75 5 25"
                fill="none"
                stroke={i % 2 === 0 ? "var(--color-hue-6)" : "var(--color-hue-3)"}
                strokeWidth="2"
              />
            </motion.svg>
          ))}

          {/* Circuit trace lines connecting corners */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.12]">
            <motion.path
              d="M0,120 L180,120 L180,220 L380,220"
              fill="none"
              stroke="var(--color-hue-6)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M100%,80 L calc(100% - 200px),80 L calc(100% - 200px),200 L calc(100% - 420px),200"
              fill="none"
              stroke="var(--color-hue-3)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.3 }}
            />
            {[
              { cx: 0, cy: 120 },
              { cx: 180, cy: 120 },
              { cx: 180, cy: 220 },
              { cx: 380, cy: 220 },
            ].map((dot, i) => (
              <circle key={i} cx={dot.cx} cy={dot.cy} r="3" fill="var(--color-hue-6)" />
            ))}
          </svg>

          {/* Floating code symbols */}
          {[
            { symbol: "</>", top: "15%", left: "15%", size: "text-2xl" },
            { symbol: "{ }", top: "75%", left: "90%", size: "text-3xl" },
            { symbol: "( )", top: "85%", left: "12%", size: "text-xl" },
          ].map((item, i) => (
            <motion.span
              key={i}
              className={`absolute font-mono font-bold opacity-[0.18] ${item.size}`}
              style={{ top: item.top, left: item.left, color: `var(--color-${hue})` }}
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            >
              {item.symbol}
            </motion.span>
          ))}

          {/* City skyline silhouette at the bottom */}
          <svg
            className="absolute inset-x-0 bottom-0 h-32 w-full opacity-40"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <rect x="0" y="60" width="40" height="60" fill="var(--color-hue-3)" opacity="0.3" />
            <rect x="50" y="30" width="30" height="90" fill="var(--color-hue-6)" opacity="0.25" />
            <rect x="90" y="50" width="45" height="70" fill="var(--color-hue-3)" opacity="0.3" />
            <rect x="145" y="20" width="25" height="100" fill="var(--color-hue-6)" opacity="0.2" />
            <rect x="1000" y="40" width="35" height="80" fill="var(--color-hue-3)" opacity="0.25" />
            <rect x="1045" y="10" width="28" height="110" fill="var(--color-hue-6)" opacity="0.3" />
            <rect x="1085" y="55" width="40" height="65" fill="var(--color-hue-3)" opacity="0.2" />
            <rect x="1140" y="35" width="30" height="85" fill="var(--color-hue-6)" opacity="0.25" />
            {/* Scattered window lights */}
            {Array.from({ length: 24 }).map((_, i) => {
              const hash = (i * 73856093) ^ 19349663;
              const pseudoRandom1 = ((hash >> 0) ^ (hash >> 8)) / 0xffff;
              const pseudoRandom2 = ((hash >> 16) ^ (hash >> 24)) / 0xffff;
              const pseudoRandom3 = ((hash * 37) ^ 19349663) / 0xffff;
              return (
                <motion.rect
                  key={i}
                  x={20 + (i % 8) * 145 + pseudoRandom1 * 20}
                  y={40 + Math.floor(i / 8) * 20}
                  width="3"
                  height="3"
                  fill="var(--color-hue-6)"
                  animate={{ opacity: [0.2, 0.9, 0.2] }}
                  transition={{
                    duration: 2 + pseudoRandom2 * 3,
                    repeat: Infinity,
                    delay: pseudoRandom3 * 2,
                  }}
                />
              );
            })}
          </svg>

          {/* Ambient corner glows, purple + blue matching the reference */}
          <motion.div
            className="bg-hue-3/[0.12] absolute -left-24 top-1/4 h-96 w-96 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="bg-hue-6/[0.12] absolute -right-24 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Corner glow matching the section hue */}
      {variant !== "tech-scene" && (
        <motion.div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `color-mix(in srgb, var(--color-${hue}) 12%, transparent)` }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

export default SectionBackground;
