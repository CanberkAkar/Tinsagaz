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
      id: "contact-address",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: dict.contact.info.addressTitle,
      value: dict.footer.address,
    },
    {
      id: "contact-phone",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: dict.contact.info.phoneTitle,
      value: "+90 252 225 55 55\n+90 533 123 45 67",
    },
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
    monThu: locale === "tr" ? "Pazartesi – Perşembe" : locale === "en" ? "Monday – Thursday" : locale === "de" ? "Montag – Donnerstag" : locale === "fr" ? "Lundi – Jeudi" : locale === "it" ? "Lunedì – Giovedì" : "月曜日 – 木曜日",
    fri: locale === "tr" ? "Cuma" : locale === "en" ? "Friday" : locale === "de" ? "Freitag" : locale === "fr" ? "Vendredi" : locale === "it" ? "Venerdì" : "金曜日",
    sat: locale === "tr" ? "Cumartesi" : locale === "en" ? "Saturday" : locale === "de" ? "Samstag" : locale === "fr" ? "Samedi" : locale === "it" ? "Sabato" : "土曜日",
    sun: locale === "tr" ? "Pazar" : locale === "en" ? "Sunday" : locale === "de" ? "Sonntag" : locale === "fr" ? "Dimanche" : locale === "it" ? "Domenica" : "日曜日",
    closed: locale === "tr" ? "Kapalı" : locale === "en" ? "Closed" : locale === "de" ? "Geschlossen" : locale === "fr" ? "Fermé" : locale === "it" ? "Chiuso" : "休業日",
    title: dict.contact.info.hoursTitle,
  };

  const workHours = [
    { day: workHoursText.monThu, time: "08:30 – 17:45" },
    { day: workHoursText.fri, time: "08:00 – 17:45" },
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

      {/* Contact */}
      <section className={styles.contactSection} aria-label="İletişim bilgileri ve form">
        <div className={styles.contactSectionInner}>
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.contactInfoCol}>
              <h2 className={styles.contactInfoTitle}>{contactText.title}</h2>
              <p className={styles.contactInfoDesc}>
                {contactText.desc}
              </p>

              <div className={styles.contactItems}>
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

            {/* Form Component */}
            <ContactForm locale={locale} contactDict={dict.contact} />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection} aria-label="Konum haritası">
        <div className={styles.mapSectionInner}>
          <BranchMap locale={locale} />
        </div>
      </section>
    </>
  );
}
