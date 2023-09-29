import styles from "./page.module.css";
import Button from "../components/Button/Button";
import Logo from "@/components/Logo/Logo";
import BrandHeader from "@/components/BrandHeader/BrandHeader";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles["button-container"]}>
          <Button addMargin>Breath</Button>
          <Button addMargin>Lallero</Button>
        </div>
        <header className={styles["header-container"]}>
          <Logo />
          <BrandHeader className={styles["main-header"]} />
        </header>
      </div>
    </main>
  );
}
