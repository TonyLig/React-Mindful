"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./meditate.module.css";
import CustomButton1 from "@/components/CustomButton1/CustomButtom1";
import TimerControls from "../../components/TimerControls/TimerControls";
import AudioPlayer from "../../components/AudioPlayer/Audioplayer";
import ControlledSelect from "../../components/ControlledSelect/ControlledSelect";
import CircleProgressMeditate from "../../components/CircleProgressMeditate/CircleProgressMeditate";

// Import audio file
import forest from "../../public/sounds/forest.mp3";
import park from "../../public/sounds/park.mp3";
import rain from "../../public/sounds/rain.mp3";
import stream from "../../public/sounds/stream.mp3";
import waves from "../../public/sounds/waves.mp3";

export default function CountdownTimer() {
  // Initial states
  const [isActive, setIsActive] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState(forest);
  const [toggleForm, setToggleForm] = useState(false);
  const [timeInput, setTimeInput] = useState(""); // Store the input min(s)
  const [countDownStarted, setCountDownStarted] = useState(false); // Toggle start and stop
  const [timeInMilliseconds, setTimeInMilliseconds] = useState(0); // Time in milliseconds

  // Get time ahead in millisecond
  const countDownTime = new Date().getTime() + timeInMilliseconds;
  const animationDuration = (countDownTime - new Date().getTime()) / 1000 / 2;

  // Options selection
  const options = [
    { value: forest, label: "Forest" },
    { value: park, label: "Park" },
    { value: rain, label: "Rain" },
    { value: stream, label: "Stream" },
    { value: waves, label: "Waves" },
  ];

  // Handle audio selection change
  function handleAudioChange(e) {
    setSelectedAudio(e.target.value);
  }

  // Handle time input change
  function handleChange(e) {
    const inputData = parseInt(e.target.value);
    if (isNaN(inputData) || inputData > 60) {
      alert("Please enter a number between 1 and 60");
      return;
    }
    setTimeInput(inputData);
  }

  // Start the timer
  function startTimer() {
    const timeInMinutes = parseInt(timeInput);
    if (isNaN(timeInMinutes) || timeInMinutes < 1 || timeInMinutes > 60) {
      alert("Please enter a number between 1 and 60");
      return;
    }

    setCountDownStarted(true);
    setIsActive(true);
    if (toggleForm) {
      setToggleForm(false);
    }
    setTimeInMilliseconds(timeInput * 60 * 1000);
  }

  // Stop the timer
  function stopTimer() {
    setCountDownStarted(false);
    setIsActive(false);
    setTimeInMilliseconds(0);
    setTimeInput("");
  }

  // Toggle the form visibility
  function onToggle() {
    setToggleForm((toggle) => (toggle = !toggle));
  }

  return (
    <main className={styles.container}>
      <label className={styles["label-text"]}>Select Sound:</label>
      <ControlledSelect
        options={options}
        value={selectedAudio}
        onChange={handleAudioChange}
      />

      <AudioPlayer isActive={isActive} selectedAudio={selectedAudio} />

      <CircleProgressMeditate
        {...{
          timeInMilliseconds,
          stopTimer,
          countDownStarted,
          countDownTime,
          animationDuration,
          timeInput,
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

      <Link href={"/"}>
        <CustomButton1 addMarginTop>Home</CustomButton1>
      </Link>
    </main>
  );
}
