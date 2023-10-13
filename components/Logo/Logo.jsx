import Image from "next/image";
import logo1 from "../../public/images/logo1.png";

export default function Logo() {
  return (
    <figure>
      <Image
        src={logo1}
        width={100}
        height={50}
        alt="logo loto flower"
        style={{ userSelect: "none" }}
      />
    </figure>
  );
}
