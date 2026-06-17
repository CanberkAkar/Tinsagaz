import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./urunler.module.css";
import { Locale, getDictionary } from "../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: currentLocale === "tr"
      ? "Ürünler | Tinsagaz"
      : currentLocale === "en"
      ? "Products | Tinsagaz"
      : currentLocale === "de"
      ? "Produkte | Tinsagaz"
      : currentLocale === "fr"
      ? "Produits | Tinsagaz"
      : currentLocale === "it"
      ? "Prodotti | Tinsagaz"
      : "製品 | Tinsagaz",
    description: dict.footer.desc,
  };
}

function getCategoryIcon(id: string) {
  switch (id) {
    case "tumu":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "medikal-gaz":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "endustriyel-gaz":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "celik":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      );
    case "elektrik":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "tup":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M6 9V5a3 3 0 0 1 6 0v4m-6 0h6m0-4v4" />
          <rect x="4" y="9" width="16" height="13" rx="2" />
        </svg>
      );
    case "agir-makine":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
}

function getProductIcon(id: string) {
  switch (id) {
    case "medikal-oksijen":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
          <path d="M7 14h10v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3Z" />
          <circle cx="12" cy="7" r="1.2" fill="var(--primary)" />
        </svg>
      );
    case "azot-protoksit":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "medikal-karbondioksit":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 2v20M17 5l-5 5-5-5M22 12H2M19 17l-5-5 5-5M5 17l5-5-5-5" />
        </svg>
      );
    case "medikal-hava":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2M12.59 19.41A2 2 0 1 0 14 16H2M17.73 11.27A2.5 2.5 0 1 1 19.5 15H2" />
        </svg>
      );
    case "medikal-sivi-azot":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 18a3 3 0 0 0 3-3c0-1.8-3-5.5-3-5.5S9 13.2 9 15a3 3 0 0 0 3 3z" />
        </svg>
      );
    case "endustriyel-oksijen":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "argon":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "endustriyel-azot":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="5" r="3" />
          <circle cx="6" cy="15" r="3" />
          <circle cx="18" cy="15" r="3" />
          <path d="M12 8v4M9 13.5l3-1.5M15 13.5l-3-1.5" />
        </svg>
      );
    case "helyum":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z" />
          <path d="M2 12h20" />
        </svg>
      );
    case "asetilen":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="m18 2-3 3M15 5l-9 9M6 14l-4 4M2 18l4-4M6 14h6M12 8v6M22 22l-4-4" />
        </svg>
      );
    case "kaynak-karisimlari":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "celik-profil":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M6 3h12M6 21h12M12 3v18M6 3v18M18 3v18" />
        </svg>
      );
    case "elektrik-panel":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="m13 7-4 5h6l-4 5" />
          <path d="M9 3v18" />
        </svg>
      );
    case "basinc-tup":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <rect x="7" y="8" width="10" height="14" rx="2" />
          <path d="M9 8V5a3 3 0 0 1 6 0v3M12 2v3" />
        </svg>
      );
    case "mcp-paketleri":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
          <circle cx="6" cy="6" r="0.8" fill="var(--primary)" />
          <circle cx="12" cy="6" r="0.8" fill="var(--primary)" />
          <circle cx="18" cy="6" r="0.8" fill="var(--primary)" />
          <circle cx="6" cy="12" r="0.8" fill="var(--primary)" />
          <circle cx="12" cy="12" r="0.8" fill="var(--primary)" />
          <circle cx="18" cy="12" r="0.8" fill="var(--primary)" />
        </svg>
      );
    case "kompressor":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
        </svg>
      );
    case "vinc":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M3 21h18M5 21V6M19 21V6M4 6h16M12 6v6" />
          <rect x="10" y="12" width="4" height="4" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}

export default async function UrunlerPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const categories = [
    { id: "tumu", label: locale === "tr" ? "Tümü" : locale === "en" ? "All" : locale === "de" ? "Alle" : locale === "fr" ? "Tout" : locale === "it" ? "Tutti" : "すべて" },
    { id: "medikal-gaz", label: locale === "tr" ? "Medikal Gaz" : locale === "en" ? "Medical Gas" : locale === "de" ? "Medizinische Gase" : locale === "fr" ? "Gaz Médical" : locale === "it" ? "Gas Medicale" : "医療用ガス" },
    { id: "endustriyel-gaz", label: locale === "tr" ? "Endüstriyel Gaz" : locale === "en" ? "Industrial Gas" : locale === "de" ? "Industriegase" : locale === "fr" ? "Gaz Industriel" : locale === "it" ? "Gas Industriale" : "産業用ガス" },
    { id: "celik", label: locale === "tr" ? "Çelik" : locale === "en" ? "Steel" : locale === "de" ? "Stahl" : locale === "fr" ? "Acier" : locale === "it" ? "Acciaio" : "鉄鋼" },
    { id: "elektrik", label: locale === "tr" ? "Elektrik" : locale === "en" ? "Electricity" : locale === "de" ? "Elektrizität" : locale === "fr" ? "Électricité" : locale === "it" ? "Elettricità" : "電気" },
    { id: "tup", label: locale === "tr" ? "Tüp" : locale === "en" ? "Cylinder" : locale === "de" ? "Flaschen" : locale === "fr" ? "Bouteille" : locale === "it" ? "Bombola" : "高圧シリンダー" },
    { id: "agir-makine", label: locale === "tr" ? "Ağır Makine" : locale === "en" ? "Heavy Machinery" : locale === "de" ? "Schwere Maschinen" : locale === "fr" ? "Machines Lourdes" : locale === "it" ? "Macchinari Pesanti" : "重機械" },
  ];

  const catLabels: Record<string, string> = {
    "medikal-gaz": categories[1].label,
    "endustriyel-gaz": categories[2].label,
    "celik": categories[3].label,
    "elektrik": categories[4].label,
    "tup": categories[5].label,
    "agir-makine": categories[6].label,
  };

  const actionText = locale === "tr" ? "Teklif İste" : locale === "en" ? "Request Quote" : locale === "de" ? "Angebot anfordern" : locale === "fr" ? "Demander un devis" : locale === "it" ? "Richiedi Preventivo" : "見積もりを依頼";

  const products = [
    {
      id: "medikal-oksijen",
      cat: "medikal-gaz",
      catLabel: catLabels["medikal-gaz"],
      icon: "🫁",
      title: locale === "tr" ? "Medikal Oksijen (O₂)" : locale === "en" ? "Medical Oxygen (O₂)" : locale === "de" ? "Medizinischer Sauerstoff (O₂)" : locale === "fr" ? "Oxygène Médical (O₂)" : locale === "it" ? "Ossigeno Medicale (O₂)" : "医療用酸素 (O₂)",
      badge: "ISO 13485",
      desc: locale === "tr"
        ? "Tıbbi tedavi ve solunum destek ünitelerinde kullanılmak üzere yüksek saflıkta (%99.5+) sertifikalı tıbbi oksijen gazı. Hastaneler, klinikler ve evde tedavi için çeşitli silindir boyutlarında ve dökme sıvı oksijen formunda sunulur."
        : locale === "en"
        ? "Certified medical oxygen gas at high purity (99.5%+) for use in medical treatment and respiratory support units. Offered in various cylinder sizes and bulk liquid oxygen form for hospitals, clinics, and home treatment."
        : locale === "de"
        ? "Zertifizierter medizinischer Sauerstoff mit hoher Reinheit (99,5%+) zur Verwendung in medizinischen Behandlungs- und Beatmungsgeräten. Angeboten in verschiedenen Flaschengrößen und als flüssiger Sauerstoff für Krankenhäuser, Kliniken und Heimtherapie."
        : locale === "fr"
        ? "Oxygène médical certifié de haute pureté (99,5%+) destiné aux soins médicaux et à l'assistance respiratoire. Disponible en plusieurs tailles de bouteilles et sous forme d'oxygène liquide pour les hôpitaux, cliniques et soins à domicile."
        : locale === "it"
        ? "Ossigeno medicale certificato ad elevata purezza (99,5%+) per l'uso in trattamenti medici e unità di supporto respiratorio. Offerto in varie dimensioni di bombole e in forma liquida per ospedali, cliniche e terapie domiciliari."
        : "医療処置および呼吸支援機器で使用するための、高純度（99.5%+）の認証済み医療用酸素ガス。病院、クリニック、在宅医療向けに、さまざまなシリンダーサイズおよび液化酸素の形態で提供されています。",
      features: locale === "tr"
        ? ["EP (Avrupa Farmakopesi) uyumlu", "Kesintisiz dökme sıvı oksijen tedariği", "7/24 acil hastane lojistik desteği"]
        : locale === "en"
        ? ["EP (European Pharmacopoeia) compliant", "Uninterrupted bulk liquid oxygen supply", "24/7 emergency hospital logistics support"]
        : locale === "de"
        ? ["EP-konform (Europäisches Arzneibuch)", "Unterbrechungsfreie Flüssigsauerstoffversorgung", "Logistische Notfallunterstützung rund um die Uhr für Krankenhäuser"]
        : locale === "fr"
        ? ["Conforme à la Pharmacopée Européenne (EP)", "Fourniture ininterrompue d'oxygène liquide", "Support logistique d'urgence 24h/24 et 7j/7 pour les hôpitaux"]
        : locale === "it"
        ? ["Conforme alla Farmacopea Europea (EP)", "Fornitura ininterrotta di ossigeno liquido", "Supporto logistico di emergenza 24/7 per ospedali"]
        : ["欧州薬局方（EP）準拠", "液化酸素の安定供給", "24時間365日の緊急病院物流サポート"],
    },
    {
      id: "azot-protoksit",
      cat: "medikal-gaz",
      catLabel: catLabels["medikal-gaz"],
      icon: "😴",
      title: locale === "tr" ? "Tıbbi Azot Protoksit (N₂O)" : locale === "en" ? "Medical Nitrous Oxide (N₂O)" : locale === "de" ? "Medizinisches Distickstoffmonoxid (N₂O)" : locale === "fr" ? "Protoxyde d'Azote Médical (N₂O)" : locale === "it" ? "Protossido d'Azoto Medicale (N₂O)" : "医療用亜酸化窒素 (N₂O)",
      badge: locale === "tr" ? "Medikal Sınıf" : locale === "en" ? "Medical Grade" : locale === "de" ? "Medizinische Qualität" : locale === "fr" ? "Usage Médical" : locale === "it" ? "Grado Medicale" : "医療グレード",
      desc: locale === "tr"
        ? "Cerrahi operasyonlarda ve diş hekimliğinde genel anestezi ve sedasyon süreçlerinde kullanılan yüksek saflıkta azot protoksit gazı. Kararlı akış ve maksimum saflık güvencesiyle silindirlerde teslim edilir."
        : locale === "en"
        ? "High purity nitrous oxide gas used for general anesthesia and sedation processes in surgical operations and dentistry. Shipped in cylinders with stable flow and maximum purity assurance."
        : locale === "de"
        ? "Hochreines Distickstoffmonoxid-Gas für Allgemeinanästhesie und Sedierungsprozesse bei chirurgischen Eingriffen und in der Zahnmedizin. Geliefert in Flaschen mit stabilem Durchfluss und maximaler Reinheit."
        : locale === "fr"
        ? "Protoxyde d'azote de haute pureté utilisé pour l'anesthésie générale et la sédation lors d'interventions chirurgicales et en dentisterie. Livré en bouteilles avec un débit stable et une garantie de pureté maximale."
        : locale === "it"
        ? "Gas protossido di azoto ad elevata purezza utilizzato per processi di anestesia generale e sedazione in operazioni chirurgiche e odontoiatria. Consegnato in bombole con flusso stabile e massima garanzia di purezza."
        : "外科手術や歯科における全身麻酔および鎮静プロセスで使用される高純度の亜酸化窒素ガス。安定した流量と最高の純度を保証し、シリンダーで提供します。",
      features: locale === "tr"
        ? ["Uluslararası anestezi standartlarına uyum", "Yüksek basınç sızdırmazlık testli tüpler", "Medikal regülatör uyumluluğu"]
        : locale === "en"
        ? ["Compliance with international anesthesia standards", "High pressure leak-tested cylinders", "Medical regulator compatibility"]
        : locale === "de"
        ? ["Einhaltung internationaler Anästhesiestandards", "Auf hohen Druck und Dichtheit geprüfte Flaschen", "Kompatibilität mit medizinischen Druckminderern"]
        : locale === "fr"
        ? ["Conformité aux normes internationales d'anesthésie", "Bouteilles testées sous haute pression pour l'étanchéité", "Compatibilité avec les détendeurs médicaux"]
        : locale === "it"
        ? ["Conformità agli standard internazionali di anestesia", "Bombole testate per perdite ad alta pressione", "Compatibilità con regolatori medici"]
        : ["国際麻酔基準への準拠", "高圧リークテスト済みシリンダー", "医療用レギュレータ対応"],
    },
    {
      id: "medikal-karbondioksit",
      cat: "medikal-gaz",
      catLabel: catLabels["medikal-gaz"],
      icon: "❄️",
      title: locale === "tr" ? "Medikal Karbondioksit (CO₂)" : locale === "en" ? "Medical Carbon Dioxide (CO₂)" : locale === "de" ? "Medizinisches Kohlendioxid (CO₂)" : locale === "fr" ? "Dioxyde de Carbone Médical (CO₂)" : locale === "it" ? "Anidride Carbonica Medicale (CO₂)" : "医療用二酸化炭素 (CO₂)",
      badge: locale === "tr" ? "Tıbbi Gaz" : locale === "en" ? "Medical Gas" : locale === "de" ? "Medizinisches Gas" : locale === "fr" ? "Gaz Médical" : locale === "it" ? "Gas Medicale" : "医療用ガス",
      desc: locale === "tr"
        ? "Laparoskopik cerrahi operasyonlarında insüflasyon gazı olarak ve kriyoterapi gibi soğutma/dondurma uygulamalarında kullanılan tıbbi karbondioksit gazı. Nem ve yabancı maddelerden tamamen arındırılmıştır."
        : locale === "en"
        ? "Medical carbon dioxide gas used as an insufflation gas in laparoscopic surgical operations and in cooling/freezing applications like cryotherapy. Completely free of moisture and impurities."
        : locale === "de"
        ? "Medizinisches Kohlendioxid-Gas zur Verwendung als Insufflationsgas bei laparoskopischen chirurgischen Eingriffen und bei Kühl-/Gefrieranwendungen wie der Kryotherapie. Völlig frei von Feuchtigkeit und Verunreinigungen."
        : locale === "fr"
        ? "Dioxyde de carbone médical utilisé comme gaz d'insufflation lors d'interventions chirurgicales laparoscopiques et pour des applications de refroidissement/congélation comme la cryothérapie. Totalement exempt d'humidité et d'impuretés."
        : locale === "it"
        ? "Gas anidride carbonica medicale utilizzato come gas di insufflazione in operazioni chirurgiche laparoscopiche e in applicazioni di raffreddamento/congelamento come la crioterapia. Completamente privo di umidità e impurità."
        : "腹腔鏡下外科手術での気腹ガスや、クライオセラピーなどの冷却・冷凍用途に使用される医療用二酸化炭素ガス。水分や不純物を完全に取り除いています。",
      features: locale === "tr"
        ? ["Laparoskopi cihazları ile tam uyum", "%99.9 tıbbi saflık derecesi", "Hijyenik tüp dolum süreçleri"]
        : locale === "en"
        ? ["Full compatibility with laparoscopy devices", "99.9% medical purity level", "Hygienic cylinder filling processes"]
        : locale === "de"
        ? ["Vollständige Kompatibilität mit Laparoskopiegeräten", "99,9% medizinische Reinheit", "Hygienische Flaschenfüllprozesse"]
        : locale === "fr"
        ? ["Compatibilité totale avec les appareils de laparoscopie", "Pureté médicale à 99,9 %", "Processus de remplissage de bouteilles hygiéniques"]
        : locale === "it"
        ? ["Compatibilità totale con dispositivi per laparoscopia", "Livello di purezza medica al 99,9%", "Processi igienici di riempimento delle bombole"]
        : ["腹腔鏡機器との完全な互換性", "99.9%の医療用純度", "衛生的なシリンダー充填プロセス"],
    },
    {
      id: "medikal-hava",
      cat: "medikal-gaz",
      catLabel: catLabels["medikal-gaz"],
      icon: "💨",
      title: locale === "tr" ? "Medikal Hava (Tıbbi Hava)" : locale === "en" ? "Medical Air" : locale === "de" ? "Medizinische Luft" : locale === "fr" ? "Air Médical" : locale === "it" ? "Aria Medicale" : "医療用空気",
      badge: locale === "tr" ? "Farmakope Uyumlu" : locale === "en" ? "Pharmacopoeia Compliant" : locale === "de" ? "Arzneibuchkonform" : locale === "fr" ? "Conforme Pharmacopée" : locale === "it" ? "Conforme Farmacopea" : "薬局方準拠",
      desc: locale === "tr"
        ? "Solunum cihazları (ventilatörler) and anestezi ünitelerinde hastaların yapay solunumunu desteklemek amacıyla kullanılan, nem ve yağ partiküllerinden arındırılmış yüksek kaliteli tıbbi sentetik hava."
        : locale === "en"
        ? "High quality medical synthetic air, free from moisture and oil particles, used in ventilators and anesthesia units to support patients' artificial respiration."
        : locale === "de"
        ? "Hochwertige medizinische synthetische Luft, frei von Feuchtigkeit und Ölpartikeln, zur Verwendung in Beatmungsgeräten und Anästhesieeinheiten zur Unterstützung der künstlichen Beatmung von Patienten."
        : locale === "fr"
        ? "Air synthétique médical de haute qualité, exempt d'humidité et de particules d'huile, utilisé dans les ventilateurs et les unités d'anesthésie pour soutenir la respiration artificielle des patients."
        : locale === "it"
        ? "Aria sintetica medica di alta qualità, priva di umidità e particelle di olio, utilizzata nei ventilatori e nelle unità di anestesia per supportare la respirazione artificiale dei pazienti."
        : "人工呼吸器や麻酔器において患者の呼吸を支援するために使用される、水分やオイル粒子を含まない高品質な医療用合成空気。",
      features: locale === "tr"
        ? ["ISO 7396-1 medikal gaz tesisatı uyumlu", "Kuru ve tozsuz hava garantisi", "Merkezi hastane sistemlerine uygun tüp ve MCP paketleri"]
        : locale === "en"
        ? ["ISO 7396-1 medical gas pipeline compliant", "Dry and dust-free air guarantee", "Cylinders and MCP packs suitable for central hospital systems"]
        : locale === "de"
        ? ["ISO 7396-1 konform für medizinische Gasversorgungsanlagen", "Garantie für trockene und staubfreie Luft", "Flaschen und Bündelanlagen für zentrale Krankenhaus-Systeme"]
        : locale === "fr"
        ? ["Conforme aux réseaux de gaz médicaux ISO 7396-1", "Garantie d'un air sec et sans poussière", "Bouteilles et cadres adaptés aux réseaux hospitaliers centraux"]
        : locale === "it"
        ? ["Conforme alle condutture per gas medici ISO 7396-1", "Garanzia di aria secca e priva di polvere", "Bombole e pacchi bombole adatti per sistemi ospedalieri centralizzati"]
        : ["ISO 7396-1医療用ガス配管基準準拠", "乾燥したクリスタルのような空気の保証", "中央病院システムに適したシリンダーおよびカードルパッケージ"],
    },
    {
      id: "medikal-sivi-azot",
      cat: "medikal-gaz",
      catLabel: catLabels["medikal-gaz"],
      icon: "❄️",
      title: locale === "tr" ? "Medikal Sıvı Azot (LN₂)" : locale === "en" ? "Medical Liquid Nitrogen (LN₂)" : locale === "de" ? "Medizinischer Flüssigstickstoff (LN₂)" : locale === "fr" ? "Azote Liquide Médical (LN₂)" : locale === "it" ? "Azoto Liquido Medicale (LN₂)" : "医療用液体窒素 (LN₂)",
      badge: "CE Medikal",
      desc: locale === "tr"
        ? "Kriyoprezervasyon, kordon kanı saklama ve dermatolojik dondurma tedavileri için -196°C medikal sıvı azot. Özel dewar kaplarında kilo (kg) bazlı güvenli teslimat."
        : locale === "en"
        ? "Medical liquid nitrogen at -196°C for cryopreservation, cord blood storage, and dermatological freezing treatments. Secure delivery based on net weight (kg) in special dewar vessels."
        : locale === "de"
        ? "Medizinischer Flüssigstickstoff bei -196 °C für Kryokonservierung, Nabelschnurblutlagerung und dermatologische Gefrierbehandlungen. Sichere Lieferung nach Nettogewicht (kg) in speziellen Dewar-Behältern."
        : locale === "fr"
        ? "Azote liquide médical à -196°C pour la cryopréservation, le stockage de sang de cordon et les traitements dermatologiques par le froid. Livraison sécurisée au poids net (kg) dans des récipients dewar spéciaux."
        : locale === "it"
        ? "Azoto liquido medicale a -196°C per crioconservazione, conservazione del sangue cordonale e trattamenti dermatologici di congelamento. Consegna sicura basata sul peso netto (kg) in speciali contenitori dewar."
        : "凍結保存、臍帯血保存、皮膚科の凍結治療用の-196℃医療用液体窒素。専用のデュワー瓶による純重量（kg）に基づいた安全な配送。",
      features: locale === "tr"
        ? ["Hassas dijital terazilerde kg bazında tartım", "Yüksek yalıtımlı Dewar kapları lojistiği", "GMP ve Sağlık Bakanlığı normlarına tam uyum"]
        : locale === "en"
        ? ["Weighing in kg on precision digital scales", "High-insulation Dewar vessel logistics", "Full compliance with GMP & Ministry of Health norms"]
        : locale === "de"
        ? ["Verwiegung in kg auf Präzisionsdigitalwaagen", "Logistik für hochisolierte Dewar-Behälter", "Einhaltung der GMP- und Gesundheitsministeriums-Normen"]
        : locale === "fr"
        ? ["Pesage en kg sur balances numériques de précision", "Logistique des récipients Dewar à haute isolation", "Conformité aux normes GMP et du ministère de la Santé"]
        : locale === "it"
        ? ["Pesatura in kg su bilance digitali di precisione", "Logistica di contenitori Dewar ad alto isolamento", "Piena conformità alle norme GMP e del Ministero della Salute"]
        : ["精密デジタル天秤による正味kg単位の計量", "高断熱デュワー容器による安全輸送", "GMPおよび保健省基準への完全準拠"],
    },
    {
      id: "endustriyel-oksijen",
      cat: "endustriyel-gaz",
      catLabel: catLabels["endustriyel-gaz"],
      icon: "🔥",
      title: locale === "tr" ? "Endüstriyel Oksijen" : locale === "en" ? "Industrial Oxygen" : locale === "de" ? "Industrieller Sauerstoff" : locale === "fr" ? "Oxygène Industriel" : locale === "it" ? "Ossigeno Industriale" : "産業用酸素",
      badge: locale === "tr" ? "Yüksek Performans" : locale === "en" ? "High Performance" : locale === "de" ? "Hohe Leistung" : locale === "fr" ? "Haute Performance" : locale === "it" ? "Alte Prestazioni" : "高性能仕様",
      desc: locale === "tr"
        ? "Metal kesme, kaynak, ergitme, cam imalatı ve fırın zenginleştirme proseslerinde yüksek verimlilik sağlayan endüstriyel oksijen gazı. Dökme sıvı oksijen (LOX) veya yüksek basınçlı silindir formlarında sunulur."
        : locale === "en"
        ? "Industrial oxygen gas providing high efficiency in metal cutting, welding, melting, glass manufacturing, and furnace enrichment processes. Offered in bulk liquid oxygen (LOX) or high-pressure cylinder forms."
        : locale === "de"
        ? "Industrielles Sauerstoffgas für hohe Effizienz beim Metallschneiden, Schweißen, Schmelzen, in der Glasherstellung und bei Ofenanreicherungsprozessen. Angeboten als verflüssigter Sauerstoff (LOX) oder in Hochdruckflaschen."
        : locale === "fr"
        ? "Gaz oxygène industriel offrant un rendement élevé pour la découpe des métaux, le soudage, la fusion, la fabrication du verre et l'enrichissement des fours. Proposé sous forme d'oxygène liquide (LOX) ou en bouteilles haute pression."
        : locale === "it"
        ? "Gas ossigeno industriale che fornisce alta efficienza nei processi di taglio dei metalli, saldatura, fusione, produzione di vetro e arricchimento dei forni. Offerto in ossigeno liquido sfuso (LOX) o in bombole ad alta pressione."
        : "金属の切断、溶接、溶解、ガラス製造、および炉の燃焼効率向上プロセスにおいて高い効率を発揮する産業用酸素ガス。液化酸素（LOX）または高圧シリンダーの形式で提供されます。",
      features: locale === "tr"
        ? ["%99.7+ endüstriyel saflık", "Lazer kesiminde çapaksız kenar kalitesi", "MTP/MCP tüp demeti ile toplu kullanım desteği"]
        : locale === "en"
        ? ["99.7%+ industrial purity", "Burr-free edge quality in laser cutting", "Bulk use support with MTP/MCP cylinder bundles"]
        : locale === "de"
        ? ["99,7%+ industrielle Reinheit", "Gratfreie Kantenqualität beim Laserschneiden", "Unterstützung für Großverbrauch durch Flaschenbündel (MTP/MCP)"]
        : locale === "fr"
        ? ["Pureté industrielle à 99,7 %+", "Qualité de coupe nette et sans bavure en découpe laser", "Support pour utilisation de masse avec cadres de bouteilles (MTP/MCP)"]
        : locale === "it"
        ? ["Purezza industriale al 99,7%+", "Qualità del bordo senza bave nel taglio laser", "Supporto per uso di massa con pacchi bombole MTP/MCP"]
        : ["99.7%以上の産業用純度", "レーザー切断におけるバリのないエッジ品質の確保", "MTP/MCPシリンダーカードルによる大量使用サポート"],
    },
    {
      id: "argon",
      cat: "endustriyel-gaz",
      catLabel: catLabels["endustriyel-gaz"],
      icon: "⚗️",
      title: locale === "tr" ? "Saf Argon Gazı (Ar)" : locale === "en" ? "Pure Argon Gas (Ar)" : locale === "de" ? "Reines Argongas (Ar)" : locale === "fr" ? "Gaz Argon Pur (Ar)" : locale === "it" ? "Gas Argon Puro (Ar)" : "純アルゴンガス (Ar)",
      badge: locale === "tr" ? "Koruyucu Gaz" : locale === "en" ? "Shielding Gas" : locale === "de" ? "Schutzgas" : locale === "fr" ? "Gaz de Protection" : locale === "it" ? "Gas di Protezione" : "シールド用不活性ガス",
      desc: locale === "tr"
        ? "TIG (Argon kaynak) ve MIG kaynaklarında koruyucu atmosfer oluşturmak için kullanılan %99.999 yüksek saflıkta inert gaz. Paslanmaz çelik, alüminyum ve özel alaşımların kaynağında mükemmel nüfuziyet sağlar."
        : locale === "en"
        ? "99.999% high purity inert gas used to create a protective atmosphere in TIG (Argon welding) and MIG welding. Provides excellent penetration in welding stainless steel, aluminum, and special alloys."
        : locale === "de"
        ? "99,999% hochreines inertes Gas zur Erzeugung einer Schutzatmosphäre beim WIG- (Argonschweißen) und MIG-Schweißen. Bietet hervorragenden Einbrand beim Schweißen von Edelstahl, Aluminium und Sonderlegierungen."
        : locale === "fr"
        ? "Gaz inerte de haute pureté à 99,999 % utilisé pour créer une atmosphère protectrice lors du soudage TIG (soudage à l'argon) et MIG. Offre une excellente pénétration pour le soudage de l'acier inoxydable, de l'aluminium et d'alliages spéciaux."
        : locale === "it"
        ? "Gas inerte ad elevata purezza al 99,999% utilizzato per creare un'atmosfera protettiva nella saldatura TIG (saldatura ad argon) e MIG. Fornisce un'eccellente penetrazione nella saldatura di acciaio inossidabile, alluminio e leghe speciali."
        : "TIG（アルゴン溶接）およびMIG溶接において保護雰囲気を作成するために使用される、99.999%高純度の不活性ガス。ステンレス鋼、アルミニウム、および特殊合金の溶接において優れた溶け込み性能を発揮します。",
      features: locale === "tr"
        ? ["%99.999 ultra yüksek saflık", "Kritik kaynak uygulamalarında sıfır gözenek riski", "Özel alaşımlı çelik kaynakları için ideal"]
        : locale === "en"
        ? ["99.999% ultra-high purity", "Zero porosity risk in critical welding applications", "Ideal for special alloy steel welding"]
        : locale === "de"
        ? ["99,999% ultrahohe Reinheit", "Null-Porositätsrisiko bei kritischen Schweißanwendungen", "Ideal zum Schweißen von Spezialstahllegierungen"]
        : locale === "fr"
        ? ["Pureté ultra-élevée à 99,999 %", "Risque de porosité nul dans les applications de soudage critiques", "Idéal pour le soudage d'aciers alliés spéciaux"]
        : locale === "it"
        ? ["Ultra-elevata purezza al 99,999%", "Rischio di porosità zero in applicazioni di saldatura critiche", "Ideale per la saldatura di acciai speciali legati"]
        : ["99.999%の超高純度仕様", "重要な溶接用途におけるブローホールリスクの排除", "特殊合金鋼の溶接に最適化"],
    },
    {
      id: "endustriyel-azot",
      cat: "endustriyel-gaz",
      catLabel: catLabels["endustriyel-gaz"],
      icon: "🌫️",
      title: locale === "tr" ? "Endüstriyel Azot (N₂)" : locale === "en" ? "Industrial Nitrogen (N₂)" : locale === "de" ? "Industrieller Stickstoff (N₂)" : locale === "fr" ? "Azote Industriel (N₂)" : locale === "it" ? "Azoto Industriale (N₂)" : "産業用窒素 (N₂)",
      badge: locale === "tr" ? "Koruyucu ve Süpürme" : locale === "en" ? "Shielding & Purging" : locale === "de" ? "Schutz & Spülen" : locale === "fr" ? "Protection & Purge" : locale === "it" ? "Protezione & Spurgo" : "パージ・シール対応",
      desc: locale === "tr"
        ? "Gıda paketlemede tazeliği koruma, kimyasal tanklarda süpürme (purging), lazer kesimde oksidasyonu önleme ve ısıl işlemlerde koruyucu atmosfer oluşturmak için yüksek saflıkta azot gazı."
        : locale === "en"
        ? "High purity nitrogen gas for preserving freshness in food packaging, purging chemical tanks, preventing oxidation in laser cutting, and creating a protective atmosphere in heat treatments."
        : locale === "de"
        ? "Hochreines Stickstoffgas zur Erhaltung der Frische bei Lebensmitteln, zum Spülen chemischer Tanks, zur Verhinderung von Oxidation beim Laserschneiden und zur Erzeugung einer Schutzatmosphäre bei Wärmebehandlungen."
        : locale === "fr"
        ? "Gaz azote de haute pureté destiné à préserver la fraîcheur dans les emballages alimentaires, à purger les réservoirs chimiques, à prévenir l'oxydation lors de la découpe laser et à créer une atmosphère protectrice lors des traitements thermiques."
        : locale === "it"
        ? "Gas azoto ad elevata purezza per preservare la freschezza nel confezionamento alimentare, spurgare serbatoi chimici, prevenire l'ossidazione nel taglio laser e creare un'atmosfera protettiva nei trattamenti termici."
        : "食品包装での鮮度保持、化学タンクのパージ、レーザー切断における酸化防止、および熱処理プロセスでの保護雰囲気形成のための高純度窒素ガス。",
      features: locale === "tr"
        ? ["Gıda koruma standartlarına uygun saflık", "Dökme sıvı azot (LIN) lojistik altyapısı", "Lazer kesimlerinde paslanmaz çelik temizliği"]
        : locale === "en"
        ? ["Purity suitable for food preservation standards", "Bulk liquid nitrogen (LIN) logistics infrastructure", "Stainless steel cleanliness in laser cutting"]
        : locale === "de"
        ? ["Reinheit geeignet für Lebensmittelsicherheitsstandards", "Logistische Infrastruktur für flüssigen Stickstoff (LIN)", "Saubere Kanten bei Edelstahl-Laserschnitten"]
        : locale === "fr"
        ? ["Pureté conforme aux normes de conservation alimentaire", "Infrastructure logistique pour l'azote liquide (LIN)", "Propreté des bords sur acier inoxydable en découpe laser"]
        : locale === "it"
        ? ["Purezza adatta agli standard di conservazione alimentare", "Infrastruttura logistica per azoto liquido sfuso (LIN)", "Pulizia dell'acciaio inossidabile nei tagli laser"]
        : ["食品鮮度保持基準に適合する純度", "液化窒素（LIN）の大量配送インフラ", "レーザー切断におけるステンレスの酸化防止ときれいな仕上がり"],
    },
    {
      id: "helyum",
      cat: "endustriyel-gaz",
      catLabel: catLabels["endustriyel-gaz"],
      icon: "🎈",
      title: locale === "tr" ? "Helyum Gazı (He)" : locale === "en" ? "Helium Gas (He)" : locale === "de" ? "Heliumgas (He)" : locale === "fr" ? "Gaz Hélium (He)" : locale === "it" ? "Gas Elio (He)" : "ヘリウムガス (He)",
      badge: locale === "tr" ? "Laboratuvar & Balon" : locale === "en" ? "Laboratory & Balloon" : locale === "de" ? "Labor & Ballon" : locale === "fr" ? "Laboratoire & Ballon" : locale === "it" ? "Laboratorio & Palloncini" : "分析・バルーン用",
      desc: locale === "tr"
        ? "Kaçak tespit testleri, laboratuvar analiz cihazları (gaz kromatografisi), kaynak prosesleri ve uçan balon dolumlarında kullanılan yüksek saflıkta helyum gazı. Güvenli silindirler ile temin edilir."
        : locale === "en"
        ? "High purity helium gas used in leak detection tests, laboratory analytical instruments (gas chromatography), welding processes, and flying balloon filling. Provided in safe cylinders."
        : locale === "de"
        ? "Hochreines Heliumgas zur Verwendung bei Lecksuchtests, Laboranalysegeräten (Gaschromatographie), Schweißprozessen und Ballonbefüllungen. Geliefert in sicheren Flaschen."
        : locale === "fr"
        ? "Gaz hélium de haute pureté utilisé pour les tests de détection de fuites, les instruments d'analyse de laboratoire (chromatographie en phase gazeuse), les procédés de soudage et le gonflage de ballons. Fourni en bouteilles sécurisées."
        : locale === "it"
        ? "Gas elio ad elevata purezza utilizzato nei test di rilevamento perdite, strumenti analitici di laboratorio (gascromatografia), processi di saldatura e gonfiaggio di palloncini. Fornito in bombole sicure."
        : "漏洩検査（リークテスト）、試験室の分析機器（ガスクロマトグラフィー）、溶接プロセス、およびヘリウム風船・バルーンの充填に使用される高純度ヘリウムガス。安全なシリンダーでお届けします。",
      features: locale === "tr"
        ? ["Laboratuvar tipi yüksek saflık (%99.999)", "Kaçak testlerinde yüksek hassasiyet", "Hafif ve güvenli tüp ambalajları"]
        : locale === "en"
        ? ["Laboratory grade high purity (99.999%)", "High sensitivity in leak tests", "Lightweight and safe cylinder packaging"]
        : locale === "de"
        ? ["Laborqualität mit hoher Reinheit (99,999%)", "Hohe Empfindlichkeit bei Lecktests", "Leichte und sichere Flaschenverpackungen"]
        : locale === "fr"
        ? ["Qualité laboratoire haute pureté (99,999 %)", "Haute sensibilité lors des tests de fuite", "Emballages de bouteilles légers et sécurisés"]
        : locale === "it"
        ? ["Grado da laboratorio ad elevata purezza (99,999%)", "Alta sensibilità nei test di tenuta", "Imballaggi in bombole leggeri e sicuri"]
        : ["ラボグレードの高純度仕様（99.999%）", "リークテストにおける極めて高い感度", "軽量で安全なシリンダーパッケージ"],
    },
    {
      id: "asetilen",
      cat: "endustriyel-gaz",
      catLabel: catLabels["endustriyel-gaz"],
      icon: "🧨",
      title: locale === "tr" ? "Asetilen Gazı (C₂H₂)" : locale === "en" ? "Acetylene Gas (C₂H₂)" : locale === "de" ? "Acetylengas (C₂H₂)" : locale === "fr" ? "Gaz Acétylène (C₂H₂)" : locale === "it" ? "Gas Acetilene (C₂H₂)" : "アセチレンガス (C₂H₂)",
      badge: locale === "tr" ? "Yüksek Isı" : locale === "en" ? "High Heat" : locale === "de" ? "Hohe Hitze" : locale === "fr" ? "Haute Température" : locale === "it" ? "Calore Elevato" : "高熱・高炎スピード仕様",
      desc: locale === "tr"
        ? "Oksi-asetilen kaynak ve kesme proseslerinde en yüksek alev sıcaklığını (3100°C) sağlayan, yüksek mukavemetli kesim ve tavlama işlemlerinde kullanılan yanıcı sınai gaz."
        : locale === "en"
        ? "Flammable industrial gas providing the highest flame temperature (3100°C) in oxy-acetylene welding and cutting processes, used in high-strength cutting and annealing operations."
        : locale === "de"
        ? "Brennbares Industriegas für die höchste Flammtemperatur (3100°C) bei Autogenschweiß- und Schneidprozessen, verwendet bei hochfesten Schneid- und Anlassvorgängen."
        : locale === "fr"
        ? "Gaz industriel inflammable offrant la température de flamme la plus élevée (3100 °C) pour le soudage et l'oxycoupage, utilisé dans les opérations de découpe et de recuit à haute résistance."
        : locale === "it"
        ? "Gas industriale infiammabile che fornisce la massima temperatura della fiamma (3100°C) nei processi di saldatura e taglio ossiacetilenica, utilizzato in operazioni di taglio e ricottura ad alta resistenza."
        : "酸素アセチレン溶接・溶断プロセスにおいて最高の火炎温度（3100℃）を実現し、高強度の金属切断や焼き入れ・歪み取りで使用される可燃性産業用ガス。",
      features: locale === "tr"
        ? ["Hızlı tavlama ve kesme kapasitesi", "TSE standartlarında özel asetilen tüp dolumları", "Maksimum alev verimliliği"]
        : locale === "en"
        ? ["Fast annealing and cutting capacity", "Special acetylene cylinder filling in TSE standards", "Maximum flame efficiency"]
        : locale === "de"
        ? ["Schnelle Anlass- und Schneidkapazität", "Spezielle Acetylenflaschenfüllung nach TSE-Standards", "Maximale Flammeneffizienz"]
        : locale === "fr"
        ? ["Capacité de recuit et de coupe rapide", "Remplissage spécial de bouteilles d'acétylène aux normes TSE", "Efficacité maximale de la flamme"]
        : locale === "it"
        ? ["Capacità di ricottura e taglio rapido", "Riempimento speciale di bombole di acetilene secondo gli standard TSE", "Massima efficienza della fiamma"]
        : ["迅速な加熱・溶断能力", "TSE規格に準拠したアセチレン専用充填", "最高の火炎熱効率の実現"],
    },
    {
      id: "kaynak-karisimlari",
      cat: "endustriyel-gaz",
      catLabel: catLabels["endustriyel-gaz"],
      icon: "🔧",
      title: locale === "tr" ? "Kaynak Karışım Gazları" : locale === "en" ? "Welding Mixture Gases" : locale === "de" ? "Schweißmischgase" : locale === "fr" ? "Mélanges de Gaz de Soudage" : locale === "it" ? "Miscele Gas di Saldatura" : "溶接用混合ガス",
      badge: locale === "tr" ? "MIG/MAG Özel" : locale === "en" ? "MIG/MAG Special" : locale === "de" ? "MIG/MAG-Spezial" : locale === "fr" ? "Spécial MIG/MAG" : locale === "it" ? "Speciale MIG/MAG" : "MIG/MAG専用",
      desc: locale === "tr"
        ? "Argon ve Karbondioksit (CO₂) karışımlarından oluşan, karbon çeliği ve alaşımlı çeliklerin MIG/MAG gazaltı kaynaklarında yüksek hız, düşük çapaklanma ve pürüzsüz kaynak dikişi sunan özel karışımlar."
        : locale === "en"
        ? "Special mixtures of Argon and Carbon Dioxide (CO₂), offering high speed, low spatter, and smooth weld seams in MIG/MAG gas-metal arc welding of carbon steel and alloy steels."
        : locale === "de"
        ? "Spezielle Mischungen aus Argon und Kohlendioxid (CO₂), die hohe Geschwindigkeit, geringe Spritzerbildung und glatte Schweißnähte beim MIG/MAG-Schutzgasschweißen von Kohlenstoffstahl und legierten Stählen bieten."
        : locale === "fr"
        ? "Mélanges spéciaux d'argon et de dioxyde de carbone (CO₂), offrant une vitesse élevée, peu de projections et des cordons de soudure lisses pour le soudage semi-automatique MIG/MAG de l'acier au carbone et des aciers alliés."
        : locale === "it"
        ? "Miscele speciali di Argon e Anidride Carbonica (CO₂), che offrono alta velocità, bassi spruzzi e cordoni di saldatura lisci nella saldatura a filo MIG/MAG di acciaio al carbonio e acciai legati."
        : "アルゴンと二酸化炭素（CO₂）で構成され、炭素鋼や合金鋼のMIG/MAG溶接において、高速、低スパッタ、および平滑な溶接ビードを実現する専用設計の混合シールドガス。",
      features: locale === "tr"
        ? ["%82 Argon - %18 CO₂ ve alternatif oranlar", "Daha az kaynak sonrası temizlik ihtiyacı", "Kaynak dikişinde yüksek mukavemet"]
        : locale === "en"
        ? ["82% Argon - 18% CO₂ and alternative ratios", "Less post-weld cleaning requirement", "High strength in the weld seam"]
        : locale === "de"
        ? ["82% Argon - 18% CO₂ und alternative Verhältnisse", "Geringerer Reinigungsaufwand nach dem Schweißen", "Hohe Festigkeit der Schweißnaht"]
        : locale === "fr"
        ? ["82 % Argon - 18 % CO₂ et ratios alternatifs", "Moins de nettoyage après soudage", "Haute résistance du cordon de soudure"]
        : locale === "it"
        ? ["82% Argon - 18% CO₂ e rapporti alternativi", "Minore necessità di pulizia post-saldatura", "Elevata resistenza nel cordone di saldatura"]
        : ["82%アルゴン - 18%CO₂および特殊配合比率対応", "溶接後の清掃・スラグ除去工程の削減", "溶接部の高い引張強度特性"],
    },
    {
      id: "celik-profil",
      cat: "celik",
      catLabel: catLabels["celik"],
      icon: "🏗️",
      title: locale === "tr" ? "Yapısal Çelik & Profil" : locale === "en" ? "Structural Steel & Profiles" : locale === "de" ? "Baustahl & Profile" : locale === "fr" ? "Acier Structurel & Profilés" : locale === "it" ? "Acciaio Strutturale & Profili" : "構造用鋼材および形鋼",
      badge: "TS EN 10025",
      desc: locale === "tr"
        ? "İnşaat, ağır sanayi ve endüstriyel tesis projelerinde kullanılmak üzere S235, S275 ve S355 kalitelerinde sıcak haddelenmiş yapısal çelik profiller (HEA, HEB, IPE, UPN, IPN)."
        : locale === "en"
        ? "Hot-rolled structural steel profiles (HEA, HEB, IPE, UPN, IPN) in S235, S275, and S355 grades for use in construction, heavy industry, and industrial plant projects."
        : locale === "de"
        ? "Warmgewalzte Baustahlprofile (HEA, HEB, IPE, UPN, IPN) in den Güten S235, S275 und S355 zur Verwendung in Bau-, Schwerindustrie- und Industrieanlagenprojekten."
        : locale === "fr"
        ? "Profilés en acier de construction laminés à chaud (HEA, HEB, IPE, UPN, IPN) dans les nuances S235, S275 et S355 pour des projets de construction, d'industrie lourde et d'installations industrielles."
        : locale === "it"
        ? "Profili in acciaio strutturale laminati a caldo (HEA, HEB, IPE, UPN, IPN) nei gradi S235, S275 e S355 per l'uso in progetti di costruzione, industria pesante e impianti industriali."
        : "建設、重工業、および産業プラントプロジェクトで使用するための、S235、S275、およびS355グレードの熱間圧延構造用形鋼（HEA、HEB、IPE、UPN、IPNなど）。",
      features: locale === "tr"
        ? ["CE sertifikalı çelik hammaddesi", "İstenen boy ve ebatta hassas kesim imkanı", "Deprem yönetmeliğine uygun yüksek mukavemet"]
        : locale === "en"
        ? ["CE certified steel raw material", "Precise cutting opportunity in desired length and size", "High strength in accordance with earthquake regulations"]
        : locale === "de"
        ? ["CE-zertifizierter Stahlrohstoff", "Präziser Zuschnitt in gewünschter Länge und Größe", "Hohe Festigkeit gemäß den Erdbebenvorschriften"]
        : locale === "fr"
        ? ["Matière première d'acier certifiée CE", "Possibilité de coupe précise à la longueur et aux dimensions souhaitées", "Haute résistance conforme aux normes parasismiques"]
        : locale === "it"
        ? ["Materia prima in acciaio certificata CE", "Possibilità di taglio preciso nella lunghezza e dimensione desiderate", "Elevata resistenza in conformità con le normative antisismiche"]
        : ["CEマーク認証済みの高品質鋼材", "任意の長さおよびサイズへの精密切断対応", "耐震基準に適合した高い強度特性"],
    },
    {
      id: "elektrik-panel",
      cat: "elektrik",
      catLabel: catLabels["elektrik"],
      icon: "⚡",
      title: locale === "tr" ? "Güç Dağıtım Panoları" : locale === "en" ? "Power Distribution Panels" : locale === "de" ? "Energieverteiler" : locale === "fr" ? "Armoires de Distribution d'Énergie" : locale === "it" ? "Quadri di Distribuzione Energia" : "配電盤・制御盤",
      badge: "IEC 61439",
      desc: locale === "tr"
        ? "Sanayi tesisleri, şantiyeler ve fabrikalar için tasarlanmış yüksek güvenlikli alçak ve orta gerilim güç dağıtım ve kontrol panoları. Toz ve su sızdırmazlık korumalı tasarımlar."
        : locale === "en"
        ? "High-safety low and medium voltage power distribution and control panels designed for industrial plants, construction sites, and factories. Dust and water tightness protected designs."
        : locale === "de"
        ? "Hochsichere Niederspannungs- und Mittelspannungs-Energieverteiler- und Steuerungstafeln für Industrieanlagen, Baustellen und Fabriken. Staub- und wasserdicht geschützte Ausführungen."
        : locale === "fr"
        ? "Armoires de distribution et de commande basse et moyenne tension haute sécurité conçues pour les installations industrielles, les chantiers et les usines. Modèles protégés contre la poussière et l'eau."
        : locale === "it"
        ? "Quadri di distribuzione e controllo dell'energia a bassa e media tensione ad alta sicurezza progettati per impianti industriali, cantieri e fabbriche. Design protetti da polvere e acqua."
        : "産業プラント、建設現場、および工場向けに設計された、高安全な低圧・高圧配電盤および制御盤。防塵・防滴構造設計。",
      features: locale === "tr"
        ? ["IEC 61439-1/2 standartlarına tam uyum", "Kısa devre ve aşırı yük koruma sistemleri", "Yerinde montaj ve devreye alma desteği"]
        : locale === "en"
        ? ["Full compliance with IEC 61439-1/2 standards", "Short circuit and overload protection systems", "On-site assembly and commissioning support"]
        : locale === "de"
        ? ["Vollständige Einhaltung der Normen IEC 61439-1/2", "Kurzschluss- und Überlastschutzsysteme", "Unterstützung bei Montage und Inbetriebnahme vor Ort"]
        : locale === "fr"
        ? ["Conformité totale aux normes IEC 61439-1/2", "Systèmes de protection contre les courts-circuits et les surcharges", "Support pour montage et mise en service sur site"]
        : locale === "it"
        ? ["Piena conformità agli standard IEC 61439-1/2", "Sistemi di protezione da cortocircuito e sovraccarico", "Supporto per installazione e messa in servizio in loco"]
        : ["IEC 61439-1/2規格への完全準拠", "短絡および過負荷保護システムの装備", "オンサイトでの設置・試運転調整サポート"],
    },
    {
      id: "basinc-tup",
      cat: "tup",
      catLabel: catLabels["tup"],
      icon: "🔵",
      title: locale === "tr" ? "Dikişsiz Çelik Gaz Tüpleri" : locale === "en" ? "Seamless Steel Gas Cylinders" : locale === "de" ? "Nahtlose Stahlgasflaschen" : locale === "fr" ? "Bouteilles de Gaz en Acier sans Soudure" : locale === "it" ? "Bombole per Gas in Acciaio senza Saldatura" : "シームレススチールガスシリンダー",
      badge: "TS EN ISO 9809",
      desc: locale === "tr"
        ? "200 ve 300 bar çalışma basıncına dayanıklı, dikişsiz çelik çekme yüksek basınçlı sınai ve tıbbi gaz tüpleri. Tüm tüplerimiz hidrostatik testlerden geçirilerek ve sertifikalandırılarak teslim edilir."
        : locale === "en"
        ? "Seamless steel high-pressure industrial and medical gas cylinders resistant to 200 and 300 bar working pressure. All our cylinders are delivered after hydrostatic tests and certification."
        : locale === "de"
        ? "Nahtlose Hochdruck-Industrie- und Medizin-Gasflaschen aus Stahl, beständig gegen 200 und 300 bar Arbeitsdruck. Alle Flaschen werden nach hydrostatischen Prüfungen und Zertifizierung geliefert."
        : locale === "fr"
        ? "Bouteilles de gaz industriels et médicaux haute pression en acier sans soudure, résistantes à une pression de service de 200 et 300 bars. Toutes nos bouteilles sont testées hydrostatiquement et certifiées."
        : locale === "it"
        ? "Bombole di gas industriali e medici ad alta pressione in acciaio senza saldatura resistenti a 200 e 300 bar di pressione di esercizio. Consegnate dopo test idrostatici e certificazione."
        : "200および300barの使用圧力に耐え得る、シームレススチール高圧産業・医療用ガスシリンダー。全製品耐圧テストおよび認証実施済みのうえ出荷されます。",
      features: locale === "tr"
        ? ["TS EN ISO 9809 standart uyumluluğu", "Pi damgası (CE-TPED) onaylı vanalar", "5 yıl periyodik muayene garantisi"]
        : locale === "en"
        ? ["TS EN ISO 9809 standard compliance", "Pi marked (CE-TPED) approved valves", "5 years periodic inspection warranty"]
        : locale === "de"
        ? ["Konformität mit dem Standard TS EN ISO 9809", "Zugelassene Ventile mit Pi-Kennzeichnung (CE-TPED)", "5 Jahre Garantie für periodische Prüfungen"]
        : locale === "fr"
        ? ["Conformité à la norme TS EN ISO 9809", "Vannes homologuées marquées Pi (CE-TPED)", "Garantie de contrôle périodique de 5 ans"]
        : locale === "it"
        ? ["Conformità allo standard TS EN ISO 9809", "Valvole approvate con marchio Pi (CE-TPED)", "Garanzia di ispezione periodica di 5 anni"]
        : ["TS EN ISO 9809規格準拠", "Piマーク（CE-TPED）承認済み高圧弁バルブ", "5年間の周期的な再検査保証"],
    },
    {
      id: "mcp-paketleri",
      cat: "tup",
      catLabel: catLabels["tup"],
      icon: "📦",
      title: locale === "tr" ? "Manifold Tüp Paketleri (MCP/MTP)" : locale === "en" ? "Manifold Cylinder Packs (MCP/MTP)" : locale === "de" ? "Manifold-Flaschenbündel (MCP/MTP)" : locale === "fr" ? "Cadres de Bouteilles Connectées (MCP/MTP)" : locale === "it" ? "Pacchi Bombole Collettori (MCP/MTP)" : "マニホールドシリンダーカードル (MCP/MTP)",
      badge: locale === "tr" ? "Toplu Tedarik" : locale === "en" ? "Bulk Supply" : locale === "de" ? "Großversorgung" : locale === "fr" ? "Approvisionnement en Masse" : locale === "it" ? "Fornitura all'Ingrosso" : "大量供給カードル",
      desc: locale === "tr"
        ? "12'li veya 15'li tüplerin çelik kafes içinde birbirine manifold sistemiyle bağlandığı, yüksek hacimli gaz tüketen tesisler için tasarlanmış taşınabilir toplu gaz depolama üniteleri."
        : locale === "en"
        ? "Portable bulk gas storage units designed for high-volume gas-consuming facilities, where 12 or 15 cylinders are connected to each other via a manifold system inside a steel cage."
        : locale === "de"
        ? "Tragbare Großgas-Speichereinheiten für Anlagen mit hohem Gasverbrauch, bei denen 12 oder 15 Flaschen über ein Verteilersystem in einem Stahlkäfig miteinander verbunden sind."
        : locale === "fr"
        ? "Unités portables de stockage de gaz en vrac conçues pour les installations à forte consommation, où 12 ou 15 bouteilles sont reliées entre elles par un système de collecteur dans une cage en acier."
        : locale === "it"
        ? "Unità di stoccaggio gas sfuso portatili progettate per impianti ad alto consumo, in cui 12 o 15 bombole sono collegate tra loro tramite un collettore all'interno di una gabbia d'acciaio."
        : "スチールケージ内に12本または15本の容器を配置し、マニホールド配管で相互接続した、大容量のガス消費に対応する移動式ガス集合供給装置。",
      features: locale === "tr"
        ? ["Tek noktadan yüksek debili gaz çıkışı", "Forklift ve vinç ile kolay taşıma altyapısı", "Tüp değişim sürelerini minimize eden sistem"]
        : locale === "en"
        ? ["High flow rate gas outlet from a single point", "Easy transport infrastructure with forklift and crane", "System minimizing cylinder changeover times"]
        : locale === "de"
        ? ["Gasaustritt mit hohem Durchfluss aus einer Hand", "Einfache Transportinfrastruktur mit Gabelstapler und Kran", "System zur Minimierung der Flaschenwechselzeiten"]
        : locale === "fr"
        ? ["Sortie de gaz à haut débit à partir d'un point unique", "Infrastructure de transport facile par chariot élévateur et grue", "Système minimisant les temps de changement de bouteille"]
        : locale === "it"
        ? ["Uscita gas ad alta portata da un unico punto", "Facile infrastruttura di trasporto con carrello elevatore e gru", "Sistema che riduce al minimo i tempi di cambio bombola"]
        : ["単一箇所からの高流量ガス出力", "フォークリフトやクレーンで吊り上げ可能な輸送構造フレーム", "容器交換の手間と時間ロスを排除するシステム"],
    },
    {
      id: "kompressor",
      cat: "agir-makine",
      catLabel: catLabels["agir-makine"],
      icon: "🏭",
      title: locale === "tr" ? "Endüstriyel Vidalı Kompresörler" : locale === "en" ? "Industrial Rotary Screw Compressors" : locale === "de" ? "Industrielle Schraubenkompressoren" : locale === "fr" ? "Compresseurs à Vis Industriels" : locale === "it" ? "Compressori a Vite Industriali" : "産業用スクリューコンプレッサー",
      badge: locale === "tr" ? "CE Belgeli" : locale === "en" ? "CE Certified" : locale === "de" ? "CE-zertifiziert" : locale === "fr" ? "Certifié CE" : locale === "it" ? "Certificato CE" : "CEマーク認証",
      desc: locale === "tr"
        ? "Fabrikalarda pnömatik sistemler ve hava hatları için yüksek verimlilikte basınçlı hava üreten, uzun ömürlü ve düşük gürültülü endüstriyel vidalı hava kompresörleri."
        : locale === "en"
        ? "Long-lasting and low-noise industrial rotary screw air compressors producing highly efficient compressed air for pneumatic systems and air lines in factories."
        : locale === "de"
        ? "Langlebige und geräuscharme industrielle Schraubenkompressoren zur hocheffizienten Erzeugung von Druckluft für pneumatische Systeme und Luftleitungen in Fabriken."
        : locale === "fr"
        ? "Compresseurs d'air à vis industriels durables et silencieux, produisant de l'air comprimé à haute efficacité pour les systèmes pneumatiques et les conduites d'air dans les usines."
        : locale === "it"
        ? "Compressori d'aria a vite industriali a lunga durata e bassa rumorosità che producono aria compressa ad alta efficienza per sistemi pneumatici e linee d'aria nelle fabbriche."
        : "工場のエアラインや空気圧（ニューマチック）システム向けに、高効率な圧縮空気を発生させる、低騒音・長寿命設計の産業用スクリューコンプレッサー。",
      features: locale === "tr"
        ? ["Inverter ile enerji tasarruflu çalışma", "Akıllı uzaktan izleme ve kontrol paneli", "Geniş servis ağı ve yedek parça desteği"]
        : locale === "en"
        ? ["Energy saving operation with inverter", "Smart remote monitoring and control panel", "Wide service network and spare parts support"]
        : locale === "de"
        ? ["Energiesparender Betrieb mit Frequenzumrichter", "Intelligentes Fernüberwachungs- und Kontrollpanel", "Breites Servicenetzwerk und Ersatzteilunterstützung"]
        : locale === "fr"
        ? ["Fonctionnement économe en énergie avec variateur de vitesse", "Panneau de commande et de surveillance à distance intelligent", "Large réseau de service et disponibilité des pièces de rechange"]
        : locale === "it"
        ? ["Funzionamento a risparmio energetico con inverter", "Pannello di controllo e monitoraggio remoto intelligente", "Ampia rete di assistenza e supporto ricambi"]
        : ["インバーター制御による省エネ運転対応", "スマート遠隔監視・統合操作パネル", "充実したメンテナンスサービス体制と予備部品サポート"],
    },
    {
      id: "vinc",
      cat: "agir-makine",
      catLabel: catLabels["agir-makine"],
      icon: "🏗️",
      title: locale === "tr" ? "Köprülü Tavan Vinçleri" : locale === "en" ? "Overhead Crane Systems" : locale === "de" ? "Brückenkrane" : locale === "fr" ? "Ponts Roulants" : locale === "it" ? "Carriponte (Gru a Ponte)" : "天井クレーン・橋形クレーン",
      badge: "FEM 1.001",
      desc: locale === "tr"
        ? "Ağır sanayi, çelik depolama ve dökümhaneler için 1 tondan 50 tona kadar kaldırma kapasitesine sahip, çift veya tek kirişli yüksek emniyetli gezer köprülü vinç sistemleri."
        : locale === "en"
        ? "Double or single girder high-safety overhead traveling crane systems with lifting capacities from 1 ton to 50 tons for heavy industry, steel storage, and foundries."
        : locale === "de"
        ? "Zwei- oder Einträger-Brückenlaufkrane mit hoher Sicherheit und Tragfähigkeiten von 1 bis 50 Tonnen für Schwerindustrie, Stahllagerung und Gießereien."
        : locale === "fr"
        ? "Ponts roulants monopoutre ou bipoutre haute sécurité avec des capacités de levage de 1 à 50 tonnes pour l'industrie lourde, le stockage de l'acier et les fonderies."
        : locale === "it"
        ? "Gru a ponte bitrave o monotrave ad alta sicurezza con capacità di sollevamento da 1 a 50 tonnellate per industria pesante, stoccaggio acciaio e fonderie."
        : "重工業、鋼材倉庫、および鋳造所向けに設計された、吊り上げ荷重1トンから50トンまでの、高安全なシングル・ダブルガーダー天井クレーン。",
      features: locale === "tr"
        ? ["FEM ve DIN standartlarında tasarım", "Aşırı yük limit siviçleri ile maksimum iş güvenliği", "Pürüzsüz kalkış ve duruş için frekans kontrollü motorlar"]
        : locale === "en"
        ? ["Design in FEM and DIN standards", "Maximum work safety with overload limit switches", "Frequency controlled motors for smooth start and stop"]
        : locale === "de"
        ? ["Design nach FEM- und DIN-Standards", "Maximale Arbeitssicherheit durch Überlastgrenzschalter", "Frequenzgesteuerte Motoren für sanften Anlauf und Stopp"]
        : locale === "fr"
        ? ["Conception selon les normes FEM et DIN", "Sécurité de travail maximale avec interrupteurs de fin de course de surcharge", "Moteurs à commande de fréquence pour démarrages et arrêts en douceur"]
        : locale === "it"
        ? ["Progettazione in standard FEM e DIN", "Massima sicurezza sul lavoro con interruttori di sovraccarico", "Motori controllati in frequenza per avviamento e arresto fluidi"]
        : ["FEMおよびDIN設計基準に完全準拠", "過負荷防止リミットスイッチによる安全性の確保", "滑らかな加減速動作のための周波数（インバータ）制御モータ"],
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Ürünler sayfası başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{locale === "tr" ? "Ürünler" : locale === "en" ? "Products" : locale === "de" ? "Produkte" : locale === "fr" ? "Produits" : locale === "it" ? "Prodotti" : "製品"}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{locale === "tr" ? "Ürünlerimiz" : locale === "en" ? "Our Products" : locale === "de" ? "Unsere Produkte" : locale === "fr" ? "Nos Produits" : locale === "it" ? "I Nostri Prodotti" : "製品ラインナップ"}</h1>
          <p className={sharedStyles.pageHeroDesc}>
            {locale === "tr"
              ? "Medikal gazlardan ağır makinelere, elektrik sistemlerinden çelik ürünlerine kadar tüm sektörlere kapsamlı endüstriyel çözümler sunuyoruz."
              : locale === "en"
              ? "We offer comprehensive industrial solutions to all sectors, from medical gases to heavy machinery, from electrical systems to steel products."
              : locale === "de"
              ? "Wir bieten umfassende industrielle Lösungen für alle Branchen, von medizinischen Gasen bis hin zu schweren Maschinen, von elektrischen Systemen bis hin zu Stahlprodukten."
              : locale === "fr"
              ? "Nous proposons des solutions industrielles complètes à tous les secteurs, des gaz médicaux aux machines lourdes, des systèmes électriques aux produits sidérurgiques."
              : locale === "it"
              ? "Offriamo soluzioni industriali complete per tutti i settori, dai gas medicali ai macchinari pesanti, dai sistemi elettrici ai prodotti in acciaio."
              : "医療用ガスから重機械、電気システムから鉄鋼製品まで、あらゆる産業に包括的な産業用ソリューションを提供します。"}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className={styles.productsSection} aria-label="Ürün kataloğu">
        <div className={styles.productsSectionInner}>
          {/* Category Filter */}
          <div className={styles.productsCats} role="navigation" aria-label="Ürün kategorileri">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id === "tumu" ? "urunler" : cat.id}`}
                id={`cat-btn-${cat.id}`}
                className={styles.catBtn}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </a>
            ))}
          </div>

          {/* Products Grid */}
          <div id="urunler" className={styles.productsGrid}>
            {products.map((p) => {
              const isGas = p.cat === "medikal-gaz" || p.cat === "endustriyel-gaz";
              
              let productHref = `/${locale}/iletisim`;
              if (p.cat === "medikal-gaz") {
                let slug = "";
                if (p.id === "medikal-oksijen") slug = "medikal-oksijen-gazi";
                else if (p.id === "azot-protoksit") slug = "azot-protoksit-gazi";
                else if (p.id === "medikal-karbondioksit") slug = "medikal-karbondioksit-gazi";
                else if (p.id === "medikal-hava") slug = "medikal-kuru-hava-gazi";
                else if (p.id === "medikal-sivi-azot") slug = "medikal-sivi-azot-gazi";
                productHref = `/${locale}/urunler/gazlar/medikal-gazlar/${slug}`;
              } else if (p.cat === "endustriyel-gaz") {
                let slug = "";
                if (p.id === "endustriyel-oksijen") slug = "oksijen-gazi";
                else if (p.id === "argon") slug = "argon-gazi";
                else if (p.id === "endustriyel-azot") slug = "saf-azot-gazi";
                else if (p.id === "helyum") slug = "helyum-gazi";
                else if (p.id === "asetilen") slug = "asetilen-gazi";
                else if (p.id === "kaynak-karisimlari") slug = "karisim-gazlari";
                productHref = `/${locale}/urunler/gazlar/sinai-gazlar/${slug}`;
              }

              const buttonText = isGas
                ? (locale === "tr" ? "Detayları Gör" : locale === "en" ? "View Details" : locale === "de" ? "Details anzeigen" : locale === "fr" ? "Voir les Détails" : locale === "it" ? "Visualizza Dettagli" : "詳細を見る")
                : actionText;

              return (
                <article
                  key={p.id}
                  id={p.cat}
                  className={styles.productCard}
                >
                  <div className={styles.productCardImg}>
                    <Link href={productHref} style={{ display: "contents" }}>
                      {getProductIcon(p.id)}
                    </Link>
                    <span className={styles.productCardBadge}>{p.badge}</span>
                  </div>
                  <div className={styles.productCardBody}>
                    <span className={styles.productCardTag}>{p.catLabel}</span>
                    <h2 className={styles.productCardTitle}>
                      <Link href={productHref}>
                        {p.title}
                      </Link>
                    </h2>
                    <p className={styles.productCardDesc}>{p.desc}</p>
                    <ul className={styles.productCardFeatures} role="list">
                      {p.features.map((f) => (
                        <li key={f} className={styles.productCardFeature}>{f}</li>
                      ))}
                    </ul>
                    <Link
                      href={productHref}
                      id={`product-action-${p.id}`}
                      className={styles.productCardAction}
                    >
                      {buttonText} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
