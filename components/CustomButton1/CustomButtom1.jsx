import styles from "./CustomButton1.module.css";

export default function CustomButton1({
  children,
  onClick,
  disable,
  addMarginTop,
  addMarginBottom,
}) {
  const setMarginTop = addMarginTop ? styles["btn-margin-top"] : "";
  const setMarginBottom = addMarginBottom ? styles["btn-margin-bottom"] : "";
  const setInactive = disable ? styles["btn-inactive"] : "";
  return (
    <button
      className={`${styles.btn} ${setMarginTop} ${setMarginBottom} ${setInactive}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
