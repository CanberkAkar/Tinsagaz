import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locales, Locale, getDictionary } from "./dictionaries";

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

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const titleText = currentLocale === "tr"
    ? "Tinsagaz | Endüstriyel ve Medikal Gazlar, Çelik, Elektrik, Ağır Makine"
    : currentLocale === "en"
    ? "Tinsagaz | Industrial and Medical Gases, Steel, Electricity, Heavy Machinery"
    : currentLocale === "de"
    ? "Tinsagaz | Industrie- und Medizinische Gase, Stahl, Elektrizität, Schwere Maschinen"
    : currentLocale === "fr"
    ? "Tinsagaz | Gaz Industriels et Médicaux, Acier, Électricité, Machines Lourdes"
    : currentLocale === "it"
    ? "Tinsagaz | Gas Industriali e Medicali, Acciaio, Elettricità, Macchinari Pesanti"
    : "Tinsagaz | 産業用および医療用ガス、鉄鋼、電気、重機械";

  const descText = dict.footer.desc;

  return {
    title: {
      default: titleText,
      template: "%s | Tinsagaz",
    },
    description: descText,
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
      "industrial gas",
      "medical gas",
      "steel production",
      "heavy machinery",
    ],
    authors: [{ name: "Tinsagaz" }],
    creator: "Tinsagaz",
    openGraph: {
      title: titleText,
      description: descText,
      type: "website",
      locale: currentLocale === "ja" ? "ja_JP" : `${currentLocale}_${currentLocale.toUpperCase()}`,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  const dict = await getDictionary(currentLocale);

  return (
    <html lang={currentLocale} className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar lang={currentLocale} navDict={dict.nav} />
        <main>{children}</main>
        <Footer lang={currentLocale} footerDict={dict.footer} navDict={dict.nav} />
      </body>
    </html>
  );
}
