export default function CheckpointCheckbox({ checked, onChange, label }) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer ${
        checked
          ? "bg-nfs-green border-nfs-green text-nfs-dark"
          : "border-nfs-gray/40 hover:border-nfs-cyan"
      }`}
    >
      {checked && (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
  );
}
