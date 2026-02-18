import { Link } from "react-router-dom";
import { allTopics } from "../data/roadmap";
import { getOverallCompletion } from "../utils/progress";
import ProgressBar from "./ProgressBar";

export default function Header({ progress }) {
  const overall = getOverallCompletion(progress, allTopics);
  const allDone = overall === 100;

  return (
    <header className="border-b border-nfs-blue/50 bg-nfs-dark/95 backdrop-blur-sm sticky top-0 z-50">
      {allDone && (
        <div className="bg-gradient-to-r from-nfs-orange via-nfs-yellow to-nfs-orange text-nfs-dark text-center py-1.5 font-bold text-sm tracking-wide">
          MOST WANTED — All 19 Topics Cleared!
        </div>
      )}
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0 no-underline">
          <h1 className="text-xl font-bold tracking-tight text-nfs-light">
            <span className="text-nfs-orange">NFF</span>
            <span className="text-nfs-cyan">MW</span>
          </h1>
        </Link>
        <div className="flex items-center gap-3 flex-1 max-w-xs">
          <ProgressBar value={overall} />
          <span className="text-sm font-mono text-nfs-gray whitespace-nowrap">
            {overall}%
          </span>
        </div>
      </div>
    </header>
  );
}
