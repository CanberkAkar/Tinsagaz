export interface KbQuestion {
  id: string;
  category: "kuru-buz" | "endustriyel" | "medikal" | "sondurme" | "genel";
  question: string;
  answer: string;
  keywords: string[];
}

export interface CatalogItem {
  name: string;
  size: string;
  url: string;
}

export const catalogs: Record<string, CatalogItem[]> = {
  tr: [
    { name: "Argon Teknik Katalog", size: "2.4 MB", url: "/msds/msds-argon.pdf" },
    { name: "CO₂ Teknik Katalog", size: "1.8 MB", url: "/msds/msds-karbondioksit.pdf" },
    { name: "Gaz Güvenlik Rehberi", size: "3.1 MB", url: "/msds/gas-safety-guide.pdf" },
    { name: "Gaz Depolama Kılavuzu", size: "1.5 MB", url: "/msds/gas-storage-guide.pdf" },
  ],
  en: [
    { name: "Argon Technical Catalog", size: "2.4 MB", url: "/msds/msds-argon.pdf" },
    { name: "CO₂ Technical Catalog", size: "1.8 MB", url: "/msds/msds-karbondioksit.pdf" },
    { name: "Gas Safety Guide", size: "3.1 MB", url: "/msds/gas-safety-guide.pdf" },
    { name: "Gas Storage Guide", size: "1.5 MB", url: "/msds/gas-storage-guide.pdf" },
  ],
};

export const regions = [
  "İzmir", "Manisa", "Aydın", "Muğla", "Denizli", "Bodrum", "Marmaris", "Fethiye", 
  "Milas", "Aliağa", "Didim", "Kuşadası", "Torbalı", "Kemalpaşa", "Çiğli", "Bornova", 
  "Karşıyaka", "Gaziemir"
];

export const getKbData = (locale: string): KbQuestion[] => {
  const isTr = locale === "tr";

  if (isTr) {
    return [
      // Kuru Buz
      {
        id: "kuru-buz-nedir",
        category: "kuru-buz",
        question: "Gazlı Yangın Söndürme Sistemleri",
        answer: "Gazlı yangın söndürme sistemleri, yangın oluşumu sırasında ortamdaki oksijen seviyesini yanmanın sürdürülebileceği sınırın altına düşürerek ve belirli uygulamalarda ısı enerjisini absorbe ederek yangının hızlı ve etkili bir şekilde söndürülmesini sağlayan gelişmiş yangın güvenlik çözümleridir. Özellikle su veya köpük kullanımının uygun olmadığı kritik alanlarda tercih edilen bu sistemler, yüksek değerli ekipmanların ve hassas proseslerin korunmasında maksimum güvenlik sunmaktadır.\n\n\"Temiz söndürme sistemleri\" olarak da adlandırılan gazlı söndürme sistemleri, söndürme işlemi sonrasında kalıntı bırakmaması ve elektronik ekipmanlara zarar vermemesi sayesinde; veri merkezleri, sunucu odaları, telekomünikasyon altyapıları ve kritik endüstriyel tesisler için ideal bir çözüm oluşturmaktadır. Sistemlerde kullanılan FM-200, Novec 1230, Inert Gaz ve CO₂ gibi farklı söndürme ajanları, korunacak mahallin özelliklerine ve ilgili uluslararası standartlara uygun olarak seçilmektedir.\n\nFirmamız, NFPA, EN 15004 (ISO 14520), VdS, UL ve FM standartlarına uygun olarak çok sayıda gazlı yangın söndürme sisteminin tasarımını, hidrolik hesaplamalarını, projelendirmesini, montajını ve devreye alma süreçlerini başarıyla gerçekleştirmektedir. Her projede uluslararası standartlar esas alınarak, maksimum can ve mal güvenliği sağlayan mühendislik çözümleri sunulmaktadır.\n\nSIEMENS BT çözüm ortağı olan firmamız, SIEMENS ve BURSAN güvencesiyle; mühendislik, proje yönetimi, sistem entegrasyonu ve satış sonrası teknik destek hizmetlerini en yüksek kalite standartlarında müşterilerine sunmaktadır.\n\nGazlı Yangın Söndürme Sistemlerinin Başlıca Kullanım Alanları\n- Veri merkezleri, bilişim sistemleri ve sunucu odaları\n- Arşiv odaları, belge depoları ve değerli evrak kasaları\n- Acil çağrı merkezleri, kontrol merkezleri ve operasyon odaları\n- Uçuş navigasyon merkezleri, hava trafik kontrol kuleleri ve simülatörler\n- Telekomünikasyon tesisleri, baz istasyonları ve internet servis sağlayıcı merkezleri\n- Televizyon, radyo yayın merkezleri ve yayın kontrol odaları\n- Sanat galerileri, müzeler, kütüphaneler ve kültürel miras alanları\n- Hastaneler, ameliyathaneler ve tıbbi görüntüleme merkezleri\n- Laboratuvarlar, endüstriyel proses tesisleri ve kontrol odaları\n- Enerji santralleri, jeneratör odaları, UPS ve akü odaları\n- Elektrik panoları, kablo galerileri ve alçak gerilim odaları\n- Açık deniz platformları, gemiler, askeri araçlar ve savunma sanayi uygulamaları",
        keywords: ["gazlı yangın söndürme", "yangın söndürme sistemleri", "siemens", "bursan", "kullanım alanları"]
      },
      {
        id: "kuru-buz-nasil-saklanir",
        category: "kuru-buz",
        question: "Kuru buz nasıl saklanır? Buzdolabına konur mu?",
        answer: "Kuru buz kesinlikle normal ev tipi buzdolaplarında veya derin dondurucularda saklanmamalıdır. Dondurucunun termostatını bozabilir ve kapalı kapta gaz sıkışması nedeniyle patlama riski oluşturur. Kuru buz, özel yalıtımlı strafor (EPS) veya poliüretan kutularda, kapağı hava sızdıracak şekilde gevşek bırakılarak, iyi havalandırılan bir ortamda saklanmalıdır.",
        keywords: ["kuru buz nasıl saklanır", "kuru buz buzdolabına konur mu", "saklama kuralları"]
      },
      {
        id: "kuru-buz-erir-mi",
        category: "kuru-buz",
        question: "Kuru buz erir mi? Ne kadar dayanır?",
        answer: "Kuru buz normal buz gibi sıvılaşarak erimez, süblimleşerek doğrudan gaz fazına geçer. Yalıtımlı bir kutuda günde yaklaşık %10-20 oranında fire vererek kaybolur. Doğru muhafaza koşullarında pelet veya blok formuna bağlı olarak 2 ila 4 gün arasında dayanabilir.",
        keywords: ["kuru buz erir mi", "kuru buz ne kadar dayanır", "fire oranı"]
      },
      {
        id: "kuru-buz-tehlikeli-mi",
        category: "kuru-buz",
        question: "Kuru buz tehlikeli mi? Elle tutulur mu?",
        answer: "Evet, kuru buz aşırı düşük sıcaklığı nedeniyle doğrudan ciltle temas ettiğinde 'soğuk yanıklarına' (donma) yol açar. Bu yüzden kesinlikle elle tutulmamalı, her zaman koruyucu eldiven, maşa veya kürek kullanılmalıdır. Ayrıca kapalı alanlarda CO₂ gazı birikmesi boğulma riski yaratabileceğinden taşıma ve depolama alanları iyi havalandırılmalıdır.",
        keywords: ["kuru buz tehlikeli mi", "kuru buz elle tutulur mu", "soğuk yanığı"]
      },
      {
        id: "kuru-buz-neden-duman-cikarir",
        category: "kuru-buz",
        question: "Kuru buz neden duman çıkarır ve suyun içinde neden dumanı artar?",
        answer: "Kuru buz oda sıcaklığında hızla süblimleşerek karbondioksit gazına dönüşür. Havaya salınan bu soğuk gaz, havadaki nemi yoğunlaştırarak beyaz bir sis (duman) görüntüsü oluşturur. Suyun içine atıldığında ise ısı transferi çok daha hızlı gerçekleştiği için süblimleşme hızlanır ve yoğun, beyaz bir duman bulutu ortaya çıkar.",
        keywords: ["kuru buz neden duman çıkarır", "kuru buz neden suyun içinde duman çıkarır", "süblimleşme"]
      },
      {
        id: "kuru-buz-temizligi",
        category: "kuru-buz",
        question: "Kuru buz temizliği (Dry Ice Blasting) nedir ve avantajları nelerdir?",
        answer: "Kuru buz temizliği, kuru buz peletlerinin basınçlı hava ile kirli yüzeylere püskürtülmesi yöntemidir. Temas anında peletler süblimleşir ve kir katmanını mikroskobik patlamalarla yüzeyden ayırır. Avantajları: Aşındırıcı değildir, kimyasal atık veya su bırakmaz, elektrikli bileşenlerde güvenle kullanılabilir ve yerinde kuru buz temizliği sayesinde makine montajını sökmeye gerek kalmaz.",
        keywords: ["kuru buz temizliği", "kuru buz temizliği avantajları", "dry ice blasting", "kuru buz ile kalıp temizliği"]
      },
      {
        id: "kuru-buz-nerede-satilir",
        category: "kuru-buz",
        question: "Kuru buz nereden alınır ve toptan sipariş süreci nasıldır?",
        answer: "Tinsagaz olarak profesyonel kuru buz üreticisi ve tedarikçisiyiz. İzmir, Muğla, Manisa, Aydın, Denizli ve çevre ilçelere (Bodrum, Marmaris, Fethiye vb.) yerinde kuru buz teslimatı ve toptan satış hizmeti sunmaktayız. Web sitemiz veya telefon numaralarımız üzerinden kuru buz siparişi oluşturabilir, pelet ve blok formlarında temin edebilirsiniz.",
        keywords: ["kuru buz fiyatı", "kuru buz satın al", "kuru buz nereden alınır", "kuru buz siparişi", "kuru buz üreticisi"]
      },
      // Argon & Sinai Gazlar
      {
        id: "argon-gazı-nedir",
        category: "endustriyel",
        question: "Argon gazı nedir ve yanıcı mıdır?",
        answer: "Argon (Ar), atmosferde bulunan eylemsiz (asal) bir soy gazdır. Kimyasal reaksiyonlara girmediği için kesinlikle yanıcı veya patlayıcı değildir. Endüstride özellikle kaynak arkını ve kaynak bölgesini havadaki oksijenden korumak amacıyla koruyucu kalkan olarak kullanılır.",
        keywords: ["argon gazı nedir", "argon yanıcı mı", "asal gaz"]
      },
      {
        id: "argon-hangi-kaynakta-kullanilir",
        category: "endustriyel",
        question: "Argon hangi kaynakta ve nasıl kullanılır?",
        answer: "Argon gazı genellikle TIG (Tungsten Inert Gas) ve MIG/MAG (Metal Inert Gas) kaynak yöntemlerinde paslanmaz çelik, alüminyum ve alaşımlı metallerin kaynağında koruyucu gaz olarak kullanılır. Hangi gaz hangi kaynakta kullanılır sorusunun cevabı kaynak metaline bağlıdır; örneğin karbon çelikleri için Argon + CO₂ karışım gazları tercih edilir.",
        keywords: ["argon hangi kaynakta kullanılır", "hangi gaz hangi kaynakta kullanılır", "argon vs co2"]
      },
      {
        id: "argon-tupu-kac-bar",
        category: "endustriyel",
        question: "Argon tüpü kaç bar basınçla doldurulur ve kaç litredir?",
        answer: "Standart endüstriyel argon tüpleri genellikle 150 Bar veya 200 Bar çalışma basıncında doldurulur. Tüp hacimleri kullanım sıklığına göre 10 Litre, 40 Litre veya en yaygın olarak 50 Litre (10 m³) su hacmine sahip silindirlerdir.",
        keywords: ["argon kaç bar basılır", "argon tüpü kaç litre", "tüp basıncı"]
      },
      {
        id: "argon-insan-sagligina-zararli-mi",
        category: "endustriyel",
        question: "Argon insan sağlığına zararlı mıdır?",
        answer: "Argon zehirli (toksik) olmayan bir gazdır. Ancak havadan ağır olduğu için kapalı ve iyi havalandırılmayan alanlarda sızıntı yapması durumunda oksijen seviyesini düşürerek boğulma riski (asfoksi) yaratabilir. Bu nedenle depolama ve kullanım alanlarının havalandırılması şarttır.",
        keywords: ["argon insan sağlığına zararlı mı", "gaz güvenliği", "boğulma riski"]
      },
      // Medikal Gazlar
      {
        id: "oksijen-vs-medikal-oksijen",
        category: "medikal",
        question: "Endüstriyel Oksijen ile Medikal Oksijen arasındaki fark nedir?",
        answer: "Medikal oksijen, beşeri ilaç/tedavi kapsamında sınıflandırılan, solunmaya uygun saflıkta (>%99.5) ve sıfır nem oranıyla tıbbi cihaz normlarında üretilen gazdır. Endüstriyel oksijen ise kaynak, lazer kesim ve çelik fırınlarında yanmayı artırmak için üretilir ve tıbbi kullanıma uygun olmayan safsızlıklar içerebilir. Tıbbi oksijen tüplerinin valf ve dolum standartları çok daha katıdır.",
        keywords: ["oksijen vs medikal oksijen", "tıbbi oksijen", "medikal gaz"]
      },
      // Söndürme Sistemleri
      {
        id: "gazli-yangin-sondurme-sistemleri",
        category: "sondurme",
        question: "Gazlı Yangın Söndürme Sistemleri nedir ve kullanım alanları nelerdir?",
        answer: "Gazlı yangın söndürme sistemleri, su veya köpük kullanımının ekipmanlara zarar verebileceği kritik alanlarda en güvenilir yangın koruma çözümlerinden biridir. Yangının türüne ve kullanılan söndürme gazına bağlı olarak; ortamın oksijen seviyesini kontrollü şekilde düşürerek, ısı enerjisini absorbe ederek veya kimyasal zincirleme yanma reaksiyonunu durdurarak yangını kısa sürede kontrol altına alır.\n\nElektronik ekipmanlar, veri merkezleri ve yüksek değerli sistemler için geliştirilen gazlı söndürme sistemleri, söndürme işlemi sonrasında kalıntı bırakmaması nedeniyle temiz söndürme sistemleri olarak adlandırılır. Kullanılan söndürme gazları; sunucular, haberleşme sistemleri, kontrol panoları ve diğer hassas elektronik ekipmanlar üzerinde herhangi bir kalıntı oluşturmaz, böylece yangın sonrasında temizlik ve ekipman değişim maliyetlerini minimum seviyeye indirir.\n\nKorunacak hacmin özelliklerine göre FM-200, Novec 1230, Inergen, Argonite, CO₂ ve diğer özel söndürme gazları tercih edilebilir. Her gazın kullanım amacı, söndürme prensibi ve tasarım kriterleri farklı olduğundan, sistem seçimi uluslararası standartlar doğrultusunda mühendislik hesapları ile belirlenmelidir.\n\nFirmamız; NFPA, VdS, EN 15004 (ISO 14520), UL ve FM standartlarına uygun gazlı yangın söndürme sistemlerinin projelendirilmesi, hidrolik hesaplarının yapılması, mühendislik tasarımı, montajı, devreye alınması ve periyodik bakım hizmetlerini uzman kadrosuyla gerçekleştirmektedir.\n\nSIEMENS BT ve Bursan'ın çözüm ortağı olarak, uluslararası standartlara uygun, güvenilir ve sürdürülebilir yangın güvenliği çözümlerini müşterilerimize sunuyor; her projeye özel mühendislik yaklaşımıyla maksimum koruma sağlamayı hedefliyoruz.\n\nGazlı Yangın Söndürme Sistemlerinin Kullanım Alanları:\n- Veri merkezleri, sunucu odaları ve bilişim altyapıları\n- Bilgisayar odaları ve haberleşme merkezleri\n- Arşiv odaları, belge depoları ve değerli evrak kasaları\n- Acil çağrı merkezleri, kontrol odaları ve operasyon merkezleri\n- Hava trafik kontrol kuleleri ve uçuş navigasyon merkezleri\n- Telekomünikasyon tesisleri, baz istasyonları ve internet servis sağlayıcı merkezleri\n- Televizyon, radyo yayın merkezleri ve stüdyo kontrol odaları\n- Müzeler, sanat galerileri, kütüphaneler ve tarihi eser depoları\n- Hastaneler, görüntüleme merkezleri, ameliyathaneler ve tıbbi cihaz odaları\n- Laboratuvarlar ve yüksek teknoloji araştırma merkezleri\n- Endüstriyel üretim tesisleri, robotik sistemler ve proses kontrol odaları\n- Jeneratör odaları, UPS odaları, akü odaları, kablo galerileri ve elektrik panoları\n- Denizcilik uygulamaları, gemiler, açık deniz platformları ve askeri araçlar\n- Uçuş simülatörleri ve kritik savunma sanayi tesisleri",
        keywords: ["gazlı yangın söndürme", "yangın söndürme sistemleri", "kullanım alanları", "siemens", "bursan"]
      },
      {
        id: "fm200-nedir",
        category: "sondurme",
        question: "FM200 ve Novec 1230 gazlı söndürme sistemleri nedir? Nasıl çalışır?",
        answer: "FM200 (HFC-227ea) ve Novec 1230 (Floroketon), veri merkezleri, arşivler ve elektrik odaları gibi suya hassas alanlarda kullanılan temiz gazlı söndürme sistemleridir. Yangını ısıyı soğurarak ve kimyasal reaksiyonu keserek 10 saniye gibi çok kısa bir sürede söndürürler. Tamamen renksiz, kokusuzdur ve geride hiçbir atık veya tortu bırakmazlar.",
        keywords: ["fm200 nedir", "novec 1230 nedir", "gazlı söndürme sistemi nasıl çalışır"]
      },
      {
        id: "fm200-mi-co2-mi",
        category: "sondurme",
        question: "Gazlı söndürmede FM200 mü yoksa CO₂ mi tercih edilmelidir?",
        answer: "FM200 insan bulunan mahallerde güvenle kullanılabilirken, CO₂ (Karbondioksit) söndürme sistemleri ortamdaki oksijeni sıfırladığı için sadece insan bulunmayan (insansız) trafo, jeneratör odası gibi alanlarda tercih edilmelidir. Gazlı söndürme sistemi fiyatları odanın hacmine ve seçilen gazın tipine göre değişiklik gösterir.",
        keywords: ["fm200 mi co2 mi", "gazlı söndürme sistemi fiyatı", "söndürme sistemleri"]
      }
    ];
  }

  // Fallback for non-tr languages (simple translation to keep layout clean)
  return [
    {
      id: "dry-ice-what-is",
      category: "kuru-buz",
      question: "What is dry ice?",
      answer: "Dry ice is the solid form of carbon dioxide (CO₂). It is extremely cold (-78.5°C) and sublimates directly from solid to gas. It is used for food cooling, transport, and dry ice blasting cleaning.",
      keywords: ["dry ice", "what is dry ice"]
    },
    {
      id: "argon-gas-what-is",
      category: "endustriyel",
      question: "What is Argon gas and is it flammable?",
      answer: "Argon is an inert noble gas. It is completely non-flammable and is used as a shielding gas in TIG/MIG welding processes to protect the weld pool from oxidation.",
      keywords: ["argon gas", "is argon flammable"]
    },
    {
      id: "medical-vs-industrial-oxygen",
      category: "medikal",
      question: "What is the difference between medical and industrial oxygen?",
      answer: "Medical oxygen is classified as a medicine, produced under strict medical regulations with high purity (>99.5%) and zero humidity for inhalation. Industrial oxygen is used for welding and cutting and may contain trace impurities.",
      keywords: ["medical oxygen", "oxygen vs medical oxygen"]
    },
    {
      id: "gas-fire-suppression-systems",
      category: "sondurme",
      question: "What are Gas Fire Suppression Systems and where are they used?",
      answer: "Gas fire suppression systems are one of the most reliable fire protection solutions in critical areas where water or foam usage could damage equipment. They extinguish fires in a short time by reducing oxygen levels, absorbing heat, or interrupting chemical reactions.\n\nCommon application areas include data centers, server rooms, telecommunication centers, museums, hospitals, and control rooms. As solution partners of SIEMENS BT and Bursan, we design and install systems complying with NFPA, VdS, EN 15004, UL, and FM standards.",
      keywords: ["gas fire suppression", "suppression systems", "application areas", "siemens"]
    },
    {
      id: "clean-gas-fire-systems",
      category: "sondurme",
      question: "What are FM200 and Novec 1230 gas fire suppression systems?",
      answer: "These are clean agent gas fire suppression systems used in server rooms, electrical panels, and archives. They extinguish fire by removing heat energy within 10 seconds without leaving any residue.",
      keywords: ["fm200", "novec 1230", "fire suppression system"]
    }
  ];
};
