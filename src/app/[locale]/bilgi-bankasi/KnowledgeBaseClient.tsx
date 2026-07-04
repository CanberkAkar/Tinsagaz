"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./bilgi-bankasi.module.css";
import { getKbData, catalogs, regions } from "./kbData";

type Props = {
  locale: string;
  labels: {
    title: string;
    desc: string;
    searchPlaceholder: string;
    all: string;
    dryIce: string;
    industrial: string;
    medical: string;
    suppression: string;
    downloads: string;
    delivery: string;
    deliveryDesc: string;
    contactTitle: string;
    contactDesc: string;
    contactBtn: string;
  };
};

export default function KnowledgeBaseClient({ locale, labels }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const kbData = useMemo(() => getKbData(locale), [locale]);
  const activeCatalogs = useMemo(() => catalogs[locale] || catalogs["tr"], [locale]);

  const categories = [
    { id: "all", label: labels.all },
    { id: "kuru-buz", label: labels.dryIce },
    { id: "endustriyel", label: labels.industrial },
    { id: "medikal", label: labels.medical },
    { id: "sondurme", label: labels.suppression },
  ];

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredQuestions = useMemo(() => {
    return kbData.filter((q) => {
      const matchesCategory = activeCategory === "all" || q.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query) ||
        q.keywords.some((k) => k.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [kbData, activeCategory, searchQuery]);

  // Generate FAQ Schema JSON-LD dynamically for SEO
  const faqSchema = useMemo(() => {
    const mainQuestions = kbData.slice(0, 10); // Use top 10 questions for schema
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainQuestions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer,
        },
      })),
    };
  }, [kbData]);

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Bilgi bankası başlığı">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>
              {locale === "tr" ? "Anasayfa" : "Home"}
            </Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{labels.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{labels.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>{labels.desc}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.container}>
        {/* Search Widget */}
        <div className={styles.searchSection}>
          <h2 className={styles.searchTitle}>{labels.title}</h2>
          <p className={styles.searchDesc}>{labels.desc}</p>
          <div className={styles.searchContainer}>
            <span className={styles.searchIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder={labels.searchPlaceholder}
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={labels.searchPlaceholder}
            />
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className={styles.categoriesNav} role="tablist" aria-label="Kategoriler">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.activeCategory : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {/* FAQ Accordion List */}
          <main className={styles.faqSection}>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q) => {
                const isOpen = !!openItems[q.id];
                return (
                  <article key={q.id} className={styles.accordionItem}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(q.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{q.question}</span>
                      <span className={`${styles.accordionIcon} ${isOpen ? styles.accordionIconActive : ""}`} aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={styles.accordionContent}
                      style={{
                        display: isOpen ? "block" : "none",
                      }}
                    >
                      <div className={styles.accordionTextWrap}>
                        {q.answer.split('\n\n').map((paragraph, idx) => {
                          if (paragraph.includes('\n- ')) {
                            const parts = paragraph.split('\n- ');
                            const title = parts[0];
                            const listItems = parts.slice(1);
                            return (
                              <div key={idx} className={styles.faqListBlock}>
                                <p><strong>{title}</strong></p>
                                <ul className={styles.faqList}>
                                  {listItems.map((item, itemIdx) => (
                                    <li key={itemIdx}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            );
                          }
                          return (
                            <p key={idx} style={{ whiteSpace: "pre-line" }}>{paragraph}</p>
                          );
                        })}
                      </div>
                      {q.id === "kuru-buz-nedir" && (
                        <div className={styles.faqImageWrap}>
                          <img src="/yangin-sondurme.jpg" alt={q.question} className={styles.faqImage} />
                        </div>
                      )}
                      {q.id === "dry-ice-what-is" && (
                        <div className={styles.faqImageWrap}>
                          <img src="/kuru-buz.jpg" alt={q.question} className={styles.faqImage} />
                        </div>
                      )}
                      {(q.id === "gazli-yangin-sondurme-sistemleri" || q.id === "gas-fire-suppression-systems") && (
                        <div className={styles.faqImageWrap}>
                          <img src="/yangin-sondurme.jpg" alt={q.question} className={styles.faqImage} />
                        </div>
                      )}
                    </div>
                  </article>
                );
              })
            ) : (
              <p style={{ textAlign: "center", color: "var(--gray-dark)", padding: "40px 0" }}>
                {locale === "tr" ? "Aramanıza uygun sonuç bulunamadı." : "No results found for your search."}
              </p>
            )}
          </main>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Download Catalogs Widget */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>{labels.downloads}</h3>
              <div className={styles.downloadList}>
                {activeCatalogs.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className={styles.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <div className={styles.downloadInfo}>
                      <span className={styles.downloadName}>{item.name}</span>
                      <span className={styles.downloadSize}>{item.size} • PDF</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Delivery Regions Widget (Yerel/Bölgesel SEO) */}
            <div className={styles.widget}>
              <h3 className={styles.widgetTitle}>{labels.delivery}</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--gray-dark)", marginBottom: "16px", lineHeight: "1.5" }}>
                {labels.deliveryDesc}
              </p>
              <div className={styles.areasGrid}>
                {regions.map((region) => (
                  <span key={region} className={styles.areaItem}>
                    {region}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Widget */}
            <div className={`${styles.widget} ${styles.contactWidget}`}>
              <h3 className={styles.widgetTitle}>{labels.contactTitle}</h3>
              <p className={styles.contactWidgetText}>
                {labels.contactDesc}
              </p>
              <Link href={`/${locale}/iletisim`} className={styles.contactBtn}>
                {labels.contactBtn}
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
