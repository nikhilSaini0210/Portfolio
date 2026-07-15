import { type FC } from "react";

const SkipLink: FC = () => {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-md bg-primary px-lg py-sm text-sm font-semibold text-white shadow-lg transition-transform duration-200 focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
