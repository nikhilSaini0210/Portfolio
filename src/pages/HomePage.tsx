import SectionDivider from "@/components/common/SectionDivider";
import Seo from "@/components/common/Seo";
import StructuredData from "@/components/common/StructuredData";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";
import { type FC } from "react";

const HomePage: FC = () => {
  return (
    <>
      <Seo path="/" />
      <StructuredData />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Contact />
    </>
  );
};

export default HomePage;
