export default function FilterField({
  difficultyFilter,
  onDifficultyChange,
  wateringFilter,
  onWateringChange,
  soilFilter,
  onSoilChange,
  typeFilter,
  onTypeChange,
  difficultyOptions = [],
  wateringOptions = [],
  soilOptions = [],
  typeOptions = [],
}) {
  return (
    <div>
      {difficultyOptions.length > 0 && onDifficultyChange && (
        <select
          value={difficultyFilter}
          onChange={onDifficultyChange}
        >
          <option value="">All difficulty levels</option>
          {difficultyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}

      {wateringOptions.length > 0 && onWateringChange && (
        <select
          value={wateringFilter}
          onChange={onWateringChange}
        >
          <option value="">All watering needs</option>
          {wateringOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}

      {soilOptions.length > 0 && onSoilChange && (
        <select
          value={soilFilter}
          onChange={onSoilChange}
        >
          <option value="">All soil types</option>
          {soilOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}

      {typeOptions.length > 0 && onTypeChange && (
        <select
          value={typeFilter}
          onChange={onTypeChange}
        >
          <option value="">All plant types</option>
          {typeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
    </div>
  );
}

