import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./iletisim.module.css";
import { Locale, getDictionary } from "../dictionaries";
import ContactForm from "./ContactForm";
import BranchMap from "./BranchMap";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: "Tinsagaz",
    description: dict.contact.hero.desc,
  };
}

export default async function IletisimPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  const contactItems = [
    {
      id: "contact-email",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: dict.contact.info.emailTitle,
      value: "info@tinsagaz.com",
    },
  ];

  const workHoursText = {
    monFri: locale === "tr" ? "Pazartesi – Cuma" : locale === "en" ? "Monday – Friday" : locale === "de" ? "Montag – Freitag" : locale === "fr" ? "Lundi – Vendredi" : locale === "it" ? "Lunedì – Venerdì" : "月曜日 – 金曜日",
    sat: locale === "tr" ? "Cumartesi" : locale === "en" ? "Saturday" : locale === "de" ? "Samstag" : locale === "fr" ? "Samedi" : locale === "it" ? "Sabato" : "土曜日",
    sun: locale === "tr" ? "Pazar" : locale === "en" ? "Sunday" : locale === "de" ? "Sonntag" : locale === "fr" ? "Dimanche" : locale === "it" ? "Domenica" : "日曜日",
    closed: locale === "tr" ? "Kapalı" : locale === "en" ? "Closed" : locale === "de" ? "Geschlossen" : locale === "fr" ? "Fermé" : locale === "it" ? "Chiuso" : "休業日",
    title: dict.contact.info.hoursTitle,
  };

  const workHours = [
    { day: workHoursText.monFri, time: "08:30 – 17:45" },
    { day: workHoursText.sat, time: "08:30 – 13:00" },
    { day: workHoursText.sun, time: workHoursText.closed, closed: true },
  ];

  const contactText = {
    title: locale === "tr" ? "Bize Ulaşın" : locale === "en" ? "Contact Us" : locale === "de" ? "Kontaktieren Sie uns" : locale === "fr" ? "Contactez-nous" : locale === "it" ? "Contattaci" : "お問い合わせ",
    desc: locale === "tr"
      ? "Aşağıdaki iletişim bilgilerinden bize ulaşabilir veya iletişim formunu doldurabilirsiniz. En kısa sürede size dönüş yapacağız."
      : "You can reach us using the contact details below or fill out the form. We will get back to you as soon as possible.",
  };

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="İletişim sayfası başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{dict.contact.hero.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{dict.contact.hero.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>
            {dict.contact.hero.desc}
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className={styles.contactSection} aria-label="İletişim bilgileri ve form">
        <div className={styles.contactSectionInner}>
          <div className={styles.contactGrid}>
            
            {/* Left Column: Form */}
            <div className={styles.contactFormCol}>
              <ContactForm locale={locale} contactDict={dict.contact} />

              <div className={styles.contactMetaRow} style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Email Card */}
                <div className={styles.contactItems} style={{ marginBottom: 0 }}>
                  {contactItems.map((item) => (
                    <div key={item.id} id={item.id} className={styles.contactItem}>
                      <div className={styles.contactItemIcon} aria-hidden="true">
                        {item.icon}
                      </div>
                      <div>
                        <div className={styles.contactItemLabel}>{item.label}</div>
                        <div className={styles.contactItemValue} style={{ whiteSpace: 'pre-line' }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Working Hours */}
                <div className={styles.workHours}>
                  <h3 className={styles.workHoursTitle} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{workHoursText.title}</span>
                  </h3>
                  {workHours.map((w) => (
                    <div key={w.day} className={styles.workHourRow}>
                      <span className={styles.workHourDay}>{w.day}</span>
                      <span className={w.closed ? styles.workHourClosed : styles.workHourTime}>
                        {w.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Branch Map */}
            <div className={styles.contactInfoCol}>
              <h2 className={styles.contactInfoTitle}>
                {locale === "tr" ? "Şubelerimiz & Harita" : "Our Branches & Map"}
              </h2>
              <p className={styles.contactInfoDesc}>
                {locale === "tr"
                  ? "Şubelerimizin konum, adres ve telefon bilgilerine aşağıdaki sekmeden harita üzerinden ulaşabilirsiniz."
                  : "You can find locations, addresses, and phone numbers of our branches on the map below."}
              </p>
              <BranchMap locale={locale} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
