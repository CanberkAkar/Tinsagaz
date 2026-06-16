export interface GasProduct {
  slug: string;
  title: string;
  badge?: string;
  icon?: string;
  desc: string;
  features?: string[];
  usageAreas?: string[];
  specifications?: { label: string; value: string }[];
  content?: string;
  supplyModels?: { title: string; desc: string }[];
  safetyWarning?: string;
}

export const gasesData: GasProduct[] = [
  {
    slug: "oksijen-gazi",
    title: "Oksijen Gazı (O₂)",
    badge: "Sınai Gazlar",
    icon: "🔥",
    desc: "Endüstriyel üretim süreçlerinin en temel ve vazgeçilmez bileşenlerinden biri olan oksijen (O₂), atmosferde yaklaşık %21 oranında bulunan, renk kokusu ve tadı olmayan bir gazdır. Ancak sınai uygulamalarda aranan yüksek verimlilik, hassasiyet ve güvenlik standartları, atmosferik oksijenden çok daha yüksek saflıkta gaz kullanımını zorunlu kılmaktadır.",
    features: [
      "Ulusal endüstri normlarına uygun üretim",
      "Yüksek saflık ve kararlı akış güvencesi",
      "Sızdırmazlık ve güvenlik testlerinden geçmiş tüpler"
    ],
    usageAreas: [
      "Metal Üretimi ve İşleme (Demir-Çelik ocakları)",
      "Oksi-Asor Kesme ve Kaynak İşlemleri",
      "Lazer Kesim Teknolojileri (Karbon çelikleri)",
      "Cam ve Seramik İmalatı (Fırın yanma verimi)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "O₂" },
      { label: "Dolum Basıncı", value: "150 - 200 Bar" },
      { label: "Temizlik Standardı", value: "Oksijen Temizliği" },
      { label: "Ambalaj Modeli", value: "Basınçlı Silindir / Manifold" }
    ],
    content: "Endüstriyel üretim süreçlerinin en temel ve vazgeçilmez bileşenlerinden biri olan oksijen (O₂), atmosferde yaklaşık %21 oranında bulunan, renk kokusu ve tadı olmayan bir gazdır. Ancak sınai uygulamalarda aranan yüksek verimlilik, hassasiyet ve güvenlik standartları, atmosferik oksijenden çok daha yüksek saflıkta gaz kullanımını zorunlu kılmaktadır. Tinsa Gaz olarak, ulusal endüstri normlarına uygun kalitede ürettiğimiz yüksek saflıktaki sınai oksijen gazı ile ağır sanayiden hassas imalat sektörlerine kadar geniş bir yelpazede kesintisiz tedarik sağlamaktayız.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Oksijen Tüpleri",
        desc: "Hassas tüketim oranlarına sahip işletmeler, mobil kaynak/kesme atölyeleri ve dönemsel projeler için en ideal çözümdür. 150 ila 200 bar doldurma basıncına sahip, uluslararası testlerden geçmiş yüksek güvenlikli tüplerle sevk edilir. Her dolum aşamasında sızdırmazlık ve saflık kontrolleri titizlikle yürütülür."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Yüksek hacimli ve kesintisiz oksijen akışına ihtiyaç duyan fabrikalar, tersaneler ve büyük imalathaneler için geliştirilmiştir. Birden fazla yüksek basınçlı tüpün çelik konstrüksiyonlu bir palet içinde tek bir manifold sistemine bağlanmasıyla oluşur. Bu sistem, üretim hatlarında tüp değişim sürelerini minimuma indirir, işçilikten tasarruf sağlar ve operasyonel güvenliği artırır."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Oksijen gazı kendi başına yanıcı olmasa da yanmayı çok şiddetli şekilde destekler. Bu nedenle oksijen tüp, manifold ve tesisatlarının kesinlikle yağ, gres ve diğer organik maddelerle temas etmemesi gerekir. Tinsa Gaz olarak sevk ettiğimiz tüm armatür ve palet bileşenleri 'oksijen temizliği' standartlarına tabi tutulmaktadır."
  },
  {
    slug: "argon-gazi",
    title: "Argon Gazı (Ar)",
    badge: "Sınai Gazlar",
    icon: "⚗️",
    desc: "Argon (Ar), atmosferde yaklaşık %0,93 oranında bulunan, renksiz, kokusuz ve son derece kararlı (asal) bir soy gazdır. Kimyasal reaksiyonlara girmeye karşı gösterdiği bu mutlak eylemsizlik, argon gazını endüstriyel imalat süreçlerinde kusursuz bir 'koruyucu kalkan' haline verir.",
    features: [
      "Yüksek saflık derecesi koruması",
      "Kritik kaynak uygulamalarında sıfır gözenek riski",
      "Kusursuz kaynak arkı ve eriyen metal koruması"
    ],
    usageAreas: [
      "TIG (Argon) ve MIG/MAG Kaynak Teknolojileri",
      "Metalurji ve Demir-Çelik Sanayii (AOD prosesi)",
      "Isıl İşlem Prosesleri (Koruyucu atmosfer)",
      "Çift Cam (Isıcam) Üretimi"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "Ar" },
      { label: "Dolum Basıncı", value: "150 - 230 Bar" },
      { label: "Karakteristik", value: "Renksiz, kokusuz asal soy gaz" },
      { label: "Saflık Seviyesi", value: "Yüksek Saflık (Sınai Sınıf)" }
    ],
    content: "Argon (Ar), atmosferde yaklaşık %0,93 oranında bulunan, renksiz, kokusuz ve son derece kararlı (asal) bir soy gazdır. Kimyasal reaksiyonlara girmeye karşı gösterdiği bu mutlak eylemsizlik, argon gazını endüstriyel imalat süreçlerinde kusursuz bir 'koruyucu kalkan' haline verir. Yüksek sıcaklıklarda bile diğer elementlerle bağ kurmaması, metalurji ve kaynak teknolojilerinde oksidasyonu engellemek adına hayati öneme sahiptir. Tinsa Gaz olarak, endüstrinin ihtiyaç duyduğu yüksek saflık derecelerine sahip argon gazını, güvenli standartlarda sunmaktayız.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Argon Tüpleri",
        desc: "Atölyeler, orta ölçekli imalathaneler ve saha çalışmalarında mobilite avantajı sağlayan çözümlerimizdir. İşletmenizin standartlarına ve gaz tüketim hızına bağlı olarak 150 ile 230 bar çalışma basıncında doldurulur. Yüksek basınç altında gazın saflık derecesinin korunması amacıyla tüp iç cidarları ve valf sistemleri her dolum öncesi kontrolden geçirilir."
      },
      {
        title: "2. Argon Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Sürekli kaynak hatlarına sahip tersaneler, ağır sanayi kuruluşları ve seri üretim yapan fabrikalar için geliştirilmiş hacimli çözümdür. 150 - 230 bar basınca dayanıklı tüplerin çelik bir karkas içinde tek bir toplama manifolduna bağlanmasıyla oluşturulur. Kesintisiz gaz akışı sağlayarak üretim hatlarında duruş sürelerini ortadan kaldırır ve tüp değişim risklerini minimize eder."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Argon gazı zehirli bir gaz olmamasına rağmen, kokusuz ve renksiz yapısı nedeniyle kapalı alanlardaki kaçaklarda fark edilemez. Ortamdaki oksijeni yerinden ederek boğulma riski (asfoksi) yaratabileceğinden, argon tüpü ve manifoldlarının depolandığı/kullanıldığı alanların etkin bir şekilde havalandırılması kritik bir emniyet kuralıdır."
  },
  {
    slug: "karisim-gazlari",
    title: "Karışım Gazları (MIG/MAG Kaynak Gazları)",
    badge: "Sınai Gazlar",
    icon: "🔧",
    desc: "Endüstriyel imalat sektöründe imalat kalitesini, kaynak hızını ve mekanik dayanımı belirleyen en önemli unsurlardan biri doğru koruyucu gaz seçimidir. Sektörde genellikle 'kaynak gazı' olarak adlandırılan Karışım Gazları, iki veya daha fazla gazın (en yaygın olarak Argon ve Karbondioksit) belirli oranlarda homojen bir şekilde karıştırılmasıyla elde edilen yüksek performanslı teknolojik ürünlerdir.",
    features: [
      "Minimum Çapaklanma (Sıçrantı) ve sıfır temizlik işçiliği",
      "Mükemmel nüfuziyet ve ark kararlılığı",
      "Üretim hızı ve kaynak teli tüketim optimizasyonu"
    ],
    usageAreas: [
      "MIG/MAG (Gazaltı) Kaynak Yöntemleri",
      "Yapısal ve Genel İmalat Çeliklerinin Kaynağı",
      "İnce ve Orta Kalınlıktaki Sacların Birleştirilmesi",
      "Kalın Parçaların Kaynağında Sprey Ark Transferi"
    ],
    specifications: [
      { label: "Bileşim", value: "%82 Argon + %18 CO₂ (veya Özel Oranlar)" },
      { label: "Dolum Basıncı", value: "150 - 230 Bar" },
      { label: "Karakteristik", value: "Homojen stabilize karışım" },
      { label: "Kaynak Kalitesi", value: "Sıçrantısız, gözeneksiz yüksek mukavemet" }
    ],
    content: "Endüstriyel imalat sektöründe imalat kalitesini, kaynak hızını ve mekanik dayanımı belirleyen en önemli unsurlardan biri doğru koruyucu gaz seçimidir. Sektörde genellikle 'kaynak gazı' olarak adlandırılan Karışım Gazları, iki veya daha fazla gazın (en yaygın olarak Argon ve Karbondioksit) belirli oranlarda homojen bir şekilde karıştırılmasıyla elde edilen yüksek performanslı teknolojik ürünlerdir. Tinsa Gaz olarak, gazların birbiriyle tam olarak istenen oranlarda stabilize edildiği, uluslararası standartlara uygun kaynak karışım gazlarının dolum ve tedarikini gerçekleştirmekteyiz.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Karışım Gazı Tüpleri",
        desc: "Hassas oranlarda karıştırılan gazlar, sızdırmazlık testlerinden geçmiş, iç yüzey temizliği yapılmış yüksek emniyetli tüplerde 150 ile 230 bar çalışma basıncında sunulur."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Çözümleri (Bundle)",
        desc: "Yoğun gazaltı kaynak hatlarına sahip fabrikalar ve tersaneler için kesintisiz akış sağlayan palet sistemlerimiz mevcuttur. 150 - 230 bar basınç güvencesiyle tek manifolda bağlı paletler, gaz bitimi nedeniyle hatların durmasını engeller."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Kalite Standardı: Karışım gazlarında dolum teknolojisi yetersiz olduğunda, tüpün içindeki gazlar zamanla yoğunluk farkından dolayı ayrışabilir veya hava sıcaklık değişimlerinden etkilenebilir. Tinsa Gaz olarak kullandığımız modern dolum ve tartım yöntemleri sayesinde, tüpün veya paletin ilk kullanımından son kullanımına kadar karışım oranının mutlak şekilde sabit kalmasını sağlıyoruz."
  },
  {
    slug: "karbondioksit-gazi",
    title: "Karbondioksit Gazı (CO₂)",
    badge: "Sınai Gazlar",
    icon: "❄️",
    desc: "Endüstriyel imalat, gıda, eğlence ve yangın güvenliği gibi çok geniş bir sektörel yelpazede kritik roller üstlenen Karbondioksit (CO₂), bir karbon ve iki oksijen atomundan oluşan, renksiz ve kokusuz bir gaz bileşiğidir. Karbondioksit gazı, fiziksel özellikleri gereği yüksek basınçlı tüpler içerisinde basınç altında hem sıvı hem de gaz fazında bir arada bulunur.",
    features: [
      "Gramaj doğruluğu için kilogram bazlı hassas tartım",
      "Gazaltı kaynaklarında derin nüfuziyetli koruma",
      "Oksijeni boğucu yapısı ile mükemmel söndürme özelliği"
    ],
    usageAreas: [
      "MIG/MAG (Gazaltı) Kaynak Prosesleri",
      "Yangın Söndürme Sistemleri ve Tüpleri",
      "Gıda ve İçecek Sektörü (Gazlı içecek, MAP, dondurma)",
      "Dökümhane ve Kimya Prosesleri (kum kalıbı, pH kontrol)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "CO₂" },
      { label: "Dolum Esası", value: "Dijital terazilerle hassas kilo (kg) kontrolü" },
      { label: "Ambalaj Seçenekleri", value: "Tekil Tüpler, Palet (Bundle), Sifonlu Tüp" },
      { label: "Faz Durumu", value: "Sıvı ve gaz fazı bir arada" }
    ],
    content: "Endüstriyel imalat, gıda, eğlence ve yangın güvenliği gibi çok geniş bir sektörel yelpazede kritik roller üstlenen Karbondioksit (CO₂), bir karbon ve iki oksijen atomundan oluşan, renksiz ve kokusuz bir gaz bileşiğidir. Karbondioksit gazı, fiziksel özellikleri gereği yüksek basınçlı tüpler içerisinde basınç altında hem sıvı hem de gaz fazında bir arada (denge halinde) bulunur. Bu nedenle, miktar tayini basınç göstergeleriyle değil, mutlak hassas tartım yöntemleriyle (Kilo / Kilogram bazında) gerçekleştirilir. Tinsa Gaz olarak, modern dolum tesislerimizde her tüp ve paleti titizlikle tartarak, tam gramajlı sınai karbondioksit tedariki sağlamaktayız.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Karbondioksit Gazı Tüpleri",
        desc: "Fabrikalar, kaynak atölyeleri ve genel endüstriyel uygulamalar için en yaygın teslimat modelidir. Bu standart tüplerde, tüpün üst kısmında biriken gaz fazındaki karbondioksit çekilerek kullanılır. Tinsa Gaz bünyesinde doldurulan tüm tekil CO₂ tüpleri hassas dijital terazilerde kilo (kg) bazında tartılarak doluma tabi tutulur ve satışı tamamen kilogram esasına göre gerçekleştirilir."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Yüksek hacimli kaynak hatları ve büyük ölçekli endüstriyel tesisler için kesintisiz gaz akışı sunan palet çözümlerimiz mevcuttur. Tinsa Gaz'ın tavizsiz kalite politikası gereği, tüm palet (bundle) sistemlerimizde de teslimat süreçleri kilo (kg) bazında mutlak tartım standartlarına göre yürütülmektedir."
      },
      {
        title: "3. Sifonlu Tüpler (Eğlence ve Gıda Sektörleri İçin Sıvı CO₂)",
        desc: "Kullanım amacına göre karbondioksitin gaz fazı yerine doğrudan sıvı fazına ihtiyaç duyulan durumlar için Tinsa Gaz özel sifonlu çözümler sunmaktadır. Sifonlu Tüpler vasıtasıyla, Karbondioksit gazı sıvı fazda (sıvı olarak) doğrudan kilo (kg) bazında satılmakta ve teslim edilmektedir. Bu tüplerin içinde bulunan dahili daldırma borusu (sifon), dipten doğrudan sıvı CO₂ çekilmesini sağlar. Sifonlu tüplerimiz, özellikle sis efekti ve görsel şovlar için eğlence sektöründe, hızlı şoklama ve dondurma işlemleri için ise gıda sektöründe ve yangın tüpü dolum tesislerinde hayati bir operasyonel kolaylık sağlamaktadır."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Karbondioksit tüp ve paletleri sıvı fazda ürün içerdiği için dolum esnasında emniyet payı bırakılması (aşırı dolum yapılmaması) hayati önem taşır. Tinsa Gaz olarak tüm dolumlarimi bilgisayarlı hassas tartım sistemleriyle yaparak bu riski sıfıra indiriyoruz. Ayrıca CO₂ havadan ağır bir gazdır; olası bir kaçak durumunda zemin seviyesinde birikerek boğulma riski yaratabileceğinden, depolama alanlarında zemin seviyesi havalandırmasının bulunması kritik bir emniyet kuralıdır."
  },
  {
    slug: "saf-azot-gazi",
    title: "Saf Azot Gazı (N₂)",
    badge: "Sınai Gazlar",
    icon: "🌫️",
    desc: "Endüstriyel dünyada güvenliğin, kalitenin ve ürün ömrünün uzatılmasının en temel güvencelerinden biri olan Azot (N₂), atmosferimizin yaklaşık %78'ini oluşturan, renk, koku ve tadı bulunmayan asal bir gazdır. Kimyasal reaksiyonlara girmeye karşı gösterdiği olağanüstü direnç (atalet) sayesinde, üretim hatlarında istenmeyen oksitlenme, yanma ve bozulma reaksiyonlarını engellemek adına kusursuz bir koruyucu atmosfer yaratır.",
    features: [
      "Gelişmiş dolum teknolojisiyle High Purity (Yüksek Saflık) standartları",
      "İstenmeyen oksitlenme, yanma ve bozulmaları sıfırlayan koruma",
      "Lazer kesimlerinde pürüzsüz ve kararmayan yüzey kalitesi"
    ],
    usageAreas: [
      "İnerteleme ve Yangın/Patlama Güvenliği (Purging/inerting)",
      "Gıda Paketleme ve Saklama (MAP ile raf ömrünü uzatma)",
      "Lazer Kesim Teknolojileri (Kararmayan paslanmaz çelik kesimi)",
      "Elektronik ve Isıl İşlem (Dalga lehimleme, yarı iletken imalatı)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "N₂" },
      { label: "Saflık Sınıfı", value: "High Purity (Yüksek Saflık)" },
      { label: "Dolum Basıncı (Tüpler)", value: "150 - 230 Bar" },
      { label: "Dolum Basıncı (Paletler)", value: "230 Bar Standart" }
    ],
    content: "Endüstriyel dünyada güvenliğin, kalitenin ve ürün ömrünün uzatılmasının en temel güvencelerinden biri olan Azot (N₂), atmosferimizin yaklaşık %78'ini oluşturan, renk, koku ve tadı bulunmayan asal bir gazdır. Kimyasal reaksiyonlara girmeye karşı gösterdiği olağanüstü direnç (atalet) sayesinde, üretim hatlarında istenmeyen oksitlenme, yanma ve bozulma reaksiyonlarını engellemek adına kusursuz bir koruyucu atmosfer yaratır. Tinsa Gaz olarak, ileri teknoloji dolum tesislerimizde yüksek saflık (High Purity) standartlarında ürettiğimiz Saf Azot gazını, endüstrinin en katı normlarına uygun olarak tedarik etmekteyiz.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Saf Azot Gazı Tüpleri",
        desc: "Hassas ve kesikli tüketim döngülerine sahip imalathaneler, mobil saha operasyonları ve gıda paketleme üniteleri için ideal çözümdür. Tinsa Gaz tesislerinde doldurulan tekil azot tüpleri, işletmenizin teknik gereksinimlerine göre 150 ile 230 bar çalışma basıncı aralığında, yüksek saflık derecesi korunarak sevk edilir."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Lazer kesim merkezleri, büyük ölçekli gıda tesisleri ve sürekli kimyasal imalat hatları gibi yüksek hacimli ve kesintisiz azot akışı gerektiren operasyonlar için geliştirilmiştir. Tinsa Gaz kalitesiyle sunulan azot palet (bundle) sistemlerimizde, tavizsiz operasyonel süreklilik amacıyla mutlak tek basınç uygulaması as 230 bar standardı geçerlidir. 230 bar yüksek basınç güvencesi, üretim hatlarınızda tüp değişim sıklığını minimuma indirerek işçilik ve zaman tasarrufu sağlar."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Azot gazı toksik (zehirli) veya yanıcı bir gaz değildir; ancak kokusuz, renksiz ve tatsız yapısı nedeniyle ortamdaki sızıntıları insan duyularıyla fark edilemez. Kapalı alanlarda biriken azot, ortamdaki oksijen konsantrasyonunu aniden düşürerek fark ettirmeden boğulma (asfoksi) riski yaratır. Bu sebeple saf azot tüp ve paletlerinin depolandığı veya yoğun kullanıldığı alanlarda oksijen ölçüm cihazlarının bulunması ve etkin havalandırma yapılması hayati bir İSG kuralıdır."
  },
  {
    slug: "asetilen-gazi",
    title: "Asetilen Gazı (C₂H₂)",
    badge: "Sınai Gazlar",
    icon: "🧨",
    desc: "Sınai üretimde yüksek sıcaklık ve yoğun ısı odaklı proseslerin vazgeçilmez yakıt gazı olan Asetilen (C₂H₂), karbon ve hidrojenden oluşan, kendine has sarımsak benzeri keskin bir kokuya sahip, rengi olmayan bir hidrokarbon bileşiğidir. Tüm yanıcı gazlar arasında en yüksek alev sıcaklığına ve en yüksek alev hızına sahip olan gazdır.",
    features: [
      "Saf oksijenle birleştiğinde 3160°C'ye ulaşan en yüksek alev sıcaklığı",
      "Emniyetli depolama için gözenekli poröz kütle ve aseton çözeltisi",
      "Kilogram bazlı hassas tartım esasıyla dolum güvencesi"
    ],
    usageAreas: [
      "Oksi-Asetilen Kaynağı ve Metal Kesme",
      "Alevle Yüzey Sertleştirme ve Doğrultma (Tavlama)",
      "Cam ve Mücevherat İşleme (Hassas alev ayarı)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "C₂H₂" },
      { label: "Alev Sıcaklığı", value: "~3160°C (Oksijen ile)" },
      { label: "Depolama Yöntemi", value: "Poröz kütle ve asetonda çözünmüş sıvı" },
      { label: "Satış/Dolum Esası", value: "Kilogram (kg) bazında hassas tartım" }
    ],
    content: "Sınai üretimde yüksek sıcaklık ve yoğun ısı odaklı proseslerin vazgeçilmez yakıt gazı olan Asetilen (C₂H₂), karbon ve hidrojenden oluşan, kendine has sarımsak benzeri keskin bir kokuya sahip, rengi olmayan bir hidrokarbon bileşiğidir. Tüm yanıcı gazlar arasında en yüksek alev sıcaklığına (saf oksijen ile birleştiğinde yaklaşık 3160°C) ve en yüksek alev hızına sahip olan gazdır. Bu benzersiz termal gücü, onu ağır sanayide metal kesme ve kaynak işlerinin mutlak standardı haline verir. Tinsa Gaz olarak, en yüksek güvenlik ve sızdırmazlık normlarına sahip modern tesislerimizde hassas dolum yöntemleriyle sınai asetilen gazı tedariği sağlamaktayız.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Asetilen Gazı Tüpleri",
        desc: "Fabrikalar, tersaneler ve mobil kaynak atölyeleri için en kritik yakıt çözümdür. Asetilen gazının kimyasal yapısı gereği serbest halde yüksek basınç altında depolanması ölümcül patlama riskleri taşır. Bu nedenle Asetilen tüplerinin içi özel gözenekli (poröz) bir malzeme ile kaplıdır ve gaz bu kütle içinde asetonda çözülmüş sıvı formda tutulur. Bu fiziksel zorunluluktan dolayı, Tinsa Gaz bünyesinde Asetilen gazı tedariği basınç göstergelerine göre değil, mutlak hassas terazilerde kilo (kg) bazında tartılarak gerçekleştirilir ve satışı net kilogram esasına göre yapılır."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Yoğun oksi-kesim hatlarına, büyük ölçekli çelik konstrüksiyon imalathanelerine ve tersanelere kesintisiz yakıt akışı sağlamak amacıyla Asetilen palet (bundle) çözümlerimiz mevcuttur. Tinsa Gaz'ın tavizsiz güvenlik politikası gereği, tüm asetilen palet sistemlerimiz özel alev geri tepme emniyet valfleri ve regülatör donanımlarıyla kombine edilir. Palet bazlı teslimatlarımızda da dolum ve faturalandırma süreçleri, en yüksek teknik emniyet sınırları dahilinde, kilo (kg) bazında mutlak hassas tartım standartlarına göre yürütülmektedir."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Asetilen, sınai gazlar arasındaki en hassas ve en yüksek patlama/yanma riskine sahip gazdır. Havayla karışımı çok geniş bir aralıkta patlayıcı atmosfer (eksplozif limit) oluşturur. Asetilen tüpleri kesinlikle yatay yatırılmamalı, her zaman dik konumda depolanmalı ve kullanılmalıdır. Yatay yatırılan tüplerden vananın açılmasıyla birlikte gaz yerine çözücü aseton sıvısı kaçabilir ve bu durum büyük bir patlama riskini doğurur. Tinsa Gaz olarak sevk ettiğimiz tüm asetilen tüp ve paletleri, oksi-gaz emniyet yönetmeliklerine tam uyumlu çekvalf ve güvenlik mekanizmalarıyla korunmaktadır."
  },
  {
    slug: "helyum-gazi",
    title: "Helyum Gazı (He)",
    badge: "Sınai Gazlar",
    icon: "🎈",
    desc: "Endüstriyel üretimden ileri teknoloji laboratuvarlarına, metalurjiden eğlence sektörüne kadar son derece stratejik bir kullanım alanına sahip olan Helyum (He), atmosferde eser miktarda bulunan, hafifliği ve mutlak eylemsizliği (asal yapısı) ile bilinen bir soy gazdır. Hidrojenden sonra evrendeki en hafif ikinci element olan helyum, yanıcı ve parlayıcı olmaması sayesinde yüksek güvenlik gerektiren proseslerin vazgeçilmez bileşenidir.",
    features: [
      "Tamamen yanmaz ve hafif soy gaz yapısı",
      "Süperiletken MR cihazları için sıvı helyum soğutma gücü (-269°C)",
      "Çok küçük atomik çapıyla hassas kaçak test kabiliyeti"
    ],
    usageAreas: [
      "Balon Gazı ve Eğlence Sektörü (Güvenli yanmaz uçan balonlar)",
      "Sağlık ve MR (Emar) Soğutma Teknolojileri",
      "Kaçak Testi ve Analitik Laboratuvarlar (Sızdırmazlık testleri)",
      "Helyumlu Kaynak Gazları ve Endüstriyel Karışımlar (MIG/TIG)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "He" },
      { label: "Kaynak Karışımları", value: "Argon + Helyum kombinasyonları" },
      { label: "Dolum Basıncı (Tüpler)", value: "150 - 230 Bar" },
      { label: "Dolum Basıncı (Paletler)", value: "230 Bar" }
    ],
    content: "Endüstriyel üretimden ileri teknoloji laboratuvarlarına, metalurjiden eğlence sektörüne kadar son derece stratejik bir kullanım alanına sahip olan Helyum (He), atmosferde eser miktarda bulunan, hafifliği ve mutlak eylemsizliği (asal yapısı) ile bilinen bir soy gazdır. Hidrojenden sonra evrendeki en hafif ikinci element olan helyum, yanıcı ve parlayıcı olmaması sayesinde yüksek güvenlik gerektiren proseslerin vazgeçilmez bileşenidir. Tinsa Gaz olarak, yüksek saflık derecelerine sahip sınai ve teknolojik helyum gazını, en üst düzey lojistik emniyet standartlarıyla tedarik etmekteyiz.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Helyum Gazı Tüpleri",
        desc: "Hassas laboratuvar çalışmaları, kaçak test üniteleri ve balon dolum lokasyonları için optimize edilmiş çözümlerimizdir. Helyum gazı, tüpler içerisinde gaz fazında depolanmakta ve satışı basınç esasına göre yapılmaktadır. Tinsa Gaz tesislerinde dolumu yapılan tekil helyum tüpleri, işletmenizin proses gereksinimlerine göre 150 ile 230 bar çalışma basıncı aralığında, yüksek saflık güvencesiyle sevk edilir."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Sürekli hat imalatı yapan lazer kesim merkezleri, ağır sanayi kaynak tesisleri ve tersaneler için kesintisiz gaz akışı sağlayan palet çözümlerimiz mevcuttur. Gaz akış hızı ve basınç kararlılığının proses kalitesini doğrudan etkilediği helyum palet (bundle) sistemlerimizde, Tinsa Gaz'ın tavizsiz teknik altyapı standardı gereği mutlak tek basınç uygulaması olarak 230 bar doldurma normu geçerlidir."
      },
      {
        title: "3. Helyumlu Kaynak Gazları ve Endüstriyel Karışımlar (MIG/TIG)",
        desc: "MIG, TIG ve Lazer kaynak teknolojilerinde, özellikle kalın kesitli alüminyum, bakır ve paslanmaz çelik alaşımlarının birleştirilmesinde saf Argon gazı bazı durumlarda yetersiz kalabilir. Helyum, argona kıyasla çok daha yüksek bir iyonizasyon potansiyeline ve termal iletkenliğe sahiptir. Tinsa Gaz olarak sunduğumuz Helyumlu Kaynak Karışım Gazları (Argon + Helyum kombinasyonları), kaynak arkının çok daha yüksek bir ısı girdisine ulaşmasını sağlar. Bu sayede daha derin kaynak nüfuziyeti elde edilir, kaynak hızı maksimum seviyeye çıkar, özellikle yüksek ısı iletkenliği olan bakır ve alüminyumda ön ısıtma ihtiyacı ortadan kalkar, gözeneksiz, hatasız ve yüksek mekanik dayanımlı kaynak dikişleri üretilir."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Helyum zehirli veya yanıcı bir gaz değildir; ancak kapalı ve havalandırması yetersiz alanlarda yüksek miktarda helyum birikmesi, ortamdaki oksijen oranını düşürerek boğulma (asfoksi) riski yaratabilir. Ayrıca, halk arasında eğlence amaçlı helyum gazının solunması, akciğerlerdeki oksijeni aniden sıfırlayarak kalıcı hasarlara ve ani bayılmalara yol açabileceğinden kesinlikle tehlikelidir ve kaçınılmalıdır."
  },
  {
    slug: "hidrojen-gazi",
    title: "Hidrojen Gazı (H₂)",
    badge: "Sınai Gazlar",
    icon: "💨",
    desc: "Evrenin en hafif, en temel ve kütlesine oranla en yüksek enerji içeriğine sahip elementi olan Hidrojen (H₂), iki hidrojen atomunun birleşmesiyle oluşan, renk, koku ve tadı bulunmayan bir gazdır. Sınai uygulamalarda özellikle yüksek ısı iletkenliği, güçlü indirgeyici yapısı ve temiz yanma özellikleri sayesinde çok kritik proseslerin başrol oyuncusudur.",
    features: [
      "Isıl işlem proseslerinde oksijeni bağlayan güçlü indirgeyici atmosfer",
      "Oksi-hidrojen alevi ile cam ve kuvars imalatında son derece temiz yanma",
      "Yüksek termal iletkenlikle jeneratör rotor soğutma verimliliği"
    ],
    usageAreas: [
      "Isıl İşlem ve Metalurji (Parlak tavlama ile paslanmayı önleme)",
      "Cam ve Kuvars İmalatı (Oksi-hidrojen aleviyle şekillendirme)",
      "Enerji ve Jeneratör Soğutma Sistemleri",
      "Kimya ve Yağ Sanayii (Hidrokraking, doyurma prosesleri)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "H₂" },
      { label: "Saflık Sınıfı", value: "Sınai Yüksek Saflık Sınıfı" },
      { label: "Dolum Basıncı (Tüpler)", value: "150 - 230 Bar" },
      { label: "Dolum Basıncı (Paletler)", value: "230 Bar" }
    ],
    content: "Evrenin en hafif, en temel ve kütlesine oranla en yüksek enerji içeriğine sahip elementi olan Hidrojen (H₂), iki hidrojen atomunun birleşmesiyle oluşan, renk, koku ve tadı bulunmayan bir gazdır. Sınai uygulamalarda özellikle yüksek ısı iletkenliği, güçlü indirgeyici (oksijen bağlayıcı) yapısı ve temiz yanma özellikleri sayesinde çok kritik proseslerin başrol oyuncusudur. Tinsa Gaz olarak, ileri teknoloji altyapımız ve en katı emniyet protokollerimizle, endüstrinin ihtiyaç duyduğu yüksek saflıkta sınai hidrojen gazı dolum ve tedarikini gerçekleştirmekteyiz.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Hidrojen Gazı Tüpleri",
        desc: "Laboratuvar analiz cihazları, jeneratör soğutma üniteleri ve orta ölçekli ısıl işlem tesisleri için ideal çözümdür. Gaz fazında depolanan hidrojen tüplerimiz, işletmenizin teknik altyapısına ve tüketim hızına bağlı olarak 150 ile 230 bar çalışma basıncı aralığında, özel valf sistemleriyle sızdırmazlık güvencesi altında sevk edilir."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Sürekli üretim yapan cam fabrikaları, tersaneler ve büyük metalurji tesisleri için kesintisiz gaz akışı sunan palet çözümlerimiz mevcuttur. Gazın akış kararlılığının ve yüksek debinin hayati olduğu hidrojen palet (bundle) sistemlerimizde, Tinsa Gaz'ın tavizsiz kalite politikası gereği mutlak tek basınç uygulaması olarak 230 bar standardı geçerlidir. Bu yüksek basınç mimarisi, lojistik verimliliği maksimuma çıkarır."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Hidrojen, sınai gazlar arasında yanma ve patlama hızı en yüksek olan, son derece hassas bir gazdır. Havayla karıştığında çok geniş bir konsantrasyon aralığında patlayıcı atmosfer (ATEX) oluşturur. Moleküler çapı en küçük element olduğundan mikron düzeyindeki sızıntılardan bile kaçabilir. Bu nedenle hidrojen tüp ve paletlerinin valf bağlantıları (sol dişli/yanıcı gaz standardı) her dolumda titizlikle test edilir. Depolama alanlarının mutlak suretle kıvılcım önleyici (ex-proof) sistemlerle donatılması ve üst seviye (çatı) havalandırmasının bulunması (gaz havadan çok hafif olduğu için tavanda birikir) hayati bir İSG zorunluluğudur."
  },
  {
    slug: "cng-dogalgaz",
    title: "Sıkıştırılmış Doğalgaz (CNG) (CH₄)",
    badge: "Sınai Gazlar",
    icon: "⚡",
    desc: "CNG (Compressed Natural Gas - Sıkıştırılmış Doğalgaz), temel olarak metan (CH₄) gazından oluşan doğalgazın, yüksek basınç altında sıkıştırılmasıyla elde edilen yüksek verimli bir yakıttır.",
    features: [
      "Boru hattı şebekesi olmayan bölgelerdeki tesislere doğalgaz konforu",
      "Asfalt plentleri ve çimento kurutma fırınları için ekonomik yakıt",
      "Ağır vasıta ve lojistik filoları için alternatif temiz motor yakıtı"
    ],
    usageAreas: [
      "Boru Hattı Olmayan Bölgelerde Sanayi Yakıtı (Buhar, sıcak su, proses ısı)",
      "Asfalt ve Çimento Tesisleri (asfalt plentleri, kurutma fırınları)",
      "Ağır Vasıta ve Lojistik Filoları (belediye otobüsleri, çöp kamyonları)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "CH₄ (Metan Ağırlıklı)" },
      { label: "Dolum Basıncı (Tüpler)", value: "200 - 250 Bar" },
      { label: "Dolum Basıncı (Paletler)", value: "230 - 250 Bar" },
      { label: "Emniyet Donanımı", value: "Emniyet ventilleri, ani basınç kesiciler" }
    ],
    content: "Endüstriyel üretim tesislerinden enerji santrallerine, lojistik filolarından alternatif yakıt teknolojilerine kadar modern dünyanın en stratejik temiz enerji kaynaklarından biri olan CNG (Compressed Natural Gas - Sıkıştırılmış Doğalgaz), temel olarak metan (CH₄) gazından oluşan doğalgazın, yüksek basınç altında sıkıştırılmasıyla elde edilen yüksek verimli bir yakıttır. Boru hattı şebekesinin ulaşamadığı bölgelerdeki sanayi kuruluşlarına doğalgaz konforunu ve ekonomik avantajını taşımak adına en güvenilir lojistik çözümdür. Tinsa Gaz olarak, yüksek teknolojik altyapıya sahip dolum ve taşıma sistemlerimizle, ulusal enerji mevzuatına tam uyumlu sınai CNG tedariki sağlamaktayız.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Sıkıştırılmış Doğalgaz (CNG) Tüpleri",
        desc: "Dönemsel projeler, şantiye alanları ve daha düşük hacimli enerji tüketimi olan endüstriyel üniteler için optimize edilmiş yüksek basınçlı silindir çözümlerimizdir. CNG tüplerimiz, gazın yüksek enerji yoğunluğunu koruyabilmesi amacıyla uluslararası standartlara uygun olarak 200 ile 250 bar çalışma basıncı aralığında sızdırmazlık testlerinden geçirilerek sevk edilir."
      },
      {
        title: "2. Tüp Manifoldları ve Palet Sistemleri (Bundle)",
        desc: "Sürekli imalat hatlarına sahip fabrikalar, maden işletmeleri ve yüksek debili enerji tüketen sanayi tesisleri için kesintisiz doğalgaz akışı sunan manifoldu palet sistemleridir. Tinsa Gaz'ın sınai gaz paletlerindeki yüksek teknoloji standardı, CNG tedariğinde de kendini göstermektedir. Kesintisiz akış ve güvenli basınç regülasyonunun hayati olduğu CNG palet (bundle) sistemlerimizde, tesisinizin tüketim rejimine göre optimize edilmiş 230 bar ile 250 bar mutlak yüksek basınç standartları uygulanmaktadır. Bu sayede ana şebeke kalitesinde ve sabit debide gaz çıkışı garanti altına alınır."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: CNG (Sıkıştırılmış Doğalgaz) yüksek oranda metan içerdiği için son derece yanıcı ve parlayıcı bir gazdır. Havadan hafif olması sebebiyle olası bir kaçak durumunda hızla yukarı doğru yükselir; bu yüzden kapalı depolama alanlarında mutlaka üst (çatı) seviye havalandırma sistemleri ve doğalgaza duyarlı ex-proof (kıvılcım önleyici) gaz algılama dedektörleri bulunmalıdır. Tinsa Gaz olarak teslim ettiğimiz tüm CNG tüp ve palet sistemleri, yüksek basınç emniyet ventilleri ve ani basınç düşürücü çekvalf mekanizmalarıyla donatılmıştır."
  }
];
