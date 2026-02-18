import { useParams, useOutletContext, Navigate } from "react-router-dom";
import { getPhase } from "../data/roadmap";
import { getPhaseCompletion } from "../utils/progress";
import BackLink from "../components/BackLink";
import TopicCard from "../components/TopicCard";
import ProgressBar from "../components/ProgressBar";
import SpeedBadge from "../components/SpeedBadge";

export default function PhasePage() {
  const { phaseSlug } = useParams();
  const { progress, toggleTopic } = useOutletContext();
  const phase = getPhase(phaseSlug);

  if (!phase) return <Navigate to="/" replace />;

  const completion = getPhaseCompletion(progress, phase.topics);

  return (
    <div>
      <BackLink to="/">All Phases</BackLink>

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{phase.icon}</span>
            <h2 className="text-2xl font-bold text-nfs-light">{phase.title}</h2>
          </div>
          <p className="text-nfs-gray">{phase.tagline}</p>
        </div>
        <SpeedBadge percentage={completion} />
      </div>

      <div className="flex items-center gap-3 mb-8">
        <ProgressBar value={completion} size="lg" />
        <span className="text-sm font-mono text-nfs-gray whitespace-nowrap">
          {completion}%
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {phase.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            phaseSlug={phase.id}
            checked={!!progress[topic.id]}
            onToggle={toggleTopic}
          />
        ))}
      </div>
    </div>
  );
}
