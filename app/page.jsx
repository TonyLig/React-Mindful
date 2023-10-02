import styles from "./page.module.css";
import Logo from "@/components/Logo/Logo";
import BrandHeader from "@/components/BrandHaeader/BrandHeader";
import CustomButton1 from "@/components/CustomButton1/CustomButtom1";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles["header-container"]}>
        <Logo />
        <BrandHeader className={styles["main-header"]} />
      </header>
      <div className={styles["button-container"]}>
        <CustomButton1 addMargin>Breath</CustomButton1>
        <CustomButton1 addMargin>Meditate</CustomButton1>
      </div>
    </main>
  );
}
