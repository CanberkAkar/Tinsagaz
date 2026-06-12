"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
  }, [pathname]);

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
          <Link href="/" className={styles.navbarLogo} aria-label="Tinsagaz Anasayfa">
            <Image
              src="/logo-tinsagaz.png"
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
              <li key={link.href} className={styles.navbarItem}>
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
                  } ${link.href === "/iletisim" ? styles.navbarCta : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navbarLink} ${
              pathname === link.href ? styles.active : ""
            } ${link.href === "/iletisim" ? styles.navbarCta : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
