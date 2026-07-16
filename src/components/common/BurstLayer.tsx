import type { BurstParticle } from "@/types/common.types";
import { useEffect, useRef, type FC } from "react";

const BurstLayer: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<BurstParticle[]>([]);
  const animationFrameRef = useRef<number>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const getThemeColors = (): [string, string] => {
      const isDark = document.documentElement.classList.contains("dark");
      return isDark ? ["227, 165, 61", "79, 209, 197"] : ["154, 99, 0", "14, 124, 114"];
    };

    const spawnBurst = (x: number, y: number) => {
      const [primary, accent] = getThemeColors();
      const count = 14;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
        const speed = 1.5 + Math.random() * 2.5;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 40 + Math.random() * 20,
          size: 2 + Math.random() * 2,
        });
        // Tag color per-particle by storing on the object via closure below
        (
          particlesRef.current[particlesRef.current.length - 1] as BurstParticle & { color: string }
        ).color = i % 2 === 0 ? primary : accent;
      }

      if (!animationFrameRef.current) {
        animate();
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // gentle gravity
        p.vx *= 0.98;
        p.vy *= 0.98;

        const progress = p.life / p.maxLife;
        if (progress >= 1) return false;

        const opacity = 1 - progress;
        const color = (p as BurstParticle & { color: string }).color;
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      if (particlesRef.current.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = undefined;
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select")) return;

      spawnBurst(e.clientX, e.clientY);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90]"
    />
  );
};

export default BurstLayer;
