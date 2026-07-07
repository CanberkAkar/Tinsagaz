import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import sharedStyles from "../../shared.module.css";
import styles from "../gazlar/sinai-gazlar/sinai-gazlar.module.css";
import kuruBuzStyles from "./kuru-buz.module.css";
import { Locale, getDictionary } from "../../dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

const pageContent = {
  tr: {
    title: "Kuru Buz (Katı CO₂)",
    badge: "-78.5°C",
    desc: "Gıda muhafazası, soğuk zincir lojistiği, endüstriyel temizlik (kuru buz temizliği) ve eğlence sektörü (özel efektler) için -78.5°C sıcaklıkta üretilen, yüksek saflıkta ve doğrudan gaz fazına geçen karbondioksit buz blokları ve peletleri.",
    content: [
      "Kuru buz, sıvı karbondioksitin (CO₂) yüksek basınç altında katılaştırılmasıyla elde edilen ve -78,5°C sıcaklığa sahip katı karbondioksittir. Normal buzdan farklı olarak eriyerek sıvıya dönüşmez; süblimleşme adı verilen fiziksel süreçle doğrudan gaz fazına geçer. Bu özelliği sayesinde su, nem veya atık bırakmadan soğutma ve temizlik uygulamalarında güvenle kullanılmaktadır.",
      "Yüksek soğutma kapasitesi, hijyenik yapısı ve kalıntı oluşturmayan özelliği sayesinde kuru buz; gıda taşımacılığı, ilaç ve sağlık sektörü, laboratuvarlar, lojistik, etkinlik organizasyonları, endüstriyel prosesler ve soğuk zincir uygulamalarında yaygın olarak tercih edilmektedir. Aynı zamanda sis efektleri, biyolojik numune taşımacılığı ve sıcaklığa duyarlı ürünlerin korunmasında da güvenilir bir çözüm sunmaktadır.",
      "Firmamız, farklı sektörlerin ihtiyaçlarına uygun ebat ve miktarlarda yüksek saflıkta kuru buz tedarik ederek, güvenli depolama ve doğru kullanım konusunda teknik destek sağlamaktadır."
    ],
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
    ],
    cleaningContent: {
      title: "Kuru Buz Temizleme Hizmetleri & Sistemleri",
      introParagraphs: [
        "Kuru buzun en önemli kullanım alanlarından biri de endüstriyel temizlik uygulamalarıdır. Kuru buz temizleme yöntemi, katı CO₂ peletlerinin özel ekipmanlarla yüksek hızda yüzeye püskürtülmesi prensibiyle çalışır. Çarpma etkisi, ani sıcaklık farkı (termal şok) ve süblimleşme sayesinde yağ, karbon, boya kalıntıları, reçine, yapıştırıcı ve diğer kirleticiler yüzeyden etkili bir şekilde uzaklaştırılır.",
        "Temizlik işlemi sırasında kuru buz tamamen gaz fazına geçtiğinden su, kimyasal veya aşındırıcı malzeme kalıntısı oluşmaz. Bu sayede ekipman sökülmeden yerinde temizlik yapılabilir, üretim duruş süreleri azaltılır ve hassas makine yüzeyleri zarar görmeden temizlenebilir.",
        "Kuru buz temizleme teknolojisi; otomotiv, demir-çelik, enerji, plastik ve kauçuk üretimi, gıda tesisleri, savunma sanayi, denizcilik, matbaa, elektrik panoları, üretim hatları ve ağır sanayi uygulamalarında güvenle kullanılmaktadır. Geleneksel temizlik yöntemlerine göre daha hızlı, daha güvenli ve çevre dostu olması nedeniyle modern endüstrinin en etkili bakım çözümlerinden biri olarak öne çıkmaktadır."
      ],
      usageAreasTitle: "Kuru Buzun Başlıca Kullanım Alanları",
      usageAreas: [
        "Endüstriyel kuru buz temizliği",
        "Gıda ve soğuk zincir taşımacılığı",
        "İlaç ve medikal ürün lojistiği",
        "Laboratuvar uygulamaları",
        "Kimya ve üretim tesisleri",
        "Sis ve sahne efektleri",
        "Biyolojik numune taşımacılığı",
        "Makine, kalıp ve üretim hattı temizliği",
        "Otomotiv, denizcilik ve ağır sanayi uygulamaları"
      ],
      usageSubtext: "Firmamız, kuru buz tedariğinin yanı sıra endüstriyel kuru buz temizleme hizmetlerini de uzman ekibi ve profesyonel ekipmanlarıyla gerçekleştirmektedir. İhtiyacınıza uygun çözümü belirlemek için ücretsiz keşif ve teknik danışmanlık hizmeti sunarak işletmenizin bakım süreçlerini daha verimli ve sürdürülebilir hale getiriyoruz.",
      systemsTitle: "Kuru Buz Temizleme Sistemleri",
      systemsParagraphs: [
        "Kuru buz temizleme, endüstriyel ekipmanların ve hassas yüzeylerin zarar görmeden temizlenmesini sağlayan, çevre dostu ve yüksek verimlilik sunan modern bir temizlik teknolojisidir. Bu yöntemde kullanılan kuru buz peletleri, katı karbondioksitten (CO₂) üretilir ve yaklaşık -78,5°C sıcaklığa sahiptir. Peletler özel ekipmanlar aracılığıyla yüksek basınç altında yüzeye püskürtülerek kir, yağ, karbon birikintileri, boya kalıntıları, reçine ve diğer kontaminasyonları etkili bir şekilde yüzeyden uzaklaştırır.",
        "Kuru buz temizliği; kinetik etki, termal şok ve süblimleşme olmak üzere üç temel prensibin birleşimiyle çalışır. Yüzeye temas eden kuru buz peletleri, kir tabakasını çatlatırken aynı anda katı halden doğrudan gaz fazına geçer. Bu sayede temizlik sonrasında su, kimyasal veya aşındırıcı malzeme kalıntısı oluşmaz ve ikincil atık meydana gelmez.",
        "Geleneksel kumlama, solvent veya basınçlı su uygulamalarına kıyasla ekipman sökülmeden yerinde uygulanabilmesi, üretim duruş süreleri azaltması ve hassas yüzeylere zarar vermemesi sayesinde kuru buz temizleme teknolojisi günümüzde birçok sektörün tercih ettiği profesyonel bakım yöntemlerinden biri haline gelmiştir.",
        "Firmamız, farklı sektörlerin ihtiyaçlarına uygun kuru buz temizleme çözümleri sunarak üretim verimliliğini artırmayı, bakım maliyetlerini düşürmeyi ve işletmelerin kesintisiz faaliyet göstermesine katkı sağlamayı hedeflemektedir. Deneyimli teknik ekibimiz, uygulama öncesinde ücretsiz keşif yaparak en uygun temizlik yöntemini belirler ve işlemi güvenli, hızlı ve yüksek kalite standartlarında gerçekleştirir."
      ],
      advantagesTitle: "Kuru Buz Temizliğinin Avantajları",
      advantages: [
        "Kimyasal kullanılmadan çevre dostu temizlik sağlar.",
        "Su kullanılmadığı için nem ve korozyon riski oluşturmaz.",
        "İkincil atık bırakmaz; temizlik sonrası ek işlem gerektirmez.",
        "Makine ve ekipmanların sökülmesine gerek kalmadan yerinde uygulanabilir.",
        "Üretim duruş sürelerini ve bakım maliyetlerini önemli ölçüde azaltır.",
        "Hassas yüzeylere zarar vermeden etkili temizlik sunar.",
        "Elektrik panoları, üretim hatları ve mekanik ekipmanlarda uygun koşullarda güvenle uygulanabilir."
      ],
      cleaningUsageTitle: "Kullanım Alanları",
      cleaningUsageParagraphs: [
        "Kuru buz temizleme teknolojisi; otomotiv, demir-çelik, enerji, plastik ve kauçuk üretimi, gıda üretim tesisleri, savunma sanayi, denizcilik, kimya tesisleri, matbaalar, elektrik ve elektronik sistemler, kalıp temizliği, üretim hatları, jeneratörler, motorlar, konveyör sistemleri ve birçok ağır sanayi uygulamasında güvenle kullanılmaktadır.",
        "Kuru buz temizleme, işletmelerin bakım süreçlerini hızlandırırken ekipman ömrünü uzatan, iş güvenliğini destekleyen ve sürdürülebilir üretim hedeflerine katkı sağlayan yenilikçi bir endüstriyel temizlik çözümüdür."
      ]
    }
  },
  en: {
    title: "Dry Ice (Solid CO₂)",
    badge: "-78.5°C",
    desc: "Carbon dioxide ice blocks and pellets produced at -78.5°C with high purity, which sublimate directly into gas, for food preservation, cold chain logistics, industrial cleaning (dry ice blasting), and entertainment (special effects).",
    content: [
      "Dry ice is solid carbon dioxide (CO₂) obtained by solidifying liquid carbon dioxide under high pressure and has a temperature of -78.5°C. Unlike regular ice, it does not melt into a liquid; it transitions directly into the gas phase through a physical process called sublimation. Thanks to this feature, it is safely used in cooling and cleaning applications without leaving water, moisture, or residue.",
      "Due to its high cooling capacity, hygienic structure, and non-residue forming properties, dry ice is widely preferred in food transportation, pharmaceutical and healthcare sectors, laboratories, logistics, event organizations, industrial processes, and cold chain applications. It also offers a reliable solution for fog effects, biological sample transport, and the protection of temperature-sensitive products.",
      "Our company supplies high-purity dry ice in various sizes and quantities suitable for the needs of different sectors, providing technical support for safe storage and correct usage."
    ],
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
    ],
    cleaningContent: {
      title: "Dry Ice Cleaning Services & Systems",
      introParagraphs: [
        "One of the most important usage areas of dry ice is industrial cleaning applications. The dry ice cleaning method works on the principle of blasting solid CO₂ pellets onto the surface at high speeds using specialized equipment. Thanks to the impact effect, sudden temperature difference (thermal shock), and sublimation, oil, carbon, paint residues, resin, adhesive, and other contaminants are effectively removed from the surface.",
        "Since dry ice transitions completely into the gas phase during the cleaning process, no water, chemical, or abrasive material residue is formed. This allows for on-site cleaning without dismantling equipment, reducing production downtime and cleaning sensitive machine surfaces without damage.",
        "Dry ice cleaning technology is safely used in automotive, iron-steel, energy, plastic and rubber production, food facilities, defense industry, maritime, printing, electrical panels, production lines, and heavy industry applications. It stands out as one of the most effective maintenance solutions in modern industry because it is faster, safer, and more environmentally friendly than traditional cleaning methods."
      ],
      usageAreasTitle: "Key Usage Areas of Dry Ice",
      usageAreas: [
        "Industrial dry ice cleaning",
        "Food and cold chain transport",
        "Pharmaceutical and medical product logistics",
        "Laboratory applications",
        "Chemical and production facilities",
        "Fog and stage effects",
        "Biological sample transport",
        "Machine, mold, and production line cleaning",
        "Automotive, maritime, and heavy industry applications"
      ],
      usageSubtext: "In addition to dry ice supply, our company performs industrial dry ice cleaning services with its expert team and professional equipment. We offer free inspection and technical consultancy to determine the solution that fits your needs, making your business's maintenance processes more efficient and sustainable.",
      systemsTitle: "Dry Ice Cleaning Systems",
      systemsParagraphs: [
        "Dry ice cleaning is a modern, eco-friendly, and highly efficient cleaning technology that allows for cleaning industrial equipment and sensitive surfaces without damage. The dry ice pellets used in this method are produced from solid carbon dioxide (CO₂) and have a temperature of approximately -78.5°C. The pellets are blasted onto the surface under high pressure using specialized equipment, effectively removing dirt, oil, carbon deposits, paint residues, resin, and other contaminants.",
        "Dry ice cleaning works through a combination of three basic principles: kinetic effect, thermal shock, and sublimation. Upon contact with the surface, the dry ice pellets crack the dirt layer while simultaneously transitioning from solid directly to the gas phase. Thus, no water, chemical, or abrasive residue is left after cleaning, and no secondary waste is generated.",
        "Compared to traditional sandblasting, solvent, or pressurized water applications, dry ice cleaning technology has become one of the preferred professional maintenance methods in many industries today because it can be applied on-site without dismantling equipment, reduces production downtime, and does not damage sensitive surfaces.",
        "Our company aims to increase production efficiency, reduce maintenance costs, and contribute to the uninterrupted operations of businesses by offering dry ice cleaning solutions tailored to the needs of different sectors. Our experienced technical team conducts a free on-site discovery before application to determine the most appropriate cleaning method and performs the process in compliance with safety, speed, and high-quality standards."
      ],
      advantagesTitle: "Advantages of Dry Ice Cleaning",
      advantages: [
        "Provides eco-friendly cleaning without the use of chemicals.",
        "Since no water is used, it does not pose a risk of moisture and corrosion.",
        "Leaves no secondary waste; requires no additional action after cleaning.",
        "Can be applied on-site without the need to dismantle machines and equipment.",
        "Significantly reduces production downtime and maintenance costs.",
        "Offers effective cleaning without damaging sensitive surfaces.",
        "Can be safely applied to electrical panels, production lines, and mechanical equipment under appropriate conditions."
      ],
      cleaningUsageTitle: "Usage Areas",
      cleaningUsageParagraphs: [
        "Dry ice cleaning technology is safely used in automotive, iron-steel, energy, plastic and rubber production, food production facilities, defense industry, maritime, chemical plants, printing houses, electrical and electronic systems, mold cleaning, production lines, generators, motors, conveyor systems, and many heavy industry applications.",
        "Dry ice cleaning is an innovative industrial cleaning solution that speeds up the maintenance processes of businesses, extends equipment life, supports occupational safety, and contributes to sustainable production goals."
      ]
    }
  },
  de: {
    title: "Trockeneis (Festes CO₂)",
    badge: "-78.5°C",
    desc: "Bei -78,5 °C hergestelltes, hochreines Kohlendioxid-Eis in Form von Blöcken und Pellets, das direkt in die Gasphase übergeht. Geeignet für Lebensmitteleinzelhandel, Kühlkettenlogistik, industrielle Reinigung (Trockeneisstrahlen) und Spezialeffekte.",
    content: [
      "Trockeneis ist festes Kohlendioxid (CO₂), das durch Verfestigung von flüssigem Kohlendioxid unter hohem Druck gewonnen wird und eine Temperatur von -78,5 °C hat. Im Gegensatz zu normalem Eis schmilzt es nicht zu einer Flüssigkeit, sondern geht durch einen physikalischen Prozess namens Sublimation direkt in die Gasphase über. Dank dieser Eigenschaft wird es bei Kühl- und Reinigungsanwendungen sicher eingesetzt, ohne Wasser, Feuchtigkeit oder Rückstände zu hinterlassen.",
      "Aufgrund seiner hohen Kühlkapazität, seiner hygienischen Struktur und seiner rückstandsfreien Eigenschaften wird Trockeneis im Lebensmitteleinzelhandel, in der Pharma- und Gesundheitsbranche, in Labors, in der Logistik, bei Veranstaltungen, in industriellen Prozessen und in der Kühlkette bevorzugt eingesetzt. Es bietet auch eine zuverlässige Lösung für Nebeleffekte, den Transport biologischer Proben und den Schutz temperaturempfindlicher Produkte.",
      "Unser Unternehmen liefert hochreines Trockeneis in verschiedenen Größen und Mengen, die auf die Bedürfnisse verschiedener Branchen zugeschnitten sind, und bietet technische Unterstützung bei der sicheren Lagerung und ordnungsgemäßen Verwendung."
    ],
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
    ],
    cleaningContent: {
      title: "Trockeneis-Reinigungsdienste & -Systeme",
      introParagraphs: [
        "Eines der wichtigsten Einsatzgebiete von Trockeneis sind industrielle Reinigungsanwendungen. Die Trockeneisreinigungsmethode basiert auf dem Prinzip des Aufprühens von festen CO₂-Pellets mit hoher Geschwindigkeit auf die Oberfläche mittels spezieller Geräte. Dank der Aufprallwirkung, des plötzlichen Temperaturunterschieds (Thermoschock) und der Sublimation werden Öl, Kohle, Farbrückstände, Harz, Klebstoff und andere Verunreinigungen effektiv von der Oberfläche entfernt.",
        "Da Trockeneis während des Reinigungsprozesses vollständig in die Gasphase übergeht, entstehen keine Wasser-, Chemie- oder Strahlmittelrückstände. Dies ermöglicht eine Vor-Ort-Reinigung ohne Demontage der Geräte, was Produktionsausfallzeiten reduziert und empfindliche Maschinenoberflächen beschädigungsfrei reinigt.",
        "Die Trockeneisreinigungstechnologie wird sicher im Automobilbau, in der Eisen- und Stahlindustrie, in der Energiewirtschaft, in der Kunststoff- und Gummiherstellung, in Lebensmittelbetrieben, in der Verteidigungsindustrie, in der Schifffahrt, in Druckereien, in Schaltschränken, in Produktionslinien und in der Schwerindustrie eingesetzt. Sie zeichnet sich als eine der effektivsten Wartungslösungen in der modernen Industrie aus, da sie schneller, sicherer und umweltfreundlicher als herkömmliche Reinigungsmethoden ist."
      ],
      usageAreasTitle: "Hauptanwendungsbereiche von Trockeneis",
      usageAreas: [
        "Industrielle Trockeneisreinigung",
        "Lebensmittel- und Kühlkettentransport",
        "Logistik für Pharma- und Medizinprodukte",
        "Laboranwendungen",
        "Chemie- und Produktionsanlagen",
        "Nebel- und Bühneneffekte",
        "Transport biologischer Proben",
        "Maschinen-, Formen- und Produktionslinienreinigung",
        "Automobil-, Schifffahrts- und Schwerindustrieanwendungen"
      ],
      usageSubtext: "Neben der Trockeneisversorgung führt unser Unternehmen mit seinem Expertenteam und professionellen Geräten auch industrielle Trockeneisreinigungsdienste durch. Wir bieten eine kostenlose Inspektion und technische Beratung an, um die für Ihre Bedürfnisse passende Lösung zu ermitteln und die Wartungsprozesse Ihres Unternehmens effizienter und nachhaltiger zu gestalten.",
      systemsTitle: "Trockeneis-Reinigungssysteme",
      systemsParagraphs: [
        "Die Trockeneisreinigung is eine moderne, umweltfreundliche und hocheffiziente Reinigungstechnologie, die die beschädigungsfreie Reinigung von Industrieanlagen und empfindlichen Oberflächen ermöglicht. Die bei dieser Methode verwendeten Trockeneispellets werden aus festem Kohlendioxid (CO₂) hergestellt und haben eine Temperatur von ca. -78,5 °C. Die Pellets werden unter hohem Druck mit speziellen Geräten auf die Oberfläche gestrahlt und entfernen Schmutz, Öl, Kohleablagerungen, Farbrückstände, Harz und andere Verunreinigungen effektiv.",
        "Die Trockeneisreinigung funktioniert durch eine Kombination aus drei Grundprinzipien: kinetische Wirkung, Thermoschock und Sublimation. Beim Kontakt mit der Oberfläche lassen die Trockeneispellets die Schmutzschicht aufplatzen und gehen gleichzeitig vom festen Zustand direkt in die Gasphase über. Somit verbleiben nach der Reinigung keine Wasser-, Chemie- oder Schleifmittelrückstände und es entsteht kein Sekundärabfall.",
        "Im Vergleich zu herkömmlichen Sandstrahl-, Lösungsmittel- oder Druckwasseranwendungen hat sich die Trockeneisreinigungstechnologie heute in vielen Branchen zu einer der bevorzugten professionellen Wartungsmethoden entwickelt, da sie vor Ort ohne Demontage der Geräte angewendet werden kann, Produktionsausfallzeiten verkürzt und empfindliche Oberflächen nicht beschädigt.",
        "Unser Unternehmen zielt darauf ab, die Produktionseffizienz zu steigern, Wartungskosten zu senken und zum reibungslosen Betrieb von Unternehmen beizutragen, indem wir Trockeneisreinigungslösungen anbieten, die auf die Bedürfnisse verschiedener Branchen zugeschnitten sind. Unser erfahrenes technisches Team führt vor der Anwendung eine kostenlose Vor-Ort-Besichtigung durch, um die am besten geeignete Reinigungsmethode zu ermitteln, und führt den Prozess unter Einhaltung von Sicherheits-, Geschwindigkeits- und Qualitätsstandards durch."
      ],
      advantagesTitle: "Vorteile der Trockeneisreinigung",
      advantages: [
        "Ermöglicht eine umweltfreundliche Reinigung ohne den Einsatz von Chemikalien.",
        "Da kein Wasser verwendet wird, besteht keine Gefahr von Feuchtigkeit und Korrosion.",
        "Hinterlässt keine Sekundärabfälle; nach der Reinigung sind keine zusätzlichen Maßnahmen erforderlich.",
        "Kann vor Ort angewendet werden, ohne dass Maschinen und Geräte demontiert werden müssen.",
        "Reduziert Produktionsausfallzeiten und Wartungskosten erheblich.",
        "Bietet eine effektive Reinigung ohne Beschädigung empfindlicher Oberflächen.",
        "Kann unter geeigneten Bedingungen sicher an Schaltschränken, Produktionslinien und mechanischen Geräten angewendet werden."
      ],
      cleaningUsageTitle: "Anwendungsbereiche",
      cleaningUsageParagraphs: [
        "Die Trockeneisreinigungstechnologie wird sicher in der Automobilindustrie, der Eisen- und Stahlindustrie, der Energiewirtschaft, der Kunststoff- und Gummiherstellung, in Lebensmittelproduktionsanlagen, in der Verteidigungsindustrie, in der Schifffahrt, in Chemieanlagen, in Druckereien, in elektrischen und elektronischen Systemen, bei der Formenreinigung, in Produktionslinien, Generatoren, Motoren, Fördersystemen und vielen Anwendungen der Schwerindustrie eingesetzt.",
        "Die Trockeneisreinigung ist eine innovative industrielle Reinigungslösung, die die Wartungsprozesse von Unternehmen beschleunigt, die Lebensdauer der Geräte verlängert, die Arbeitssicherheit unterstützt und zu nachhaltigen Produktionszielen beiträgt."
      ]
    }
  },
  fr: {
    title: "Glace Sèche (CO₂ Solide)",
    badge: "-78.5°C",
    desc: "Blocs et pellets de glace carbonique produits à -78,5°C avec une grande pureté, qui se subliment directement en gaz, pour la conservation des aliments, la logistique de la chaîne du froid, le nettoyage industriel (cryogénie) et les effets spéciaux.",
    content: [
      "La glace sèche est du dioxyde de carbone solide (CO₂) obtenu en solidifiant du dioxyde de carbone liquide sous haute pression et a une température de -78,5°C. Contrairement à la glace ordinaire, elle ne fond pas en liquide; elle passe directement à l'état gazeux par un processus physique appelé sublimation. Grâce à cette caractéristique, elle est utilisée en toute sécurité dans les applications de refroidissement et de nettoyage sans laisser d'eau, d'humidité ou de résidus.",
      "En raison de sa grande capacité de refroidissement, de sa structure hygiénique et de ses propriétés sans résidus, la glace sèche est largement privilégiée dans le transport alimentaire, les secteurs pharmaceutique et de la santé, les laboratoires, la logistique, l'organisation d'événements, les processus industriels et la chaîne du froid. Elle offre également une solution fiable pour les effets de brouillard, le transport d'échantillons biologiques et la protection des produits sensibles à la température.",
      "Notre entreprise fournit de la glace sèche de haute pureté dans différentes tailles et quantités adaptées aux besoins de divers secteurs, tout en offrant un soutien technique pour un stockage sûr et une utilisation correcte."
    ],
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
    ],
    cleaningContent: {
      title: "Services & Systèmes de Nettoyage Cryogénique",
      introParagraphs: [
        "L'un des domaines d'application les plus importants de la glace sèche est le nettoyage industriel. La méthode de nettoyage cryogénique repose sur le principe de la projection de pellets de CO₂ solide à grande vitesse sur la surface à l'aide d'équipements spécialisés. Grâce à l'effet d'impact, à la différence de température soudaine (choc thermique) et à la sublimation, l'huile, le carbone, les résidus de peinture, la résine, la colle et d'autres contaminants sont efficacement éliminés de la surface.",
        "Comme la glace carbonique passe entièrement à l'état gazeux pendant le processus de nettoyage, il ne se forme aucun résidu d'eau, de produit chimique ou de matériau abrasif. Cela permet un nettoyage sur place sans démonter l'équipement, réduisant ainsi les temps d'arrêt de production et nettoyant les surfaces sensibles des machines sans les endommager.",
        "La technologie de nettoyage cryogénique est utilisée en toute sécurité dans l'automobile, la sidérurgie, l'énergie, la production de plastique et de caoutchouc, l'industrie alimentaire, l'industrie de la défense, le secteur maritime, l'imprimerie, les armoires électriques, les lignes de production et les applications de l'industrie lourde. Elle s'impose comme l'une des solutions de maintenance les plus efficaces de l'industrie moderne car elle est plus rapide, plus sûre et plus respectueuse de l'environnement que les méthodes de nettoyage traditionnelles."
      ],
      usageAreasTitle: "Principaux Domaines d'Utilisation de la Glace Sèche",
      usageAreas: [
        "Nettoyage cryogénique industriel",
        "Transport de produits alimentaires et chaîne du froid",
        "Logistique de produits pharmaceutiques et médicaux",
        "Applications de laboratoire",
        "Installations chimiques et de production",
        "Effets de fumée et de scène",
        "Transport d'échantillons biologiques",
        "Nettoyage de machines, de moules et de lignes de production",
        "Applications de l'automobile, du maritime et de l'industrie lourde"
      ],
      usageSubtext: "En plus de la fourniture de glace sèche, notre entreprise réalise des services de nettoyage cryogénique industriel avec son équipe d'experts et ses équipements professionnels. Nous proposons une inspection gratuite et des conseils techniques pour déterminer la solution adaptée à vos besoins, rendant les processus de maintenance de votre entreprise plus efficaces et durables.",
      systemsTitle: "Systèmes de Nettoyage Cryogénique",
      systemsParagraphs: [
        "Le nettoyage cryogénique est une technologie de nettoyage moderne, écologique et très efficace qui permet de nettoyer les équipements industriels et les surfaces sensibles sans les endommager. Les pellets de glace sèche utilisés dans cette méthode sont produits à partir de dioxyde de carbone solide (CO₂) et ont une température d'environ -78,5°C. Les pellets sont projetés sur la surface sous haute pression à l'aide d'équipements spécialisés, éliminant efficacement la saleté, l'huile, les dépôts de carbone, les résidus de peinture, la résine et d'autres contaminants.",
        "Le nettoyage cryogénique combine trois principes fondamentaux : l'effet cinétique, le choc thermique et la sublimation. Au contact de la surface, les pellets de glace sèche fissurent la couche de saleté tout en passant instantanément de l'état solide à l'état gazeux. Ainsi, aucun résidu d'eau, de produit chimique ou d'abrasif n'est laissé après le nettoyage, et aucun déchet secondaire n'est généré.",
        "Par rapport aux applications traditionnelles de sablage, de solvant ou d'eau sous pression, la technologie de nettoyage cryogénique est devenue l'une des méthodes de maintenance professionnelle préférées de nombreuses industries aujourd'hui car elle peut être appliquée sur place sans démonter les équipements, réduit les temps d'arrêt de production et n'endommage pas les surfaces sensibles.",
        "Notre entreprise vise à accroître l'efficacité de la production, à réduire les coûts de maintenance et à contribuer aux opérations ininterrompues des entreprises en proposant des solutions de nettoyage cryogénique adaptées aux besoins de différents secteurs. Notre équipe technique expérimentée réalise un diagnostic gratuit sur site avant l'application pour déterminer la méthode de nettoyage la plus appropriée et effectue le processus dans le respect des normes de sécurité, de rapidité et de qualité supérieure."
      ],
      advantagesTitle: "Avantages du Nettoyage Cryogénique",
      advantages: [
        "Assure un nettoyage écologique sans l'utilisation de produits chimiques.",
        "Comme aucune eau n'est utilisée, cela ne pose aucun risque d'humidité ou de corrosion.",
        "Ne laisse aucun déchet secondaire ; ne nécessite aucune action supplémentaire après le nettoyage.",
        "Peut être appliqué sur place sans qu'il soit nécessaire de démonter les machines et équipements.",
        "Réduit considérablement les temps d'arrêt de production et les coûts de maintenance.",
        "Offre un nettoyage efficace sans endommager les surfaces sensibles.",
        "Peut être appliqué en toute sécurité sur les armoires électriques, les lignes de production et les équipements mécaniques dans des conditions appropriées."
      ],
      cleaningUsageTitle: "Domaines d'Application",
      cleaningUsageParagraphs: [
        "La technologie de nettoyage cryogénique est utilisée en toute sécurité dans l'automobile, la sidérurgie, l'énergie, la production de plastique et de caoutchouc, les installations de production alimentaire, l'industrie de la défense, le secteur maritime, les usines chimiques, les imprimeries, les systèmes électriques et électroniques, le nettoyage de moules, les lignes de production, les générateurs, les moteurs, les convoyeurs et de nombreuses applications de l'industrie lourde.",
        "Le nettoyage cryogénique est une solution de nettoyage industriel innovante qui accélère les processus de maintenance des entreprises, prolonge la durée de vie des équipements, renforce la sécurité au travail et contribue aux objectifs de production durable."
      ]
    }
  },
  it: {
    title: "Ghiaccio Secco (CO₂ Solido)",
    badge: "-78.5°C",
    desc: "Blocchi e pellet di ghiaccio carbonico prodotti a -78.5°C ad elevata purezza, che sublimano direttamente in gas, per conservazione alimentare, logistica della catena del freddo, pulizia industriale (sabbiatura criogenica) ed effetti speciali.",
    content: [
      "Il ghiaccio secco è anidride carbonica solida (CO₂) ottenuta solidificando l'anidride carbonica liquida ad alta pressione e ha una temperatura di -78,5°C. A differenza del comune ghiaccio, non si scioglie in liquido; passa direttamente alla fase gassosa attraverso un processo fisico chiamato sublimazione. Grazie a questa caratteristica, viene utilizzato in sicurezza nelle applicazioni di raffreddamento e pulizia senza lasciare acqua, umidità o residui.",
      "Grazie alla sua elevata capacità di raffreddamento, alla struttura igienica e alle proprietà anti-residuo, il ghiaccio secco è ampiamente preferito nel trasporto alimentare, nei settori farmaceutico e sanitario, nei laboratori, nella logistica, negli eventi, nei processi industriali e nella catena del freddo. Offre inoltre una soluzione affidabile per effetti nebbia, trasporto di campioni biologici e protezione di prodotti sensibili alla temperatura.",
      "La nostra azienda fornisce ghiaccio secco ad alta purezza in varie dimensioni e quantità adatte alle esigenze di diversi settori, fornendo supporto tecnico per uno stoccaggio sicuro e un corretto utilizzo."
    ],
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
      { label: "Formula Chimique", value: "CO₂" },
      { label: "Densità", value: "~1.56 g/cm³" },
      { label: "Temperatura", value: "-78.5 °C" },
      { label: "Aspetto", value: "Solido Bianco Opaco" },
      { label: "Grado di Purezza", value: "≥ 99.9%" }
    ],
    cleaningContent: {
      title: "Servizi e Sistemi di Sabbiatura Criogenica",
      introParagraphs: [
        "Una delle aree di applicazione più importanti del ghiaccio secco è rappresentata dalla pulizia industriale. Il metodo di pulizia criogenica funziona spruzzando pellet di CO₂ solida ad alta velocità sulla superficie mediante attrezzature speciali. Grazie all'effetto d'impatto, all'improvviso sbalzo termico (shock termico) e alla sublimazione, olio, carbonio, residui di vernice, resine, adesivi e altri contaminanti vengono rimossi efficacemente dalla superficie.",
        "Poiché il ghiaccio secco passa interamente alla fase gassosa durante il processo di pulizia, non si formano residui di acqua, sostanze chimiche o materiali abrasivi. Ciò consente la pulizia in loco senza smontare le apparecchiature, riducendo i tempi di fermo produttivo e pulendo le superfici delicate dei macchinari senza danneggiarle.",
        "La tecnologia di sabbiatura criogenica è utilizzata in sicurezza nell'industria automobilistica, siderurgica, energetica, nella produzione di plastica e gomma, negli impianti alimentari, nell'industria della difesa, nel settore marittimo, nella stampa, nei quadri elettrici, nelle linee di produzione e nelle applicazioni dell'industria pesante. Si distingue come una delle soluzioni di manutenzione più efficaci dell'industria moderna poiché è più rapida, più sicura e più rispettosa dell'ambiente rispetto ai metodi di pulizia tradizionali."
      ],
      usageAreasTitle: "Principali Aree di Utilizzo del Ghiaccio Secco",
      usageAreas: [
        "Pulizia industriale con ghiaccio secco",
        "Trasporto alimentare e catena del freddo",
        "Logistica di prodotti farmaceutici e sanitari",
        "Applicazioni di laboratorio",
        "Impianti chimici e di produzione",
        "Effetti nebbia e di scena",
        "Trasporto di campioni biologici",
        "Pulizia di macchinari, stampi e linee di produzione",
        "Applicazioni automobilistiche, marittime e dell'industria pesante"
      ],
      usageSubtext: "Oltre alla fornitura di ghiaccio secco, la nostra azienda esegue servizi di pulizia criogenica industriale con il suo team di esperti e attrezzature professionali. Offriamo un sopralluogo gratuito e consulenza tecnica per determinare la soluzione adatta alle vostre esigenze, rendendo i processi di manutenzione della vostra azienda più efficienti e sostenibili.",
      systemsTitle: "Sistemi di Pulizia con Ghiaccio Secco",
      systemsParagraphs: [
        "La pulizia con ghiaccio secco è una tecnologia moderna, ecologica e altamente efficiente che consente di pulire attrezzature industriali e superfici delicate senza danneggiarle. I pellet di ghiaccio secco utilizzati in questo metodo sono prodotti da anidride carbonica solida (CO₂) e hanno una temperatura di circa -78,5°C. I pellet vengono proiettati sulla superficie ad alta pressione utilizzando attrezzature specializzate, rimuovendo efficacemente sporco, olio, depositi carboniosi, residui di vernice, resine e altri contaminanti.",
        "La sabbiatura criogenica funziona attraverso la combinazione di tre principi fondamentali: effetto cinetico, shock termico e sublimazione. Al contatto con la superficie, i pellet di ghiaccio secco incrinano lo strato di sporco e contemporaneamente passano dallo stato solido direttamente a quello gassoso. In questo modo, dopo la pulizia non rimangono residui di acqua, agenti chimici o abrasivi e non si generano rifiuti secondari.",
        "Rispetto alla sabbiatura tradizionale, all'uso di solventi o di acqua a pressione, la tecnologia di pulizia con ghiaccio secco è diventata oggi uno dei metodi di manutenzione professionale preferiti in molti settori perché può essere applicata in loco senza smontare le apparecchiature, riduce i tempi di fermo produttivo e non danneggia le superfici delicate.",
        "La nostra azienda mira ad aumentare l'efficienza produttiva, ridurre i costi di manutenzione e contribuire alla continuità operativa delle imprese offrendo soluzioni di pulizia con ghiaccio secco su misura per le esigenze di diversi settori. Il nostro team tecnico esperto esegue un sopralluogo gratuito prima dell'applicazione per determinare il metodo di pulizia più idoneo ed esegue il processo nel rispetto degli standard di sicurezza, rapidità e alta qualità."
      ],
      advantagesTitle: "Vantaggi della Pulizia con Ghiaccio Secco",
      advantages: [
        "Fornisce una pulizia ecologica senza l'uso di sostanze chimiche.",
        "Poiché non viene utilizzata acqua, non comporta rischi di umidità e corrosione.",
        "Non lascia residui secondari; non richiede operazioni aggiuntive dopo la pulizia.",
        "Può essere applicato in loco senza necessità di smontare macchinari ed attrezzature.",
        "Riduce significativamente i tempi di fermo macchina e i costi di manutenzione.",
        "Offre un pulizia efficace senza danneggiare le superfici delicate.",
        "Può essere applicato in sicurezza su quadri elettrici, linee di produzione e apparecchiature meccaniche in condizioni adeguate."
      ],
      cleaningUsageTitle: "Aree di Applicazione",
      cleaningUsageParagraphs: [
        "La tecnologia di sabbiatura criogenica è impiegata in sicurezza nei settori automobilistico, siderurgico, energetico, della plastica e gomma, negli impianti alimentari, nell'industria della difesa, nel settore marittimo, chimico, nelle tipografie, nei sistemi elettrici ed elettronici, nella pulizia degli stampi, nelle linee di produzione, generatori, motori, sistemi di trasporto e in molte applicazioni dell'industria pesante.",
        "La pulizia con ghiaccio secco è una soluzione di pulizia industriale innovativa che velocizza i processi di manutenzione aziendali, allunga la vita delle attrezzature, supporta la sicurezza sul lavoro e contribuisce agli obiettivi di produzione sostenibile."
      ]
    }
  },
  ja: {
    title: "ドライアイス (固形 CO₂)",
    badge: "-78.5℃",
    desc: "食品保存、コールドチェーン物流、産業用洗浄（ドライアイスブラスト）、特殊効果（スモーク演出）向けに、-78.5℃の極低温で製造される、高純度で液化せずに直接気化（昇華）する二酸化炭素の固形物（ペレット・ブロック）。",
    content: [
      "ドライアイスは、液化二酸化炭素を高圧下で固化させて得られる固形二酸化炭素（CO₂）で、温度は-78.5℃です。通常の氷とは異なり、融けて液体になることはなく、昇華と呼ばれる物理的プロセスによって直接気体に変化します。この特性により、水分や湿気、残留物を残さずに、冷却や洗浄の用途で安全に使用されています。",
      "高い冷却能力、衛生的な構造、そして残留物を残さない特性から、ドライアイスは食品輸送、医薬品・ヘルスケア分野、研究所、物流、イベント演出、産業プロセス、コールドチェーンなどで広く好まれています。また、スモーク効果、バイオサンプルの輸送、温度変化に敏感な製品の保護にも信頼性の高いソリューションを提供します。",
      "当社は、さまざまな分野のニーズに適したサイズと数量で高純度ドライアイスを供給し、安全な保管と正しい使用方法に関する技術サポートを提供しています。"
    ],
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
    ],
    cleaningContent: {
      title: "ドライアイスブラスト（洗浄）サービス＆システム",
      introParagraphs: [
        "ドライアイスの最も重要な用途の一つが、産業用の洗浄分野です。ドライアイス洗浄法は、専用の装置を使用して固形二酸化炭素（CO₂）のペレットを高速で表面に吹き付ける原理で機能します。衝突時のエネルギー、急激な温度差（熱ショック）、そして昇華作用により、油分、炭素、塗料の付着物、樹脂、接着剤、その他の汚れが表面から効果的に除去されます。",
        "洗浄プロセス中にドライアイスは完全に気体に変化するため、水分、化学物質、研磨材の残留物は一切発生しません。これにより、設備を解体することなくその場で直接洗浄することが可能となり、稼働停止時間を最小限に抑え、精密な機器の表面を傷つけることなく安全にクリーニングできます。",
        "ドライアイス洗浄技術は、自動車、鉄鋼、エネルギー、プラスチック・ゴム製造、食品製造工場、防衛産業、造船・海運、印刷、電気配電盤、生産ライン、重工業分野などで幅広く使用されています。従来の洗浄方法に比べて迅速かつ安全で、環境に優しいことから、現代産業における最も効率的なメンテナンスソリューションの一つとして選ばれています。"
      ],
      usageAreasTitle: "ドライアイスの主な用途",
      usageAreas: [
        "産業用ドライアイスブラスト精密洗浄",
        "食品およびコールドチェーン低温輸送",
        "医薬品・医療用製品の低温物流",
        "ラボ・研究開発の分析用途",
        "化学プラントおよび製造施設での冷却",
        "イベント・舞台用の白煙スモーク特殊効果",
        "バイオサンプルの超低温輸送",
        "機械、金型、生産ラインの定期メンテナンス",
        "自動車、船舶、および重工業関連のアプリケーション"
      ],
      usageSubtext: "当社はドライアイスの供給だけでなく、専門チームとプロ仕様の機材を用いた産業用ドライアイスブラスト洗浄サービスも提供しています。お客様のニーズに最適なソリューションを提案するため、無料の事前現地調査とテクニカルコンサルティングを提供し、お客様のメンテナンスプロセスをより効率的で持続可能なものにします。",
      systemsTitle: "ドライアイス洗浄システム",
      systemsParagraphs: [
        "ドライアイス洗浄は、産業設備や精密な表面を傷つけることなく洗浄できる、環境に優しく高効率な先進的クリーニング技術です。この方法で使用されるドライアイスペレットは固形二酸化炭素（CO₂）から製造され、その温度は約-78.5℃です。ペレットは専用のブラスト装置を用いて高圧で表面に吹き付けられ、汚れ、油分、炭素堆積物、塗料残り、樹脂などを迅速かつ効果的に除去します。",
        "ドライアイス洗浄は、運動エネルギー、熱ショック、昇華という3つの基本原理の組み合わせによって機能します。表面に衝突したドライアイスペレットは、汚れの層に亀裂を入れながら同時に固体から直接気体に相変化します。これにより、洗浄後に水や化学物質、研磨材の残りカスが残らず、二次廃棄物（廃液や研磨材ゴミ）も発生しません。",
        "従来のサンドブラスト、溶剤洗浄、高圧温水洗浄と比較して、設備を分解せずにその場で作業できる点、生産ラインの停止時間を大幅に削減できる点、そして傷つきやすい表面を摩耗させない点から、今日では多くの業界でプロフェッショナルな保守管理方法として導入されています。",
        "当社は、さまざまな産業分野のニーズに応じたドライアイス洗浄ソリューションを提供することで、生産効率の向上、メンテナンスコストの削減、そして企業の安定した継続操業に貢献することを目指しています。当社の経験豊富な技術スタッフが、導入前に無料で現地診断を行い、最適な洗浄プランを策定した上で、安全性とスピード、高品質な基準を遵守して作業を実施します。"
      ],
      advantagesTitle: "ドライアイス洗浄のメリット",
      advantages: [
        "化学薬品を使用せず、環境に優しいエコフレンドリーなクリーンアップを実現します。",
        "水を使用しないため、湿気による錆や電気的ショート、腐食のリスクがありません。",
        "二次廃棄物を残さないため、作業後の回収や追加処理の手間がかかりません。",
        "機械や設備を解体することなく、設置した状態のままで迅速に洗浄できます。",
        "工場の稼働停止時間（ダウンタイム）とメンテナンス費用を劇的に削減します。",
        "摩耗性がないため、精密機器や高価な金型の表面を傷つけずに保護します。",
        "配電盤、電子制御パネル、複雑な生産ライン、機械駆動部などにも安全に適用できます。"
      ],
      cleaningUsageTitle: "適用分野・業界",
      cleaningUsageParagraphs: [
        "ドライアイス洗浄技術は、自動車、鉄鋼、エネルギー、プラスチック・ゴム成形、食品工場、防衛、海運、化学、印刷、電気・電子機器、金型クリーニング、コンベアシステム、発電機、モーター、および多くの重工業製造現場で幅広く安全に活用されています。",
        "ドライアイス洗浄は、工場の保守管理時間を短縮すると同時に、機器の寿命を延ばし、作業安全性を高め、企業の持続可能なグリーン生産目標の達成を強力に支援する革新的な産業洗浄ソリューションです。"
      ]
    }
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
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
            
            {/* Product Image */}
            <div style={{ position: "relative", width: "100%", height: "320px", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-sm)", margin: "20px 0" }}>
              <Image
                src="/kuru-buz.jpg"
                alt={data.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--gray-600)", lineHeight: "1.8", fontSize: "1rem" }}>
              {Array.isArray(data.content) ? (
                data.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))
              ) : (
                <p>{data.content}</p>
              )}
            </div>
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

      {/* Kuru Buz Temizleme Hizmetleri & Sistemleri Section */}
      {data.cleaningContent && (
        <section className={kuruBuzStyles.cleaningSection} aria-label={data.cleaningContent.title}>
          <div className={kuruBuzStyles.cleaningInner}>
            <div className={kuruBuzStyles.headerBlock}>
              <span className={kuruBuzStyles.sectionLabel}>
                {locale === "tr" ? "Endüstriyel Hizmetler" : "Industrial Services"}
              </span>
              <h2 className={kuruBuzStyles.sectionTitle}>{data.cleaningContent.title}</h2>
              <div className={kuruBuzStyles.divider} />
            </div>

            <div className={kuruBuzStyles.introText}>
              {data.cleaningContent.introParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className={kuruBuzStyles.detailsGrid}>
              <div className={kuruBuzStyles.contentCard}>
                <h3 className={kuruBuzStyles.cardTitle}>{data.cleaningContent.advantagesTitle}</h3>
                <ul className={kuruBuzStyles.bulletList}>
                  {data.cleaningContent.advantages.map((adv, idx) => (
                    <li key={idx} className={kuruBuzStyles.bulletItem}>
                      <span className={kuruBuzStyles.bulletIcon}>✓</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={kuruBuzStyles.contentCard}>
                <h3 className={kuruBuzStyles.cardTitle}>{data.cleaningContent.systemsTitle}</h3>
                <div className={kuruBuzStyles.cardParagraphs}>
                  {data.cleaningContent.systemsParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className={kuruBuzStyles.industriesBlock}>
              <h3 className={kuruBuzStyles.industriesTitle}>{data.cleaningContent.usageAreasTitle}</h3>
              <div className={kuruBuzStyles.tagsGrid}>
                {data.cleaningContent.usageAreas.map((area, idx) => (
                  <span key={idx} className={kuruBuzStyles.tagItem}>
                    {area}
                  </span>
                ))}
              </div>
              <p className={kuruBuzStyles.industriesDesc}>
                {data.cleaningContent.usageSubtext}
              </p>
            </div>

            <div className={kuruBuzStyles.ctaCallout}>
              <div className={kuruBuzStyles.ctaContent}>
                <h3 className={kuruBuzStyles.ctaTitle}>
                  {locale === "tr" ? "Ücretsiz Keşif ve Teknik Danışmanlık" : "Free Inspection & Technical Consulting"}
                </h3>
                <p className={kuruBuzStyles.ctaDesc}>
                  {locale === "tr" 
                    ? "İşletmenizin bakım süreçlerini daha verimli hale getirmek için uzman ekibimizden destek alın." 
                    : "Get support from our expert team to make your business maintenance processes more efficient."}
                </p>
              </div>
              <div className={kuruBuzStyles.ctaButtonWrap}>
                <Link
                  href={`/${locale}/iletisim`}
                  className="btn btn-white"
                >
                  {locale === "tr" ? "İletişime Geçin" : "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
