import { useParams, useOutletContext, Navigate, Link } from "react-router-dom";
import { getPhase, getTopic, getAdjacentTopics } from "../data/roadmap";
import BackLink from "../components/BackLink";
import CheckpointCheckbox from "../components/CheckpointCheckbox";

function Section({ title, items, icon }) {
  return (
    <div className="rounded-lg border border-nfs-blue/30 bg-nfs-blue/5 p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-nfs-cyan mb-3 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-nfs-light/90 text-sm leading-relaxed flex gap-2">
            <span className="text-nfs-gray/50 shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TextBlock({ title, text, icon }) {
  return (
    <div className="rounded-lg border border-nfs-blue/30 bg-nfs-blue/5 p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-nfs-cyan mb-3 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>
      <p className="text-nfs-light/90 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function TopicPage() {
  const { phaseSlug, topicSlug } = useParams();
  const { progress, toggleTopic } = useOutletContext();
  const phase = getPhase(phaseSlug);
  const topic = getTopic(phaseSlug, topicSlug);

  if (!phase || !topic) return <Navigate to="/" replace />;

  const { prev, next } = getAdjacentTopics(phaseSlug, topicSlug);
  const checked = !!progress[topic.id];

  return (
    <div>
      <BackLink to={`/phase/${phase.id}`}>{phase.title}</BackLink>

      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-nfs-light mb-1">
            {topic.title}
          </h2>
          <p className="text-sm text-nfs-gray">
            {phase.icon} {phase.title}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-sm font-medium ${checked ? "text-nfs-green" : "text-nfs-gray"}`}>
            {checked ? "Cleared" : "Mark complete"}
          </span>
          <CheckpointCheckbox
            checked={checked}
            onChange={() => toggleTopic(topic.id)}
            label={`Mark ${topic.title} as ${checked ? "incomplete" : "complete"}`}
          />
        </div>
      </div>

      <div className="grid gap-4 mb-8">
        <Section title="Focus Areas" items={topic.focus} icon="🎯" />
        <Section title="Key Notes" items={topic.notes} icon="📝" />
        <Section title="Takeaways" items={topic.takeaways} icon="💡" />
        <div className="grid sm:grid-cols-2 gap-4">
          <TextBlock title="Purpose" text={topic.purpose} icon="🧭" />
          <TextBlock title="Relevance" text={topic.relevance} icon="⚡" />
        </div>
      </div>

      <nav className="flex justify-between items-center border-t border-nfs-blue/30 pt-6">
        {prev ? (
          <Link
            to={`/phase/${prev.phaseId}/topic/${prev.id}`}
            className="text-sm text-nfs-gray hover:text-nfs-cyan no-underline transition-colors"
          >
            &larr; {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/phase/${next.phaseId}/topic/${next.id}`}
            className="text-sm text-nfs-gray hover:text-nfs-cyan no-underline transition-colors"
          >
            {next.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
