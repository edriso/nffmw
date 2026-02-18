import { useOutletContext } from "react-router-dom";
import { roadmap, allTopics } from "../data/roadmap";
import { getOverallCompletion } from "../utils/progress";
import PhaseCard from "../components/PhaseCard";

export default function HomePage() {
  const { progress } = useOutletContext();
  const overall = getOverallCompletion(progress, allTopics);
  const completed = allTopics.filter((t) => progress[t.id]).length;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-nfs-light mb-2">
          Frontend Engineering Roadmap
        </h2>
        <p className="text-nfs-gray">
          {completed} of {allTopics.length} topics cleared
          {overall > 0 && overall < 100 && " — keep pushing"}
          {overall === 100 && " — you're Most Wanted!"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {roadmap.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} progress={progress} />
        ))}
      </div>
    </div>
  );
}
