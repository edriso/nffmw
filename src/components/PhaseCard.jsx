import { Link } from "react-router-dom";
import { getPhaseCompletion } from "../utils/progress";
import ProgressBar from "./ProgressBar";
import SpeedBadge from "./SpeedBadge";

export default function PhaseCard({ phase, progress }) {
  const completion = getPhaseCompletion(progress, phase.topics);
  const isComplete = completion === 100;

  return (
    <Link
      to={`/phase/${phase.id}`}
      className={`block rounded-xl border p-5 transition-all duration-300 no-underline group hover:-translate-y-1 hover:shadow-lg hover:shadow-nfs-cyan/10 ${
        isComplete
          ? "border-nfs-yellow/50 bg-gradient-to-br from-nfs-yellow/10 to-nfs-dark"
          : "border-nfs-blue/40 bg-nfs-blue/10 hover:border-nfs-cyan/50"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{phase.icon}</span>
        <SpeedBadge percentage={completion} />
      </div>
      <h2 className="text-lg font-bold text-nfs-light mb-1 group-hover:text-nfs-cyan transition-colors">
        {phase.title}
      </h2>
      <p className="text-sm text-nfs-gray mb-4">{phase.tagline}</p>
      <div className="flex items-center gap-2">
        <ProgressBar value={completion} />
        <span className="text-xs font-mono text-nfs-gray whitespace-nowrap">
          {phase.topics.filter((t) => progress[t.id]).length}/{phase.topics.length}
        </span>
      </div>
    </Link>
  );
}
