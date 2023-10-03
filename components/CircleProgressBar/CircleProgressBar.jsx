import styles from "./CircleProgressBar.module.css";
import Logo from "../Logo/Logo";

export default function CircleProgressBar({ active }) {
  const circleGrow = active ? styles["circle-grow"] : "";
  return (
    <div className={styles["circle-wrap"]}>
      <div className={styles["circle-outline"]}>
        <Logo />
      </div>
      <div className={`${styles["circle-progress"]} ${circleGrow} `}></div>
    </div>
  );
}
