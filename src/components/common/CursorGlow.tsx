import { useEffect, useRef, type FC } from "react";

const CursorGlow: FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full opacity-0 mix-blend-screen transition-opacity duration-500 will-change-transform md:opacity-100"
      style={{
        background:
          "radial-gradient(circle, color-mix(in srgb, var(--color-primary) 12%, transparent) 0%, transparent 70%)",
      }}
    />
  );
};

export default CursorGlow;
