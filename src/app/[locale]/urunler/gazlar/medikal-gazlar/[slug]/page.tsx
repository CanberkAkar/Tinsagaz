import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import sharedStyles from "../../../../shared.module.css";
import styles from "../medikal-gazlar.module.css";
import { getMedicalGasesData } from "../medikalData";
import { locales, Locale, getDictionary } from "../../../../dictionaries";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const localeGasesData = getMedicalGasesData(locale);
    for (const gas of localeGasesData) {
      params.push({
        locale,
        slug: gas.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const localeGasesData = getMedicalGasesData(currentLocale);
  const gas = localeGasesData.find((g) => g.slug === slug);
  
  if (!gas) {
    return {
      title: locale === "tr" ? "Gaz Bulunamadı | Tinsagaz" : "Gas Not Found | Tinsagaz",
    };
  }

  const gasesLabel = locale === "tr"
    ? "Medikal Gazlar"
    : locale === "en"
    ? "Medical Gases"
    : locale === "de"
    ? "Medizinische Gase"
    : locale === "fr"
    ? "Gaz Médicaux"
    : locale === "it"
    ? "Gas Medicali"
    : "医療用ガス";

  return {
    title: `${gas.title} | ${gasesLabel} | Tinsagaz`,
    description: gas.desc,
  };
}

export default async function MedicalGasDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const localeGasesData = getMedicalGasesData(currentLocale);
  const gas = localeGasesData.find((g) => g.slug === slug);

  if (!gas) {
    notFound();
  }

  const productsLabel = locale === "tr"
    ? "Ürünlerimiz"
    : locale === "en"
    ? "Our Products"
    : locale === "de"
    ? "Unsere Produkte"
    : locale === "fr"
    ? "Nos Produits"
    : locale === "it"
    ? "I Nostri Prodotti"
    : "製品紹介";

  const supplyModelsTitle = locale === "tr"
    ? "Tedarik ve Depolama Modelleri"
    : locale === "en"
    ? "Supply and Storage Models"
    : locale === "de"
    ? "Versorgungs- und Lagermodelle"
    : locale === "fr"
    ? "Modèles d'Approvisionnement et de Stockage"
    : locale === "it"
    ? "Modelli di Fornitura e Stoccaggio"
    : "供給および保管モデル";

  const safetyStandardLabel = locale === "tr"
    ? "⚠️ Güvenlik Standardı"
    : locale === "en"
    ? "⚠️ Safety Standard"
    : locale === "de"
    ? "⚠️ Sicherheitsstandard"
    : locale === "fr"
    ? "⚠️ Norme de Sécurité"
    : locale === "it"
    ? "⚠️ Standard di Sicurezza"
    : "⚠️ 安全基準";

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label={`${gas.title} Tanıtımı`}>
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <Link href={`/${locale}/urunler`} className={sharedStyles.pageBreadcrumbLink}>{productsLabel}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <Link href={`/${locale}/urunler/gazlar/medikal-gazlar`} className={sharedStyles.pageBreadcrumbLink}>{dict.medicalGasesList.hero.title}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{gas.title}</span>
          </nav>
          {gas.badge && <span className={styles.badge} style={{ marginBottom: "16px", display: "inline-block" }}>{gas.badge}</span>}
          <h1 className={sharedStyles.pageHeroTitle}>{gas.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>{gas.desc}</p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className={styles.detailContainer} aria-label={`${gas.title} Ürün Detayları`}>
        {/* Left Column: Descriptions and Applications */}
        <div className={styles.mainContent}>
          {/* Product Description Block */}
          {gas.content && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.description}</h2>
              <p style={{ color: "var(--gray-600)", lineHeight: "1.8", fontSize: "1rem" }}>
                {gas.content}
              </p>
            </article>
          )}

          {/* Features Block */}
          {gas.features && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.features}</h2>
              <ul className={styles.featureList} role="list" style={{ marginTop: "16px" }}>
                {gas.features.map((feat, idx) => (
                  <li key={idx} className={styles.featureItem} style={{ fontSize: "0.98rem" }}>
                    <span className={styles.checkIcon} style={{ fontSize: "1.1rem" }}>✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}

          {/* Usage Areas Block */}
          {gas.usageAreas && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.usage}</h2>
              <div className={styles.usageGrid} style={{ marginTop: "16px" }}>
                {gas.usageAreas.map((area, idx) => (
                  <div key={idx} className={styles.usageItem}>
                    <span style={{ color: "var(--primary)" }}>✦</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* Supply & Storage Models Block */}
          {gas.supplyModels && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{supplyModelsTitle}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: "20px" }}>
                {gas.supplyModels.map((model, idx) => (
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
          {gas.specifications && (
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.specs}</h2>
              <table className={styles.specTable} style={{ marginTop: "16px" }}>
                <tbody>
                  {gas.specifications.map((spec, idx) => (
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
              <strong>{gas.title}</strong> {dict.gasDetail.ctaDesc}
            </p>
            <Link
              href={`/${locale}/iletisim`}
              id="medical-gas-cta-contact-btn"
              className="btn btn-secondary"
              style={{ padding: "12px 32px", fontSize: "0.95rem", fontWeight: "600", width: "100%", textDecoration: "none" }}
            >
              {dict.gasDetail.ctaButton}
            </Link>
          </div>

          {/* Safety Warning Block */}
          {gas.safetyWarning && (
            <div className={styles.warningBox}>
              <span className={styles.warningTitle}>{safetyStandardLabel}</span>
              <p>{gas.safetyWarning}</p>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
