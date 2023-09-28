import Image from "next/image";
import logo from "../public/logo.png";

export default function Logo() {
  return (
    <figure>
      <Image src={logo} alt="logo loto flower" />
      <figcaption>stylized lotus flower</figcaption>
    </figure>
  );
}
