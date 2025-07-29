export default function UnitToggle({ unit, onToggle }) {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <span>Select the temperature metric</span>
      <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
        <button
          onClick={() => onToggle("metric")}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
            unit === "metric"
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          °C
        </button>
        <button
          onClick={() => onToggle("imperial")}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
            unit === "imperial"
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          °F
        </button>
      </div>
    </div>
  );
}
