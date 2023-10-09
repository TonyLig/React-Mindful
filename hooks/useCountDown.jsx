import { useEffect, useState } from "react";

export default function useCountDown({ timeInSeconds, countDownStarted }) {
  const [countDownInMilliseconds, setCountDown] = useState(
    timeInSeconds * 1000
  );

  useEffect(() => {
    let interval;

    if (countDownInMilliseconds > 0 && countDownStarted) {
      interval = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1000);
      }, 1000);
    } else if (!countDownStarted) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countDownInMilliseconds, countDownStarted]);

  return getReturnValues(countDownInMilliseconds);
}

function getReturnValues(countDown) {
  const minutes = Math.floor(countDown / (60 * 1000));
  const seconds = parseInt(((countDown % (60 * 1000)) / 1000).toFixed(0));
  return [seconds, minutes];
}
