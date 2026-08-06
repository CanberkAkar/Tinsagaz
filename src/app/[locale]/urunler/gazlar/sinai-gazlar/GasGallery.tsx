"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./gasGallery.module.css";

type GalleryImage = { src: string; alt: string; caption?: string };

export default function GasGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? null : (idx - 1 + images.length) % images.length));
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((idx) => (idx === null ? null : (idx + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div
        className={styles.grid}
        style={{ gridTemplateColumns: images.length > 1 ? "repeat(auto-fit, minmax(240px, 1fr))" : "1fr" }}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={styles.thumbButton}
            onClick={() => setActiveIndex(idx)}
            aria-label={`${img.caption || img.alt} - büyüt`}
          >
            <div className={styles.thumbFrame}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
              <span className={styles.zoomBadge} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </div>
            {img.caption && <p className={styles.caption}>{img.caption}</p>}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.overlay} role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className={styles.closeButton} onClick={close} aria-label="Kapat">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.navPrev}`}
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Önceki görsel"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageWrap}>
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="90vw"
                priority
              />
            </div>
            {images[activeIndex].caption && (
              <p className={styles.modalCaption}>{images[activeIndex].caption}</p>
            )}
            {images.length > 1 && (
              <p className={styles.modalCounter}>{activeIndex + 1} / {images.length}</p>
            )}
          </div>

          {images.length > 1 && (
            <button
              type="button"
              className={`${styles.navButton} ${styles.navNext}`}
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Sonraki görsel"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
