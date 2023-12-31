import styles from "./BreathStatus.module.css";

export default function BreathStatus({ breathsLeft, text, selectedOption }) {
  // Calculate the breaths to show based on the selected option and breaths left
  const breathsToShow =
    breathsLeft === selectedOption ? selectedOption : +breathsLeft + 1;

  return (
    <div className={styles.container}>
      <p className={styles.breaths}>
        Breaths remaining:
        <span className={styles["breaths-text"]}>{breathsToShow}</span>
      </p>
      <p className={styles.instructions}>{text}</p>
    </div>
  );
}
