"use client";
import { useState } from "react";
import styles from "./meditate.module.css";
import TimerControls from "../../components/TimerControls/TimerControls";
import AudioPlayer from "../../components/AudioPlayer/Audioplayer";
import ControlledSelect from "../../components/ControlledSelect/ControlledSelect";
import CircleProgressMeditate from "../../components/CircleProgressMeditate/CircleProgressMeditate";

function CountdownTimer() {
  const [isActive, setIsActive] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("");
  const [countdownTime, setCountdownTime] = useState(0);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const handleAudioChange = (e) => {
    setSelectedAudio(e.target.value);
  };

  const handleCountdownTimeChange = (seconds) => {
    setCountdownTime(seconds);
  };

  return (
    <main className={styles.container}>
      <h1>Countdown Timer</h1>
      <p>{countdownTime} seconds</p>
      <ControlledSelect
        options={[
          { value: "../../public/sounds/forest.mp3", label: "Forest" },
          { value: "../../public/sounds/park.mp3", label: "Park" },
          { value: "../../public/sounds/rain.mp3", label: "Rain" },
          { value: "../../public/sounds/stream.mp3", label: "Stream" },
          { value: "../../public/sounds/waves.mp3", label: "Waves" },
        ]}
        value={selectedAudio}
        onChange={handleAudioChange}
        disable={false}
      />
      <TimerControls
        isActive={isActive}
        toggleTimer={toggleTimer}
        resetTimer={() => {
          setIsActive(false);
          setCountdownTime(0);
        }}
      />
      <AudioPlayer isActive={isActive} selectedAudio={selectedAudio} />
      <CircleProgressMeditate
        timeInSeconds={countdownTime}
        isActive={isActive}
        stopTimer={() => setIsActive(false)}
      />
    </main>
  );
}

export default CountdownTimer;
