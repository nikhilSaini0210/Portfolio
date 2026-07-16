import { useEffect, useRef, type FC } from "react";

const CursorDot: FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleMouseDown = () => {
      dotRef.current?.classList.add("scale-[2.5]");
    };
    const handleMouseUp = () => {
      dotRef.current?.classList.remove("scale-[2.5]");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-primary transition-transform duration-150 ease-out will-change-transform md:block"
    />
  );
};

export default CursorDot;
