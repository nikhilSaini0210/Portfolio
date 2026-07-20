import type { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "../footer/Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgressBar from "./ScrollProgressBar";
import SkipLink from "../common/SkipLink";
import CursorGlow from "../common/CursorGlow";
// import GrainOverlay from "../common/GrainOverlay";
import BurstLayer from "../common/BurstLayer";
import CursorDot from "../common/CursorDot";
import CommandPalette from "../common/CommandPalette";
import ColorMeshBackground from "../common/ColorMeshBackground";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ColorMeshBackground />
      {/* <GrainOverlay /> */}
      <CursorGlow />
      <CursorDot />
      <BurstLayer />
      <CommandPalette />
      <SkipLink />
      <ScrollProgressBar />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RootLayout;
