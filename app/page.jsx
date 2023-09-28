import styles from "./page.module.css";
import Button from "../components/Button";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.container}>
          <header>
            <Logo />
            <h1>MEDITATION APP</h1>
          </header>
          <Button />
          <Button />
        </div>
      </main>
    </>
  );
}
