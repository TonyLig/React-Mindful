import { useEffect, memo } from "react";
import useCountDown from "../../hooks/useCountDown";
import styles from "./CircleProgressMeditate.module.css";

function CircleProgressMeditate({
  timeInMilliseconds,
  stopTimer,
  countDownStarted,
  countDownTime,
  animationDuration,
}) {
  const [seconds, minutes] = useCountDown({
    timeInMilliseconds,
    countDownStarted,
    countDownTime,
  });

  const coMin = minutes < 10 ? "0" + minutes : minutes;
  const coSec = seconds < 10 ? "0" + seconds : seconds;

  useEffect(() => {
    if (minutes + seconds <= 0) {
      stopTimer();
      return;
    }
  }, [minutes, seconds]);

  return (
    <div className={styles.pgContainer}>
      <div className={styles.pgWidget}>
        <div className={styles.pgWidgetInner} />
        <div className={styles.pgWidgetNumber}>
          {coMin}:{coSec}
        </div>

        <div className={styles.circle}>
          <div className={styles.pgWidgetBarL}>
            <div
              className={styles.pgWidgetProgressLeft}
              style={{
                animation:
                  timeInMilliseconds > 0
                    ? `${styles.left} ${animationDuration}s linear both`
                    : "",
              }}
            />
          </div>
          <div className={styles.pgWidgetBarR}>
            <div
              className={styles.pgWidgetProgressRight}
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
