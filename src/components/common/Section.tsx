import { cn } from "@/lib/cn";
import { type FC, type ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const Section: FC<SectionProps> = ({ id, children, className, containerClassName }) => {
  return (
    <section id={id} className={cn("py-3xl sm:py-4xl", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
