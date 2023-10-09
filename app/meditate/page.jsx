"use client";
import { useState } from "react";
import styles from "./meditate.module.css";
import TimerControls from "../../components/TimerControls/TimerControls";
import AudioPlayer from "../../components/AudioPlayer/Audioplayer";
import ControlledSelect from "../../components/ControlledSelect/ControlledSelect";
import CircleProgressMeditate from "../../components/CircleProgressMeditate/CircleProgressMeditate";

export default function CountdownTimer() {
  const [isActive, setIsActive] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("");

  const [toggleForm, setToggleForm] = useState(false);
  // Store the input min(s)
  const [timeInput, setTimeInput] = useState(1);
  // Toggle start and stop
  const [countDownStarted, setCountDownStarted] = useState(false);
  // Time in milliseconds
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0);

  const countDownTime = new Date().getTime() + timeInMilliseconds; // Get time ahead in millisecond
  const animationDuration = (countDownTime - new Date().getTime()) / 1000 / 2;

  const options = [
    { value: "../../public/sounds/forest.mp3", label: "Forest" },
    { value: "../../public/sounds/park.mp3", label: "Park" },
    { value: "../../public/sounds/rain.mp3", label: "Rain" },
    { value: "../../public/sounds/stream.mp3", label: "Stream" },
    { value: "../../public/sounds/waves.mp3", label: "Waves" },
  ];

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function handleAudioChange(e) {
    setSelectedAudio(e.target.value);
  }

  function startTimer() {
    setCountDownStarted(true);
    if (toggleForm) {
      setToggleForm(false);
    }
    setTimeInMilliseconds(timeInput * 60 * 1000);
  }

  function stopTimer() {
    setCountDownStarted(false);
    setTimeInMilliseconds(0);
  }

  function onToggle() {
    setToggleForm((toggle) => (toggle = !toggle));
  }

  // Get time from input and set time input
  function handleChange(e) {
    const inputData = parseInt(e.target.value);
    setTimeInput(inputData);
  }

  return (
    <main className={styles.container}>
      <h1>Countdown Timer</h1>
      <ControlledSelect
        options={options}
        value={selectedAudio}
        onChange={handleAudioChange}
        disable={false}
      />
      <AudioPlayer isActive={toggleTimer} selectedAudio={selectedAudio} />
      <CircleProgressMeditate
        {...{
          timeInMilliseconds,
          stopTimer,
          countDownStarted,
          countDownTime,
          animationDuration,
        }}
      />
      <TimerControls
        {...{
          toggleForm,
          onToggle,
          handleChange,
          timeInput,
          countDownStarted,
          startTimer,
          stopTimer,
          useState,
        }}
      />
    </main>
  );
}
