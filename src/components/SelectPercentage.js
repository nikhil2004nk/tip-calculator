import "./SelectPercentage.css";

export default function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="input-group select-group">
      <label className="input-label">{children}</label>
      <div className="select-wrapper">
        <select
          className="select-field"
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </div>
  );
} 