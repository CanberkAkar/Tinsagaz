export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { locales } from "./[locale]/dictionaries";
import { getMedicalGasesData } from "./[locale]/urunler/gazlar/medikal-gazlar/medikalData";
import { getGasesData } from "./[locale]/urunler/gazlar/sinai-gazlar/gasesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tinsagaz.com";
  
  // Base static paths
  const staticPaths = [
    "", // Home page
    "/bilgi-bankasi",
    "/iletisim",
    "/kurumsal/galeri",
    "/kurumsal/hakkimizda",
    "/kurumsal/kvkk",
    "/urunler",
    "/urunler/gazlar/medikal-gazlar",
    "/urunler/gazlar/sinai-gazlar",
    "/urunler/gazli-yangin-sondurme-sistemleri",
    "/urunler/kuru-buz",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Loop through all locales and generate URLs
  for (const locale of locales) {
    // 1. Static paths
    for (const path of staticPaths) {
      const url = `${baseUrl}/${locale}${path}/`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1.0 : 0.8,
      });
    }

    // 2. Medical gases dynamic paths
    const medicalGases = getMedicalGasesData(locale);
    for (const gas of medicalGases) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/urunler/gazlar/medikal-gazlar/${gas.slug}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }

    // 3. Industrial (sinai) gases dynamic paths
    const industrialGases = getGasesData(locale);
    for (const gas of industrialGases) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/urunler/gazlar/sinai-gazlar/${gas.slug}/`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
