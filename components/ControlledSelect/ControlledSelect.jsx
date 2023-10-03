import styles from "./ControlledSelect.module.css";

export default function ControlledSelect({
  options,
  value,
  onChange,
  disable,
}) {
  const setInactive = disable ? styles["select-inactive"] : "";
  return (
    <select
      className={`${styles["select-box"]} ${setInactive}`}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
