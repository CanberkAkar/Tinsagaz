"use client";

import { useState } from "react";
import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./iletisim.module.css";

const contactItems = [
  {
    id: "contact-address",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adres",
    value: "Küçük Çiğli, 8780/11. Sk. no:19\n35620 Çiğli / İzmir",
  },
  {
    id: "contact-phone",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Telefon",
    value: "0533 311 53 70",
  },
  {
    id: "contact-email",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-posta",
    value: "info@tinsagaz.com.tr\nsatis@tinsagaz.com.tr",
  },
];

const workHours = [
  { day: "Pazartesi – Perşembe", time: "08:30 – 17:45" },
  { day: "Cuma", time: "08:00 – 17:45" },
  { day: "Cumartesi", time: "08:30 – 13:00" },
  { day: "Pazar", time: "Kapalı", closed: true },
];

const subjects = [
  "Ürün Teklifi",
  "Medikal Gazlar",
  "Endüstriyel Gazlar",
  "Çelik Ürünleri",
  "Elektrik Sistemleri",
  "Tüp Sistemleri",
  "Ağır Makineler",
  "Teknik Destek",
  "Diğer",
];

export default function IletisimPage() {
  const [formState, setFormState] = useState({
    ad: "",
    soyad: "",
    email: "",
    telefon: "",
    konu: "",
    mesaj: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulated form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="İletişim sayfası başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href="/" className={sharedStyles.pageBreadcrumbLink}>Anasayfa</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>İletişim</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>İletişim</h1>
          <p className={sharedStyles.pageHeroDesc}>
            Sorularınız, talepleriniz veya özel projeleriniz için bize ulaşın.
            Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contactSection} aria-label="İletişim bilgileri ve form">
        <div className={styles.contactSectionInner}>
          <div className={styles.contactGrid}>
            {/* Info */}
            <div className={styles.contactInfoCol}>
              <h2 className={styles.contactInfoTitle}>Bize Ulaşın</h2>
              <p className={styles.contactInfoDesc}>
                Aşağıdaki iletişim bilgilerinden bize ulaşabilir veya iletişim
                formunu doldurabilirsiniz. En kısa sürede size dönüş yapacağız.
              </p>

              <div className={styles.contactItems}>
                {contactItems.map((item) => (
                  <div key={item.id} id={item.id} className={styles.contactItem}>
                    <div className={styles.contactItemIcon} aria-hidden="true">
                      {item.icon}
                    </div>
                    <div>
                      <div className={styles.contactItemLabel}>{item.label}</div>
                      <div className={styles.contactItemValue}>
                        {item.value.split("\n").map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
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
                  <span>Çalışma Saatleri</span>
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

            {/* Form */}
            <div className={styles.contactFormCol}>
              <div className={styles.contactFormCard}>
                <h2 className={styles.contactFormTitle}>Mesaj Gönder</h2>
                <p className={styles.contactFormSubtitle}>
                  Formu doldurun, 24 saat içinde size geri dönelim.
                </p>

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="İletişim formu"
                >
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="form-ad" className={styles.formLabel}>Ad *</label>
                      <input
                        id="form-ad"
                        name="ad"
                        type="text"
                        value={formState.ad}
                        onChange={handleChange}
                        placeholder="Adınız"
                        className={styles.formInput}
                        required
                        autoComplete="given-name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="form-soyad" className={styles.formLabel}>Soyad *</label>
                      <input
                        id="form-soyad"
                        name="soyad"
                        type="text"
                        value={formState.soyad}
                        onChange={handleChange}
                        placeholder="Soyadınız"
                        className={styles.formInput}
                        required
                        autoComplete="family-name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="form-email" className={styles.formLabel}>E-posta *</label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="ornek@email.com"
                        className={styles.formInput}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="form-telefon" className={styles.formLabel}>Telefon</label>
                      <input
                        id="form-telefon"
                        name="telefon"
                        type="tel"
                        value={formState.telefon}
                        onChange={handleChange}
                        placeholder="+90 5XX XXX XX XX"
                        className={styles.formInput}
                        autoComplete="tel"
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                      <label htmlFor="form-konu" className={styles.formLabel}>Konu *</label>
                      <select
                        id="form-konu"
                        name="konu"
                        value={formState.konu}
                        onChange={handleChange}
                        className={styles.formSelect}
                        required
                      >
                        <option value="">Konu seçin...</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                      <label htmlFor="form-mesaj" className={styles.formLabel}>Mesaj *</label>
                      <textarea
                        id="form-mesaj"
                        name="mesaj"
                        value={formState.mesaj}
                        onChange={handleChange}
                        placeholder="Mesajınızı buraya yazın..."
                        className={styles.formTextarea}
                        required
                        rows={5}
                      />
                    </div>
                  </div>

                  <button
                    id="form-submit-btn"
                    type="submit"
                    className={styles.formSubmit}
                    disabled={loading || submitted}
                    aria-busy={loading}
                  >
                    {loading ? "Gönderiliyor..." : submitted ? "✓ Mesajınız İletildi" : "Mesaj Gönder →"}
                  </button>

                  {submitted && (
                    <div className={styles.formSuccess} role="alert">
                      ✅ Teşekkürler! Mesajınız başarıyla iletildi. En kısa sürede size geri döneceğiz.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={styles.mapSection} aria-label="Konum haritası">
        <div className={styles.mapSectionInner}>
          <div className={styles.mapBox}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapPlaceholderIcon}>📍</div>
              <div className={styles.mapPlaceholderText}>
                Küçük Çiğli, Çiğli/İzmir — Google Maps
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
