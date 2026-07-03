import type { Metadata } from "next";
import { Locale, getDictionary } from "../dictionaries";
import KnowledgeBaseClient from "./KnowledgeBaseClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const isTr = currentLocale === "tr";

  return {
    title: isTr 
      ? "Bilgi Bankası ve Sıkça Sorulan Sorular | Tinsagaz" 
      : "Knowledge Base & FAQ | Tinsagaz",
    description: isTr 
      ? "Argon gazı, medikal oksijen, kuru buz fiyatları, kuru buz temizliği, gazlı söndürme sistemleri ve gaz güvenlik rehberi hakkında detaylı bilgi bankası." 
      : "Detailed knowledge base about industrial gases, medical oxygen, dry ice cleaning, fire suppression systems, and safety manuals.",
    keywords: [
      "argon gazı", "azot gazı", "kuru buz", "kuru buz temizliği", "kuru buz fiyatları",
      "kuru buz satın al", "gazlı söndürme", "fm200 nedir", "novec 1230", "oksijen vs medikal oksijen",
      "argon yanıcı mı", "argon kaç bar basılır", "kuru buz izmir", "kuru buz bodrum"
    ]
  };
}

export default async function BilgiBankasiPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const labels = {
    title: currentLocale === "tr" ? "Bilgi Bankası & SSS" : "Knowledge Base & FAQ",
    desc: currentLocale === "tr" 
      ? "Sınai ve medikal gazlar, kuru buz uygulamaları, gaz güvenliği ve yangın söndürme sistemleri hakkında aradığınız tüm teknik bilgiler." 
      : "All technical information about industrial and medical gases, dry ice applications, safety, and fire suppression systems.",
    searchPlaceholder: currentLocale === "tr" ? "Soru, konu veya anahtar kelime ara..." : "Search questions, topics or keywords...",
    all: currentLocale === "tr" ? "Tümü" : "All",
    dryIce: currentLocale === "tr" ? "Kuru Buz" : "Dry Ice",
    industrial: currentLocale === "tr" ? "Sınai Gazlar" : "Industrial Gases",
    medical: currentLocale === "tr" ? "Medikal Gazlar" : "Medical Gases",
    suppression: currentLocale === "tr" ? "Söndürme Sistemleri" : "Suppression Systems",
    downloads: currentLocale === "tr" ? "Teknik Kataloglar" : "Technical Catalogs",
    delivery: currentLocale === "tr" ? "Kuru Buz Teslimat Bölgelerimiz" : "Dry Ice Delivery Regions",
    deliveryDesc: currentLocale === "tr" 
      ? "Toptan veya pelet formunda kuru buz siparişleriniz için Ege Bölgesi geneline yerinde kuru buz teslimatı ve periyodik tedarik sağlamaktayız." 
      : "We provide dry ice delivery and periodic supply services across the Aegean Region for your bulk or pellet dry ice orders.",
    contactTitle: currentLocale === "tr" ? "Sorunuz mu var?" : "Have a question?",
    contactDesc: currentLocale === "tr"
      ? "Aradığınız yanıtı bulamadıysanız veya özel teklif almak istiyorsanız, teknik ekibimizle hemen iletişime geçebilirsiniz."
      : "If you couldn't find the answer you were looking for or want a custom quote, feel free to contact our technical team.",
    contactBtn: currentLocale === "tr" ? "Bize Ulaşın" : "Contact Us",
  };

  return <KnowledgeBaseClient locale={locale} labels={labels} />;
}
