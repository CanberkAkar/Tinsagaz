import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../../../shared.module.css";
import styles from "./medikal-gazlar.module.css";
import { getMedicalGasesData } from "./medikalData";
import { Locale, getDictionary } from "../../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: `${dict.medicalGasesList.hero.title} | Tinsagaz`,
    description: dict.medicalGasesList.hero.desc,
  };
}

export default async function MedikalGazlarPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const localizedMedicalGases = getMedicalGasesData(currentLocale);

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

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Medikal Gazlar Başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <Link href={`/${locale}/urunler`} className={sharedStyles.pageBreadcrumbLink}>{productsLabel}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{dict.medicalGasesList.hero.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{dict.medicalGasesList.hero.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>
            {dict.medicalGasesList.hero.desc}
          </p>
        </div>
      </section>

      {/* Gases List Section */}
      <section className={styles.gasesSection} aria-label="Medikal gazlar ürün listesi">
        <div className={styles.grid}>
          {localizedMedicalGases.map((gas) => (
            <article key={gas.slug} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.iconWrap} role="img" aria-label={gas.title}>
                  {gas.icon || "🏥"}
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
                  href={`/${locale}/urunler/gazlar/medikal-gazlar/${gas.slug}`}
                  id={`gas-link-${gas.slug}`}
                  className={styles.cardAction}
                >
                  {dict.medicalGasesList.detailAction}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
