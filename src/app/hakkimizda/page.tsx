import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./hakkimizda.module.css";

export const metadata: Metadata = {
  title: "Hakkımızda | Tinsagaz Endüstriyel ve Medikal Gazlar",
  description:
    "Tinsagaz'ın 30 yılı aşkın köklü geçmişi, EIGA standartlarına uygun üretim vizyonu, uluslararası kalite sertifikaları ve temel değerleri.",
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Kalite Standartları",
    desc: "TSE, ISO ve EIGA (Avrupa Endüstriyel Gazlar Birliği) standartlarında sertifikalı üretim.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Sıfır Hata ve İş Güvenliği",
    desc: "Yüksek basınçlı gaz tüpü dolumlarında sıfır tolerans iş güvenliği politikası.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12.5 2.5C9.5 2.5 7 5 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5M9 18h6m-4 4h2" />
      </svg>
    ),
    title: "Teknolojik İnovasyon",
    desc: "Manifold sistemleri (MCP/MTP) ve yerinde gaz hazırlama teknolojilerinde sürekli Ar-Ge.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Tam Dolum Güvencesi",
    desc: "Müşterilerimize sunduğumuz her tüpte eksiksiz gaz miktarı ve saflık analizi garantisi.",
  },
];

const team = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    name: "Ahmet Yılmaz",
    role: "Genel Müdür",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    name: "Selin Kaya",
    role: "Ar-Ge Direktörü",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    name: "Mehmet Demir",
    role: "Üretim Direktörü",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    name: "Ayşe Çelik",
    role: "Satış & Pazarlama Direktörü",
  },
];

const milestones = [
  { year: "1994", text: "İzmir'de sınai gaz tüp dolum atölyesi olarak kurulduk." },
  { year: "2003", text: "İlk dikişsiz çelik çekme gaz tüpü dolum ve test hattını faaliyete geçirdik." },
  { year: "2012", text: "ISO 9001 ve ISO 13485 (Medikal Cihaz) kalite yönetim sistemlerini kurduk." },
  { year: "2018", text: "EIGA (Avrupa Endüstriyel Gazlar Birliği) güvenlik direktiflerini tüm süreçlerimize entegre ettik." },
  { year: "2024", text: "12 ülkeye aktif gaz ve ekipman ihracatı yaparak küresel standartlara ulaştık." },
];

const certs = [
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
    body: "Kalite Yönetim Sistemi",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.58 0 8a9 9 0 0 1-8 10Z" />
        <path d="M9.8 6.1C6.6 8 5 11 5 14a7 7 0 0 0 5 6.7" />
      </svg>
    ),
    name: "ISO 14001:2015",
    body: "Çevre Yönetim Sistemi",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    name: "ISO 13485:2016",
    body: "Medikal Cihaz ve Gaz Yönetimi",
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
    body: "Avrupa Basınçlı Ekipmanlar Uygunluk Sertifikası",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Hakkımızda sayfası başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href="/" className={sharedStyles.pageBreadcrumbLink}>Anasayfa</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>Hakkımızda</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>Hakkımızda</h1>
          <p className={sharedStyles.pageHeroDesc}>
            1994'ten bu yana Türk sanayisine güç veren, güvenilirlik ve kaliteyle
            öne çıkan bir kuruluşuz. Hikayemizi ve değerlerimizi keşfedin.
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
              <p className="section-label">Hikayemiz</p>
              <h2 className="section-title">30 Yılı Aşkın Tecrübe</h2>
              <div className="divider" />
              <p>
                1994 yılında İzmir'de küçük bir atölye olarak yola çıkan Tinsagaz,
                bugün Türkiye'nin önde gelen endüstriyel ve medikal gaz üreticilerinden
                biri haline gelmiştir.
              </p>
              <p>
                Medikal gazlar, endüstriyel gazlar, elektrik sistemleri, çelik ürünleri,
                tüp sistemleri ve ağır makineler gibi geniş bir ürün yelpazesiyle farklı
                sektörlere hizmet veren firmamız, her geçen yıl kapasitesini ve hizmet
                kalitesini artırmaktadır.
              </p>
              <p>
                Bugün 12 ülkeye ihracat yapan, 5.000'i aşkın müşteriye hizmet sunan ve
                50.000'den fazla başarılı projeye imza atan Tinsagaz; kalite, güvenlik,
                inovasyon ve müşteri memnuniyetini temel değerleri olarak benimsemiştir.
              </p>
              <Link href="/iletisim" id="about-contact-btn" className="btn btn-primary" style={{marginTop: '24px', display: 'inline-flex'}}>
                Bizimle İletişime Geçin
              </Link>
            </div>
          </div>

          {/* Values */}
          <div className={styles.valuesSection} aria-label="Değerlerimiz">
            <div className={styles.valuesSectionHeader}>
              <p className="section-label">Temel Değerlerimiz</p>
              <h2 className="section-title">Bizi Farklı Kılan Değerler</h2>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((v) => (
                <div key={v.title} id={`value-${v.title.toLowerCase()}`} className={styles.valueCard}>
                  <span className={styles.valueCardIcon} aria-hidden="true">{v.icon}</span>
                  <h3 className={styles.valueCardTitle}>{v.title}</h3>
                  <p className={styles.valueCardDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className={styles.teamSection} aria-label="Yönetim ekibi">
            <p className="section-label">Ekibimiz</p>
            <h2 className="section-title">Deneyimli Liderlik Kadrosu</h2>
            <div className={styles.teamGrid}>
              {team.map((t) => (
                <article key={t.name} id={`team-${t.name.replace(/\s/g, "-").toLowerCase()}`} className={styles.teamCard}>
                  <div className={styles.teamAvatar} aria-hidden="true">{t.icon}</div>
                  <div className={styles.teamBody}>
                    <h3 className={styles.teamName}>{t.name}</h3>
                    <p className={styles.teamRole}>{t.role}</p>
                  </div>
                </article>
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
              Yolculuğumuz
            </p>
            <h2
              className="section-title"
              style={{ color: "white", maxWidth: "600px", margin: "0 auto" }}
            >
              Kilometre Taşlarımız
            </h2>
          </div>
          <div className={styles.milestonesGrid}>
            {milestones.map((m) => (
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
          <p className="section-label">Kalite Güvencesi</p>
          <h2 className="section-title">Sertifikalarımız</h2>
          <div className="divider" />
          <div className={styles.certsGrid}>
            {certs.map((c) => (
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
