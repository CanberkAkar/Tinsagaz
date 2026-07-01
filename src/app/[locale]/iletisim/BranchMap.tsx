"use client";

import { useState } from "react";
import styles from "./iletisim.module.css";

interface Branch {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
}

export default function BranchMap({ locale }: { locale: string }) {
  const branches: Branch[] = [
    {
      id: "izmir",
      name: locale === "tr" ? "İzmir Şubesi (Merkez)" : "Izmir Branch (Headquarters)",
      address: "Küçük Çiğli, 8780/11. Sk. no:19, 35620 Çiğli/İzmir",
      mapUrl: "https://maps.google.com/maps?q=K%C3%BC%C3%A7%C3%BCk%20%C3%87i%C4%9Fli%2C%208780%2F11.%20Sk.%20no%3A19%2C%2035620%20%C3%87i%C4%9Fli%2F%C4%B0zmir&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: "mugla",
      name: locale === "tr" ? "Muğla Şubesi" : "Mugla Branch",
      address: "Bayır, Erdal Akbulut Cd. NO.3, 48040 Menteşe/Muğla, Türkiye",
      mapUrl: "https://maps.google.com/maps?q=Bay%C4%B1r%2C%20Erdal%20Akbulut%20Cd.%20NO.3%2C%2048040%20Mente%C5%9Fe%2FMugla%2C%20Turkiye&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
  ];

  const [activeBranch, setActiveBranch] = useState<Branch>(branches[0]);

  return (
    <div className={styles.branchMapContainer}>
      {/* Branch Tabs */}
      <div className={styles.branchTabs}>
        {branches.map((b) => (
          <button
            key={b.id}
            type="button"
            className={`${styles.branchTabButton} ${activeBranch.id === b.id ? styles.activeTab : ""}`}
            onClick={() => setActiveBranch(b)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{b.name}</span>
          </button>
        ))}
      </div>

      {/* Address Bar */}
      <div className={styles.activeAddressInfo}>
        <strong>{locale === "tr" ? "Adres:" : "Address:"}</strong> {activeBranch.address}
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
