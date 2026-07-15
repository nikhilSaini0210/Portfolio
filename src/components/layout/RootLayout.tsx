import type { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollProgressBar from "./ScrollProgressBar";
import SkipLink from "../common/SkipLink";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
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
