import styles from "./page.module.css";
import Button from "../components/Button";
import Logo from "@/components/Logo";
import BrandHeader from "@/components/BrandHeader";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.container}>
          <header className={styles["header-container"]}>
            <Logo />
            <BrandHeader className={styles["main-header"]} />
          </header>
          <div className={styles["button-container"]}>
            <Button />
            <Button />
          </div>
        </div>
      </main>
    </>
  );
}
