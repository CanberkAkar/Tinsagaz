import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
    ? "Tinsagaz | Endüstriyel ve Medikal Gazlar, Tüp Sistemleri"
    : currentLocale === "en"
    ? "Tinsagaz | Industrial and Medical Gases, Cylinder Systems"
    : currentLocale === "de"
    ? "Tinsagaz | Industrie- und Medizinische Gase, Flaschensysteme"
    : currentLocale === "fr"
    ? "Tinsagaz | Gaz Industriels et Médicaux, Systèmes de Bouteilles"
    : currentLocale === "it"
    ? "Tinsagaz | Gas Industriali e Medicali, Sistemi di Bombole"
    : "Tinsagaz | 産業用および医療用ガス、シリンダーシステム";

  const descText = dict.footer.desc;

  return {
    title: {
      absolute: titleText,
    },
    description: descText,
    keywords: [
      "endüstriyel gaz",
      "medikal gaz",
      "tıbbi gaz",
      "tüp",
      "tinsagaz",
      "sanayi",
      "industrial gas",
      "medical gas",
      "argon gazı",
      "azot gazı",
      "kuru buz",
      "kuru buz temizliği",
      "kuru buz izmir",
      "kuru buz muğla",
      "kuru buz bodrum",
      "gazlı söndürme",
      "fm200",
      "novec 1230",
      "kaynak regülatörü",
      "medikal oksijen"
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
