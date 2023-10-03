"use client";

import { useEffect, useState } from "react";
import styles from "./breath.module.css";
import ControlledSelect from "@/components/ControlledSelect/ControlledSelect";
import CircleProgressBar from "@/components/CircleProgressBar/CircleProgressBar";
import BreathStatus from "@/components/BreathStatus/BreathStatus";
import CustomButton1 from "@/components/CustomButton1/CustomButtom1";

// Constants for breath timings
const totalTime = 12000;
const timePerBreath = totalTime / 3;
const timeForHold = timePerBreath * 2;

// Values for the reusable select
const options = [
  { value: 3, label: "3 Breaths" },
  { value: 5, label: "5 Breaths" },
  { value: 7, label: "7 Breaths" },
];

export default function BreathPage() {
  // Initial states
  const [selectedOption, setSelectedOption] = useState(3);
  const [breathsLeft, setBreathsLeft] = useState(3);
  const [disableButton, setDisableButton] = useState(false);
  const [activeCircle, setActiveCircle] = useState(false);
  const [breathText, setBreathText] = useState(
    "Are you ready to start breathing?"
  );

  // Change the selected number of breaths
  useEffect(() => {
    setBreathsLeft(selectedOption);
  }, [selectedOption]);

  // Main effect to manage breathing
  useEffect(() => {
    if (breathsLeft < 0) {
      // Reset everything when the number of breaths is completed
      setBreathsLeft(selectedOption);
      setBreathText("Are you ready to start breathing?");
      setDisableButton(false);
      return;
    }
    if (breathsLeft !== selectedOption) {
      // Start the timer for the next breath
      setTimeout(() => {
        setBreathsLeft(breathsLeft - 1);
      }, totalTime);
      // Update the breath text and circle animation
      breathTextUpdate();
      circleUpdate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breathsLeft]);

  // Handle selection change
  function handleSelectChange(e) {
    setSelectedOption(e.target.value);
  }

  // Handle click on the "Begin" button
  function handleClick() {
    if (breathsLeft > 0) setDisableButton(true);
    setBreathsLeft(breathsLeft - 1);
  }

  // Update the breath text
  function breathTextUpdate() {
    if (breathsLeft === 0) return;
    setBreathText("Inhale");
    setTimeout(() => {
      setBreathText("Hold Breath");
      setTimeout(() => {
        setBreathText("Exhale Breath Slowly");
      }, timePerBreath);
    }, timePerBreath);
  }

  // Update the circle animation
  function circleUpdate() {
    setActiveCircle(true);
    setTimeout(() => {
      setActiveCircle(false);
    }, timeForHold);
  }

  return (
    <main className={styles.container}>
      <label className={styles["label-text"]}>Select Breaths:</label>
      <ControlledSelect
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <CircleProgressBar active={activeCircle} />
      <BreathStatus
        text={breathText}
        breathsLeft={breathsLeft}
        selectedOption={selectedOption}
      />
      <CustomButton1 onClick={handleClick} disable={disableButton}>
        Begin
      </CustomButton1>
    </main>
  );
}
