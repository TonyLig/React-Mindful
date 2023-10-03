import styles from "./page.module.css";
import Link from "next/link";
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
        <Link href={"/breath"}>
          <CustomButton1 addMarginBottom>Breath</CustomButton1>
        </Link>

        <Link href={"/breath"}>
          <CustomButton1>Meditate</CustomButton1>
        </Link>
      </div>
    </main>
  );
}
