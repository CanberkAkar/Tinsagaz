"use client";

import { useState } from "react";
import styles from "./iletisim.module.css";

interface SubBranch {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
}

interface Branch {
  id: string;
  name: string;
  tabName: string;
  address?: string;
  phone?: string;
  mapUrl?: string;
  subBranches?: SubBranch[];
}

export default function BranchMap({ locale }: { locale: string }) {
  const branches: Branch[] = [
    {
      id: "cigli",
      name: locale === "tr" ? "Çiğli Şubesi (Merkez)" : "Cigli Branch (Headquarters)",
      tabName: locale === "tr" ? "Çiğli (Merkez)" : "Cigli (HQ)",
      address: locale === "tr" ? "Küçük Çiğli, 8780/11. Sk. no:19, 35620 Çiğli/İzmir, Türkiye" : "Küçük Çiğli, 8780/11. Sk. no:19, 35620 Çiğli/İzmir, Türkiye",
      phone: "0533 311 53 70",
      mapUrl: "https://maps.google.com/maps?q=Tinsa%20Gaz%20%C4%B0zmir%20%C5%9Eube&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "aliaga",
      name: locale === "tr" ? "Aliağa Şubesi" : "Aliaga Branch",
      tabName: locale === "tr" ? "Aliağa" : "Aliaga",
      address: "Aliağa San. Sit. Samurlu Mah. 1244 Sk No:18 Aliağa / İZMİR",
      phone: "0533 311 53 70",
      mapUrl: "https://maps.google.com/maps?q=Tinsa%20Gaz%20Alia%C4%9Fa%20%C5%9Fubesi&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "mugla",
      name: locale === "tr" ? "Muğla Şubesi" : "Mugla Branch",
      tabName: locale === "tr" ? "Muğla" : "Mugla",
      address: "Ticaret Merkezi 5. Blok No:3 Bayır / Muğla",
      phone: "0252 225 36 63 / 0538 644 88 12",
      mapUrl: "https://maps.google.com/maps?q=Bay%C4%B1r%20Mahallesi%20Ticaret%20Merkezi%20Mente%C5%9Fe%20Mugla&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "milas",
      name: locale === "tr" ? "Milas Şubesi" : "Milas Branch",
      tabName: "Milas",
      address: locale === "tr" ? "Emek, Karadağ Cd. No:33, 48200 Milas/Muğla" : "Emek, Karadag Cd. No:33, 48200 Milas/Mugla",
      phone: "0533 311 53 70",
      mapUrl: "https://maps.google.com/maps?q=37.2958106,27.7770743&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "bodrum",
      name: locale === "tr" ? "Bodrum Şubesi" : "Bodrum Branch",
      tabName: "Bodrum",
      address: locale === "tr" ? "Konacık, Konacık Sanayi Sitesi J BLOK NO 3, 48000 Bodrum/Muğla" : "Konacik, Konacik Industrial Site J BLOK NO 3, 48000 Bodrum/Mugla",
      phone: "0533 314 57 63",
      mapUrl: "https://maps.google.com/maps?q=T%C4%B0NSA%20GAZ%20BODRUM%20%C5%9EUBE&t=&z=16&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const [activeBranch, setActiveBranch] = useState<Branch>(branches[0]);

  const handleBranchChange = (branch: Branch) => {
    setActiveBranch(branch);
  };

  return (
    <div className={styles.branchMapContainer}>
      {/* Branch Tabs */}
      <div className={styles.branchTabs}>
        {branches.map((b) => (
          <button
            key={b.id}
            type="button"
            className={`${styles.branchTabButton} ${activeBranch.id === b.id ? styles.activeTab : ""}`}
            onClick={() => handleBranchChange(b)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{b.tabName}</span>
          </button>
        ))}
      </div>

      {/* Address & Phone Bar */}
      <div className={styles.activeAddressInfo} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <div>
          <strong>{locale === "tr" ? "Şube:" : "Branch:"}</strong> {activeBranch.name}
        </div>
        <div>
          <strong>{locale === "tr" ? "Adres:" : "Address:"}</strong> {activeBranch.address}
        </div>
        <div>
          <strong>{locale === "tr" ? "Telefon:" : "Phone:"}</strong> {activeBranch.phone}
        </div>
      </div>

      {/* Map Box */}
      <div className={styles.mapBox}>
        <iframe
          src={activeBranch.mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={activeBranch.name}
        />
      </div>
    </div>
  );
}
