import { useEffect, memo } from "react";
import useCountDown from "../../hooks/useCountDown";
import styles from "./CircleProgressMeditate.module.css";
import Logo from "../Logo/Logo";

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

  // UI time add "0"
  const coMin = minutes < 10 ? "0" + minutes : minutes;
  const coSec = seconds < 10 ? "0" + seconds : seconds;

  // Use useEffect to stop the timer when time is up
  useEffect(() => {
    if (minutes + seconds <= 0) {
      stopTimer();
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes, seconds]);

  return (
    <div className={styles["prg-container"]}>
      <div className={styles["prg-widget"]}>
        <div className={styles["prg-widget-Inner"]} />
        <div className={styles["prg-widget-number"]}>
          <Logo />
          {!timeInput && "00:00"}
          {!countDownStarted &&
            timeInput &&
            timeInput.toString().padStart(2, 0) + ":00"}
          {countDownStarted &&
            timeInput &&
            seconds === 0 &&
            timeInput.toString().padStart(2, 0) + ":00"}
          {countDownStarted &&
            timeInput &&
            seconds !== 0 &&
            coMin + ":" + coSec}
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
