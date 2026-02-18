export default function ProgressBar({ value, size = "sm" }) {
  const height = size === "lg" ? "h-3" : "h-2";

  return (
    <div className={`w-full bg-nfs-blue/40 rounded-full overflow-hidden ${height}`}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-nfs-cyan to-nfs-green transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
