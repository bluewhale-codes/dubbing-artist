export function ToggleSwitch({ label, enabled, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          enabled ? "bg-purple-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>

      <span className="text-sm font-medium text-gray-700">
        {label}
      </span>
    </div>
  );
}