import styles from "./BreathStatus.module.css";

export default function BreathStatus({ breathsLeft, text, selectedOption }) {
  return (
    <div className={styles.container}>
      <p className={styles.breaths}>
        Breaths remaining:
        <span className={styles["breaths-text"]}>
          {breathsLeft === selectedOption ? selectedOption : +breathsLeft + 1}
        </span>
      </p>
      <p className={styles.instructions}>{text}</p>
    </div>
  );
}
