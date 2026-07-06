import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../../shared.module.css";
import styles from "../gazlar/sinai-gazlar/sinai-gazlar.module.css";
import { Locale, getDictionary } from "../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

const pageContent = {
  tr: {
    title: "Kuru Buz (Katı CO₂)",
    badge: "-78.5°C",
    desc: "Gıda muhafazası, soğuk zincir lojistiği, endüstriyel temizlik (kuru buz temizliği) ve eğlence sektörü (özel efektler) için -78.5°C sıcaklıkta üretilen, yüksek saflıkta ve doğrudan gaz fazına geçen karbondioksit buz blokları ve peletleri.",
    content: "Kuru buz, sıvı karbondioksitin yüksek basınç altında genleştirilerek kar karbondioksitine dönüştürülmesi ve ardından hidrolik presler ile sıkıştırılmasıyla üretilir. Eridiğinde geride hiçbir ıslaklık veya kimyasal atık bırakmaz. Doğrudan karbondioksit gazına dönüşmesi nedeniyle soğutma ve temizlik işlemlerinde eşsiz bir verimlilik sağlar.",
    features: [
      "-78.5°C ultra düşük sıcaklık",
      "Sıvılaşmadan doğrudan gaz fazına geçiş",
      "Bakteri ve küf oluşumunu engelleyen karbondioksit atmosferi",
      "Kuru buz temizliği uygulamalarında sıfır aşınma"
    ],
    usageAreas: [
      "Soğuk Zincir Lojistiği",
      "Gıda Saklama ve Muhafaza",
      "Kuru Buz Temizliği (Dry Ice Blasting)",
      "Eğlence ve Sahne Efektleri",
      "Metal Sanayi (Sıkı Geçirme Prosesleri)",
      "Kimya ve İlaç Laboratuvarları"
    ],
    supplyModels: [
      {
        title: "Pelet Kuru Buz (3mm & 16mm)",
        desc: "Endüstriyel temizlik, soğuk zincir taşıma ve duman efektleri için ideal pelet formunda üretim."
      },
      {
        title: "Blok Kuru Buz",
        desc: "Uzun süreli soğutma ve deniz taşımacılığı için yüksek yoğunluklu blok kalıplar."
      }
    ],
    safetyWarning: "Kuru buz aşırı soğuktur (-78.5°C). Doğrudan ciltle temas etmesi durumunda ciddi soğuk yanıklarına sebep olabilir. Her zaman yalıtımlı eldiven veya maşa kullanınız. Kapalı kaplarda saklamayınız, gazlaşma sonucu patlama riski yaratır. Taşıma ve saklama alanlarını iyi havalandırınız.",
    specifications: [
      { label: "Kimyasal Formül", value: "CO₂" },
      { label: "Yoğunluk", value: "~1.56 g/cm³" },
      { label: "Sıcaklık", value: "-78.5 °C" },
      { label: "Görünüm", value: "Opak Beyaz Katı" },
      { label: "Saflık Derecesi", value: "≥ 99.9%" }
    ]
  },
  en: {
    title: "Dry Ice (Solid CO₂)",
    badge: "-78.5°C",
    desc: "Carbon dioxide ice blocks and pellets produced at -78.5°C with high purity, which sublimate directly into gas, for food preservation, cold chain logistics, industrial cleaning (dry ice blasting), and entertainment (special effects).",
    content: "Dry ice is produced by expanding liquid carbon dioxide under high pressure to form carbon dioxide snow, which is then compressed by hydraulic presses. It leaves no moisture or chemical residue when it sublimates. Since it converts directly into carbon dioxide gas, it provides unmatched efficiency in cooling and cleaning processes.",
    features: [
      "-78.5°C ultra-low temperature",
      "Direct sublimation without liquefaction",
      "CO₂ atmosphere preventing bacteria and mold growth",
      "Zero abrasion in dry ice blasting applications"
    ],
    usageAreas: [
      "Cold Chain Logistics",
      "Food Storage and Preservation",
      "Dry Ice Blasting (Cleaning)",
      "Entertainment and Stage Effects",
      "Metal Industry (Shrink Fitting)",
      "Chemical and Pharmaceutical Labs"
    ],
    supplyModels: [
      {
        title: "Pellet Dry Ice (3mm & 16mm)",
        desc: "Production in pellet form ideal for industrial cleaning, cold chain transport, and smoke effects."
      },
      {
        title: "Block Dry Ice",
        desc: "High-density block molds for long-term cooling and maritime transport."
      }
    ],
    safetyWarning: "Dry ice is extremely cold (-78.5°C). Direct skin contact can cause severe cold burns. Always use insulated gloves or tongs. Do not store in airtight containers, as gas expansion creates an explosion risk. Ensure transport and storage areas are well ventilated.",
    specifications: [
      { label: "Chemical Formula", value: "CO₂" },
      { label: "Density", value: "~1.56 g/cm³" },
      { label: "Temperature", value: "-78.5 °C" },
      { label: "Appearance", value: "Opaque White Solid" },
      { label: "Purity Level", value: "≥ 99.9%" }
    ]
  },
  de: {
    title: "Trockeneis (Festes CO₂)",
    badge: "-78.5°C",
    desc: "Bei -78,5 °C hergestelltes, hochreines Kohlendioxid-Eis in Form von Blöcken und Pellets, das direkt in die Gasphase übergeht. Geeignet für Lebensmitteleinzelhandel, Kühlkettenlogistik, industrielle Reinigung (Trockeneisstrahlen) und Spezialeffekte.",
    content: "Trockeneis wird durch die Entspannung von flüssigem Kohlendioxid unter hohem Druck zu Kohlendioxidschnee hergestellt, der anschließend mit hydraulischen Pressen gepresst wird. Es hinterlässt beim Sublimieren keine Feuchtigkeit oder chemischen Rückstände. Da es direkt in Kohlendioxidgas übergeht, bietet es eine unübertroffene Effizienz bei Kühl- und Reinigungsprozessen.",
    features: [
      "-78,5 °C extrem niedrige Temperatur",
      "Direkte Sublimation ohne Verflüssigung",
      "Kohlendioxid-Atmosphäre verhindert Bakterien- und Schimmelbildung",
      "Kein Abrieb bei Trockeneisstrahl-Anwendungen"
    ],
    usageAreas: [
      "Kühlkettenlogistik",
      "Lebensmittellagerung und -konservierung",
      "Trockeneisstrahlen (Reinigung)",
      "Unterhaltung und Bühneneffekte",
      "Metallindustrie (Schrumpfpassung)",
      "Chemische und pharmazeutische Labore"
    ],
    supplyModels: [
      {
        title: "Trockeneispellets (3 mm & 16 mm)",
        desc: "Herstellung in Pelletform, ideal für industrielle Reinigung, Kühlkettentransport und Raucheffekte."
      },
      {
        title: "Trockeneisblöcke",
        desc: "Hochdichte Blockformen für Langzeitkühlung und Seetransport."
      }
    ],
    safetyWarning: "Trockeneis ist extrem kalt (-78,5 °C). Direkter Hautkontakt kann zu schweren Kälteverbrennungen führen. Verwenden Sie immer isolierte Handschuhe oder Zangen. Nicht in luftdichten Behältern lagern, da durch die Gasexpansion Explosionsgefahr besteht. Sorgen Sie für eine gute Belüftung der Transport- und Lagerbereiche.",
    specifications: [
      { label: "Chemische Formel", value: "CO₂" },
      { label: "Dichte", value: "~1,56 g/cm³" },
      { label: "Temperatur", value: "-78,5 °C" },
      { label: "Aussehen", value: "Undurchsichtiger weißer Feststoff" },
      { label: "Reinheitsgrad", value: "≥ 99,9%" }
    ]
  },
  fr: {
    title: "Glace Sèche (CO₂ Solide)",
    badge: "-78.5°C",
    desc: "Blocs et pellets de glace carbonique produits à -78,5°C avec une grande pureté, qui se subliment directement en gaz, pour la conservation des aliments, la logistique de la chaîne du froid, le nettoyage industriel (cryogénie) et les effets spéciaux.",
    content: "La glace sèche est produite par détente de dioxyde de carbone liquide sous haute pression pour former de la neige carbonique, qui est ensuite comprimée par des presses hydrauliques. Elle ne laisse aucune humidité ni résidu chimique lors de sa sublimation. Puisqu'elle se transforme directement en gaz carbonique, elle offre une efficacité inégalée dans les processus de refroidissement et de nettoyage.",
    features: [
      "Température ultra-basse de -78,5°C",
      "Sublimation directe sans liquéfaction",
      "Atmosphère de CO₂ empêchant le développement bactérien et les moisissures",
      "Zéro abrasion dans les applications de nettoyage cryogénique"
    ],
    usageAreas: [
      "Logistique de la chaîne du froid",
      "Stockage et conservation des aliments",
      "Nettoyage cryogénique",
      "Divertissement et effets de scène",
      "Industrie métallurgique (emmanchement)",
      "Laboratoires chimiques et pharmaceutiques"
    ],
    supplyModels: [
      {
        title: "Pellets de glace carbonique (3mm & 16mm)",
        desc: "Production sous forme de pellets idéale pour le nettoyage cryogénique, le transport sous chaîne du froid et les effets de fumée."
      },
      {
        title: "Blocs de glace carbonique",
        desc: "Moules en blocs haute densité pour le refroidissement à long terme et le transport maritime."
      }
    ],
    safetyWarning: "La glace carbonique est extrêmement froide (-78,5°C). Le contact direct avec la peau peut provoquer de graves brûlures par le froid. Utilisez toujours des gants isolants ou des pinces. Ne pas stocker dans des récipients hermétiques, car l'expansion du gaz crée un risque d'explosion. Assurez-vous que les zones de transport et de stockage sont bien ventilées.",
    specifications: [
      { label: "Formule Chimique", value: "CO₂" },
      { label: "Densité", value: "~1,56 g/cm³" },
      { label: "Température", value: "-78,5 °C" },
      { label: "Apparence", value: "Solide Blanc Opaque" },
      { label: "Niveau de Pureté", value: "≥ 99,9%" }
    ]
  },
  it: {
    title: "Ghiaccio Secco (CO₂ Solido)",
    badge: "-78.5°C",
    desc: "Blocchi e pellet di ghiaccio carbonico prodotti a -78.5°C ad elevata purezza, che sublimano direttamente in gas, per conservazione alimentare, logistica della catena del freddo, pulizia industriale (sabbiatura criogenica) ed effetti speciali.",
    content: "Il ghiaccio secco si produce espandendo l'anidride carbonica liquida ad alta pressione per formare neve carbonica, successivamente compressa da presse idrauliche. Non lascia umidità o residui chimici durante la sublimazione. Poiché si converte direttamente in anidride carbonica gassosa, offre un'efficienza senza pari nei processi di raffreddamento e pulizia.",
    features: [
      "Temperatura ultra-bassa di -78.5°C",
      "Sublimazione diretta senza liquefazione",
      "Atmosfera di CO₂ che previene la crescita di batteri e muffe",
      "Zero abrasione nelle applicazioni di sabbiatura criogenica"
    ],
    usageAreas: [
      "Logistica della catena del freddo",
      "Stoccaggio e conservazione degli alimenti",
      "Sabbiatura criogenica (pulizia)",
      "Intrattenimento ed effetti scenici",
      "Industria metallurgica (calettamento)",
      "Laboratori chimici e farmaceutici"
    ],
    supplyModels: [
      {
        title: "Pellet di ghiaccio secco (3mm & 16mm)",
        desc: "Produzione in forma di pellet ideale per pulizia industriale, trasporto a catena del freddo ed effetti fumo."
      },
      {
        title: "Blocchi di ghiaccio secco",
        desc: "Stampi in blocchi ad alta densità per raffreddamento a lungo termine e trasporto marittimo."
      }
    ],
    safetyWarning: "Il ghiaccio secco è estremamente freddo (-78.5°C). Il contatto diretto con la pelle può causare gravi ustioni da freddo. Utilizzare sempre guanti isolanti o pinze. Non conservare in contenitori ermetici, poiché l'espansione del gas crea un rischio di esplosione. Assicurarsi che le aree di trasporto e stoccaggio siano ben ventilate.",
    specifications: [
      { label: "Formula Chimica", value: "CO₂" },
      { label: "Densità", value: "~1.56 g/cm³" },
      { label: "Temperatura", value: "-78.5 °C" },
      { label: "Aspetto", value: "Solido Bianco Opaco" },
      { label: "Grado di Purezza", value: "≥ 99.9%" }
    ]
  },
  ja: {
    title: "ドライアイス (固形 CO₂)",
    badge: "-78.5℃",
    desc: "食品保存、コールドチェーン物流、産業用洗浄（ドライアイスブラスト）、特殊効果（スモーク演出）向けに、-78.5℃の極低温で製造される、高純度で液化せずに直接気化（昇華）する二酸化炭素の固形物（ペレット・ブロック）。",
    content: "ドライアイスは、高圧下の液化二酸化炭素を急速に膨張させてドライアイススノー（ドライアイスの粉末）を作り、それを油圧プレスで圧縮成形して製造されます。昇華時に水分や化学物質の残留物を一切残しません。気体の二酸化炭素に直接戻るため、冷却および洗浄プロセスにおいて非常に高い効率性を発揮します。",
    features: [
      "-78.5℃の極低温冷却能力",
      "液化（水濡れ）せずに直接気化する性質",
      "細菌やカビの繁殖を抑制する不活性CO₂雰囲気の形成",
      "ドライアイスブラスト（洗浄）使用時の非研磨・非破壊性"
    ],
    usageAreas: [
      "コールドチェーン（低温・冷凍）輸送",
      "食品の長期保存・防腐",
      "ドライアイスブラスト精密洗浄",
      "演出用の白煙スモーク特殊効果",
      "金属加工・シュリンクフィッティング（冷やし嵌め）",
      "化学・医薬品検査分析ラボ"
    ],
    supplyModels: [
      {
        title: "ドライアイスペレット (3mm & 16mm)",
        desc: "産業用ブラスト洗浄、コールドチェーン輸送、演出用スモークに適したペレット仕様。"
      },
      {
        title: "ドライアイスブロック",
        desc: "長時間の冷蔵保管や海上コンテナ輸送に適した高密度プレス成形ブロック。"
      }
    ],
    safetyWarning: "ドライアイスは極低温（-78.5℃）です。皮膚に直接触れると、重度の凍傷を引き起こすおそれがあります。必ず耐寒手袋やトングを使用してください。気化ガスの圧力で破裂する危険があるため、密閉容器に保管しないでください。輸送・保管スペースは適切に換気を行ってください。",
    specifications: [
      { label: "化学式", value: "CO₂" },
      { label: "密度", value: "約 1.56 g/cm³" },
      { label: "温度", value: "-78.5 ℃" },
      { label: "外観", value: "乳白色の固体" },
      { label: "純度", value: "99.9% 以上" }
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const data = pageContent[currentLocale] || pageContent.tr;

  return {
    title: `${data.title} | Tinsagaz`,
    description: data.desc,
  };
}

export default async function DryIcePage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const dict = await getDictionary(currentLocale);
  const data = pageContent[currentLocale] || pageContent.tr;

  const productsLabel = locale === "tr"
    ? "Ürünler"
    : locale === "en"
    ? "Products"
    : locale === "de"
    ? "Produkte"
    : locale === "fr"
    ? "Produits"
    : locale === "it"
    ? "Prodotti"
    : "製品";

  const supplyModelsTitle = locale === "tr"
    ? "Tedarik ve Depolama Modelleri"
    : locale === "en"
    ? "Supply and Storage Models"
    : locale === "de"
    ? "Versorgungs- und Lagermodelle"
    : locale === "fr"
    ? "Modèles d'Approvisionnement et de Stockage"
    : locale === "it"
    ? "Modelli di Fornitura e Stoccaggio"
    : "供給および保管モデル";

  const safetyStandardLabel = locale === "tr"
    ? "Güvenlik Standardı"
    : locale === "en"
    ? "Safety Standard"
    : locale === "de"
    ? "Sicherheitsstandard"
    : locale === "fr"
    ? "Norme de Sécurité"
    : locale === "it"
    ? "Standard di Sicurezza"
    : "安全基準";

  return (
    <>
      {/* Page Hero */}
      <section className={sharedStyles.pageHero} aria-label={`${data.title} Tanıtımı`}>
        <div className={sharedStyles.pageHeroInner}>
          <nav className={sharedStyles.pageBreadcrumb} aria-label="Sayfa konumu">
            <Link href={`/${locale}`} className={sharedStyles.pageBreadcrumbLink}>{dict.nav.home}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <Link href={`/${locale}/urunler`} className={sharedStyles.pageBreadcrumbLink}>{productsLabel}</Link>
            <span className={sharedStyles.pageBreadcrumbSep}>›</span>
            <span>{data.title}</span>
          </nav>
          <span className={styles.badge} style={{ marginBottom: "16px", display: "inline-block" }}>{data.badge}</span>
          <h1 className={sharedStyles.pageHeroTitle}>{data.title}</h1>
          <p className={sharedStyles.pageHeroDesc}>{data.desc}</p>
        </div>
      </section>

      {/* Main Details Section */}
      <section className={styles.detailContainer} aria-label={`${data.title} Ürün Detayları`}>
        {/* Left Column */}
        <div className={styles.mainContent}>
          <article className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>{dict.gasDetail.description}</h2>
            <p style={{ color: "var(--gray-600)", lineHeight: "1.8", fontSize: "1rem" }}>
              {data.content}
            </p>
          </article>

          <article className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>{dict.gasDetail.features}</h2>
            <ul className={styles.featureList} role="list" style={{ marginTop: "16px" }}>
              {data.features.map((feat, idx) => (
                <li key={idx} className={styles.featureItem} style={{ fontSize: "0.98rem" }}>
                  <span className={styles.checkIcon} style={{ fontSize: "1.1rem" }}>✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>{dict.gasDetail.usage}</h2>
            <div className={styles.usageGrid}>
              {data.usageAreas.map((area, idx) => (
                <div key={idx} className={styles.usageItem}>
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>{supplyModelsTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "24px" }}>
              {data.supplyModels.map((model, idx) => (
                <div key={idx} className={styles.supplyModelItem}>
                  <h3 className={styles.supplyModelTitle}>{model.title}</h3>
                  <p className={styles.supplyModelDesc}>{model.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <div className={styles.warningBox}>
            <span className={styles.warningTitle} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>{safetyStandardLabel}</span>
            </span>
            <p>{data.safetyWarning}</p>
          </div>
        </div>

        {/* Right Column */}
        <aside className={styles.sidebar}>
          <div className={styles.sectionBlock}>
            <h2 className={styles.blockTitle}>{dict.gasDetail.specs}</h2>
            <table className={styles.specTable}>
              <tbody>
                {data.specifications.map((spec, idx) => (
                  <tr key={idx} className={styles.specRow}>
                    <th className={styles.specLabel}>{spec.label}</th>
                    <td className={styles.specValue}>{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>



          <div className={styles.ctaWidget}>
            <h3>{dict.gasDetail.ctaTitle}</h3>
            <p>
              {data.title} {dict.gasDetail.ctaDesc}
            </p>
            <Link
              href={`/${locale}/iletisim`}
              id="get-quote-button"
              className="btn btn-white"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {dict.gasDetail.ctaButton}
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
