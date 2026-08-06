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
    title: "Yüksek Saflıkta Gazlar",
    badge: "Analitik & İleri Teknoloji Gazları",
    desc: "Safsızlık oranlarının minimum seviyeye indirildiği, kritik endüstriyel prosesler ile hassas laboratuvar uygulamaları ve medikal analitik sistemler için özel olarak üretilen yüksek saflıkta gaz çözümleri.",
    content: "Yüksek saflıkta gazlar, safsızlık oranlarının minimum seviyeye indirildiği ve kritik endüstriyel prosesler ile hassas laboratuvar uygulamaları için özel olarak üretilen gazlardır. Analitik doğruluğun, proses güvenilirliğinin ve ürün kalitesinin doğrudan gaz kalitesine bağlı olduğu sektörlerde kullanılan bu gazlar; araştırma laboratuvarlarından yarı iletken üretimine, ilaç sanayinden petrokimya tesislerine kadar geniş bir kullanım alanına sahiptir. Tinsa Gaz olarak, uluslararası kalite standartlarına uygun yüksek saflıkta gaz çözümleri sunarak müşterilerimizin üretim, analiz ve Ar-Ge süreçlerinde maksimum güvenilirlik sağlamayı hedefliyoruz. Gaz saflığı, nem oranı, hidrokarbon içeriği ve diğer kritik parametreler gelişmiş analiz yöntemleriyle kontrol edilmekte, her parti ürün izlenebilir kalite prosedürleri kapsamında değerlendirilmektedir.",
    features: [
      "%99,9'dan %99,9999'a kadar farklı saflık seviyelerinde gaz çözümleri (Grade 3.0 – 6.0)",
      "Her parti için izlenebilir Analiz Sertifikası (Certificate of Analysis - CoA)",
      "Kritik partikül, nem ve hidrokarbon safsızlık kontrolleri",
      "ISO 9001 kalite yönetim ilkelerine tam uyumlu süreç yönetimi",
      "ADR kurallarına ve yüksek basınç emniyet standartlarına uygun sevkiyat"
    ],
    usageAreas: [
      "Laboratuvar Analizleri (GC, GC-MS, ICP-OES, ICP-MS, AAS, FTIR cihazları)",
      "Ar-Ge Merkezleri ve Üniversite Araştırma Laboratuvarları",
      "Yarı İletken, Elektronik ve Fotovoltaik Hücre Üretimi",
      "İlaç (Farmasötik) ve Biyoteknoloji Sanayi",
      "Petrokimya ve Kimya Sanayi (Reaktör atmosferleri ve kalibrasyon)",
      "Enerji, Çevre Teknolojileri ve Emisyon Ölçüm Sistemleri"
    ],
    specifications: [
      { label: "Saflık Aralığı", value: "%99,9 – %99,9999 (3.0 - 6.0)" },
      { label: "Ürün Portföyü", value: "Azot (N₂), Oksijen (O₂), Argon (Ar), Helyum (He), Hidrojen (H₂), Karbondioksit (CO₂)" },
      { label: "Kalite Belgesi", value: "Parti Bazlı Analiz Sertifikası (CoA)" },
      { label: "Ambalaj Modeli", value: "Yüksek Basınçlı Tüpler, Demet Tüp (Bundle), Kriyojenik Dökme Tank" }
    ],
    gallery: [
      {
        src: "/yuksek-saflikta-gazlar-1.jpg",
        alt: "Yüksek Saflıkta Gazlar - Azot, Oksijen, Argon, Helyum, Hidrojen, Karbondioksit tüpleri",
        caption: "Yüksek Saflıkta Gaz Portföyümüz (N₂, O₂, Ar, He, H₂, CO₂)"
      },
      {
        src: "/yuksek-saflikta-gazlar-2.jpg",
        alt: "Yüksek Saflıkta Gazlar - Kalite, Saflık ve Güven",
        caption: "Kalite, Saflık ve Güven — Laboratuvar ve Ar-Ge Uygulamaları"
      }
    ],
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Özel Tüpler ve Demet Tüp (Bundle) Sistemleri",
        desc: "Laboratuvar, Ar-Ge merkezleri ve orta ölçekli analiz ihtiyaçları için pasifleştirilmiş iç cidarlı özel tüpler veya manifoldlu demet (bundle) sistemleriyle tedarik edilir. Her sevkiyat, parti Analiz Sertifikası (CoA) ile teslim edilir."
      },
      {
        title: "2. Kriyojenik Tank ve Merkezi Dökme Gaz Sistemleri",
        desc: "Yüksek ve kesintisiz gaz tüketimi olan yarı iletken, ilaç ve petrokimya tesisleri için kriyojenik sıvı tank veya dökme gaz sistemleriyle merkezi gaz dağıtımı sağlanır; proses optimizasyonu için mühendislik desteği sunulur."
      }
    ],
    safetyWarning: "Kalite ve Güvenlik Standardı: Yüksek saflıkta gazların depolanması, taşınması ve sevkiyat süreçleri ADR taşımacılık kuralları ile yürürlükteki güvenlik ve kalite uygulamalarına uygun şekilde yürütülür. Tinsa Gaz olarak, ISO 9001 Kalite Yönetim Sistemi prensipleri doğrultusunda yönetilen süreçlerle ürün bütünlüğünü koruyor ve talep halinde her parti için analiz sertifikası (CoA) sağlıyoruz."
  },
  en: {
    title: "High Purity Gases",
    badge: "Analytical & High-Tech Gases",
    desc: "High-purity gas solutions specially produced for critical industrial processes, sensitive laboratory applications, and medical analytical systems where impurity levels are minimized.",
    content: "High-purity gases are gases specially produced for critical industrial processes and sensitive laboratory applications where impurity levels are reduced to a minimum. Used in sectors where analytical accuracy, process reliability, and product quality directly depend on gas quality, these gases have a wide area of use from research laboratories to semiconductor manufacturing, pharmaceutical industry to petrochemical facilities.",
    features: [
      "Gas solutions in different purity levels from 99.9% to 99.9999% (Grade 3.0 – 6.0)",
      "Traceable Certificate of Analysis (CoA) for each batch",
      "Critical particle, moisture, and hydrocarbon impurity controls",
      "Process management fully compliant with ISO 9001 quality principles",
      "Safe storage and shipment in accordance with ADR rules"
    ],
    usageAreas: [
      "Laboratory Analysis (GC, GC-MS, ICP-OES, ICP-MS, AAS, FTIR devices)",
      "R&D Centers and University Research Laboratories",
      "Semiconductor, Electronics, and Photovoltaic Cell Manufacturing",
      "Pharmaceutical and Biotechnology Industry",
      "Petrochemical and Chemical Industry",
      "Energy, Environmental Technologies, and Calibration Systems"
    ],
    specifications: [
      { label: "Purity Range", value: "99.9% – 99.9999% (3.0 - 6.0)" },
      { label: "Product Portfolio", value: "Nitrogen (N₂), Oxygen (O₂), Argon (Ar), Helium (He), Hydrogen (H₂), Carbon Dioxide (CO₂)" },
      { label: "Quality Document", value: "Batch-based Certificate of Analysis (CoA)" },
      { label: "Packaging Model", value: "High Pressure Cylinders, Manifold Bundle, Cryogenic Bulk Tank" }
    ],
    gallery: [
      {
        src: "/yuksek-saflikta-gazlar-1.jpg",
        alt: "High Purity Gases - Nitrogen, Oxygen, Argon, Helium, Hydrogen, Carbon Dioxide cylinders",
        caption: "Our High Purity Gas Portfolio (N₂, O₂, Ar, He, H₂, CO₂)"
      },
      {
        src: "/yuksek-saflikta-gazlar-2.jpg",
        alt: "High Purity Gases - Quality, Purity and Trust",
        caption: "Quality, Purity and Trust — Laboratory and R&D Applications"
      }
    ],
    supplyModels: [
      {
        title: "1. High-Pressure Cylinders and Manifold Bundle Systems",
        desc: "Supplied in passivated internal cylinders or multi-cylinder bundle systems for laboratory, R&D centers, and analytical needs. Delivered with a Certificate of Analysis (CoA)."
      },
      {
        title: "2. Cryogenic Tank and Bulk Gas Systems",
        desc: "Central gas distribution provided with cryogenic liquid tanks or bulk gas systems for high-consumption semiconductor, pharmaceutical, and petrochemical plants."
      }
    ],
    safetyWarning: "Quality & Safety Standard: High purity gas storage and logistics strictly follow ADR rules and ISO 9001 Quality Management System standards."
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

export default async function YuksekSafliktaGazlarPage({ params }: Props) {
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
    ? "Tedarik ve Depolama Modelleri"
    : "Supply and Storage Models";

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
              id="yuksek-saflik-cta-contact-btn"
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
