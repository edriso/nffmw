import { getSpeedRank } from "../utils/progress";

export default function SpeedBadge({ percentage }) {
  const { label, color } = getSpeedRank(percentage);

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide uppercase border ${color} ${
        percentage === 100
          ? "border-nfs-yellow/50 bg-nfs-yellow/10"
          : "border-current/20 bg-current/5"
      }`}
    >
      {label}
    </span>
  );
}
