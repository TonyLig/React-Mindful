import styles from "./CustomButton1.module.css";

export default function CustomButton1({ children, addMargin }) {
  const setMargin = addMargin ? styles["btn-margin"] : "";
  return <button className={`${styles.btn} ${setMargin}`}>{children}</button>;
}
