import { Link } from "react-router-dom";

export default function BackLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm text-nfs-gray hover:text-nfs-cyan no-underline transition-colors mb-6"
    >
      <span>&larr;</span>
      <span>{children}</span>
    </Link>
  );
}
