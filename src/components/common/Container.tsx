import { cn } from "@/lib/cn";
import type { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

const Container: FC<ContainerProps> = ({ children, className, as: Tag = "div" }) => {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-md sm:px-lg lg:px-xl", className)}>
      {children}
    </Tag>
  );
};

export default Container;
