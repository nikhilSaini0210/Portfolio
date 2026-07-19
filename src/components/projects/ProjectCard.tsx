import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/types/common.types";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type MouseEvent,
  type TouchEvent,
} from "react";
import Card from "../ui/Card";
import { CheckCircle2, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import TechBadge from "./TechBadge";
import { FaAndroid, FaApple, FaGithub } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { cn } from "@/lib/cn";

const SWIPE_THRESHOLD = 50;

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const rotateXVelocity = useVelocity(rotateX);
  const rotateYVelocity = useVelocity(rotateY);
  const totalVelocity = useTransform([rotateXVelocity, rotateYVelocity], ([vx, vy]: number[]) =>
    Math.min(Math.sqrt(vx * vx + vy * vy) / 60, 1)
  );
  const blurAmount = useSpring(useTransform(totalVelocity, [0, 1], [0, 3]), {
    stiffness: 300,
    damping: 30,
  });
  const imageFilter = useTransform(blurAmount, (b) => `blur(${b}px)`);

  const hasMultipleImages = project.images.length > 1;

  const goToNext = useCallback(
    () => setActiveImage((prev) => (prev + 1) % project.images.length),
    [project.images.length]
  );
  const goToPrev = useCallback(
    () => setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length),
    [project.images.length]
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
    setActiveImage(0);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX < 0) goToNext();
    else goToPrev();
  };

  useEffect(() => {
    if (!isHovered || !hasMultipleImages || isZoomed) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, hasMultipleImages, isZoomed, project.images.length]);

  // Keyboard nav + escape while zoomed
  useEffect(() => {
    if (!isZoomed) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsZoomed(false);
      if (e.key === "ArrowRight" && hasMultipleImages) goToNext();
      if (e.key === "ArrowLeft" && hasMultipleImages) goToPrev();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed, hasMultipleImages, goToNext, goToPrev]);

  return (
    <>
      <motion.div variants={fadeInUp} style={{ perspective: 1000 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <Card className="group relative flex h-full flex-col overflow-hidden p-0 transition-shadow duration-300 hover:shadow-xl">
            <div
              className="relative aspect-video w-full touch-pan-y overflow-hidden bg-bg-secondary"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={project.images[activeImage]}
                  alt={`${project.title} preview ${activeImage + 1}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{ filter: imageFilter }}
                  className="h-full w-full cursor-zoom-in object-cover"
                  loading="lazy"
                  onClick={() => setIsZoomed(true)}
                />
              </AnimatePresence>
              <div className="from-bg-primary/40 pointer-events-none absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Zoom hint icon */}
              <div className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
              </div>

              {/* Desktop prev/next arrows - hidden on touch, shown on card hover */}
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover:opacity-100 md:flex"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 group-hover:opacity-100 md:flex"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}

              {hasMultipleImages && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(idx);
                      }}
                      aria-label={`Show image ${idx + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        idx === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-lg">
              <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-sm text-sm leading-relaxed text-text-secondary sm:text-base">
                {project.description}
              </p>

              <ul className="mt-md flex flex-col gap-xs">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-sm text-sm text-text-secondary">
                    <CheckCircle2
                      className="mt-[2px] h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-lg flex flex-wrap gap-sm">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>

              <div className="mt-lg flex flex-wrap items-center gap-md border-t border-border pt-lg">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <FaGithub className="h-4 w-4" aria-hidden="true" /> Code
                  </a>
                )}
                {project.webUrl && (
                  <a
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <HiOutlineGlobeAlt className="h-4 w-4" aria-hidden="true" /> Website
                  </a>
                )}
                {project.androidUrl && (
                  <a
                    href={project.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <FaAndroid className="h-4 w-4" aria-hidden="true" /> Android
                  </a>
                )}
                {project.iOSUrl && (
                  <a
                    href={project.iOSUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs rounded-sm text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <FaApple className="h-4 w-4" aria-hidden="true" /> iOS
                  </a>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Fullscreen zoom lightbox */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
          >
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed image"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            )}

            <motion.img
              key={activeImage}
              src={project.images[activeImage]}
              alt={`${project.title} preview ${activeImage + 1}, zoomed`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {hasMultipleImages && (
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage(idx);
                    }}
                    aria-label={`Show image ${idx + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      idx === activeImage ? "w-8 bg-white" : "w-2 bg-white/40"
                    )}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
