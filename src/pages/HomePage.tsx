import { NAV_LINKS } from "@/lib/constants";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import { type FC } from "react";

const HomePage: FC = () => {
  const remainingLinks = NAV_LINKS.filter(
    (link) => !["hero", "about", "skills", "projects"].includes(link.href)
  );

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {remainingLinks.map((link) => (
        <section
          key={link.href}
          id={link.href}
          className="flex min-h-screen items-center justify-center border-b border-border"
        >
          <h2 className="text-3xl font-bold text-text-primary">{link.label} Section</h2>
        </section>
      ))}
    </>
  );
};

export default HomePage;
