import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../../shared.module.css";
import styles from "../gazlar/sinai-gazlar/sinai-gazlar.module.css";
import GasGallery from "../gazlar/sinai-gazlar/GasGallery";
import { Locale, getDictionary } from "../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

const pageContent: Record<string, {
  title: string;
  badge: string;
  desc: string;
  content: string;
  features: string[];
  usageAreas: string[];
  specifications: { label: string; value: string }[];
  gallery: { src: string; alt: string; caption?: string }[];
  supplyModels: { title: string; desc: string }[];
  safetyWarning: string;
}> = {
  tr: {
    title: "Klor Tankı ve Tüpleri (Cl₂)",
    badge: "Basınçlı Kaplar & Tanklar",
    desc: "Klor tankı, sıvı veya gaz halindeki klorun güvenli şekilde depolanmasını, taşınmasını ve dozajlanmasını sağlayan, yüksek basınca dayanıklı özel basınçlı kaplardır. EN 14208 ve EN 13322-1 standartlarına uygun olarak üretilir.",
    content: "Klor tankı, sıvı veya gaz halindeki klorun güvenli şekilde depolanması, taşınması ve kullanılmasını sağlayan, yüksek basınca dayanıklı özel basınçlı kaplardır. Klor gazının aşındırıcı ve tehlikeli yapısı nedeniyle bu tanklar; uluslararası standartlara uygun malzemelerden üretilir, sızdırmazlık testlerinden geçirilir ve sıkı kalite kontrollerine tabi tutulur. Tank içerisindeki sıvılaştırılmış klor, ihtiyaç duyulan proseslerde uygun vana, regülatör ve dozaj ekipmanları aracılığıyla kontrollü olarak sisteme aktarılır. Doğru tasarlanmış ve standartlara uygun üretilmiş bir klor tankı, hem işletme güvenliğini artırır hem de üretim süreçlerinin kesintisiz devam etmesini sağlar.",
    features: [
      "EN 14208 (büyük hacim) ve EN 13322-1 (tüp) standartlarına %100 uygunluk",
      "Klorun korozif yapısına dayanıklı özel yüksek mukavemetli alaşım çelik",
      "36 – 48 bar test basıncı altında zorlu sızdırmazlık ve hidrostatik doğrulama",
      "Her tank için izlenebilir teknik sertifikasyon ve test raporları",
      "Yasal periyodik muayene ve periyodik yeniden test desteği"
    ],
    usageAreas: [
      "İçme Suyu ve Atık Su Arıtma Tesisleri (Şehir ve sanayi klorlama üniteleri)",
      "Kimya ve Petrokimya Tesisleri (Klorlu bileşik imalatı)",
      "Yüzme Havuzları ve Su Parkları (Dezenfeksiyon prosesleri)",
      "Kağıt, Selüloz ve Tekstil Sanayi (Ağartma prosesleri)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "Cl₂" },
      { label: "Üretim Normu", value: "EN 14208 (Tank) / EN 13322-1 (Tüp)" },
      { label: "Dış Çap Aralığı", value: "Ø254 mm – Ø610 mm" },
      { label: "Su Kapasitesi", value: "22 – 840 Litre" },
      { label: "Klor Dolum Kapasitesi", value: "22 – 1050 kg (dolum faktörü 1,25 kg/lt)" },
      { label: "Test Basıncı", value: "36 – 48 Bar" },
      { label: "Ambalaj Modeli", value: "Dikişli Klor Tüpü / Yatay Klor Tankı" }
    ],
    gallery: [
      {
        src: "/klor-tupleri.jpg",
        alt: "Dikişli Klor Tüpleri - EN 13322-1 standardına uygun üretim",
        caption: "Dikişli Klor Tüpleri (Ø254 – Ø510 mm)"
      },
      {
        src: "/klor-tanklari.jpg",
        alt: "Klor Tankları ve Tüpleri - EN 14208 standardına uygun üretim",
        caption: "Yatay Klor Tankları (Ø510 – Ø610 mm)"
      }
    ],
    supplyModels: [
      {
        title: "1. Dikişli Klor Tüpleri (Ø254 – Ø510 mm)",
        desc: "22-150 litre su kapasiteli, EN 13322-1 standardına uygun üretilen klor tüpleri; düşük ve orta hacimli klor ihtiyacı olan işletmeler, küçük ölçekli su arıtma tesisleri ve laboratuvarlar için ideal, kolay taşınabilir bir çözümdür."
      },
      {
        title: "2. Klor Tankları (Ø510 – Ø610 mm)",
        desc: "150-600+ litre kapasiteli, EN 14208 standardına uygun üretilen büyük hacimli klor tankları; su arıtma tesisleri ve endüstriyel klorlama sistemleri gibi yüksek klor tüketimi olan tesisler için tasarlanmıştır. 620-1630 mm uzunluk aralığında ve 400-840 litre su kapasitesinde üretilen tanklar 36-48 bar test basıncına dayanıklıdır; 1,25 kg/lt dolum faktörü ile 500-1050 kg klor kapasitesi sunar."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Klor, yüksek konsantrasyonlarda toksik ve tahriş edici bir gazdır; bu nedenle klor tankı ve tüplerinin taşınması, depolanması ve kullanımı sıkı güvenlik prosedürlerine tabidir. Tanklar iyi havalandırılan, doğrudan güneş ışığından korunan alanlarda, dik veya özel sehpalarında muhafaza edilmelidir. Tinsa Gaz olarak sevk ettiğimiz tüm klor tankı ve tüpleri, EN 14208 standardına uygun periyodik sızdırmazlık testlerinden ve yasal muayene süreçlerinden geçirilerek teslim edilmektedir."
  },
  en: {
    title: "Chlorine Tanks & Cylinders (Cl₂)",
    badge: "Pressure Vessels & Tanks",
    desc: "Specialized high-pressure vessels ensuring safe storage, transportation, and dosing of liquid or gaseous chlorine, manufactured in full compliance with EN 14208 and EN 13322-1 standards.",
    content: "Chlorine tanks are specialized pressure vessels built to withstand high pressure, enabling safe storage, transport, and application of liquid or gaseous chlorine. Due to the corrosive and hazardous nature of chlorine gas, these tanks are constructed from alloy steel materials compliant with international standards, leak-tested, and subjected to rigorous quality controls. The liquefied chlorine inside the tank is transferred into processes under controlled conditions via suitable valves, regulators, and dosing equipment.",
    features: [
      "100% compliance with EN 14208 (large capacity) and EN 13322-1 (cylinder) standards",
      "High-strength special alloy steel resistant to corrosive chlorine",
      "Rigorous leak and hydrostatic testing under 36 – 48 bar test pressure",
      "Traceable technical certification and test reports for every unit",
      "Full support for periodic legal inspections and testing"
    ],
    usageAreas: [
      "Drinking & Wastewater Treatment Plants (Chlorination and disinfection)",
      "Chemical and Petrochemical Facilities",
      "Swimming Pools and Public Aquatic Facilities",
      "Paper, Pulp, and Textile Manufacturing (Bleaching processes)"
    ],
    specifications: [
      { label: "Chemical Formula", value: "Cl₂" },
      { label: "Manufacturing Standard", value: "EN 14208 (Tank) / EN 13322-1 (Cylinder)" },
      { label: "Outer Diameter", value: "Ø254 mm – Ø610 mm" },
      { label: "Water Capacity", value: "22 – 840 Liters" },
      { label: "Chlorine Filling Capacity", value: "22 – 1050 kg (filling factor 1.25 kg/l)" },
      { label: "Test Pressure", value: "36 – 48 Bar" },
      { label: "Packaging Model", value: "Welded Chlorine Cylinder / Horizontal Chlorine Tank" }
    ],
    gallery: [
      {
        src: "/klor-tupleri.jpg",
        alt: "Welded Chlorine Cylinders - EN 13322-1 compliant manufacturing",
        caption: "Welded Chlorine Cylinders (Ø254 – Ø510 mm)"
      },
      {
        src: "/klor-tanklari.jpg",
        alt: "Chlorine Tanks and Cylinders - EN 14208 compliant manufacturing",
        caption: "Horizontal Chlorine Tanks (Ø510 – Ø610 mm)"
      }
    ],
    supplyModels: [
      {
        title: "1. Welded Chlorine Cylinders (Ø254 – Ø510 mm)",
        desc: "Chlorine cylinders manufactured according to EN 13322-1 standard with 22-150 liters water capacity; an easily portable solution ideal for low to medium-volume chlorine demands, small-scale water treatment facilities, and laboratories."
      },
      {
        title: "2. Chlorine Tanks (Ø510 – Ø610 mm)",
        desc: "Large volume chlorine tanks with 150-600+ liters capacity, manufactured according to EN 14208 standard; designed for high-consumption plants like municipal water treatment and industrial chlorination systems."
      }
    ],
    safetyWarning: "Technical Warning & Safety Standard: Chlorine is a toxic and corrosive gas in high concentrations. Transportation, storage, and handling of chlorine tanks and cylinders are subject to strict safety protocols. All chlorine containers supplied by Tinsa Gaz undergo periodic leak tests in compliance with EN 14208 standards."
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const data = pageContent[currentLocale] || pageContent.tr;

  return {
    title: `${data.title} | Tinsagaz`,
    description: data.desc,
  };
}

export default async function KlorTankiPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const data = pageContent[currentLocale] || pageContent.tr;

  const productsLabel = currentLocale === "tr"
    ? "Ürünlerimiz"
    : currentLocale === "en"
    ? "Our Products"
    : currentLocale === "de"
    ? "Unsere Produkte"
    : currentLocale === "fr"
    ? "Nos Produits"
    : currentLocale === "it"
    ? "I Nostri Prodotti"
    : "製品紹介";

  const supplyModelsTitle = currentLocale === "tr"
    ? "Tedarik ve Kapasite Modelleri"
    : "Supply and Capacity Models";

  const safetyStandardLabel = currentLocale === "tr"
    ? "Güvenlik Standardı"
    : "Safety Standard";

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label={`${data.title} Tanıtımı`}>
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <Link href={`/${locale}/urunler`} className={sharedStyles.pageBreadcrumbLink}>{productsLabel}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{data.title}</span>
          </nav>
          {data.badge && <span className={styles.badge} style={{ marginBottom: "16px", display: "inline-block" }}>{data.badge}</span>}
          <h1 className={sharedStyles.pageHeroTitle}>{data.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>{data.desc}</p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className={styles.detailContainer} aria-label={`${data.title} Ürün Detayları`}>
        {/* Left Column: Content, Gallery, Features, Usage */}
        <div className={styles.mainContent}>
          {/* Product Content Block */}
          {data.content && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.description}</h2>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.8", fontSize: "1rem" }}>
                {data.content}
              </p>
            </article>
          )}

          {/* Gallery Block */}
          {data.gallery && (
            <article className={styles.sectionBlock}>
              <GasGallery images={data.gallery} />
            </article>
          )}

          {/* Features Block */}
          {data.features && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.features}</h2>
              <ul className={styles.featureList} role="list" style={{ marginTop: "16px" }}>
                {data.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem} style={{ fontSize: "0.98rem" }}>
                    <span className={styles.checkIcon} style={{ fontSize: "1.1rem" }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}

          {/* Usage Areas Block */}
          {data.usageAreas && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.usage}</h2>
              <div className={styles.usageGrid} style={{ marginTop: "16px" }}>
                {data.usageAreas.map((area, idx) => (
                  <div key={idx} className={styles.usageItem}>
                    <span style={{ color: "var(--primary)" }}>✦</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* Supply & Storage Models Block */}
          {data.supplyModels && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{supplyModelsTitle}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "20px" }}>
                {data.supplyModels.map((model, idx) => (
                  <div key={idx} className={styles.supplyModelItem}>
                    <h3 className={styles.supplyModelTitle}>{model.title}</h3>
                    <p className={styles.supplyModelDesc}>{model.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>

        {/* Right Column: Specifications and CTA */}
        <aside className={styles.sidebar}>
          {/* Specifications Table Block */}
          {data.specifications && (
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.specs}</h2>
              <table className={styles.specTable} style={{ marginTop: "16px" }}>
                <tbody>
                  {data.specifications.map((spec, idx) => (
                    <tr key={idx} className={styles.specRow}>
                      <th className={styles.specLabel}>{spec.label}</th>
                      <td className={styles.specValue}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Sidebar CTA Block */}
          <div className={styles.ctaWidget}>
            <h3>{dict.gasDetail.ctaTitle}</h3>
            <p>
              <strong>{data.title}</strong> {dict.gasDetail.ctaDesc}
            </p>
            <Link
              href={`/${locale}/iletisim`}
              id="klor-tanki-cta-contact-btn"
              className="btn btn-secondary"
              style={{ padding: "12px 32px", fontSize: "0.95rem", fontWeight: "600", width: "100%", textDecoration: "none" }}
            >
              {dict.gasDetail.ctaButton}
            </Link>
          </div>

          {/* Safety Warning Block */}
          {data.safetyWarning && (
            <div className={styles.warningBox}>
              <span className={styles.warningTitle} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>{safetyStandardLabel}</span>
              </span>
              <p>{data.safetyWarning}</p>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
