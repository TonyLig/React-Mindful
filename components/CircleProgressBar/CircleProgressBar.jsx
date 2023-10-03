import styles from "./CircleProgressBar.module.css";

export default function CircleProgressBar({ active }) {
  const circleGrow = active ? styles["circle-grow"] : "";
  return (
    <div className={styles["circle-wrap"]}>
      <div className={styles["circle-outline"]}></div>
      <div className={`${styles["circle-progress"]} ${circleGrow} `}></div>
    </div>
  );
}
