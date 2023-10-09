"use client";
import styles from "./meditate.module.css";
import { useState, useEffect } from "react";
import ControlledSelect from "@/components/ControlledSelect/ControlledSelect";

// Values for the reusable select
const options = [
  { value: "../../public/sounds/forest.mp3", label: "Forest" },
  { value: "../../public/sounds/park.mp3", label: "Park" },
  { value: "../../public/sounds/rain.mp3", label: "Rain" },
  { value: "../../public/sounds/stream.mp3", label: "Stram" },
  { value: "../../public/sounds/waves.mp3", label: "Waves" },
];

function handleSelectChange(e) {
  setSelectedOption(e.target.value);
}

export default function MeditatePage() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <main className={styles.container}>
      <label className={styles["label-text"]}>Select Sound:</label>
      <ControlledSelect
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />
    </main>
  );
}
