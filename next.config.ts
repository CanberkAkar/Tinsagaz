import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Statik sitede resim optimizasyonunu kapatır, resimlerin doğrudan yüklenmesini sağlar
  },
  /* config options here */
};

export default nextConfig;
