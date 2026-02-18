import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PhasePage from "./pages/PhasePage";
import TopicPage from "./pages/TopicPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="phase/:phaseSlug" element={<PhasePage />} />
        <Route path="phase/:phaseSlug/topic/:topicSlug" element={<TopicPage />} />
      </Route>
    </Routes>
  );
}
