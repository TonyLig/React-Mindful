import styles from "./CustomButton1.module.css";

export default function CustomButton1({
  children,
  addMargin,
  onClick,
  disable,
}) {
  const setMargin = addMargin ? styles["btn-margin"] : "";
  const setInactive = disable ? styles["btn-inactive"] : "";
  return (
    <button
      className={`${styles.btn} ${setMargin} ${setInactive}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
