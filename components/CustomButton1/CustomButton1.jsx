import styles from "./CustomButton1.module.css";

export default function CustomButton1({
  children,
  onClick,
  disable,
  addMarginTop,
  addMarginBottom,
}) {
  // Determine whether to add margin
  const setMarginTop = addMarginTop ? styles["btn-margin-top"] : "";
  const setMarginBottom = addMarginBottom ? styles["btn-margin-bottom"] : "";

  // Determine whether the button should be inactive (disabled) based on the 'disable' prop
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
