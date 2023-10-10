import { useEffect, memo } from "react";
import useCountDown from "../../hooks/useCountDown";
import styles from "./CircleProgressMeditate.module.css";

function CircleProgressMeditate({
  timeInMilliseconds,
  stopTimer,
  countDownStarted,
  countDownTime,
  animationDuration,
  timeInput,
}) {
  const [seconds, minutes] = useCountDown({
    timeInMilliseconds,
    countDownStarted,
    countDownTime,
  });
  const showTotalTime = timeInput < 10 ? "0" + timeInput : timeInput;
  const coMin = minutes < 10 ? "0" + minutes : minutes;
  const coSec = seconds < 10 ? "0" + seconds : seconds;

  useEffect(() => {
    if (minutes + seconds <= 0) {
      stopTimer();
      return;
    }
  }, [minutes, seconds]);

  return (
    <div className={styles["prg-container"]}>
      <div className={styles["prg-widget"]}>
        <div className={styles["prg-widget-Inner"]} />
        <div className={styles["prg-widget-number"]}>
          {!countDownStarted ? `${showTotalTime}:00` : `${coMin}:${coSec}`}
        </div>

        <div className={styles["prg-main-circle"]}>
          <div className={styles["prg-widget-bar-left"]}>
            <div
              className={styles["prg-widget-progress-left"]}
              style={{
                animation:
                  timeInMilliseconds > 0
                    ? `${styles.left} ${animationDuration}s linear both`
                    : "",
              }}
            />
          </div>
          <div className={styles["prg-widget-bar-right"]}>
            <div
              className={styles["prg-widget-progress-right"]}
              style={{
                animation:
                  timeInMilliseconds > 0
                    ? `${styles.right} ${animationDuration}s linear both`
                    : "",
                animationDelay:
                  timeInMilliseconds > 0 ? `${animationDuration}s` : "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CircleProgressMeditate);
