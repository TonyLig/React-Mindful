import styles from "./Button.module.css";

export default function Button({ children, addMargin }) {
  const setMargin = addMargin ? styles["btn-margin"] : "";
  return <button className={`${styles.btn} ${setMargin}`}>{children}</button>;
}
