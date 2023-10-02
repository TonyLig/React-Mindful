"use client";

import { useState } from "react";
import styles from "./breath.module.css";
import ControlledSelect from "@/components/ControlledSelect/ControlledSelect";
import CircleProgressBar from "@/components/CircleProgressBar/CircleProgressBar";

const options = [
  { value: "3", label: "3 Breaths" },
  { value: "5", label: "5 Breaths" },
  { value: "7", label: "7 Breaths" },
];

export default function BreathPage() {
  const [selectedOption, setSelectedOption] = useState("3");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <main className={styles.container}>
      <label className={styles["label-text"]}>Select Breaths:</label>
      <ControlledSelect
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <CircleProgressBar />
    </main>
  );
}
