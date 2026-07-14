import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const getWindowSize = (): WindowSize => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>(getWindowSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getWindowSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
