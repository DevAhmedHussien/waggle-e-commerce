// app/layout.js
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/header/NavBar";
import Footer from "@/components/component/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: true,
});

export const metadata = {
  title: "Clothes Store",
  description: "Your one-stop shop for the latest fashion trends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Toaster/>
        <Footer />
      </body>
    </html>
  );
}
