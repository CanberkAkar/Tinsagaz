import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../../../shared.module.css";
import styles from "./sinai-gazlar.module.css";
import { getGasesData } from "./gasesData";
import { Locale, getDictionary } from "../../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: `${dict.gasesList.hero.title} | Tinsagaz`,
    description: dict.gasesList.hero.desc,
  };
}

function getGasIcon(slug: string) {
  switch (slug) {
    case "oksijen-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "argon-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "karisim-gazlari":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "karbondioksit-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5l-5 5-5-5M22 12H2M19 17l-5-5 5-5M5 17l5-5-5-5" />
        </svg>
      );
    case "saf-azot-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="6" cy="15" r="3" />
          <circle cx="18" cy="15" r="3" />
          <path d="M12 8v4M9 13.5l3-1.5M15 13.5l-3-1.5" />
        </svg>
      );
    case "asetilen-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 2-3 3M15 5l-9 9M6 14l-4 4M2 18l4-4M6 14h6M12 8v6M22 22l-4-4" />
        </svg>
      );
    case "helyum-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z" />
          <path d="M2 12h20" />
        </svg>
      );
    case "hidrojen-gazi":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
          <path d="M2 12h20" />
        </svg>
      );
    case "cng-dogalgaz":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "klor-tanki":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="7" width="12" height="14" rx="2" />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" />
          <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
      );
    case "yuksek-saflikta-gazlar":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 2v6L4 18a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-10V2" />
          <path d="M9 2h6" />
          <path d="M6 15h12" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
  }
}

export default async function SinaiGazlarPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const localizedGases = getGasesData(currentLocale);

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

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Sınai Gazlar Başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <Link href={`/${locale}/urunler`} className={sharedStyles.pageBreadcrumbLink}>{productsLabel}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{dict.gasesList.hero.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{dict.gasesList.hero.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>
            {dict.gasesList.hero.desc}
          </p>
        </div>
      </section>

      {/* Gases List Section */}
      <section className={styles.gasesSection} aria-label="Sınai gazlar ürün listesi">
        <div className={styles.grid}>
          {localizedGases.map((gas) => (
            <article key={gas.slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrap} role="img" aria-label={gas.title}>
                  {getGasIcon(gas.slug)}
                </span>
                {gas.badge && <span className={styles.badge}>{gas.badge}</span>}
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{gas.title}</h2>
                <p className={styles.cardDesc}>{gas.desc}</p>
                
                {gas.features && (
                  <ul className={styles.featureList} role="list">
                    {gas.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={`/${locale}/urunler/gazlar/sinai-gazlar/${gas.slug}`}
                  id={`gas-link-${gas.slug}`}
                  className={styles.cardAction}
                >
                  {dict.gasesList.detailAction}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
