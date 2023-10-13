"use client";
import { Rings } from "react-loader-spinner";
import styles from "./meditate.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Rings
        height="80"
        width="80"
        color="#fff"
        radius="20"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
