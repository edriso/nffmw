import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useProgress } from "../hooks/useProgress";

export default function Layout() {
  const { progress, toggleTopic, resetProgress } = useProgress();

  return (
    <div className="min-h-screen flex flex-col">
      <Header progress={progress} />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        <Outlet context={{ progress, toggleTopic, resetProgress }} />
      </main>
      <Footer />
    </div>
  );
}
