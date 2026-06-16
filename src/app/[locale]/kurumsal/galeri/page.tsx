import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import sharedStyles from "../../shared.module.css";
import styles from "./galeri.module.css";
import { Locale, getDictionary } from "../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);

  return {
    title: `${dict.galleryPage.title} | Tinsagaz`,
    description: dict.galleryPage.subtitle,
  };
}

export default async function GaleriPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const pageData = dict.galleryPage;

  const galleryItems = [
    {
      src: "/gallery_filling_station.png",
      alt: pageData.captions.filling_station,
      caption: pageData.captions.filling_station,
    },
    {
      src: "/gallery_quality_control.png",
      alt: pageData.captions.quality_control,
      caption: pageData.captions.quality_control,
    },
    {
      src: "/gallery_logistics.png",
      alt: pageData.captions.logistics,
      caption: pageData.captions.logistics,
    },
    {
      src: "/gallery_laser_cutting.png",
      alt: pageData.captions.laser_cutting,
      caption: pageData.captions.laser_cutting,
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label={`${pageData.title} başlığı`}>
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>
              {dict.nav.home}
            </Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{pageData.title}</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>{pageData.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>{pageData.subtitle}</p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className={styles.gallerySection} aria-label="Fotoğraf galerisi grid">
        <div className={styles.galleryInner}>
          <div className={styles.galleryGrid}>
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={styles.galleryItem}
                id={`gallery-item-${index}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.galleryImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.overlayCategory}>TINSA GAZ</span>
                      <h3 className={styles.overlayTitle}>{item.caption}</h3>
                      <div className={styles.overlayLine} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
