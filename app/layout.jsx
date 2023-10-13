import "./globals.css";
import { Raleway } from "next/font/google";
import Favicon from "../public/images/favicon.ico";

// Font setting
const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Meditation App",
  description: "application for meditation",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
