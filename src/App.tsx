import { useEffect, useState, lazy, Suspense, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import PageLoader from "./components/common/PageLoader";
import Loader from "./components/ui/Loader";

const HomePage = lazy(() => import("@/pages/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <RootLayout>
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center">
              <Loader size="lg" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </>
  );
};

export default App;
