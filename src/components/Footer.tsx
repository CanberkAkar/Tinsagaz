import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

const products = [
  { href: "/urunler#medikal-gaz", label: "Medikal Gazlar" },
  { href: "/urunler#endustriyel-gaz", label: "Endüstriyel Gazlar" },
  { href: "/urunler#celik", label: "Çelik Ürünleri" },
  { href: "/urunler#elektrik", label: "Elektrik Çözümleri" },
  { href: "/urunler#tup", label: "Tüp Sistemleri" },
  { href: "/urunler#agir-makine", label: "Ağır Makineler" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerTop}>
        {/* Brand */}
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogo}>
            <Image
              src="/logo-tinsagaz.png"
              alt="Tinsagaz Logo"
              width={130}
              height={44}
              className={styles.footerLogoImg}
            />
          </Link>
          <p className={styles.footerDesc}>
            Tıbbi ve endüstriyel gaz, elektrik, çelik, tüp ve ağır makine
            üretiminde Türkiye'nin güvenilir çözüm ortağı. Kalite, güvenlik ve
            inovasyon önceliğimizdir.
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
          <h3 className={styles.footerColTitle}>Hızlı Erişim</h3>
          <ul className={styles.footerLinks} role="list">
            {navLinks.map((link) => (
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
          <h3 className={styles.footerColTitle}>Ürünlerimiz</h3>
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
          <h3 className={styles.footerColTitle}>İletişim</h3>
          <div className={styles.footerContactItem}>
            <span className={styles.footerContactIcon}>📍</span>
            <span>Küçük Çiğli, 8780/11. Sk. no:19, 35620 Çiğli/İzmir</span>
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
            <span>Pzt–Per: 08:30–17:45, Cum: 08:00–17:45</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.footerCopy}>
            © {year} Tinsagaz Endüstriyel Çözümler A.Ş. Tüm hakları saklıdır.
          </p>
          <div className={styles.footerBottomLinks}>
            <Link href="/gizlilik-politikasi" className={styles.footerBottomLink}>
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className={styles.footerBottomLink}>
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
