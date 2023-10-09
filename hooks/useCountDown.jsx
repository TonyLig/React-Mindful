import { useEffect, useState } from "react";
export default function useCountDown({
  timeInMilliseconds,
  countDownStarted,
  countDownTime,
}) {
  const [countDownInMilliseconds, setCountDown] = useState(
    countDownTime - new Date().getTime()
  );

  useEffect(() => {
    let interval;
    if (timeInMilliseconds > 0) {
      interval = setInterval(() => {
        setCountDown(countDownTime - new Date().getTime());
      }, 1000);
    } else if (!countDownStarted) {
      clearInterval(interval);
      setCountDown(0);
    }
    return () => clearInterval(interval);
  }, [countDownTime, timeInMilliseconds, countDownStarted]);
  return getReturnValues(countDownInMilliseconds);
}

function getReturnValues(countDown) {
  // calculate the time left
  const minutes = Math.floor(countDown / (60 * 1000));
  const seconds = parseInt(((countDown % (60 * 1000)) / 1000).toFixed(0));
  return [seconds, minutes];
}
