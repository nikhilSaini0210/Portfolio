import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/cn";
import { ArrowUp } from "lucide-react";
import { useCallback, type FC } from "react";

const ScrollToTop: FC = () => {
  const visible = useScrollPosition(400);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-lg right-lg z-40 flex h-11 w-11 items-center justify-center rounded-full",
        "bg-action text-white shadow-lg transition-all duration-300",
        "hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
