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
    { href: `/${lang}/urunler#celik`, label: labels.celik },
    { href: `/${lang}/urunler#elektrik`, label: labels.elektrik },
    { href: `/${lang}/urunler#tup`, label: labels.tup },
    { href: `/${lang}/urunler#agir-makine`, label: labels.makine },
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
            <span className={styles.footerContactIcon}>📍</span>
            <span>{footerDict.address}</span>
          </div>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>📞</span>
            <span>0533 311 53 70</span>
          </div>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>✉️</span>
            <span>info@tinsagaz.com.tr</span>
          </div>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>🕐</span>
            <span>{footerDict.hours}</span>
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
