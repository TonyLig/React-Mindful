import styles from "./CircleProgressBar.module.css";

export default function CircleProgressBar() {
  return (
    <div className={styles["circle-wrap"]}>
      <div className={styles["circle-outline"]}></div>
      <div className={styles["circle-progress"]}></div>
    </div>
  );
}
