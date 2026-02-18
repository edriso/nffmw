import { Link } from "react-router-dom";
import CheckpointCheckbox from "./CheckpointCheckbox";

export default function TopicCard({ topic, phaseSlug, checked, onToggle }) {
  return (
    <div
      className={`flex items-center gap-4 rounded-lg border p-4 transition-all duration-200 ${
        checked
          ? "border-nfs-green/30 bg-nfs-green/5"
          : "border-nfs-blue/30 bg-nfs-blue/5 hover:border-nfs-cyan/40"
      }`}
    >
      <CheckpointCheckbox
        checked={checked}
        onChange={() => onToggle(topic.id)}
        label={`Mark ${topic.title} as ${checked ? "incomplete" : "complete"}`}
      />
      <Link
        to={`/phase/${phaseSlug}/topic/${topic.id}`}
        className={`flex-1 font-medium no-underline transition-colors ${
          checked ? "text-nfs-green" : "text-nfs-light hover:text-nfs-cyan"
        }`}
      >
        {topic.title}
        {checked && <span className="ml-2 text-xs text-nfs-green/70">cleared</span>}
      </Link>
      <Link
        to={`/phase/${phaseSlug}/topic/${topic.id}`}
        className="text-nfs-gray hover:text-nfs-cyan text-sm no-underline"
        aria-label={`View ${topic.title} details`}
      >
        &rarr;
      </Link>
    </div>
  );
}
