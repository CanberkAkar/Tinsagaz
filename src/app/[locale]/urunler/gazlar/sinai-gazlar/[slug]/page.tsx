import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import sharedStyles from "../../../../shared.module.css";
import styles from "../sinai-gazlar.module.css";
import { getGasesData } from "../gasesData";
import { locales, Locale, getDictionary } from "../../../../dictionaries";
import GasGallery from "../GasGallery";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const localeGasesData = getGasesData(locale);
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
  const localeGasesData = getGasesData(currentLocale);
  const gas = localeGasesData.find((g) => g.slug === slug);
  
  if (!gas) {
    return {
      title: locale === "tr" ? "Gaz Bulunamadı | Tinsagaz" : "Gas Not Found | Tinsagaz",
    };
  }

  const gasesLabel = locale === "tr"
    ? "Sınai Gazlar"
    : locale === "en"
    ? "Industrial Gases"
    : locale === "de"
    ? "Industriegase"
    : locale === "fr"
    ? "Gaz Industriels"
    : locale === "it"
    ? "Gas Industriali"
    : "産業用ガス";

  return {
    title: `${gas.title} | ${gasesLabel} | Tinsagaz`,
    description: gas.desc,
  };
}

const msdsMapping: Record<string, string> = {
  "oksijen-gazi": "/msds/msds-oksijen.pdf",
  "argon-gazi": "/msds/msds-argon.pdf",
  "saf-azot-gazi": "/msds/msds-azot.pdf",
  "asetilen-gazi": "/msds/msds-asetilen.pdf",
};

export default async function GasDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const localeGasesData = getGasesData(currentLocale);
  const gas = localeGasesData.find((g) => g.slug === slug);

  if (!gas) {
    notFound();
  }

  const productsLabel = locale === "tr"
    ? "Ürünler"
    : locale === "en"
    ? "Products"
    : locale === "de"
    ? "Produkte"
    : locale === "fr"
    ? "Produits"
    : locale === "it"
    ? "Prodotti"
    : "製品";

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
    ? "Güvenlik Standardı"
    : locale === "en"
    ? "Safety Standard"
    : locale === "de"
    ? "Sicherheitsstandard"
    : locale === "fr"
    ? "Norme de Sécurité"
    : locale === "it"
    ? "Standard di Sicurezza"
    : "安全基準";

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
            <Link href={`/${locale}/urunler/gazlar/sinai-gazlar`} className={sharedStyles.pageBreadcrumbLink}>{dict.gasesList.hero.title}</Link>
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

          {/* Gallery Block */}
          {gas.gallery && (
            <article className={styles.sectionBlock}>
              <GasGallery images={gas.gallery} />
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
              <div className={styles.usageGrid}>
                {gas.usageAreas.map((area, idx) => (
                  <div key={idx} className={styles.usageItem}>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* Supply Models Block */}
          {gas.supplyModels && (
            <article className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{supplyModelsTitle}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}>
                {gas.supplyModels.map((model, idx) => (
                  <div key={idx} className={styles.supplyModelItem}>
                    <h3 className={styles.supplyModelTitle}>{model.title}</h3>
                    <p className={styles.supplyModelDesc}>{model.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* Safety Warning Block */}
          {gas.safetyWarning && (
            <div className={styles.warningBox}>
              <span className={styles.warningTitle} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span>{safetyStandardLabel}</span>
              </span>
              <p>{gas.safetyWarning}</p>
            </div>
          )}
        </div>

        {/* Right Column: Specs and Call to Action */}
        <aside className={styles.sidebar}>
          {/* Specifications Block */}
          {gas.specifications && (
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>{dict.gasDetail.specs}</h2>
              <table className={styles.specTable}>
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

          {/* MSDS Download Widget */}
          {msdsMapping[slug] && (
            <div className={styles.msdsWidget}>
              <div className={styles.msdsHeader}>
                <div className={styles.msdsIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className={styles.msdsTitle}>{dict.gasDetail.msdsTitle}</h3>
              </div>
              <p className={styles.msdsDesc}>{dict.gasDetail.msdsDesc}</p>
              <a
                href={msdsMapping[slug]}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.msdsButton}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px" }}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span>{dict.gasDetail.msdsButton}</span>
              </a>
            </div>
          )}

          {/* Contact / Get Quote Widget */}
          <div className={styles.ctaWidget}>
            <h3>{dict.gasDetail.ctaTitle}</h3>
            <p>
              {gas.title} {dict.gasDetail.ctaDesc}
            </p>
            <Link
              href={`/${locale}/iletisim`}
              id="get-quote-button"
              className="btn btn-white"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {dict.gasDetail.ctaButton}
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
