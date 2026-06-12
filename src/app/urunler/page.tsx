import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../shared.module.css";
import styles from "./urunler.module.css";

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Tinsagaz ürün kataloğu: medikal gazlar, endüstriyel gazlar, çelik ürünleri, elektrik sistemleri, tüp sistemleri ve ağır makineler.",
};

const categories = [
  { id: "tumu", label: "Tümü" },
  { id: "medikal-gaz", label: "Medikal Gaz" },
  { id: "endustriyel-gaz", label: "Endüstriyel Gaz" },
  { id: "celik", label: "Çelik" },
  { id: "elektrik", label: "Elektrik" },
  { id: "tup", label: "Tüp" },
  { id: "agir-makine", label: "Ağır Makine" },
];

const products = [
  {
    id: "medikal-oksijen",
    cat: "medikal-gaz",
    catLabel: "Medikal Gaz",
    icon: "🫁",
    title: "Medikal Oksijen (O₂)",
    badge: "ISO 13485",
    desc: "Tıbbi tedavi ve solunum destek ünitelerinde kullanılmak üzere yüksek saflıkta (%99.5+) sertifikalı tıbbi oksijen gazı. Hastaneler, klinikler ve evde tedavi için çeşitli silindir boyutlarında ve dökme sıvı oksijen formunda sunulur.",
    features: ["EP (Avrupa Farmakopesi) uyumlu", "Kesintisiz dökme sıvı oksijen tedariği", "7/24 acil hastane lojistik desteği"],
  },
  {
    id: "azot-protoksit",
    cat: "medikal-gaz",
    catLabel: "Medikal Gaz",
    icon: "😴",
    title: "Tıbbi Azot Protoksit (N₂O)",
    badge: "Medikal Sınıf",
    desc: "Cerrahi operasyonlarda ve diş hekimliğinde genel anestezi ve sedasyon süreçlerinde kullanılan yüksek saflıkta azot protoksit gazı. Kararlı akış ve maksimum saflık güvencesiyle silindirlerde teslim edilir.",
    features: ["Uluslararası anestezi standartlarına uyum", "Yüksek basınç sızdırmazlık testli tüpler", "Medikal regülatör uyumluluğu"],
  },
  {
    id: "medikal-karbondioksit",
    cat: "medikal-gaz",
    catLabel: "Medikal Gaz",
    icon: "❄️",
    title: "Medikal Karbondioksit (CO₂)",
    badge: "Tıbbi Gaz",
    desc: "Laparoskopik cerrahi operasyonlarında insüflasyon gazı olarak ve kriyoterapi gibi soğutma/dondurma uygulamalarında kullanılan tıbbi karbondioksit gazı. Nem ve yabancı maddelerden tamamen arındırılmıştır.",
    features: ["Laparoskopi cihazları ile tam uyum", "%99.9 tıbbi saflık derecesi", "Hijyenik tüp dolum süreçleri"],
  },
  {
    id: "medikal-hava",
    cat: "medikal-gaz",
    catLabel: "Medikal Gaz",
    icon: "💨",
    title: "Medikal Hava (Tıbbi Hava)",
    badge: "Farmakope Uyumlu",
    desc: "Solunum cihazları (ventilatörler) ve anestezi ünitelerinde hastaların yapay solunumunu desteklemek amacıyla kullanılan, nem ve yağ partiküllerinden arındırılmış yüksek kaliteli tıbbi sentetik hava.",
    features: ["ISO 7396-1 medikal gaz tesisatı uyumlu", "Kuru ve tozsuz hava garantisi", "Merkezi hastane sistemlerine uygun tüp ve MCP paketleri"],
  },
  {
    id: "endustriyel-oksijen",
    cat: "endustriyel-gaz",
    catLabel: "Endüstriyel Gaz",
    icon: "🔥",
    title: "Endüstriyel Oksijen",
    badge: "Yüksek Performans",
    desc: "Metal kesme, kaynak, ergitme, cam imalatı ve fırın zenginleştirme proseslerinde yüksek verimlilik sağlayan endüstriyel oksijen gazı. Dökme sıvı oksijen (LOX) veya yüksek basınçlı silindir formlarında sunulur.",
    features: ["%99.7+ endüstriyel saflık", "Lazer kesiminde çapaksız kenar kalitesi", "MTP/MCP tüp demeti ile toplu kullanım desteği"],
  },
  {
    id: "argon",
    cat: "endustriyel-gaz",
    catLabel: "Endüstriyel Gaz",
    icon: "⚗️",
    title: "Saf Argon Gazı (Ar)",
    badge: "Koruyucu Gaz",
    desc: "TIG (Argon kaynak) ve MIG kaynaklarında koruyucu atmosfer oluşturmak için kullanılan %99.999 yüksek saflıkta inert gaz. Paslanmaz çelik, alüminyum ve özel alaşımların kaynağında mükemmel nüfuziyet sağlar.",
    features: ["%99.999 ultra yüksek saflık", "Kritik kaynak uygulamalarında sıfır gözenek riski", "Özel alaşımlı çelik kaynakları için ideal"],
  },
  {
    id: "endustriyel-azot",
    cat: "endustriyel-gaz",
    catLabel: "Endüstriyel Gaz",
    icon: "🌫️",
    title: "Endüstriyel Azot (N₂)",
    badge: "Koruyucu ve Süpürme",
    desc: "Gıda paketlemede tazeliği koruma, kimyasal tanklarda süpürme (purging), lazer kesimde oksidasyonu önleme ve ısıl işlemlerde koruyucu atmosfer oluşturmak için yüksek saflıkta azot gazı.",
    features: ["Gıda koruma standartlarına uygun saflık", "Dökme sıvı azot (LIN) lojistik altyapısı", "Lazer kesimlerinde paslanmaz çelik temizliği"],
  },
  {
    id: "helyum",
    cat: "endustriyel-gaz",
    catLabel: "Endüstriyel Gaz",
    icon: "🎈",
    title: "Helyum Gazı (He)",
    badge: "Laboratuvar & Balon",
    desc: "Kaçak tespit testleri, laboratuvar analiz cihazları (gaz kromatografisi), kaynak prosesleri ve uçan balon dolumlarında kullanılan yüksek saflıkta helyum gazı. Güvenli silindirler ile temin edilir.",
    features: ["Laboratuvar tipi yüksek saflık (%99.999)", "Kaçak testlerinde yüksek hassasiyet", "Hafif ve güvenli tüp ambalajları"],
  },
  {
    id: "asetilen",
    cat: "endustriyel-gaz",
    catLabel: "Endüstriyel Gaz",
    icon: "🧨",
    title: "Asetilen Gazı (C₂H₂)",
    badge: "Yüksek Isı",
    desc: "Oksi-asetilen kaynak ve kesme proseslerinde en yüksek alev sıcaklığını (3100°C) sağlayan, yüksek mukavemetli kesim ve tavlama işlemlerinde kullanılan yanıcı sınai gaz.",
    features: ["Hızlı tavlama ve kesme kapasitesi", "TSE standartlarında özel asetilen tüp dolumları", "Maksimum alev verimliliği"],
  },
  {
    id: "kaynak-karisimlari",
    cat: "endustriyel-gaz",
    catLabel: "Endüstriyel Gaz",
    icon: "🔧",
    title: "Kaynak Karışım Gazları",
    badge: "MIG/MAG Özel",
    desc: "Argon ve Karbondioksit (CO₂) karışımlarından oluşan, karbon çeliği ve alaşımlı çeliklerin MIG/MAG gazaltı kaynaklarında yüksek hız, düşük çapaklanma ve pürüzsüz kaynak dikişi sunan özel karışımlar.",
    features: ["%82 Argon - %18 CO₂ ve alternatif oranlar", "Daha az kaynak sonrası temizlik ihtiyacı", "Kaynak dikişinde yüksek mukavemet"],
  },
  {
    id: "celik-profil",
    cat: "celik",
    catLabel: "Çelik",
    icon: "🏗️",
    title: "Yapısal Çelik & Profil",
    badge: "TS EN 10025",
    desc: "İnşaat, ağır sanayi ve endüstriyel tesis projelerinde kullanılmak üzere S235, S275 ve S355 kalitelerinde sıcak haddelenmiş yapısal çelik profiller (HEA, HEB, IPE, UPN, IPN).",
    features: ["CE sertifikalı çelik hammaddesi", "İstenen boy ve ebatta hassas kesim imkanı", "Deprem yönetmeliğine uygun yüksek mukavemet"],
  },
  {
    id: "elektrik-panel",
    cat: "elektrik",
    catLabel: "Elektrik",
    icon: "⚡",
    title: "Güç Dağıtım Panoları",
    badge: "IEC 61439",
    desc: "Sanayi tesisleri, şantiyeler ve fabrikalar için tasarlanmış yüksek güvenlikli alçak ve orta gerilim güç dağıtım ve kontrol panoları. Toz ve su sızdırmazlık korumalı tasarımlar.",
    features: ["IEC 61439-1/2 standartlarına tam uyum", "Kısa devre ve aşırı yük koruma sistemleri", "Yerinde montaj ve devreye alma desteği"],
  },
  {
    id: "basinc-tup",
    cat: "tup",
    catLabel: "Tüp",
    icon: "🔵",
    title: "Dikişsiz Çelik Gaz Tüpleri",
    badge: "TS EN ISO 9809",
    desc: "200 ve 300 bar çalışma basıncına dayanıklı, dikişsiz çelik çekme yüksek basınçlı sınai ve tıbbi gaz tüpleri. Tüm tüplerimiz hidrostatik testlerden geçirilerek ve sertifikalandırılarak teslim edilir.",
    features: ["TS EN ISO 9809 standart uyumluluğu", "Pi damgası (CE-TPED) onaylı vanalar", "5 yıl periyodik muayene garantisi"],
  },
  {
    id: "mcp-paketleri",
    cat: "tup",
    catLabel: "Tüp",
    icon: "📦",
    title: "Manifold Tüp Paketleri (MCP/MTP)",
    badge: "Toplu Tedarik",
    desc: "12'li veya 15'li tüplerin çelik kafes içinde birbirine manifold sistemiyle bağlandığı, yüksek hacimli gaz tüketen tesisler için tasarlanmış taşınabilir toplu gaz depolama üniteleri.",
    features: ["Tek noktadan yüksek debili gaz çıkışı", "Forklift ve vinç ile kolay taşıma altyapısı", "Tüp değişim sürelerini minimize eden sistem"],
  },
  {
    id: "kompressor",
    cat: "agir-makine",
    catLabel: "Ağır Makine",
    icon: "🏭",
    title: "Endüstriyel Vidalı Kompresörler",
    badge: "CE Belgeli",
    desc: "Fabrikalarda pnömatik sistemler ve hava hatları için yüksek verimlilikte basınçlı hava üreten, uzun ömürlü ve düşük gürültülü endüstriyel vidalı hava kompresörleri.",
    features: ["Inverter ile enerji tasarruflu çalışma", "Akıllı uzaktan izleme ve kontrol paneli", "Geniş servis ağı ve yedek parça desteği"],
  },
  {
    id: "vinc",
    cat: "agir-makine",
    catLabel: "Ağır Makine",
    icon: "🏗️",
    title: "Köprülü Tavan Vinçleri",
    badge: "FEM 1.001",
    desc: "Ağır sanayi, çelik depolama ve dökümhaneler için 1 tondan 50 tona kadar kaldırma kapasitesine sahip, çift veya tek kirişli yüksek emniyetli gezer köprülü vinç sistemleri.",
    features: ["FEM ve DIN standartlarında tasarım", "Aşırı yük limit siviçleri ile maksimum iş güvenliği", "Pürüzsüz kalkış ve duruş için frekans kontrollü motorlar"],
  },
];

function getCategoryIcon(id: string) {
  switch (id) {
    case "tumu":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "medikal-gaz":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "endustriyel-gaz":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "celik":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      );
    case "elektrik":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "tup":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <path d="M6 9V5a3 3 0 0 1 6 0v4m-6 0h6m0-4v4" />
          <rect x="4" y="9" width="16" height="13" rx="2" />
        </svg>
      );
    case "agir-makine":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    default:
      return null;
  }
}

function getProductIcon(id: string) {
  switch (id) {
    case "medikal-oksijen":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
          <path d="M7 14h10v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-3Z" />
          <circle cx="12" cy="7" r="1.2" fill="var(--primary)" />
        </svg>
      );
    case "azot-protoksit":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "medikal-karbondioksit":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 2v20M17 5l-5 5-5-5M22 12H2M19 17l-5-5 5-5M5 17l5-5-5-5" />
        </svg>
      );
    case "medikal-hava":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2M12.59 19.41A2 2 0 1 0 14 16H2M17.73 11.27A2.5 2.5 0 1 1 19.5 15H2" />
        </svg>
      );
    case "endustriyel-oksijen":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      );
    case "argon":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "endustriyel-azot":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="5" r="3" />
          <circle cx="6" cy="15" r="3" />
          <circle cx="18" cy="15" r="3" />
          <path d="M12 8v4M9 13.5l3-1.5M15 13.5l-3-1.5" />
        </svg>
      );
    case "helyum":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z" />
          <path d="M2 12h20" />
        </svg>
      );
    case "asetilen":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="m18 2-3 3M15 5l-9 9M6 14l-4 4M2 18l4-4M6 14h6M12 8v6M22 22l-4-4" />
        </svg>
      );
    case "kaynak-karisimlari":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "celik-profil":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M6 3h12M6 21h12M12 3v18M6 3v18M18 3v18" />
        </svg>
      );
    case "elektrik-panel":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="m13 7-4 5h6l-4 5" />
          <path d="M9 3v18" />
        </svg>
      );
    case "basinc-tup":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <rect x="7" y="8" width="10" height="14" rx="2" />
          <path d="M9 8V5a3 3 0 0 1 6 0v3M12 2v3" />
        </svg>
      );
    case "mcp-paketleri":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
          <circle cx="6" cy="6" r="0.8" fill="var(--primary)" />
          <circle cx="12" cy="6" r="0.8" fill="var(--primary)" />
          <circle cx="18" cy="6" r="0.8" fill="var(--primary)" />
          <circle cx="6" cy="12" r="0.8" fill="var(--primary)" />
          <circle cx="12" cy="12" r="0.8" fill="var(--primary)" />
          <circle cx="18" cy="12" r="0.8" fill="var(--primary)" />
        </svg>
      );
    case "kompressor":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
        </svg>
      );
    case "vinc":
      return (
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.9 }}>
          <path d="M3 21h18M5 21V6M19 21V6M4 6h16M12 6v6" />
          <rect x="10" y="12" width="4" height="4" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}

export default function UrunlerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label="Ürünler sayfası başlık">
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href="/" className={sharedStyles.pageBreadcrumbLink}>Anasayfa</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>Ürünler</span>
          </nav>
          <h1 className={sharedStyles.pageHeroTitle}>Ürünlerimiz</h1>
          <p className={sharedStyles.pageHeroDesc}>
            Medikal gazlardan ağır makinelere, elektrik sistemlerinden çelik ürünlerine
            kadar tüm sektörlere kapsamlı endüstriyel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className={styles.productsSection} aria-label="Ürün kataloğu">
        <div className={styles.productsSectionInner}>
          {/* Category Filter */}
          <div className={styles.productsCats} role="navigation" aria-label="Ürün kategorileri">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id === "tumu" ? "urunler" : cat.id}`}
                id={`cat-btn-${cat.id}`}
                className={styles.catBtn}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </a>
            ))}
          </div>

          {/* Products Grid */}
          <div id="urunler" className={styles.productsGrid}>
            {products.map((p) => (
              <article
                key={p.id}
                id={p.cat}
                className={styles.productCard}
              >
                <div className={styles.productCardImg}>
                  {getProductIcon(p.id)}
                  <span className={styles.productCardBadge}>{p.badge}</span>
                </div>
                <div className={styles.productCardBody}>
                  <span className={styles.productCardTag}>{p.catLabel}</span>
                  <h2 className={styles.productCardTitle}>{p.title}</h2>
                  <p className={styles.productCardDesc}>{p.desc}</p>
                  <ul className={styles.productCardFeatures} role="list">
                    {p.features.map((f) => (
                      <li key={f} className={styles.productCardFeature}>{f}</li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    id={`product-contact-${p.id}`}
                    className={styles.productCardAction}
                  >
                    Teklif İste →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
