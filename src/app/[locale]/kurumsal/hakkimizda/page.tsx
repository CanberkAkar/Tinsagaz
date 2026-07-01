import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../../shared.module.css";
import styles from "./hakkimizda.module.css";
import { Locale, getDictionary } from "../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: "Tinsagaz",
    description: dict.about.hero.desc,
  };
}

export default async function HakkimizdaPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);



  const milestonesData = [
    {
      year: "1995",
      text: locale === "tr"
        ? "İzmir'de sınai gaz tüp dolum atölyesi olarak kurulduk."
        : locale === "en"
        ? "Established in Izmir as an industrial gas cylinder filling workshop."
        : locale === "de"
        ? "Gegründet in Izmir als Abfüllwerkstatt für Industriegasflaschen."
        : locale === "fr"
        ? "Établi à Izmir en tant qu'atelier de remplissage de bouteilles de gaz industriel."
        : locale === "it"
        ? "Fondato a Smirne come officina di riempimento di bombole di gas industriale."
        : "産業用ガス容器充填所としてイズミルに設立。",
    },
    {
      year: "2003",
      text: locale === "tr"
        ? "İlk dikişsiz çelik çekme gaz tüpü dolum ve test hattını faaliyete geçirdik."
        : locale === "en"
        ? "We put the first seamless steel gas cylinder filling and test line into operation."
        : locale === "de"
        ? "Inbetriebnahme der ersten Füll- und Prüfstraße für nahtlose Stahlgasflaschen."
        : locale === "fr"
        ? "Mise en service de la première ligne de remplissage et d'essai de bouteilles de gaz en acier sans soudure."
        : locale === "it"
        ? "Messa in funzione della prima linea di riempimento e collaudo di bombole di gas in acciaio senza saldatura."
        : "初のシームレス高圧ガス容器充填・検査ラインを稼働開始。",
    },
    {
      year: "2012",
      text: locale === "tr"
        ? "ISO 9001 ve ISO 13485 (Medikal Cihaz) kalite yönetim sistemlerini kurduk."
        : locale === "en"
        ? "We established ISO 9001 and ISO 13485 (Medical Device) quality management systems."
        : locale === "de"
        ? "Einführung der Qualitätsmanagementsysteme ISO 9001 und ISO 13485 (Medizinprodukte)."
        : locale === "fr"
        ? "Mise en place des systèmes de gestion de la qualité ISO 9001 et ISO 13485 (dispositifs médicaux)."
        : locale === "it"
        ? "Introduzione dei sistemi di gestione della qualità ISO 9001 e ISO 13485 (dispositivi medici)."
        : "ISO 9001およびISO 13485（医療機器品質マネジメント）を取得。",
    },
    {
      year: "2018",
      text: locale === "tr"
        ? "EIGA (Avrupa Endüstriyel Gazlar Birliği) güvenlik direktiflerini tüm süreçlerimize entegre ettik."
        : locale === "en"
        ? "We integrated EIGA (European Industrial Gases Association) safety directives into all our processes."
        : locale === "de"
        ? "Sicherheitsrichtlinien der EIGA (European Industrial Gases Association) in alle Prozesse integriert."
        : locale === "fr"
        ? "Intégration des directives de sécurité de l'EIGA (Association Européenne des Gaz Industriels) dans tous nos processus."
        : locale === "it"
        ? "Integrazione delle direttive di sicurezza EIGA (European Industrial Gases Association) in tutti i processi."
        : "EIGA（欧州産業ガス協会）の安全基準をすべてのプロセスに統合。",
    },
    {
      year: "2024",
      text: locale === "tr"
        ? "12 ülkeye aktif gaz ve ekipman ihracatı yaparak küresel standartlara ulaştık."
        : locale === "en"
        ? "Reached global standards by actively exporting gas and equipment to 12 countries."
        : locale === "de"
        ? "Erreichen globaler Standards durch aktiven Export von Gasen und Ausrüstung in 12 Länder."
        : locale === "fr"
        ? "Atteint des normes mondiales en exportant activement du gaz et des équipements vers 12 pays."
        : locale === "it"
        ? "Raggiunto standard globali esportando attivamente gas e attrezzature in 12 paesi."
        : "12カ国へのガス・設備輸出を開始し、グローバル基準を達成。",
    },
  ];

  const certsData = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      name: "ISO 9001:2015",
      body: locale === "tr" ? "Kalite Yönetim Sistemi" : locale === "en" ? "Quality Management System" : locale === "de" ? "Qualitätsmanagementsystem" : locale === "fr" ? "Système de Management de la Qualité" : locale === "it" ? "Sistema di Gestione della Qualità" : "品質マネジメントシステム",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 0 8a9 9 0 0 1-8 10Z" />
          <path d="M9.8 6.1C6.6 8 5 11 5 14a7 7 0 0 0 5 6.7" />
        </svg>
      ),
      name: "ISO 14001:2015",
      body: locale === "tr" ? "Çevre Yönetim Sistemi" : locale === "en" ? "Environmental Management System" : locale === "de" ? "Umweltmanagementsystem" : locale === "fr" ? "Système de Management Environnemental" : locale === "it" ? "Sistema di Gestione Ambientale" : "環境マネジメントシステム",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      name: "ISO 13485:2016",
      body: locale === "tr" ? "Medikal Cihaz ve Gaz Yönetimi" : locale === "en" ? "Medical Devices Quality Management" : locale === "de" ? "Qualitätsmanagement für Medizinprodukte" : locale === "fr" ? "Dispositifs Médicaux - Systèmes de Management de la Qualité" : locale === "it" ? "Dispositivi Medici - Sistemi di Gestione della Qualità" : "医療機器・医療用ガス管理システム",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z" />
          <path d="M2 12h20" />
        </svg>
      ),
      name: "CE / Pi Belgesi",
      body: locale === "tr" ? "Avrupa Basınçlı Ekipmanlar Uygunluk Sertifikası" : locale === "en" ? "European Pressure Equipment Conformity Certificate" : locale === "de" ? "Europäische Konformitätsbescheinigung für Druckgeräte" : locale === "fr" ? "Certificat Européen de Conformité des Équipements sous Pression" : locale === "it" ? "Certificato di Conformità Europeo per Attrezzature a Pressione" : "欧州移動式圧力容器基準（CE / Pi）適合証明",
    },
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: dict.about.values.v1Title,
      desc: dict.about.values.v1Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: dict.about.values.v2Title,
      desc: dict.about.values.v2Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12.5 2.5C9.5 2.5 7 5 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5M9 18h6m-4 4h2" />
        </svg>
      ),
      title: dict.about.values.v3Title,
      desc: dict.about.values.v3Desc,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: dict.about.values.v4Title,
      desc: dict.about.values.v4Desc,
    },
  ];



  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Hakkımızda sayfası başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{dict.about.hero.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{dict.about.hero.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>
            {dict.about.hero.desc}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.aboutSection} aria-label="Hikayemiz">
        <div className={styles.aboutSectionInner}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImageWrap}>
              <Image
                src="/hero.png"
                alt="Tinsagaz fabrika üretim hattı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.storyText}>
              <p className="section-label">{dict.about.story.label}</p>
              <h2 className="section-title">{dict.about.story.title}</h2>
              <div className="divider" />
              {dict.about.story.p1 && <p>{dict.about.story.p1}</p>}
              {dict.about.story.p2 && <p>{dict.about.story.p2}</p>}
              {dict.about.story.p3 && <p>{dict.about.story.p3}</p>}
              <Link href={`/${locale}/iletisim`} id="about-contact-btn" className="btn btn-primary" style={{marginTop: '24px', display: 'inline-flex'}}>
                {dict.about.story.cta}
              </Link>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.mvHeader}>
                <div className={styles.mvIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className={styles.mvTitle}>{dict.about.mission.title}</h3>
              </div>
              <p className={styles.mvText}>{dict.about.mission.text}</p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.mvHeader}>
                <div className={styles.mvIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className={styles.mvTitle}>{dict.about.vision.title}</h3>
              </div>
              <p className={styles.mvText}>{dict.about.vision.text}</p>
            </div>
          </div>

          {/* Values */}
          <div className={styles.valuesSection} aria-label="Değerlerimiz">
            <div className={styles.valuesSectionHeader}>
              <p className="section-label">{dict.about.values.label}</p>
              <h2 className="section-title">{dict.about.values.title}</h2>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((v) => (
                <div key={v.title} id={`value-${v.title.toLowerCase().replace(/\s/g, "-")}`} className={styles.valueCard}>
                  <span className={styles.valueCardIcon} aria-hidden="true">{v.icon}</span>
                  <h3 className={styles.valueCardTitle}>{v.title}</h3>
                  <p className={styles.valueCardDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Milestones */}
      <section className={styles.milestonesSection} aria-label="Kilometre taşları">
        <div className={styles.milestonesSectionInner}>
          <div style={{ textAlign: "center" }}>
            <p className="section-label" style={{ color: "#4db8ff" }}>
              {dict.about.milestones.label}
            </p>
            <h2
              className="section-title"
              style={{ color: "white", maxWidth: "600px", margin: "0 auto" }}
            >
              {dict.about.milestones.title}
            </h2>
          </div>
          <div className={styles.milestonesGrid}>
            {milestonesData.map((m) => (
              <div key={m.year} className={styles.milestone}>
                <div className={styles.milestoneYear}>{m.year}</div>
                <p className={styles.milestoneText}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className={styles.certsSection} aria-label="Sertifikalarımız">
        <div className={styles.certsSectionInner}>
          <p className="section-label">{dict.about.certs.label}</p>
          <h2 className="section-title">{dict.about.certs.title}</h2>
          <div className="divider" />
          <div className={styles.certsGrid}>
            {certsData.map((c) => (
              <div key={c.name} id={`cert-${c.name.replace(/[:\s.]/g, "-").toLowerCase()}`} className={styles.certCard}>
                <span className={styles.certIcon} aria-hidden="true">{c.icon}</span>
                <div>
                  <div className={styles.certName}>{c.name}</div>
                  <div className={styles.certBody}>{c.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
