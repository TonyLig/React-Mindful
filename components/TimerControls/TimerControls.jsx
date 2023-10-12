import CustomButton1 from "../CustomButton1/CustomButtom1";
import styles from "./TimerControl.module.css";

export default function TimerControls({
  countDownStarted,
  startTimer,
  stopTimer,
  onToggle,
  toggleForm,
  handleChange,
}) {
  return (
    <>
      <div className={styles["button-container"]}>
        {!countDownStarted ? (
          <CustomButton1 onClick={startTimer}>Start</CustomButton1>
        ) : (
          <CustomButton1 onClick={stopTimer}>Stop</CustomButton1>
        )}

        <CustomButton1 onClick={onToggle} addMarginTop>
          Set Time
        </CustomButton1>
      </div>

      {toggleForm ? (
        <div>
          <input
            className={styles["input-form"]}
            type="number"
            placeholder="Enter Time"
            onChange={handleChange}
            name="time"
            required
          />
        </div>
      ) : null}
    </>
  );
}
