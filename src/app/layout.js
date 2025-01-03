// app/layout.js
import { Roboto } from "next/font/google";
import Navbar from "./components/ui/Navbar";
import SmoothScroll from "./components/ui/SmoothScroll";
import "./globals.css";
import Footer from "./components/ui/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "ANDREA VARELA | Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.variable} bg-texture bg-center bg-[#ffffff]  overflow-x-hidden`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
