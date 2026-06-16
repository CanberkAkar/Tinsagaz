import { GasProduct } from "./gasesData";

export const itGasesData: GasProduct[] = [
  {
    slug: "oksijen-gazi",
    title: "Gas Ossigeno (O₂)",
    badge: "Gas Industriali",
    icon: "🔥",
    desc: "L'ossigeno (O₂), uno dei componenti fondamentali e indispensabili della produzione industriale, è un gas incolore, inodore e insapore che costituisce circa il 21% dell'atmosfera. Tuttavia, gli elevati standard di efficienza, precisione e sicurezza nelle applicazioni industriali impongono l'uso di gas con una purezza molto più elevata rispetto all'ossigeno atmosferico.",
    features: [
      "Produzione in conformità con le norme industriali nazionali",
      "Elevata purezza e garanzia di flusso stabile",
      "Bombole testate per tenuta e sicurezza"
    ],
    usageAreas: [
      "Produzione e lavorazione dei metalli (Forni siderurgici)",
      "Processi di taglio e saldatura ossiacetilenica (Oxy-Fuel)",
      "Tecnologie di taglio laser (Acciai al carbonio)",
      "Produzione di vetro e ceramica (Efficienza di combustione nei forni)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "O₂" },
      { label: "Pressione di Riempimento", value: "150 - 200 Bar" },
      { label: "Standard di Pulizia", value: "Pulito per Ossigeno" },
      { label: "Modello di Imballaggio", value: "Bombola a Pressione / Pacco Bombole (Bundle)" }
    ],
    content: "L'ossigeno (O₂), uno dei componenti fondamentali e indispensabili della produzione industriale, è un gas incolore, inodore e insapore che costituisce circa il 21% dell'atmosfera. Tuttavia, gli elevati standard di efficienza, precisione e sicurezza nelle applicazioni industriali impongono l'uso di gas con una purezza molto più elevata rispetto all'ossigeno atmosferico. Come Tinsa Gaz, forniamo una fornitura ininterrotta a una vasta gamma di settori, dall'industria pesante alla produzione di precisione, con ossigeno industriale ad elevata purezza prodotto in conformità con le norme industriali nazionali.",
    supplyModels: [
      {
        title: "1. Bombole di Ossigeno ad Alta Pressione",
        desc: "Soluzione ideale per aziende con tassi di consumo precisi, officine mobili di saldatura/taglio e progetti stagionali. Spedito in bombole ad alta sicurezza da 150 a 200 bar che hanno superato i test internazionali. I controlli di tenuta e purezza vengono eseguiti meticolosamente in ogni fase di riempimento."
      },
      {
        title: "2. Pacchi Bombole e Sistemi a Pallet (Bundle)",
        desc: "Sviluppato per fabbriche, cantieri navali e grandi officine che richiedono un flusso di ossigeno elevato e ininterrotto. Consiste nel collegare più bombole ad alta pressione a un unico collettore all'interno di un telaio in acciaio. Questo sistema riduce i tempi di cambio bombola, risparmia manodopera e aumenta la sicurezza operativa."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: Sebbene l'ossigeno non sia infiammabile di per sé, supporta la combustione in modo estremamente violento. Pertanto, bombole, collettori e tubazioni per ossigeno non devono assolutamente entrare in contatto con olio, grasso e altre sostanze organiche. Tutti i raccordi e componenti pallet spediti da Tinsa Gaz sono soggetti agli standard di 'pulizia ossigeno'."
  },
  {
    slug: "argon-gazi",
    title: "Gas Argon (Ar)",
    badge: "Gas Industriali",
    icon: "⚗️",
    desc: "L'argon (Ar) è un gas nobile incolore, inodore ed estremamente stabile (inerte) che costituisce circa lo 0,93% dell'atmosfera. Questa assoluta inerzia alle reazioni chimiche rende l'argon uno 'scudo protettivo' perfetto nei processi di fabbricazione industriale.",
    features: [
      "Protezione ad elevata purezza",
      "Rischio di porosità zero in applicazioni di saldatura critiche",
      "Protezione perfetta dell'arco di saldatura e del metallo fuso"
    ],
    usageAreas: [
      "Tecnologie di saldatura TIG (Argon) e MIG/MAG",
      "Metallurgia e industria siderurgica (processo AOD)",
      "Processi di trattamento termico (atmosfera protettiva)",
      "Produzione di vetrocamera (vetro isolante)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "Ar" },
      { label: "Pressione di Riempimento", value: "150 - 230 Bar" },
      { label: "Caratteristica", value: "Gas nobile inerte incolore e inodore" },
      { label: "Livello di Purezza", value: "Elevata purezza (Grado industriale)" }
    ],
    content: "L'argon (Ar) è un gas nobile incolore, inodore ed estremamente stabile (inerte) che costituisce circa lo 0,93% dell'atmosfera. Questa assoluta inerzia alle reazioni chimiche rende l'argon uno 'scudo protettivo' perfetto nei processi di fabbricazione industriale. Il fatto che non formi legami con altri elementi anche ad alte temperature è cruciale per prevenire l'ossidazione nella metallurgia e nelle tecnologie di saldatura. Come Tinsa Gaz, offriamo gas argon ad elevati livelli di purezza secondo standard sicuri.",
    supplyModels: [
      {
        title: "1. Bombole di Argon ad Alta Pressione",
        desc: "Le nostre soluzioni forniscono vantaggi di mobilità in officine, impianti di medie dimensioni e lavori sul campo. Riempito a 150-230 bar in base alle vostre esigenze. Le bombole vengono ispezionate prima di ogni riempimento per preservare la purezza."
      },
      {
        title: "2. Pacchi Bombole di Argon (Bundle)",
        desc: "Soluzione ad alto volume sviluppata per cantieri navali con linee di saldatura continua, industrie pesanti e fabbriche di produzione di massa. Costituito da bombole collegate a un unico collettore all'interno di un telaio in acciaio. Elimina i tempi di inattività."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: Sebbene l'argon non sia tossico, eventuali perdite in spazi chiusi non possono essere rilevate a causa della mancanza di odore e colore. Poiché può sostituire l'ossigeno e causare asfissia, un'efficace ventilazione delle aree di stoccaggio e utilizzo è fondamentale."
  },
  {
    slug: "karisim-gazlari",
    title: "Miscele di Gas (Gas di Saldatura MIG/MAG)",
    badge: "Gas Industriali",
    icon: "🔧",
    desc: "Nella fabbricazione industriale, la scelta del gas di protezione determina la qualità, la velocità e la resistenza meccanica della saldatura. Le Miscele di Gas, comunemente chiamate 'gas di saldatura', sono miscele tecnologiche ad alte prestazioni di due o più gas (solitamente Argon e CO₂) a rapporti stabili.",
    features: [
      "Spruzzi minimi e zero lavoro di pulizia post-saldatura",
      "Eccellente penetrazione e stabilità dell'arco",
      "Velocità di produzione e consumo di filo ottimizzati"
    ],
    usageAreas: [
      "Metodi di saldatura MIG/MAG (a filo)",
      "Saldatura di acciai strutturali e per fabbricazione generale",
      "Giunzione di lamiere sottili e medie",
      "Trasferimento a spruzzo (spray arc) nella saldatura di parti spesse"
    ],
    specifications: [
      { label: "Composizione", value: "82% Argon + 18% CO₂ (o Rapporti Personalizzati)" },
      { label: "Pressione di Riempimento", value: "150 - 230 Bar" },
      { label: "Caratteristica", value: "Miscela omogenea stabilizzata" },
      { label: "Qualità di Saldatura", value: "Senza spruzzi, senza porosità, alta resistenza" }
    ],
    content: "Nella fabbricazione industriale, la scelta del gas di protezione determina la qualità, la velocità e la resistenza meccanica della saldatura. Le Miscele di Gas, comunemente chiamate 'gas di saldatura', sono miscele tecnologiche ad alte prestazioni di due o più gas (solitamente Argon e CO₂) a rapporti stabili. Come Tinsa Gaz, effettuiamo il riempimento e la fornitura di miscele gassose stabilizzate secondo gli standard internazionali.",
    supplyModels: [
      {
        title: "1. Bombole di Miscela Gassosa ad Alta Pressione",
        desc: "Gas miscelati a rapporti precisi sono offerti in bombole ad alta sicurezza a pressioni di esercizio da 150 a 230 bar."
      },
      {
        title: "2. Pacchi Bombole e Sistemi a Pallet (Bundle)",
        desc: "Soluzioni a flusso continuo per cantieri navali e fabbriche con linee di saldatura pesanti. I pacchi bombole collegati a un collettore unico evitano arresti di linea."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Qualità: Se la tecnologia di riempimento è inadeguata, i componenti all'interno delle bombole possono separarsi nel tempo a causa di differenze di densità o sbalzi di temperatura. Tinsa Gaz utilizza moderni sistemi di pesatura per garantire che il rapporto rimanga perfettamente stabile dal primo all'ultimo litro."
  },
  {
    slug: "karbondioksit-gazi",
    title: "Gas Anidride Carbonica (CO₂)",
    badge: "Gas Industriali",
    icon: "❄️",
    desc: "L'anidride carbonica (CO₂) svolge ruoli critici nella produzione industriale, nell'agroalimentare, nell'intrattenimento e nella sicurezza antincendio. Composto da un atomo di carbonio e due di ossigeno, è un gas inodore e incolore che coesiste in fase liquida e gassosa nelle bombole.",
    features: [
      "Precisione di riempimento garantita da pesatura digitale in kg",
      "Penetrazione profonda per la saldatura sotto atmosfera protettiva",
      "Eccellente proprietà di estinzione dell'incendio per soffocamento dell'ossigeno"
    ],
    usageAreas: [
      "Processi di saldatura MIG/MAG",
      "Sistemi di estinzione incendi ed estintori",
      "Industria alimentare e delle bevande (gassatura, MAP, raffreddamento)",
      "Fonderie e processi chimici (stampi in sabbia, controllo del pH)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "CO₂" },
      { label: "Metodo di Riempimento", value: "Controllo del peso tramite bilance digitali (kg)" },
      { label: "Opzioni di Imballaggio", value: "Bombole Singole, Pacchi (Bundle), Bombole a Pescante (Sifone)" },
      { label: "Stato di Fase", value: "Coesistenza delle fasi liquida e gassosa" }
    ],
    content: "L'anidride carbonica (CO₂) svolge ruoli critici nella produzione industriale, nell'agroalimentare, nell'intrattenimento e nella sicurezza antincendio. Composto da un atomo di carbonio e due di ossigeno, è un gas inodore e incolore che coesiste in fase liquida e gassosa nelle bombole. Pertanto, la quantità è determinata mediante pesatura (in chilogrammi) e non da manometro. Come Tinsa Gaz, pesiamo meticolosamente ogni bombola e pacco bombole per garantire una fornitura precisa.",
    supplyModels: [
      {
        title: "1. Bombole di Anidride Carbonica ad Alta Pressione",
        desc: "Il modello di consegna più comune per officine e applicazioni industriali. Viene prelevata la fase gassosa accumulata in alto nella bombola. Tutte le bombole CO₂ di Tinsa Gaz sono pesate e vendute in base al peso netto."
      },
      {
        title: "2. Pacchi Bombole (Bundle)",
        desc: "Le nostre soluzioni assicurano un flusso continuo per grandi stabilimenti industriali. In linea con la nostra politica, tutti i pacchi bombole sono consegnati in base a severi controlli di peso in chilogrammi."
      },
      {
        title: "3. Bombole con Tubo Pescante (CO₂ Liquida per Show e Alimentare)",
        desc: "Per applicazioni che richiedono CO₂ liquida diretta, Tinsa Gaz offre bombole con tubo pescante (sifone). Questo tubo consente di prelevare direttamente il CO₂ liquido dal fondo. Essenziale per effetti fumo/ghiaccio secco, congelamento rapido alimentare e ricarica estintori."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: Poiché le bombole contengono prodotto liquido, è vitale lasciare uno spazio di testa di sicurezza per evitare sovrapressioni. Tinsa Gaz elimina questo rischio grazie a sistemi di riempimento computerizzati. Inoltre, il CO₂ è più pesante dell'aria; in caso di perdita, si accumula al suolo, creando un rischio di asfissia. Una ventilazione a livello del suolo è obbligatoria."
  },
  {
    slug: "saf-azot-gazi",
    title: "Gas Azoto Puro (N₂)",
    badge: "Gas Industriali",
    icon: "🌫️",
    desc: "L'azoto (N₂), che costituisce circa il 78% della nostra atmosfera, è un gas inerte, inodore, incolore e insapore che funge da pietra angolare per la sicurezza e la conservazione dei prodotti nell'industria. La sua eccezionale inerzia chimica impedisce l'ossidazione, la combustione e il deterioramento.",
    features: [
      "Elevata purezza garantita da tecnologie di riempimento avanzate",
      "Protezione che elimina ossidazioni e degradazioni indesiderate",
      "Qualità di taglio laser liscia e senza annerimenti su acciaio inossidabile"
    ],
    usageAreas: [
      "Inertizzazione e spurgo per la sicurezza antincendio ed esplosione",
      "Confezionamento alimentare (MAP per prolungare la durata di conservazione)",
      "Tecnologie di taglio laser (Taglio dell'acciaio inossidabile senza ossidazione)",
      "Elettronica e trattamento termico (Saldatura ad onda, semiconduttori)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "N₂" },
      { label: "Classe di Purezza", value: "Elevata Purezza (High Purity)" },
      { label: "Pressione (Bombole)", value: "150 - 230 Bar" },
      { label: "Pressione (Pacchi)", value: "230 Bar Standard" }
    ],
    content: "L'azoto (N₂), che costituisce circa il 78% della nostra atmosfera, è un gas inerte, inodore, incolore e insapore che funge da pietra angolare per la sicurezza e la conservazione dei prodotti nell'industria. La sua eccezionale inerzia chimica impedisce l'ossidazione e i processi di combustione. Come Tinsa Gaz, forniamo azoto puro ad elevata purezza dai nostri impianti di riempimento moderni, rispettando le norme industriali.",
    supplyModels: [
      {
        title: "1. Bombole di Azoto Puro ad Alta Pressione",
        desc: "Ideale per officine a cicli di consumo intermittenti, cantieri mobili e confezionamento alimentare. Le bombole singole sono fornite a pressioni da 150 a 230 bar per garantire la purezza del gas."
      },
      {
        title: "2. Pacchi Bombole e Sistemi a Pallet (Bundle)",
        desc: "Sviluppato per centri di taglio laser, grandi impianti alimentari e linee chimiche continue. Tinsa Gaz standardizza i pacchi bombole di azoto a 230 bar per garantire la continuità operativa, riducendo i tempi di fermo."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: L'azoto non è tossico né infiammabile, ma le perdite sono invisibili e inodori. L'accumulo di azoto sostituisce l'ossigeno, creando un rischio di asfissia immediata. Rilevatori di ossigeno e ventilazione attiva sono indispensabili."
  },
  {
    slug: "asetilen-gazi",
    title: "Gas Acetilene (C₂H₂)",
    badge: "Gas Industriali",
    icon: "🧨",
    desc: "L'acetilene (C₂H₂), combustibile indispensabile per processi ad alta temperatura e forte concentrazione termica nella produzione industriale, è un idrocarburo incolore con un caratteristico odore simile all'aglio. Presenta la temperatura e la velocità di fiamma più elevate.",
    features: [
      "Temperatura massima della fiamma fino a 3160°C in combinazione con ossigeno puro",
      "Massa porosa e acetone per uno stoccaggio sicuro in bombola",
      "Garanzia di riempimento in base al peso tramite bilance di precisione"
    ],
    usageAreas: [
      "Saldatura ossiacetilenica e taglio dei metalli (Oxy-Acetylene)",
      "Tempera superficiale e raddrizzatura alla fiamma (ricottura)",
      "Lavorazione del vetro e dell'oreficeria (regolazione precisa della fiamma)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "C₂H₂" },
      { label: "Temperatura Fiamma", value: "~3160°C (con Ossigeno)" },
      { label: "Metodo di Stoccaggio", value: "Massa porosa e liquido disciolto in acetone" },
      { label: "Base di Riempimento", value: "Peso di precisione in chilogrammi (kg)" }
    ],
    content: "L'acetilene (C₂H₂), combustibile indispensabile per processi ad alta temperatura e forte concentrazione termica nella produzione industriale, è un idrocarburo incolore con un caratteristico odore simile all'aglio. Presenta la temperatura della fiamma più elevata (circa 3160°C con ossigeno puro). Questa potenza termica unica lo rende lo standard assoluto per il taglio e la saldatura dei metalli nell'industria pesante. Tinsa Gaz fornisce acetilene industriale applicando metodi di riempimento precisi in impianti moderni.",
    supplyModels: [
      {
        title: "1. Bombole di Acetilene ad Alta Pressione",
        desc: "Soluzione di combustibile critica per officine e cantieri navali. A causa della sua struttura chimica, lo stoccaggio di acetilene libero sotto pressione presenta rischi di esplosione fatali. Pertanto, l'interno delle bombole è riempito con materiale poroso e il gas è disciolto in acetone. Tinsa Gaz vende acetilene a peso netto (kg) e non a pressione."
      },
      {
        title: "2. Pacchi Bombole e Sistemi a Pallet (Bundle)",
        desc: "I nostri pacchi bombole assicurano un flusso continuo per officine di carpenteria metallica pesante e cantieri navali. In conformità con le norme di sicurezza, tutti i sistemi sono dotati di valvole antiritorno e riduttori di pressione. Riempimento e fatturazione al kg."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: L'acetilene presenta il rischio di esplosione e incendio più elevato. Le miscele con l'aria sono esplosive in un ampio intervallo. Le bombole non devono mai essere stese. In posizione orizzontale potrebbe fuoriuscire acetone liquido, con rischio immediato di esplosione. Tutte le bombole sono protette da valvole di sicurezza."
  },
  {
    slug: "helyum-gazi",
    title: "Gas Elio (He)",
    badge: "Gas Industriali",
    icon: "🎈",
    desc: "L'elio (He), dalle applicazioni altamente strategiche che vanno dalla ricerca di punta all'industria e al divertimento, è un gas nobile noto per la sua leggerezza e inerzia assoluta. Secondo elemento più leggero dell'universo, la sua ininfiammabilità lo rende indispensabile per i processi ad alta sicurezza.",
    features: [
      "Struttura di gas nobile incombustibile e molto leggero",
      "Potere di raffreddamento dell'elio liquido (-269°C) per risonanze magnetiche superconduttrici",
      "Capacità di rilevamento perdite precisa grazie a un diametro atomico minuscolo"
    ],
    usageAreas: [
      "Gonfiaggio palloncini ed eventi (palloni volanti ininfiammabili)",
      "Sanità e raffreddamento per risonanza magnetica (MRI)",
      "Rilevamento perdite e laboratori di analisi (test di tenuta)",
      "Saldatura all'elio e miscele gassose industriali (MIG/TIG)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "He" },
      { label: "Miscele di Saldatura", value: "Combinazioni Argon + Elio" },
      { label: "Pressione (Bombole)", value: "150 - 230 Bar" },
      { label: "Pressione (Pacchi)", value: "230 Bar" }
    ],
    content: "L'elio (He), dalle applicazioni altamente strategiche che vanno dalla ricerca di punta all'industria e al divertimento, è un gas nobile noto per la sua leggerezza e inerzia assoluta. Secondo elemento più leggero dell'universo, la sua ininfiammabilità lo rende indispensabile per i processi ad alta sicurezza. Tinsa Gaz fornisce elio industriale e tecnologico ad elevata purezza secondo i più alti standard di sicurezza logistica.",
    supplyModels: [
      {
        title: "1. Bombole di Elio ad Alta Pressione",
        desc: "Soluzioni ottimizzate per analisi di laboratorio, test di tenuta e stazioni di gonfiaggio palloncini. L'elio gassoso è stoccato in forma gassosa e venduto a pressione. Consegnato a 150-230 bar con garanzia di purezza."
      },
      {
        title: "2. Pacchi Bombole (Bundle)",
        desc: "Sistemi che garantiscono un flusso continuo per centri di taglio laser, cantieri navali e officine di saldatura pesante. Tinsa Gaz standardizza i pacchi bombole a 230 bar per garantire la regolarità del flusso."
      },
      {
        title: "3. Miscele per Saldatura all'Elio & Combinazioni Industriali (MIG/TIG)",
        desc: "Nella saldatura MIG, TIG e Laser, l'argon puro può risultare insufficiente per spessori elevati di alluminio, rame o inox. L'elio offre un potenziale di ionizzazione e conducibilità termica superiori. Le nostre miscele Argon + Elio apportano più calore all'arco, aumentando penetrazione e velocità ed evitando il preriscaldamento."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: L'elio non è tossico né infiammabile. Tuttavia, l'accumulo in aree non ventilate riduce l'ossigeno, creando rischio di asfissia. Inalare elio per alterare la voce è estremamente pericoloso poiché priva i polmoni di ossigeno, causando svenimenti o danni permanenti."
  },
  {
    slug: "hidrojen-gazi",
    title: "Gas Idrogeno (H₂)",
    badge: "Gas Industriali",
    icon: "💨",
    desc: "L'idrogeno (H₂), l'elemento più leggero ed energetico dell'universo per unità di massa, è un gas inodore, incolore e insapore. Svolge un ruolo chiave nei processi industriali grazie ad alta conducibilità termica, forte potere riducente e combustione pulita.",
    features: [
      "Atmosfera riducente per catturare l'ossigeno nei trattamenti termici",
      "Combustione estremamente pulita per la lavorazione di vetro e quarzo",
      "Massima conducibilità termica per il raffreddamento di rotori di alternatori"
    ],
    usageAreas: [
      "Trattamento termico & metallurgia (ricottura brillante antiruggine)",
      "Lavorazione di vetro e quarzo (formatura tramite fiamma ossiidrica)",
      "Sistemi di raffreddamento alternatori ed energia",
      "Industria chimica e petrolifera (hydrocracking, idrogenazione)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "H₂" },
      { label: "Classe di Purezza", value: "Elevata Purezza Industriale" },
      { label: "Pressione (Bombole)", value: "150 - 230 Bar" },
      { label: "Pressione (Pacchi)", value: "230 Bar" }
    ],
    content: "L'idrogeno (H₂), l'elemento più leggero ed energetico dell'universo per unità di massa, è un gas inodore, incolore e insapore. Svolge un ruolo chiave nei processi industriali grazie ad alta conducibilità termica, forte potere riducente (catturando l'ossigeno) e combustione pulita. Tinsa Gaz assicura il riempimento e l'approvvigionamento di idrogeno ad elevata purezza con infrastrutture moderne e rigidi protocolli di sicurezza.",
    supplyModels: [
      {
        title: "1. Bombole di Idrogeno ad Alta Pressione",
        desc: "Soluzione ideale per laboratori, climatizzazione di generatori e impianti termici di medie dimensioni. Consegnato a pressioni di 150-230 bar con raccordi sigillati e testati."
      },
      {
        title: "2. Pacchi Bombole e Sistemi a Pallet (Bundle)",
        desc: "Soluzioni per vetrerie a flusso continuo, cantieri navali e acciaierie. Per garantire flussi elevati e stabili, Tinsa Gaz standardizza i pacchi bombole a 230 bar, ottimizzando l'efficienza logistica."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: L'idrogeno presenta la velocità di combustione ed esplosione più elevata ed è estremamente reattivo. Forma miscele esplosive (ATEX) in un ampio intervallo nell'aria. Trattandosi della molecola più piccola, può sfuggire da micro-perdite. I raccordi (filettatura sinistra per gas infiammabile) sono testati a ogni riempimento. I locali devono essere ex-proof e ventilati a soffitto."
  },
  {
    slug: "cng-dogalgaz",
    title: "Gas Naturale Compresso (CNG) (CH₄)",
    badge: "Gas Industriali",
    icon: "⚡",
    desc: "Il metano compresso (CNG), composto principalmente da metano (CH₄), è un combustibile ad alto rendimento ottenuto dalla compressione del gas naturale ad alta pressione. È una fonte energetica strategica per l'industria e le flotte.",
    features: [
      "Fornitura di gas naturale per impianti industriali non raggiunti da metanodotti",
      "Combustibile economico per impianti di produzione asfalto e forni per cemento",
      "Carburante alternativo pulito per veicoli pesanti e flotte logistiche"
    ],
    usageAreas: [
      "Combustibile industriale fuori rete (vapore, acqua calda, calore di processo)",
      "Impianti di asfalto e cementifici (forni di essiccazione)",
      "Veicoli pesanti & Flotte logistiche (autobus urbani, compattatori rifiuti)"
    ],
    specifications: [
      { label: "Formula Chimica", value: "CH₄ (a prevalenza Metano)" },
      { label: "Pressione (Bombole)", value: "200 - 250 Bar" },
      { label: "Pressione (Pacchi)", value: "230 - 250 Bar" },
      { label: "Dispositivi di Sicurezza", value: "Valvole di sicurezza, limitatori di pressione" }
    ],
    content: "Il metano compresso (CNG), composto principalmente da metano (CH₄), è un combustibile ad alto rendimento ottenuto dalla compressione del gas naturale ad alta pressione. Rappresenta la soluzione logistica più affidabile per portare i vantaggi economici del gas naturale in aree sprovviste di condotte. Come Tinsa Gaz, forniamo CNG nel rispetto delle normative energetiche nazionali mediante moderni sistemi di riempimento e trasporto.",
    supplyModels: [
      {
        title: "1. Bombole di CNG ad Alta Pressione",
        desc: "Le nostre soluzioni in bombole sono ottimizzate per cantieri temporanei ed esigenze energetiche ridotte. Consegnate dopo severi controlli di tenuta a pressioni da 200 a 250 bar."
      },
      {
        title: "2. Pacchi Bombole e Sistemi a Pallet (Bundle)",
        desc: "Sistemi di pacchi bombole per la fornitura continua nell'industria e nelle miniere. Tinsa Gaz riempie i pacchi bombole CNG tra 230 e 250 bar, garantendo gas di qualità rete e pressione stabile."
      }
    ],
    safetyWarning: "Avvertenza Tecnica e Standard di Sicurezza: Il CNG contiene metano ed è altamente infiammabile ed esplosivo. Essendo più leggero dell'aria, sale rapidamente; le aree chiuse di stoccaggio devono possedere ventilazione a soffitto e sensori ex-proof. Tutti i sistemi di Tinsa Gaz sono dotati di valvole di sicurezza e intercettatori di emergenza."
  }
];
