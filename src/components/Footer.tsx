import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { Locale } from "../app/[locale]/dictionaries";

const productsLabels: Record<string, string> = {
  tr: "Ürünlerimiz",
  en: "Our Products",
  de: "Unsere Produkte",
  fr: "Nos Produits",
  it: "I Nostri Prodotti",
  ja: "製品紹介",
};

const serviceLabels: Record<string, Record<string, string>> = {
  tr: {
    medikal: "Medikal Gazlar",
    endustriyel: "Endüstriyel Gazlar",
    celik: "Çelik Ürünleri",
    elektrik: "Elektrik Çözümleri",
    tup: "Tüp Sistemleri",
    makine: "Ağır Makineler",
  },
  en: {
    medikal: "Medical Gases",
    endustriyel: "Industrial Gases",
    celik: "Steel Products",
    elektrik: "Electrical Solutions",
    tup: "Cylinder Systems",
    makine: "Heavy Machinery",
  },
  de: {
    medikal: "Medizinische Gase",
    endustriyel: "Industriegase",
    celik: "Stahlprodukte",
    elektrik: "Elektro-Lösungen",
    tup: "Flaschensysteme",
    makine: "Schwere Maschinen",
  },
  fr: {
    medikal: "Gaz Médicaux",
    endustriyel: "Gaz Industriels",
    celik: "Produits en Acier",
    elektrik: "Solutions Électriques",
    tup: "Systèmes de Bouteilles",
    makine: "Machines Lourdes",
  },
  it: {
    medikal: "Gas Medicali",
    endustriyel: "Gas Industriali",
    celik: "Prodotti in Acciaio",
    elektrik: "Soluzioni Elettriche",
    tup: "Sistemi di Bombole",
    makine: "Macchinari Pesanti",
  },
  ja: {
    medikal: "医療用ガス",
    endustriyel: "産業用ガス",
    celik: "鉄鋼製品",
    elektrik: "電気ソリューション",
    tup: "高圧シリンダーシステム",
    makine: "重機械",
  },
};

export default function Footer({ lang, footerDict, navDict }: { lang: Locale; footerDict: any; navDict: any }) {
  const year = new Date().getFullYear();

  const localizedNavLinks = [
    { href: `/${lang}`, label: navDict.home },
    { href: `/${lang}/urunler`, label: productsLabels[lang] || "Ürünler" },
    { href: `/${lang}/kurumsal/hakkimizda`, label: navDict.about },
    { href: `/${lang}/kurumsal/galeri`, label: navDict.gallery },
    { href: `/${lang}/iletisim`, label: navDict.contact },
  ];

  const labels = serviceLabels[lang] || serviceLabels.tr;
  const products = [
    { href: `/${lang}/urunler/gazlar/sinai-gazlar`, label: navDict.gases },
    { href: `/${lang}/urunler/gazlar/medikal-gazlar`, label: navDict.medicalGases || "Medikal Gazlar" },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerTop}>
        {/* Brand */}
        <div className={styles.footerBrand}>
          <Link href={`/${lang}`} className={styles.footerLogo}>
            <Image
              src="/logo-tinsagaz-v2.png"
              alt="Tinsagaz Logo"
              width={130}
              height={44}
              className={styles.footerLogoImg}
            />
          </Link>
          <p className={styles.footerDesc}>
            {footerDict.desc}
          </p>
          <div className={styles.footerSocials}>
            <a
              id="footer-social-linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              id="footer-social-twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Twitter/X"
            >
              𝕏
            </a>
            <a
              id="footer-social-instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSocialLink}
              aria-label="Instagram"
            >
              IG
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={styles.footerColTitle}>{footerDict.quick}</h3>
          <ul className={styles.footerLinks} role="list">
            {localizedNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className={styles.footerColTitle}>{footerDict.products}</h3>
          <ul className={styles.footerLinks} role="list">
            {products.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={styles.footerLink}>
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className={styles.footerColTitle}>{footerDict.contact}</h3>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span style={{ whiteSpace: 'pre-line' }}>{footerDict.address}</span>
          </div>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span>0533 311 53 70</span>
          </div>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span>info@tinsagaz.com</span>
          </div>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <span style={{ whiteSpace: 'pre-line' }}>{footerDict.hours}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.footerCopy}>
            © {year} Tinsagaz Endüstriyel Çözümler A.Ş. {footerDict.rights}
          </p>
          <div className={styles.footerBottomLinks}>
            <Link href={`/${lang}/kurumsal/kvkk`} className={styles.footerBottomLink}>
              {navDict.kvkk}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
