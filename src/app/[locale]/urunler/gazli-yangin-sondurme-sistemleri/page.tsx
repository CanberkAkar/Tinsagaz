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
    title: "Gazlı Yangın Söndürme Sistemleri",
    badge: "SIEMENS & BURSAN",
    desc: "Yangın anında ortamdaki oksijen seviyesini düşürerek ve ısıyı absorbe ederek hızlı söndürme sağlayan, su veya köpük kullanımının uygun olmadığı kritik alanlar için gelişmiş yangın güvenlik çözümleri.",
    content: "Gazlı yangın söndürme sistemleri, yangın oluşumu sırasında ortamdaki oksijen seviyesini yanmanın sürdürülebileceği sınırın altına düşürerek ve belirli uygulamalarda ısı enerjisini absorbe ederek yangının hızlı ve etkili bir şekilde söndürülmesini sağlayan gelişmiş yangın güvenlik çözümleridir. Özellikle su veya köpük kullanımının uygun olmadığı kritik alanlarda tercih edilen bu sistemler, yüksek değerli ekipmanların ve hassas proseslerin korunmasında maksimum güvenlik sunmaktadır.\n\n\"Temiz söndürme sistemleri\" olarak da adlandırılan gazlı söndürme sistemleri, söndürme işlemi sonrasında kalıntı bırakmaması ve elektronik ekipmanlara zarar vermemesi sayesinde; veri merkezleri, sunucu odaları, telekomünikasyon altyapıları ve kritik endüstriyel tesisler için ideal bir çözüm oluşturmaktadır. Sistemlerde kullanılan FM-200, Novec 1230, Inert Gaz ve CO₂ gibi farklı söndürme ajanları, korunacak mahallin özelliklerine ve ilgili uluslararası standartlara uygun olarak seçilmektedir.\n\nFirmamız, NFPA, EN 15004 (ISO 14520), VdS, UL ve FM standartlarına uygun olarak çok sayıda gazlı yangın söndürme sisteminin tasarımını, hidrolik hesaplamalarını, projelendirmesini, montajını ve devreye alma süreçlerini başarıyla gerçekleştirmektedir. Her projede uluslararası standartlar esas alınarak, maksimum can ve mal güvenliği sağlayan mühendislik çözümleri sunulmaktadır.\n\nSIEMENS BT çözüm ortağı olan firmamız, SIEMENS ve BURSAN güvencesiyle; mühendislik, proje yönetimi, sistem entegrasyonu ve satış sonrası teknik destek hizmetlerini en yüksek kalite standartlarında müşterilerine sunmaktadır.",
    features: [
      "NFPA, EN 15004, VdS, UL ve FM standartlarına tam uyumluluk",
      "Söndürme işlemi sonrasında kalıntı ve temizlik ihtiyacı bırakmama",
      "Elektronik ekipmanlara ve hassas cihazlara zarar vermeme",
      "Tasarım, hidrolik hesaplama, projelendirme ve montaj süreçleri",
      "SIEMENS BT Çözüm Ortaklığı ve BURSAN güvencesiyle mühendislik"
    ],
    usageAreas: [
      "Veri merkezleri, bilişim sistemleri ve sunucu odaları",
      "Arşiv odaları, belge depoları ve değerli evrak kasaları",
      "Acil çağrı merkezleri, kontrol merkezleri ve operasyon odaları",
      "Uçuş navigasyon merkezleri, hava trafik kontrol kuleleri ve simülatörler",
      "Telekomünikasyon tesisleri, baz istasyonları ve internet servis sağlayıcı merkezleri",
      "Televizyon, radyo yayın merkezleri ve yayın kontrol odaları",
      "Sanat galerileri, müzeler, kütüphaneler ve kültürel miras alanları",
      "Hastaneler, ameliyathaneler ve tıbbi görüntüleme merkezleri",
      "Laboratuvarlar, endüstriyel proses tesisleri ve kontrol odaları",
      "Enerji santralleri, jeneratör odaları, UPS ve akü odaları",
      "Elektrik panoları, kablo galerileri ve alçak gerilim odaları",
      "Açık deniz platformları, gemiler, askeri araçlar ve savunma sanayi uygulamaları"
    ],
    supplyModels: [
      {
        title: "FM-200 (HFC-227ea) Söndürme Sistemleri",
        desc: "İnsanlı mekanlar için en yaygın kullanılan, güvenli ve hızlı halokarbon gazlı söndürme çözümü."
      },
      {
        title: "Novec 1230 (FK-5-1-12) Söndürme Sistemleri",
        desc: "Sıfır ozon tüketim potansiyeli ve üstün çevre dostu profiliyle yeni nesil temiz gazlı söndürme çözümü."
      },
      {
        title: "Inert Gaz (Azot / Argon) Söndürme Sistemleri",
        desc: "Tamamen doğal gazlardan (Azot, Argon ve karışımları) oluşan, kalıntısız ve insan sağlığına uygun söndürme."
      },
      {
        title: "CO₂ (Karbondioksit) Söndürme Sistemleri",
        desc: "İnsansız alanlar, elektrik panoları ve lokal uygulamalar için yüksek etkili endüstriyel söndürme."
      }
    ],
    safetyWarning: "CO₂ söndürme sistemleri yüksek konsantrasyonda boğucu etkiye sahiptir ve sadece insansız alanlarda veya geciktirme üniteleriyle kullanılmalıdır. FM-200 ve Novec 1230 gazları ise insanlı alanlarda güvenle kullanılabilir. Sistem tasarımı, dolumu ve montajı her zaman sertifikalı uzman mühendislerimiz tarafından yapılmalıdır.",
    specifications: [
      { label: "Çözüm Ortaklığı", value: "SIEMENS BT & BURSAN" },
      { label: "Uyumlu Standartlar", value: "NFPA, EN 15004, VdS, UL, FM" },
      { label: "Söndürücü Gazlar", value: "FM-200, Novec 1230, Inert Gaz, CO₂" },
      { label: "Uygulama Alanı", value: "Veri Merkezi, Arşiv, Elektrik Odası" },
      { label: "Hizmet Kapsamı", value: "Tasarım, Proje, Montaj, Devreye Alma" }
    ]
  },
  en: {
    title: "Gaseous Fire Suppression Systems",
    badge: "SIEMENS & BURSAN",
    desc: "Advanced fire safety solutions that extinguish fires rapidly by reducing oxygen levels and absorbing heat, designed for critical environments where water or powder is not suitable.",
    content: "Gaseous fire suppression systems are advanced fire safety solutions that extinguish fires rapidly by reducing the oxygen level in the environment below the limit where combustion can be sustained and, in certain applications, by absorbing heat energy. Specially preferred in critical areas where the use of water or foam is not suitable, these systems offer maximum safety in protecting high-value equipment and sensitive processes.\n\nAlso called 'clean agent suppression systems', gaseous suppression systems leave no residue after the extinguishing process and do not damage electronic equipment, making them an ideal solution for data centers, server rooms, telecommunications infrastructure, and critical industrial plants. Different extinguishing agents such as FM-200, Novec 1230, Inert Gas, and CO₂ used in the systems are selected in accordance with the characteristics of the protected area and relevant international standards.\n\nOur company successfully performs the design, hydraulic calculations, project planning, installation, and commissioning processes of numerous gaseous fire suppression systems in accordance with NFPA, EN 15004 (ISO 14520), VdS, UL, and FM standards. In every project, engineering solutions providing maximum safety of life and property are offered based on international standards.\n\nAs a SIEMENS BT solution partner, our company provides engineering, project management, system integration, and after-sales technical support services to its customers at the highest quality standards under the assurance of SIEMENS and BURSAN.",
    features: [
      "Full compliance with NFPA, EN 15004, VdS, UL, and FM standards",
      "Leaves no residue or cleanup requirement after discharge",
      "Does not damage electronic equipment and sensitive devices",
      "Design, hydraulic calculation, project planning, and installation",
      "Engineering with SIEMENS BT Solution Partnership and BURSAN assurance"
    ],
    usageAreas: [
      "Data centers, information systems, and server rooms",
      "Archive rooms, document storage, and valuable paper safes",
      "Emergency call centers, control centers, and operation rooms",
      "Flight navigation centers, air traffic control towers, and simulators",
      "Telecommunication facilities, base stations, and ISP centers",
      "Television, radio broadcasting centers, and broadcast control rooms",
      "Art galleries, museums, libraries, and cultural heritage sites",
      "Hospitals, operating rooms, and medical imaging centers",
      "Laboratories, industrial process plants, and control rooms",
      "Power plants, generator rooms, UPS, and battery rooms",
      "Electrical panels, cable galleries, and low voltage rooms",
      "Offshore platforms, ships, military vehicles, and defense applications"
    ],
    supplyModels: [
      {
        title: "FM-200 (HFC-227ea) Suppression Systems",
        desc: "The most common, safe, and rapid halocarbon clean agent solution for occupied spaces."
      },
      {
        title: "Novec 1230 (FK-5-1-12) Suppression Systems",
        desc: "Next-generation clean agent suppression with zero ozone depletion potential and superior environmental profile."
      },
      {
        title: "Inert Gas (Nitrogen / Argon) Suppression Systems",
        desc: "Suppression consisting of natural gases (Nitrogen, Argon, and their mixtures), residue-free and safe for human health."
      },
      {
        title: "CO₂ (Carbon Dioxide) Suppression Systems",
        desc: "Highly effective industrial suppression system for unoccupied spaces, electrical panels, and local applications."
      }
    ],
    safetyWarning: "CO₂ suppression systems have a suffocating effect at high concentrations and should only be used in unoccupied areas or with pre-discharge delay units. FM-200 and Novec 1230 gases can be safely used in occupied areas. System design, filling, and installation must always be performed by our certified specialist engineers.",
    specifications: [
      { label: "Partnership", value: "SIEMENS BT & BURSAN" },
      { label: "Compliant Standards", value: "NFPA, EN 15004, VdS, UL, FM" },
      { label: "Suppression Agents", value: "FM-200, Novec 1230, Inert Gas, CO₂" },
      { label: "Application Area", value: "Data Center, Archive, Electrical Room" },
      { label: "Service Scope", value: "Design, Project, Install, Commissioning" }
    ]
  },
  de: {
    title: "Gas-Löschanlagen",
    badge: "SIEMENS & BURSAN",
    desc: "Fortschrittliche Brandschutzlösungen, die Brände durch Reduzierung des Sauerstoffgehalts und Wärmeaufnahme schnell löschen, konzipiert für kritische Umgebungen, in denen Wasser oder Pulver ungeeignet sind.",
    content: "Gas-Löschanlagen löschen Brände innerhalb von Sekunden durch chemische (Wärmeentzug) oder physikalische (Sauerstoffverdrängung) Wirkung. Diese Systeme werden besonders in kritischen Bereichen bevorzugt, in denen der Einsatz von Wasser oder Schaum nicht geeignet ist. Sie bieten maximale Sicherheit beim Schutz wertvoller Geräte und sensibler Prozesse.\n\nDiese Systeme hinterlassen nach dem Löschvorgang keine Rückstände und beschädigen keine elektronischen Geräte. Daher sind sie eine ideale Lösung für Rechenzentren, Serverräume, Telekommunikationsinfrastrukturen und kritische Industrieanlagen. Die verwendeten Löschmittel wie FM-200, Novec 1230, Inertgas und CO₂ werden entsprechend den Eigenschaften des zu schützenden Raums und den relevanten internationalen Standards ausgewählt.\n\nUnser Unternehmen führt Planung, hydraulische Berechnungen, Projektierung, Montage und Inbetriebnahme zahlreicher Gas-Löschanlagen gemäß den Standards NFPA, EN 15004 (ISO 14520), VdS, UL und FM erfolgreich durch. In jedem Projekt bieten wir auf der Grundlage internationaler Standards Ingenieurlösungen für maximale Lebens- und Sachwertsicherheit.\n\nAls SIEMENS BT-Lösungspartner bietet unser Unternehmen Dienstleistungen in den Bereichen Engineering, Projektmanagement, Systemintegration und After-Sales-Support auf höchstem Qualitätsniveau unter der Garantie von SIEMENS und BURSAN an.",
    features: [
      "Vollständige Einhaltung der Standards NFPA, EN 15004, VdS, UL und FM",
      "Keine Rückstände oder Reinigungsarbeiten nach der Flutung",
      "Keine Beschädigung von elektronischen und empfindlichen Geräten",
      "Kompletter Service: Planung, Berechnung, Montage und Inbetriebnahme",
      "Engineering mit SIEMENS BT-Partnerschaft und BURSAN-Qualität"
    ],
    usageAreas: [
      "Rechenzentren, IT-Systeme und Serverräume",
      "Archive, Dokumentenlager und Wertschutzräume",
      "Notrufzentralen, Kontrollräume und Leitstände",
      "Flugsicherungszentren, Tower und Flugsimulatoren",
      "Telekommunikationsanlagen, Basisstationen und ISP-Zentren",
      "Fernseh- und Rundfunksendestudios sowie Regieräume",
      "Kunstgalerien, Museen, Bibliotheken und Kulturerbestätten",
      "Krankenhäuser, Operationssäle und medizinische Bildungszentren",
      "Laboratorien, industrielle Prozessanlagen und Warten",
      "Kraftwerke, Generatorräume, USV- und Batterieräume",
      "Schaltschränke, Kabelkanäle und Niederspannungsräume",
      "Offshore-Plattformen, Schiffe, Militärfahrzeuge und Verteidigungssysteme"
    ],
    supplyModels: [
      {
        title: "FM-200 (HFC-227ea) Löschanlagen",
        desc: "Die am häufigsten verwendete, sichere und schnelle Halogenkohlenwasserstoff-Löschlösung für besetzte Räume."
      },
      {
        title: "Novec 1230 (FK-5-1-12) Löschanlagen",
        desc: "Die saubere Löschanlage der nächsten Generation mit Treibhauspotenzial von Null und hervorragendem Umweltprofil."
      },
      {
        title: "Inertgas (Stickstoff / Argon) Löschanlagen",
        desc: "Löschung mit natürlichen Gasen (Stickstoff, Argon und Mischungen), rückstandsfrei und gesundheitlich unbedenklich."
      },
      {
        title: "CO₂ (Kohlendioxid) Löschanlagen",
        desc: "Hocheffektives industrielles Löschsystem für unbesetzte Räume, Schaltschränke und lokale Anwendungen."
      }
    ],
    safetyWarning: "CO₂-Löschanlagen wirken in hohen Konzentrationen erstickend und dürfen nur in unbesetzten Bereichen oder mit Vorwarnzeiten betrieben werden. FM-200- und Novec 1230-Gase können in besetzten Bereichen sicher eingesetzt werden. Planung, Befüllung und Montage müssen von zertifizierten Fachkräften durchgeführt werden.",
    specifications: [
      { label: "Partnerschaft", value: "SIEMENS BT & BURSAN" },
      { label: "Standards", value: "NFPA, EN 15004, VdS, UL, FM" },
      { label: "Löschmittel", value: "FM-200, Novec 1230, Inertgas, CO₂" },
      { label: "Anwendungsbereich", value: "Rechenzentrum, Archiv, Schaltschrank" },
      { label: "Serviceumfang", value: "Planung, Projektierung, Montage, Service" }
    ]
  },
  fr: {
    title: "Systèmes d'Extinction Incendie à Gaz",
    badge: "SIEMENS & BURSAN",
    desc: "Solutions de sécurité incendie avancées qui éteignent rapidement les incendies en réduisant les niveaux d'oxygène et en absorbant la chaleur, conçues pour les environnements critiques où l'eau ou la poudre ne conviennent pas.",
    content: "Les systèmes d'extinction par gaz éteignent les incendies en quelques secondes lors de leur formation en réduisant le niveau d'oxygène dans l'environnement en dessous de la limite où la combustion peut être maintenue et, dans certaines applications, en absorbant l'énergie thermique. Spécialement préférés dans les zones critiques où l'utilisation d'eau ou de mousse n'est pas appropriée, ces systèmes offrent une sécurité maximale pour protéger les équipements de grande valeur et les processus sensibles.\n\nÉgalement appelés « systèmes d'extinction par agent propre », les systèmes d'extinction par gaz ne laissent aucun résidu après le processus d'extinction et n'endommagent pas les équipements électroniques, ce qui en fait une solution idéale pour les centres de données, les salles de serveurs, les infrastructures de télécommunication et les usines industrielles critiques. Différents agents d'extinction tels que le FM-200, le Novec 1230, le Gaz Inerte et le CO₂ utilisés dans les systèmes sont sélectionnés conformément aux caractéristiques de la zone protégée et aux normes internationales applicables.\n\nNotre entreprise conçoit, calcule les débits hydrauliques, planifie, installe et met en service de nombreux systèmes d'extinction automatique par gaz conformément aux normes NFPA, EN 15004 (ISO 14520), VdS, UL et FM. Dans chaque projet, des solutions d'ingénierie assurant une sécurité maximale des vies et des biens sont proposées sur la base des normes internationales.\n\nEn tant que partenaire de solutions SIEMENS BT, notre entreprise fournit des services d'ingénierie, de gestion de projet, d'intégration de systèmes et de support technique après-vente à ses clients selon les normes de qualité les plus élevées sous l'assurance de SIEMENS et BURSAN.",
    features: [
      "Conformité totale avec les normes NFPA, EN 15004, VdS, UL et FM",
      "Aucun résidu ou besoin de nettoyage après la décharge",
      "N'endommage pas les équipements électroniques et les appareils sensibles",
      "Service complet : conception, calcul hydraulique, installation et mise en service",
      "Ingénierie de qualité avec le partenariat SIEMENS BT et la garantie BURSAN"
    ],
    usageAreas: [
      "Centres de données, systèmes informatiques et salles de serveurs",
      "Salles d'archives, stockage de documents et coffres-forts",
      "Centres d'appels d'urgence, salles de contrôle et de surveillance",
      "Centres de navigation aérienne, tours de contrôle et simulateurs",
      "Installations de télécommunication, stations de base et centres FAI",
      "Studios de diffusion de télévision, de radio et régies de contrôle",
      "Galeries d'art, musées, bibliothèques et sites du patrimoine culturel",
      "Hôpitaux, salles d'opération et centres d'imagerie médicale",
      "Laboratoires, installations de processus industriels et salles de contrôle",
      "Centrales électriques, salles de générateurs, salles d'onduleurs et de batteries",
      "Armoires électriques, galeries de câbles et locaux basse tension",
      "Plateformes offshore, navires, véhicules militaires et applications de défense"
    ],
    supplyModels: [
      {
        title: "Systèmes d'extinction FM-200 (HFC-227ea)",
        desc: "La solution d'extinction par hydrocarbure halogéné la plus courante, sûre et rapide pour les espaces occupés."
      },
      {
        title: "Systèmes d'extinction Novec 1230 (FK-5-1-12)",
        desc: "Extinction par agent propre de nouvelle génération avec un potentiel de réchauffement global nul et un excellent profil environnemental."
      },
      {
        title: "Systèmes d'extinction à gaz inerte (Azote / Argon)",
        desc: "Extinction composée de gaz naturels (azote, argon et leurs mélanges), sans résidu et sans danger pour la santé humaine."
      },
      {
        title: "Systèmes d'extinction au CO₂ (Dioxyde de Carbone)",
        desc: "Système d'extinction industriel très efficace pour les espaces non occupés, les armoires électriques et les applications locales."
      }
    ],
    safetyWarning: "Les systèmes d'extinction au CO₂ ont un effet asphyxiant à des concentrations élevées et ne doivent être utilisés que dans des zones non occupées ou avec des unités de temporisation. Les gaz FM-200 et Novec 1230 peuvent être utilisés en toute sécurité dans les zones occupées. La conception, le remplissage et l'installation du système doivent toujours être effectués par nos ingénieurs certifiés.",
    specifications: [
      { label: "Partenariat", value: "SIEMENS BT & BURSAN" },
      { label: "Normes", value: "NFPA, EN 15004, VdS, UL, FM" },
      { label: "Agents d'Extinction", value: "FM-200, Novec 1230, Gaz Inerte, CO₂" },
      { label: "Domaine d'Application", value: "Centre de données, archives, local technique" },
      { label: "Portée du Service", value: "Conception, projet, installation, maintenance" }
    ]
  },
  it: {
    title: "Sistemi di Estinzione Incendio a Gas",
    badge: "SIEMENS & BURSAN",
    desc: "Soluzioni avanzate di sicurezza antincendio che spengono rapidamente gli incendi riducendo i livelli di ossigeno e assorbendo il calore, progettate per ambienti critici dove l'acqua o la polvere non sono adatte.",
    content: "I sistemi di estinzione a gas spengono gli incendi in pochi secondi durante la loro formazione riducendo il livello di ossigeno nell'ambiente al di sotto del limite in cui può essere mantenuta la combustione e, in alcune applicazioni, assorbendo energia termica. Particolarmente preferiti in aree critiche dove l'uso di acqua o schiuma non è appropriato, questi sistemi offrono la massima sicurezza nella protezione di apparecchiature di alto valore e processi sensibili.\n\nChiamati anche « sistemi di estinzione ad agente pulito », i sistemi di estinzione a gas non lasciano residui dopo il processo di estinzione e non danneggiano le apparecchiature elettroniche, rendendoli una soluzione ideale per data center, sale server, infrastrutture di telecomunicazione e impianti industriali critici. I diversi agenti estinguenti come FM-200, Novec 1230, Gas Inerte e CO₂ utilizzati nei sistemi vengono selezionati in conformità con le caratteristiche dell'area protetta e le relative norme internazionali.\n\nLa nostra azienda esegue con successo la progettazione, i calcoli idraulici, la pianificazione del progetto, l'installazione e la messa in servizio di numerosi sistemi di estinzione incendio a gas in conformità con gli standard NFPA, EN 15004 (ISO 14520), VdS, UL e FM. In ogni progetto vengono offerte soluzioni ingegneristiche che garantiscono la massima sicurezza delle vite umane e dei beni materiali sulla base degli standard internazionali.\n\nIn qualità di partner di soluzioni SIEMENS BT, la nostra azienda fornisce servizi di ingegneria, gestione dei progetti, integrazione dei sistemi e supporto tecnico post-vendita ai propri clienti secondo i più elevati standard di qualità con la garanzia di SIEMENS e BURSAN.",
    features: [
      "Piena conformità agli standard NFPA, EN 15004, VdS, UL e FM",
      "Nessun residuo o necessità di pulizia dopo la scarica",
      "Nessun danno alle apparecchiature elettroniche e ai dispositivi sensibili",
      "Servizio completo: progettazione, calcolo idraulico, installazione e collaudo",
      "Ingegneria di qualità con la partnership SIEMENS BT e la garanzia BURSAN"
    ],
    usageAreas: [
      "Data center, sistemi informatici e sale server",
      "Sale d'archivio, depositi di documenti e caveau di sicurezza",
      "Centri di chiamata di emergenza, sale di controllo e monitoraggio",
      "Centri di navigazione aerea, torri di controllo e simulatori di volo",
      "Impianti di telecomunicazione, stazioni base e centri ISP",
      "Studi radiotelevisivi e sale di regia",
      "Gallerie d'arte, musei, biblioteche e siti di patrimonio culturale",
      "Ospedali, sale operatorie e centri di diagnostica per immagini",
      "Laboratori, impianti di processo industriale e sale controllo",
      "Centrali elettriche, sale generatori, sale UPS e batterie",
      "Quadri elettrici, gallerie di cavi e locali a bassa tensione",
      "Piattaforme offshore, navi, veicoli militari e applicazioni per la difesa"
    ],
    supplyModels: [
      {
        title: "Sistemi di estinzione FM-200 (HFC-227ea)",
        desc: "La soluzione di estinzione ad idrocarburo alogenato più comune, sicura e rapida per gli spazi occupati."
      },
      {
        title: "Sistemi di estinzione Novec 1230 (FK-5-1-12)",
        desc: "Estinzione ad agente pulito di nuova generazione con potenziale di riscaldamento globale pari a zero e un eccellente profilo ambientale."
      },
      {
        title: "Sistemi di estinzione a gas inerte (Azoto / Argon)",
        desc: "Estinzione composta da gas naturali (azoto, argon e loro miscele), senza residui e non nociva per la salute umana."
      },
      {
        title: "Sistemi di estinzione a CO₂ (Anidride Carbonica)",
        desc: "Sistema di estinzione industriale altamente efficace per spazi non occupati, quadri elettrici e applicazioni locali."
      }
    ],
    safetyWarning: "I sistemi di estinzione a CO₂ hanno un effetto asfiasinte ad alte concentrazioni e devono essere utilizzati solo in aree non occupate o con unità di ritardo. I gas FM-200 e Novec 1230 possono essere utilizzati in sicurezza in aree occupate. La progettazione, il riempimento e l'installazione del sistema devono essere eseguiti da ingegneri specializzati certificati.",
    specifications: [
      { label: "Partnership", value: "SIEMENS BT & BURSAN" },
      { label: "Standard", value: "NFPA, EN 15004, VdS, UL, FM" },
      { label: "Agenti Estinguenti", value: "FM-200, Novec 1230, Gas Inerte, CO₂" },
      { label: "Area di Applicazione", value: "Data center, archivi, quadri elettrici" },
      { label: "Ambito del Servizio", value: "Progettazione, installazione, collaudo, manutenzione" }
    ]
  },
  ja: {
    title: "ガス系消火設備・システム",
    badge: "SIEMENS & BURSAN",
    desc: "空気中の酸素濃度を抑制し、熱を吸収冷却することで火災を迅速に消火する、水や消火粉末を使用できない重要設備向けの先進的な自動消火システム。",
    content: "ガス系消火システムは、火災発生時に防護区画内の酸素濃度を燃焼継続限界以下に下げる物理作用、および一部のシステムにおける熱エネルギーの吸収（冷却効果）による化学作用によって、迅速かつ効果的に消火を行う高度な防災ソリューションです。水や泡消火剤の使用が適さない精密機械や電気設備において、二次災害を起こすことなく高価値資産を守るために不可欠です。\n\n「クリーンエージェント自動消火システム」とも呼ばれ、消火後の薬剤残留物がなく非導電性であるため、データセンター、サーバー室、通信インフラ、重要製造プラントに最適です。システムで使用されるFM-200、Novec 1230、イナートガス（アルゴン・窒素）、および二酸化炭素（CO₂）消火薬剤は、防護区画の特性や適用される国際規格に合わせて適切に選定されます。\n\n弊社は、NFPA、EN 15004 (ISO 14520)、VdS、UL、およびFM等の国際防火基準に基づき、多種多様なガス系消火設備のシステム設計、配管応力・流体圧損計算（ハイドロリック計算）、エンジニアリング、機器設置工事、および最終試運転調整を数多く手掛けております。安全第一で最高品質の防災設計を提供します。\n\nSIEMENS BTのソリューションパートナーとして、弊社はSIEMENSおよびBURSANの品質保証の下で、設計、施工管理、システムインテグレーション、そして納品後のメンテナンス保守サポートに至るまで、最高品質のサービスを総合的に提供しております。",
    features: [
      "NFPA, EN 15004, VdS, UL, FMなどの国際主要防火規格に完全準拠",
      "ガス放出・消火後の消火剤残渣や清掃の必要性が一切不要",
      "電気的非導電性で、精密IT機器やサーバー、重要資産を保全",
      "計画、油圧配管流量計算、システム設計、施工および保守の一貫体制",
      "SIEMENS BT認定パートナーとしての高い技術力とBURSANによる確かな品質"
    ],
    usageAreas: [
      "データセンター、IT機器室、高密度サーバーラック室",
      "歴史資料・行政文書書庫、重要図書保管庫、重要美術保管金庫",
      "緊急通信指令センター、プラント監視制御室、オペレーション室",
      "航空管制塔、航空シミュレータ室、フライト運航管理センター",
      "電気通信インフラ施設、通信携帯キャリアベースステーション、ISP設備室",
      "テレビ・ラジオ局送出マスター室、スタジオコントロール制御室",
      "美術ギャラリー展示室、博物館展示スペース、図書館文化財ゾーン",
      "総合病院手術室、MRI・CTなどの高度医療機器検査室",
      "大学・研究所試験ラボ、プラント精密電気回路室",
      "水力・火力・太陽光発電所機器室、非常用発電機室、UPS・産業バッテリー室",
      "特高配電盤室、高圧ケーブルピット・ギャラリー、低圧トランス室",
      "海洋石油掘削プラットフォーム、各種船舶機関室、軍用車両・防衛装備品"
    ],
    supplyModels: [
      {
        title: "FM-200 (HFC-227ea) 自動消火システム",
        desc: "有人スペース（サーバー室など）で世界的に最も普及している、安全で実績のあるフッ化炭化水素系クリーンエージェント。"
      },
      {
        title: "Novec 1230 (FK-5-1-12) 環境配慮型消火システム",
        desc: "オゾン破壊係数0、地球温暖化係数1で非常に環境負荷が低く、高い安全マージンを持つ次世代消火システム。"
      },
      {
        title: "イナートガス（窒素／アルゴン）消火システム",
        desc: "大気中に含まれる天然ガス（窒素、アルゴンまたはその混合物）のみを使用し、完全にクリーンで毒性のないクリーン消火システム。"
      },
      {
        title: "二酸化炭素 (CO₂) 高圧自動消火システム",
        desc: "無人スペースのトランス室、大型特高配電盤、局所消火用途に最適な高消火能力を誇る産業用消火システム。"
      }
    ],
    safetyWarning: "CO₂消火システムは高濃度で窒息作用があるため、無人スペースまたは放出遅延安全装置との併用でのみ使用してください。FM-200およびNovec 1230は、有人スペースでも安全に使用可能です。設計、充填、設置は必ず認証を受けた専門技術者が行ってください。",
    specifications: [
      { label: "ソリューションアライアンス", value: "SIEMENS BT & BURSAN" },
      { label: "適合・準拠規格", value: "NFPA, EN 15004, VdS, UL, FM" },
      { label: "使用消火薬剤", value: "FM-200, Novec 1230, イナートガス, CO₂" },
      { label: "主な防護対象", value: "サーバー室, 書庫・アーカイブ, 高圧電気室" },
      { label: "提供サービス範囲", value: "ハイドロリック設計, 工事施工, 保守点検" }
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

export default async function FireSuppressionPage({ params }: Props) {
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
    ? "Söndürme Ajanı ve Sistem Çözümleri"
    : locale === "en"
    ? "Suppression Agents and Systems"
    : locale === "de"
    ? "Löschmittel und Systemlösungen"
    : locale === "fr"
    ? "Agents d'Extinction et Systèmes"
    : locale === "it"
    ? "Agenti Estinguenti e Sistemi"
    : "消火剤およびシステムソリューション";

  const safetyStandardLabel = locale === "tr"
    ? "Güvenlik Standardı ve Tasarım Esasları"
    : locale === "en"
    ? "Safety Standard and Design Principles"
    : locale === "de"
    ? "Sicherheitsstandard und Konstruktionsprinzipien"
    : locale === "fr"
    ? "Norme de Sécurité et Principes de Conception"
    : locale === "it"
    ? "Standard di Sicurezza e Principi di Progettazione"
    : "安全基準および設計設計基準";

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
            {data.content.split("\n\n").map((para, idx) => (
              <p key={idx} style={{ color: "var(--gray-600)", lineHeight: "1.8", fontSize: "1rem", marginBottom: "16px" }}>
                {para}
              </p>
            ))}
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
