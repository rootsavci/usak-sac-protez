import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uşak Saç Protez Merkezi | Doğal Görünümlü Saç Protezi",
  description: "Uşak'ta profesyonel, doğal görünümlü saç protez uygulamaları. Özgüveninizi geri kazanın. Temiz, ferah ve lüks kliniğimizde hizmet veriyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={outfit.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

