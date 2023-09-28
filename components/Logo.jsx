import Image from "next/image";
import logo1 from "../public/logo1.png";

export default function Logo() {
  return (
    <figure>
      <Image src={logo1} width={400} height={250} alt="logo loto flower" />
    </figure>
  );
}
