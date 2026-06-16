import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Locale, getDictionary } from "./dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const titleText = currentLocale === "tr"
    ? "Tinsagaz | Endüstriyel Gazlar, Medikal Gazlar ve Çelik Üretimi"
    : currentLocale === "en"
    ? "Tinsagaz | Industrial Gases, Medical Gases and Steel Production"
    : currentLocale === "de"
    ? "Tinsagaz | Industriegase, Medizinische Gase und Stahlproduktion"
    : currentLocale === "fr"
    ? "Tinsagaz | Gaz Industriels, Gaz Médicaux et Production d'Acier"
    : currentLocale === "it"
    ? "Tinsagaz | Gas Industriali, Gas Medicali e Produzione di Acciaio"
    : "Tinsagaz | 産業用ガス、医療用ガス、鉄鋼生産";

  return {
    title: titleText,
    description: dict.footer.desc,
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const services = [
    {
      id: "medikal-gaz",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: dict.home.services.medikalTitle,
      desc: dict.home.services.medikalDesc,
      href: `/${locale}/urunler#medikal-gaz`,
    },
    {
      id: "endustriyel-gaz",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: dict.home.services.endustriyelTitle,
      desc: dict.home.services.endustriyelDesc,
      href: `/${locale}/urunler#endustriyel-gaz`,
    },
    {
      id: "celik",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      ),
      title: dict.home.services.celikTitle,
      desc: dict.home.services.celikDesc,
      href: `/${locale}/urunler#celik`,
    },
    {
      id: "elektrik",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: dict.home.services.elektrikTitle,
      desc: dict.home.services.elektrikDesc,
      href: `/${locale}/urunler#elektrik`,
    },
    {
      id: "tup",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9V5a3 3 0 0 1 6 0v4m-6 0h6m0-4v4" />
          <rect x="4" y="9" width="16" height="13" rx="2" />
        </svg>
      ),
      title: dict.home.services.tupTitle,
      desc: dict.home.services.tupDesc,
      href: `/${locale}/urunler#tup`,
    },
    {
      id: "agir-makine",
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: dict.home.services.makineTitle,
      desc: dict.home.services.makineDesc,
      href: `/${locale}/urunler#agir-makine`,
    },
  ];

  const whyPoints = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: dict.home.whyUs.point1Title,
      desc: dict.home.whyUs.point1Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 11 2 2 4-4" />
        </svg>
      ),
      title: dict.home.whyUs.point2Title,
      desc: dict.home.whyUs.point2Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
      title: dict.home.whyUs.point3Title,
      desc: dict.home.whyUs.point3Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: dict.home.whyUs.point4Title,
      desc: dict.home.whyUs.point4Desc,
    },
  ];

  const stats = [
    { num: "30+", label: dict.home.stats.experience },
    { num: "5.000+", label: dict.home.stats.customers },
    { num: "50.000+", label: dict.home.stats.projects },
    { num: "12", label: dict.home.stats.export },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero} aria-label="Ana sayfa hero bölümü">
        <div className={styles.heroBg}>
          <Image
            src="/hero.png"
            alt="Tinsagaz endüstriyel üretim tesisi"
            fill
            className={styles.heroBgImg}
            priority
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.heroTextCol}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} aria-hidden="true" />
              {dict.home.hero.badge}
            </div>

            <h1 className={styles.heroTitle}>
              {dict.home.hero.titlePart1}{" "}
              <span className={styles.heroTitleAccent}>{dict.home.hero.titleAccent}</span>{" "}
              {dict.home.hero.titlePart2}
            </h1>

            <p className={styles.heroDesc}>
              {dict.home.hero.desc}
            </p>

            <div className={styles.heroButtons}>
              <Link id="hero-cta-products" href={`/${locale}/urunler`} className="btn btn-white">
                {dict.home.hero.cta1}
              </Link>
              <Link id="hero-cta-contact" href={`/${locale}/iletisim`} className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.5)', color: 'white'}}>
                {dict.home.hero.cta2}
              </Link>
            </div>

            <div className={styles.heroStats}>
              {stats.slice(0, 4).map((s) => (
                <div key={s.label} className={styles.heroStat ?? ""}>
                  <div className={styles.heroStatNum}>{s.num}</div>
                  <div className={styles.heroStatLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroCards}>
              {services.slice(0, 4).map((s) => (
                <div key={s.id} className={styles.heroCard}>
                  <span className={styles.heroCardIcon}>{s.icon}</span>
                  <span className={styles.heroCardLabel}>{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heroScroll} aria-hidden="true">
          <div className={styles.heroScrollLine} />
          {dict.home.hero.scrollDown}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.servicesSection} aria-label="Hizmetler">
        <div className={styles.servicesSectionInner}>
          <div className={styles.sectionHeader}>
            <p className="section-label">{dict.home.services.label}</p>
            <h2 className="section-title">{dict.home.services.title}</h2>
            <div className="divider divider-center" />
            <p className="section-desc">
              {dict.home.services.desc}
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <article key={s.id} id={`service-card-${s.id}`} className={styles.serviceCard}>
                <div className={styles.serviceIconWrap} aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <Link href={s.href} className={styles.serviceLink}>
                  {dict.home.services.moreInfo}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className={styles.statsStrip} aria-label="İstatistikler">
        <div className={styles.statsStripInner}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className={styles.whySection} aria-label="Neden Tinsagaz?">
        <div className={styles.whySectionInner}>
          <div className={styles.whyImageCol}>
            <div className={styles.whyImageWrap}>
              <Image
                src="/hero.png"
                alt="Tinsagaz fabrika üretim hattı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className={styles.whyImageBadge}>
              <div className={styles.whyImageBadgeNum}>ISO</div>
              <div className={styles.whyImageBadgeLabel}>9001:2015 Sertifikalı</div>
            </div>
          </div>

          <div>
            <p className="section-label">{dict.home.whyUs.label}</p>
            <h2 className="section-title">
              {dict.home.whyUs.title}
            </h2>
            <div className="divider" />
            <p className="section-desc" style={{maxWidth: '100%'}}>
              {dict.home.whyUs.desc}
            </p>

            <div className={styles.whyPoints}>
              {whyPoints.map((p) => (
                <div key={p.title} className={styles.whyPoint}>
                  <div className={styles.whyPointIcon} aria-hidden="true">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className={styles.whyPointTitle}>{p.title}</h3>
                    <p className={styles.whyPointDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-label="İletişim çağrısı">
        <div className={styles.ctaSectionInner}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>
                {dict.home.cta.title}
              </h2>
              <p className={styles.ctaDesc}>
                {dict.home.cta.desc}
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link id="cta-contact-btn" href={`/${locale}/iletisim`} className="btn btn-white">
                {dict.home.cta.action1}
              </Link>
              <Link id="cta-products-btn" href={`/${locale}/urunler`} className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.5)', color: 'white'}}>
                {dict.home.cta.action2}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
