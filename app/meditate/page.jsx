"use client";
import { useState } from "react";
import styles from "./meditate.module.css";
import TimerControls from "../../components/TimerControls/TimerControls";
import AudioPlayer from "../../components/AudioPlayer/Audioplayer";
import ControlledSelect from "../../components/ControlledSelect/ControlledSelect";
import CircleProgressMeditate from "../../components/CircleProgressMeditate/CircleProgressMeditate";

import forest from "../../public/sounds/forest.mp3";
import park from "../../public/sounds/park.mp3";
import rain from "../../public/sounds/rain.mp3";
import stream from "../../public/sounds/stream.mp3";
import waves from "../../public/sounds/waves.mp3";

export default function CountdownTimer() {
  const [isActive, setIsActive] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(forest);
  const [toggleForm, setToggleForm] = useState(false);
  const [timeInput, setTimeInput] = useState(1); // Store the input min(s)
  const [countDownStarted, setCountDownStarted] = useState(false); // Toggle start and stop
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0); // Time in milliseconds

  const countDownTime = new Date().getTime() + timeInMilliseconds; // Get time ahead in millisecond
  const animationDuration = (countDownTime - new Date().getTime()) / 1000 / 2;

  const options = [
    { value: forest, label: "Forest" },
    { value: park, label: "Park" },
    { value: rain, label: "Rain" },
    { value: stream, label: "Stream" },
    { value: waves, label: "Waves" },
  ];

  function handleAudioChange(e) {
    setSelectedAudio(e.target.value);
  }

  // Get time from input and set time input
  function handleChange(e) {
    const inputData = parseInt(e.target.value);
    setTimeInput(inputData);
  }

  function startTimer() {
    setCountDownStarted(true);
    setIsActive(true);
    if (toggleForm) {
      setToggleForm(false);
    }
    setTimeInMilliseconds(timeInput * 60 * 1000);
  }

  function stopTimer() {
    setCountDownStarted(false);
    setIsActive(false);
    setTimeInMilliseconds(0);
  }

  function onToggle() {
    setToggleForm((toggle) => (toggle = !toggle));
  }

  return (
    <main className={styles.container}>
      <h1>Countdown Timer</h1>
      <ControlledSelect {...{ options, selectedAudio, handleAudioChange }} />

      <AudioPlayer {...{ isActive, selectedAudio }} />

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
