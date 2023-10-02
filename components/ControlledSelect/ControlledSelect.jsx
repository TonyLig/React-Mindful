import styles from "./ControlledSelect.module.css";

export default function ControlledSelect({ options, value, onChange }) {
  return (
    <select className={styles["select-box"]} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
