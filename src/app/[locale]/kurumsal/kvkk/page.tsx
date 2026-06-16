import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../../shared.module.css";
import styles from "./kvkk.module.css";
import { Locale, getDictionary } from "../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: `${dict.kvkkPage.title} | Tinsagaz`,
    description: dict.kvkkPage.subtitle,
  };
}

export default async function KvkkPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const pageData = dict.kvkkPage;

  const sectionsList = [
    { key: "controller", ...pageData.sections.controller },
    { key: "purpose", ...pageData.sections.purpose },
    { key: "transfer", ...pageData.sections.transfer },
    { key: "method", ...pageData.sections.method },
    { key: "rights", ...pageData.sections.rights },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label={`${pageData.title} başlığı`}>
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>
              {dict.nav.home}
            </Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{pageData.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{pageData.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>{pageData.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.kvkkSection} aria-label="KVKK detay içeriği">
        <div className={styles.kvkkInner}>
          <div className={styles.introCard}>
            <p>{pageData.intro}</p>
          </div>

          <div className={styles.sectionsGrid}>
            {sectionsList.map((sec) => (
              <article
                key={sec.key}
                id={`kvkk-sec-${sec.key}`}
                className={styles.sectionCard}
              >
                <h2 className={styles.sectionTitle}>{sec.title}</h2>
                <div className={styles.sectionDivider} />
                <p className={styles.sectionContent}>{sec.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
