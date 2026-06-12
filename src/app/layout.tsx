import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tinsagaz | Endüstriyel ve Medikal Gazlar, Çelik, Elektrik, Ağır Makine",
    template: "%s | Tinsagaz",
  },
  description:
    "Tinsagaz, tıbbi ve endüstriyel gaz, elektrik, çelik, tüp ve ağır makine üretimi alanlarında Türkiye'nin lider üreticisi. Güvenilir, yenilikçi ve kaliteli çözümler.",
  keywords: [
    "endüstriyel gaz",
    "medikal gaz",
    "tıbbi gaz",
    "çelik üretimi",
    "elektrik",
    "ağır makine",
    "tüp",
    "tinsagaz",
    "sanayi",
  ],
  authors: [{ name: "Tinsagaz" }],
  creator: "Tinsagaz",
  openGraph: {
    title: "Tinsagaz | Endüstriyel ve Medikal Çözümler",
    description:
      "Tıbbi ve endüstriyel gaz, elektrik, çelik ve ağır makine üretiminde güvenilir çözüm ortağınız.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
