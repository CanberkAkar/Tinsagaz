"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./Navbar.module.css";
import { Locale } from "../app/[locale]/dictionaries";
import { getGasesData } from "../app/[locale]/urunler/gazlar/sinai-gazlar/gasesData";
import { getMedicalGasesData } from "../app/[locale]/urunler/gazlar/medikal-gazlar/medikalData";

const productsLabels: Record<string, string> = {
  tr: "Ürünlerimiz",
  en: "Our Products",
  de: "Unsere Produkte",
  fr: "Nos Produits",
  it: "I Nostri Prodotti",
  ja: "製品紹介",
};

const languages = [
  { code: "tr", name: "TR", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", name: "EN", label: "English", flag: "🇬🇧" },
  { code: "de", name: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "FR", label: "Français", flag: "🇫🇷" },
  { code: "it", name: "IT", label: "Italiano", flag: "🇮🇹" },
  { code: "ja", name: "JA", label: "日本語", flag: "🇯🇵" },
];

export default function Navbar({ lang, navDict }: { lang: Locale; navDict: any }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [mobileSubmenus, setMobileSubmenus] = useState<Record<string, boolean>>({});
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMobileDropdown = (key: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileSubmenu = (key: string) => {
    setMobileSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const localizedGases = getGasesData(lang);
  const localizedMedicalGases = getMedicalGasesData(lang);
  const productsLabel = productsLabels[lang] || "Ürünlerimiz";

  const navLinks = [
    { href: `/${lang}`, label: navDict.home },
    {
      key: "corporate",
      href: `/${lang}/kurumsal/hakkimizda`,
      label: navDict.corporate || "Kurumsal",
      dropdown: [
        {
          label: navDict.about,
          href: `/${lang}/kurumsal/hakkimizda`,
        },
        {
          label: navDict.kvkk,
          href: `/${lang}/kurumsal/kvkk`,
        },
        {
          label: navDict.gallery,
          href: `/${lang}/kurumsal/galeri`,
        },
      ],
    },
    {
      key: "products",
      href: `/${lang}/urunler`,
      label: productsLabel,
      dropdown: [
        {
          label: navDict.gases,
          href: `/${lang}/urunler/gazlar/sinai-gazlar`,
          submenu: localizedGases.map((gas) => ({
            href: `/${lang}/urunler/gazlar/sinai-gazlar/${gas.slug}`,
            label: gas.title,
          })),
        },
        {
          label: navDict.medicalGases || "Medikal Gazlar",
          href: `/${lang}/urunler/gazlar/medikal-gazlar`,
          submenu: localizedMedicalGases.map((gas) => ({
            href: `/${lang}/urunler/gazlar/medikal-gazlar/${gas.slug}`,
            label: gas.title,
          })),
        },
      ],
    },
    { href: `/${lang}/iletisim`, label: navDict.contact },
  ];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setMobileDropdowns({});
    setMobileSubmenus({});
    setLangDropdownOpen(false);
  }, [pathname]);

  const getLanguageLink = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is the current locale
    segments[1] = targetLocale;
    return segments.join("/");
  };

  const activeLang = languages.find((l) => l.code === lang) || languages[0];

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          scrolled ? styles.navbarScrolled : styles.navbarTransparent
        }`}
        role="navigation"
        aria-label="Ana navigasyon"
      >
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Link href={`/${lang}`} className={styles.navbarLogo} aria-label="Tinsagaz Anasayfa">
            <Image
              src="/logo-tinsagaz-v2.png"
              alt="Tinsagaz Logo"
              width={140}
              height={48}
              className={styles.navbarLogoImg}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.navbarMenu} role="list">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`${styles.navbarItem} ${link.dropdown ? styles.hasDropdown : ""}`}
              >
                {link.dropdown ? (
                  <>
                    <Link
                      href={link.href}
                      id={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                      className={`${styles.navbarLink} ${
                        scrolled ? styles.navbarLinkScrolled : ""
                      } ${
                        pathname.startsWith(link.href)
                          ? scrolled
                            ? styles.activeScrolled
                            : styles.active
                          : ""
                      }`}
                    >
                      {link.label}
                      <span className={styles.dropdownArrow}>▼</span>
                    </Link>
                    <ul className={styles.dropdownMenu} role="list">
                      {link.dropdown.map((subItem) => (
                        <li key={subItem.label} className={styles.dropdownItem}>
                          {'submenu' in subItem ? (
                            <>
                              <Link href={subItem.href} className={styles.dropdownLink}>
                                {subItem.label}
                                <span className={styles.submenuArrow}>▶</span>
                              </Link>
                              <ul className={styles.submenuMenu} role="list">
                                {subItem.submenu.map((nested) => (
                                  <li key={nested.href}>
                                    <Link href={nested.href} className={styles.submenuLink}>
                                      {nested.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link href={subItem.href} className={styles.dropdownLinkSimple}>
                              {subItem.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                    className={`${styles.navbarLink} ${
                      scrolled ? styles.navbarLinkScrolled : ""
                    } ${
                      pathname === link.href
                        ? scrolled
                          ? styles.activeScrolled
                          : styles.active
                        : ""
                    } ${link.href.endsWith("/iletisim") ? styles.navbarCta : ""}`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Language Selector Dropdown */}
            <li className={`${styles.navbarItem} ${styles.langSelectorItem}`}>
              <button
                className={`${styles.navbarLink} ${styles.langSelectorBtn} ${
                  scrolled ? styles.navbarLinkScrolled : ""
                }`}
                onClick={() => setLangDropdownOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                aria-label="Select Language"
              >
                <span className={styles.dropdownFlag}>{activeLang.flag}</span>
                <span className={styles.langName}>{activeLang.name}</span>
                <span className={styles.langChevron}>▼</span>
              </button>
              {langDropdownOpen && (
                <ul className={styles.langDropdownMenu} role="list">
                  {languages.map((l) => (
                    <li key={l.code}>
                      <Link
                        href={getLanguageLink(l.code)}
                        className={`${styles.langDropdownLink} ${
                          l.code === lang ? styles.langActive : ""
                        }`}
                      >
                        <span className={styles.dropdownFlag}>{l.flag}</span>
                        <span>{l.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Hamburger */}
          <button
            id="navbar-hamburger-btn"
            className={`${styles.navbarHamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="navbar-mobile-menu"
        className={`${styles.navbarMobile} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div style={{ paddingBottom: "24px" }}>
            {navLinks.map((link) => (
              <div key={link.label} className={styles.mobileNavItem}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`${styles.navbarLink} ${styles.mobileDropdownToggle} ${
                        pathname.startsWith(link.href) ? styles.active : ""
                      }`}
                      onClick={() => toggleMobileDropdown(link.key || link.label)}
                      aria-expanded={!!mobileDropdowns[link.key || link.label]}
                    >
                      {link.label}
                      <span
                        className={`${styles.mobileDropdownArrow} ${
                          mobileDropdowns[link.key || link.label] ? styles.rotated : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <div
                      className={`${styles.mobileSubmenu} ${
                        mobileDropdowns[link.key || link.label] ? styles.mobileSubmenuOpen : ""
                      }`}
                    >
                      {link.dropdown.map((subItem) => (
                        <div key={subItem.label} className={styles.mobileSubmenuCol}>
                          {'submenu' in subItem ? (
                            <>
                              <button
                                className={styles.mobileSubmenuHeaderToggle}
                                onClick={() => toggleMobileSubmenu(subItem.label)}
                                aria-expanded={!!mobileSubmenus[subItem.label]}
                              >
                                {subItem.label}
                                <span
                                  className={`${styles.mobileSubmenuArrow} ${
                                    mobileSubmenus[subItem.label] ? styles.rotated : ""
                                  }`}
                                >
                                  ▼
                                </span>
                              </button>
                              <div
                                className={`${styles.mobileNestedMenu} ${
                                  mobileSubmenus[subItem.label] ? styles.mobileNestedMenuOpen : ""
                                }`}
                              >
                                {subItem.submenu.map((nested) => (
                                  <Link
                                    key={nested.href}
                                    href={nested.href}
                                    className={styles.mobileNestedMenuLink}
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className={styles.mobileSubmenuLinkSimple}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                      {link.key === "products" && (
                        <Link
                          href={link.href}
                          className={styles.mobileSubmenuLink}
                          style={{
                            fontWeight: "600",
                            borderTop: "1px solid var(--gray-200)",
                            paddingTop: "12px",
                            marginTop: "4px",
                          }}
                          onClick={() => setMenuOpen(false)}
                        >
                          {navDict.allProducts}
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`${styles.navbarLink} ${
                      pathname === link.href ? styles.active : ""
                    } ${link.href.endsWith("/iletisim") ? styles.navbarCta : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className={styles.mobileLangSelector}>
            <div className={styles.mobileLangLabel}>
              {lang === "tr" ? "Dil / Language" : "Language"}
            </div>
            <div className={styles.mobileLangList}>
              {languages.map((l) => (
                <Link
                  key={l.code}
                  href={getLanguageLink(l.code)}
                  className={`${styles.mobileLangBtn} ${
                    l.code === lang ? styles.mobileLangActive : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span style={{ fontSize: "1.1rem" }}>{l.flag}</span>
                  <span>{l.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
