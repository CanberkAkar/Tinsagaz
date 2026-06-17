import { GasProduct } from "../sinai-gazlar/gasesData.tr";

export const medikalGasesData: GasProduct[] = [
  {
    slug: "medikal-oksijen-gazi",
    title: "Medikal Oksijen Gazı (O₂)",
    badge: "Medikal Gazlar",
    icon: "🏥",
    desc: "Sağlık sektöründe yaşam desteğinin en temel ve kritik bileşeni olan Medikal Oksijen (O₂), T.C. Sağlık Bakanlığı mevzuatlarına, CE Medikal direktiflerine ve İyi İmalat Uygulamaları (GMP) normlarına tam uyumlu olarak üretilen hayati bir tıbbi üründür.",
    features: [
      "Sağlık Bakanlığı ve GMP normlarına %100 tam uyumluluk",
      "Medikal dezenfeksiyon ve iç yüzey temizliği yapılmış tüpler",
      "Kesintisiz akış ve kararlı saflık güvencesi"
    ],
    usageAreas: [
      "Yoğun Bakım ve Solunum Tedavisi (Oksijenoterapi)",
      "Ameliyathane ve Anestezi Süreçleri (Seyreltme ve oksijenasyon)",
      "Hiperbarik Oksijen Tedavileri (Karbonmonoksit zehirlenmesi, vurgun vb.)"
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "O₂" },
      { label: "Dolum Basıncı (Tüpler)", value: "150 - 230 Bar" },
      { label: "Merkezi Santral Basıncı", value: "230 Bar (Bundle)" },
      { label: "Kalite Normları", value: "GMP / CE Medikal / T.C. Sağlık Bakanlığı" }
    ],
    content: "Sağlık sektöründe yaşam desteğinin en temel ve kritik bileşeni olan Medikal Oksijen (O₂), T.C. Sağlık Bakanlığı mevzuatlarına, CE Medikal direktiflerine ve İyi İmalat Uygulamaları (GMP) normlarına tam uyumlu olarak üretilen hayati bir tıbbi üründür. Hastanelerin yoğun bakım ünitelerinden ameliyathanelerine, acil servislerden anestezi uygulamalarına kadar geniş bir klinik yelpazede respiratör inhalasyon tedavilerinde ve hastaların solunum yetmezliği durumlarında birincil yaşam çizgisi olarak kullanılır. Tinsa Gaz olarak, iç yüzey temizliği ve medikal dezenfeksiyon işlemleri titizlikle yürütülen silindir hatlarımızda, en üst düzey hasta sağlığı ve güvenliği standartlarında tıbbi oksijen gazı dolumu gerçekleştirmekteyiz.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Medikal Oksijen Tüpleri",
        desc: "Ambulanslar, acil müdahale üniteleri, klinikler ve mobil hasta başı kullanımları için tasarlanmıştır. İç cidarları medikal normlara göre temizlenmiş yüksek güvenlikli tıbbi tüplerde, sağlık kuruluşu altyapısına göre 150 ile 230 bar çalışma basıncı aralığında tam emniyetle sevk edilir."
      },
      {
        title: "2. Merkezi Gaz Santrali Palet Sistemleri (Bundle)",
        desc: "Büyük ölçekli hastaneler, üniversite tıp merkezleri ve sürekli yüksek debili oksijen tüketen sağlık komplekslerinin merkezi gaz odaları için geliştirilmiş palet çözümleridir. Tinsa Gaz'ın medikal altyapı standartları gereği, kesintisiz akış ve sabit hat basıncı sunan medikal palet sistemlerimizde mutlak tek basınç uygulaması olarak 230 bar doldurma standardı geçerlidir. Bu sayede merkezi santralde gaz bitimine bağlı ani basınç düşüş riskleri tamamen engellenir."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Medikal oksijen kendi başına yanıcı bir gaz olmasa da yanmayı ve oksitlenmeyi çok şiddetli ve hızlı şekilde destekler. Bu nedenle hasta başı ünitelerinin, tıbbi vana ve regülatör sistemlerinin, medikal tesisat bileşenlerinin kesinlikle yağ, gres ve diğer organik maddelerle temas etmemesi gerekir. Tinsa Gaz tarafından sevk ettiğimiz tüm tıbbi armatürler mutlak 'medikal oksijen temizliği' standartlarına tabidir."
  },
  {
    slug: "azot-protoksit-gazi",
    title: "Medikal Azot Protoksit Gazı (N₂O)",
    badge: "Medikal Gazlar",
    icon: "🏥",
    desc: "Klinik anestezi uygulamalarının en köklü ve güvenilir ajanlarından biri olan Azot Protoksit (N₂O), endüstride ve tıp dünyasında 'Narkoz Gazı' veya halk arasında 'Güldürücü Gaz' olarak bilinen, tatlımsı bir kokuya ve renksiz fiziksel yapıya sahip tıbbi bir gazdır.",
    features: [
      "GMP standartlarında ve medikal direktiflere %100 tam uyumlu üretim",
      "Dijital terazilerde hassas net kilogram (kg) bazlı dolum güvencesi",
      "Güçlü analjezik (ağrı kesici) ve sedatif (sakinleştirici) etki"
    ],
    usageAreas: [
      "Ameliyathane ve Genel Anestezi: Cerrahi operasyonlar esnasında, hastanın narkoz durumunu ve anestezi derinliğini kararlı tutmak için medikal oksijenle karıştırılarak solutulur.",
      "Diş Hekimliği ve Sedasyon: Diş cerrahisi prosedürlerinde korku ve anksiyeteyi ortadan kaldırmak, ağrı eşiğini yükseltmek için bilinçli sedasyonda tercih edilir.",
      "Pediatri ve Doğumhane Uygulamaları: Hızlı başlayıp hızlı sonlanan analjezik etkisi sayesinde çocuk cerrahisinde ve doğum sancılarının hafifletilmesinde klinik konfor sağlar."
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "N₂O" },
      { label: "Depolama / Dolum Standardı", value: "Likit Fazda / Hassas Tartım (kg)" },
      { label: "Tedarik Standardı", value: "Net Kilogram Üzerinden Faturalandırma" },
      { label: "Kalite Normları", value: "GMP / CE Medikal / T.C. Sağlık Bakanlığı" }
    ],
    content: "Klinik anestezi uygulamalarının en köklü ve güvenilir ajanlarından biri olan Azot Protoksit (N₂O), endüstride ve tıp dünyasında 'Narkoz Gazı' veya halk arasında 'Güldürücü Gaz' olarak bilinen, tatlımsı bir kokuya ve renksiz fiziksel yapıya sahip tıbbi bir gazdır. Medikal direktiflere ve GMP (İyi İmalat Uygulamaları) kılavuzlarına tam uyumlu olarak sunulan bu gaz, güçlü analjezik (ağrı kesici) ve sedatif (sakinleştirici) özellikleri sayesinde modern hastane operasyonlarında çok kritik klinik görevler üstlenir. Azot Protoksit gazı, fiziksel özellikleri ve kritik sıcaklığı gereği tıbbi silindirler içerisinde yüksek basınç altında sıvı fazda depolanır. Bu nedenle, miktar tayini ve faturalandırma süreçleri diğer tıbbi gazlardan farklı olarak basınçla değil, mutlak hassas dijital terazilerde kilo (kg) bazında tartılarak gerçekleştirilir. Tinsa Gaz olarak, tam otomatik medikal dolum hatlarımızda her tüpü titizlikle tartarak tam gramaj güvencesiyle sevk etmekteyiz.",
    supplyModels: [
      {
        title: "1. Medikal Azot Protoksit Tüpleri",
        desc: "Ameliyathaneler, diş poliklinikleri ve cerrahi merkezler için en yaygın lojistik modeldir. Tüpün içindeki miktar basınçla okunamadığı için, Tinsa Gaz bünyesinde doldurulan tüm tıbbi N₂O tüpleri bilgisayarlı hassas terazilerde kilo (kg) bazında tartılarak doluma tabi tutulur ve satışı tamamen net kilogram esasına göre faturalandırılır. Sızdırmazlık ve valf güvenliği her dolum öncesi medikal testlerden geçirilir."
      },
      {
        title: "2. Merkezi Anestezi Gazı Santral Çözümleri",
        desc: "Büyük hastane komplekslerinin merkezi anestezi gaz odalarına kesintisiz ürün sağlamak adına geliştirilmiş manifold ve palet kombinasyonlarıdır. Sağlık bakanlığı regülasyonlarına tam uyumlu bu hacimli çözümlerimizde de dolum ve teslimat kriterleri, emniyet payları mutlak şekilde gözetilerek kilogram (kg) bazlı hassas tartım standartlarına göre yürütülmektedir."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Azot Protoksit gazı tek başına zehirli olmasa da havalandırması yetersiz kapalı ameliyathane ortamlarında birikmesi durumunda sağlık personellerinde konsantrasyon kaybı ve halsizlik yaratabilir. Bu nedenle operasyon alanlarındaki atık anestezi gazı tahliye sistemlerinin (skavencer) ve genel medikal havalandırma altyapısının kusursuz çalışması kritik bir İSG ve hasta güvenliği kuralıdır."
  },
  {
    slug: "medikal-kuru-hava-gazi",
    title: "Medikal Kuru Hava (Medical Air)",
    badge: "Medikal Gazlar",
    icon: "🏥",
    desc: "Ameliyathanelerin, yoğun bakım ünitelerinin ve solunum kliniklerinin operasyonel kalbini oluşturan Medikal Kuru Hava (Medical Air), sıradan endüstriyel veya kompresör havasından tamamen farklı, farmasötik saflıkta üretilen tıbbi bir gaz karışımıdır.",
    features: [
      "Sağlık Bakanlığı yönetmeliklerine ve uluslararası standartlara %100 tam uyumluluk",
      "Yağ buharından, bakterilerden, mikroorganizmalardan ve nemden tamamen arındırılmış saflık",
      "Hastaların akciğer sağlığını koruyan ve cerrahi sistemlerin hatasız çalışmasını sağlayan teknoloji"
    ],
    usageAreas: [
      "Solunum Cihazları ve Ventilatör Hatları: Yoğun bakımlarda yapay solunum cihazına bağlı olan hastalara saf medikal oksijeni belirli oranlarda seyrelterek fizyolojik ve solunabilir ideal atmosferi sağlamak amacıyla kesintisiz olarak verilir.",
      "Cerrahi Pnömatik El Aletleri (Tahrik Gücü): Ameliyathanelerde cerrahlar tarafından kullanılan kemik kesme testereleri, matkaplar, tıbbi törpüler ve mikro-motorlar gibi pnömatik sistemle çalışan aletlerin stabil çalışmasını sağlar.",
      "Anestezi Cihazları ve Yoğun Bakım Havalandırması: Anestezi solunum devrelerinde taşıyıcı gaz bileşeni olarak ve kuvöz ünitelerinde prematüre bebeklerin nemsiz ve steril hava ihtiyacını karşılamak amacıyla kritik klinik görevler üstlenir."
    ],
    specifications: [
      { label: "Bileşim standardı", value: "Tıbbi saflıkta kuru hava (%21 O₂ - %79 N₂)" },
      { label: "Basınç Standardı (Tüpler)", value: "150 - 230 Bar" },
      { label: "Merkezi Sistem Basıncı", value: "230 Bar (Bundle)" },
      { label: "Kalite Normları", value: "GMP / CE Medikal / T.C. Sağlık Bakanlığı / Çiğ Noktası Kontrolü" }
    ],
    content: "Ameliyathanelerin, yoğun bakım ünitelerinin ve solunum kliniklerinin operasyonel kalbini oluşturan Medikal Kuru Hava (Medical Air), sıradan endüstriyel veya kompresör havasından tamamen farklı, farmasötik saflıkta üretilen tıbbi bir gaz karışımıdır. Sağlık Bakanlığı tıbbi cihaz yönetmeliklerine ve uluslararası tıp standartlarına (çiğ noktası ve partikül limitleri) uygun olarak sunulan bu ürün; yağ buharından, bakterilerden, mikroorganizmalardan ve nemden tamamen arındırılmıştır. Doğrudan insan solunum yollarına ve kritik cerrahi el aletlerine temas ettiği için kalitesi anlık olarak kontrol edilmelidir. Tinsa Gaz olarak, ileri teknoloji medikal dolum tesislerimizde, hastaların akciğer sağlığını en üst seviyede koruyan ve cerrahi sistemlerin hatasız çalışmasını sağlayan yüksek kalitede tıbbi kuru hava tedariki sağlamaktayız.",
    supplyModels: [
      {
        title: "1. Yüksek Basınçlı Medikal Kuru Hava Tüpleri",
        desc: "Hassas tüketimi olan klinikler, bağımsız cerrahi merkezler ve mobil acil durum üniteleri için geliştirilmiştir. Bakteri ve nem testleri yapılmış yüksek emniyetli medikal silindirlerde, işletmenizin regülatör altyapısına uygun olarak 150 ile 230 bar çalışma basıncı aralığında tam güvenlik güvencesiyle teslim edilir."
      },
      {
        title: "2. Hastane Merkezi Hava Odası Palet Çözümleri (Bundle)",
        desc: "7/24 kesintisiz ventilatör ve ameliyathane havası ihtiyacı olan büyük ölçekli hastaneler ve kamu hastaneleri için manifold bağlantılı palet sistemleridir. Gaz kalitesinin, debinin ve çiğ noktasının milisaniyelik dalgalanmalardan bile etkilenmemesi gereken bu medikal sistemlerimizde, Tinsa Gaz kalite normları gereği mutlak tek basınç uygulaması olarak 230 bar doldurma standardı sunulmaktadır. Bu sayede hastane merkezi gaz hatlarında asla basınç düşmesi yaşanmaz."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Medikal Kuru Hava, hastaların doğrudan akciğer alveollerine ulaştığı için havadaki nem oranının (çiğ noktası / dew point) ve yağ içeriğinin mutlak şekilde sıfıra yakın olması şarttır. Nemli hava, solunum hatlarında bakteri üremesine ve cerrahi el aletlerinin korozyona uğrayarak ameliyat esnasında kilitlenmesine yol açabilir. Tinsa Gaz olarak sevk ettiğimiz tüm tıbbi hava sistemleri en katı saflık ve nem analizlerinden geçirilmektedir."
  },
  {
    slug: "medikal-karbondioksit-gazi",
    title: "Medikal Karbondioksit Gazı (CO₂)",
    badge: "Medikal Gazlar",
    icon: "🏥",
    desc: "Modern cerrahi prosedürlerin ve minimal invaziv operasyonların en kritik bileşenlerinden biri olan Medikal Karbondioksit (CO₂), Sağlık Bakanlığı tıbbi cihaz ve ilaç mevzuatlarına, CE Medikal direktiflerine ve İyi İmalat Uygulamaları (GMP) normlarına tam uyumlu olarak sunulan yüksek saflıkta tıbbi bir üründür.",
    features: [
      "Sağlık Bakanlığı ve GMP standartlarına tam uyumluluk",
      "Dijital terazilerde hassas net kilogram (kg) bazlı dolum güvencesi",
      "Kriyoterapi için sıvı fazın sağladığı yüksek dondurma gücü"
    ],
    usageAreas: [
      "Laparoskopik ve Endoskopik Cerrahi (Batın İnsüflasyonu): Kapalı ameliyatlarda cerrahi görüş ve çalışma alanı yaratmak amacıyla karın boşluğunun şişirilmesinde (insüflasyon) birincil gaz olarak kullanılır. Vücut tarafından hızla emilebilme ve solunum yoluyla dışarı atılabilme yeteneği sayesinde klinik olarak en güvenli seçenektir.",
      "Kriyocerrahi ve Dermatolojik Uygulamalar: Anormal dokuların, siğillerin veya tümörlerin cerrahi olarak dondurularak yok edilmesi işlemlerinde (kriyoterapi) sıvı fazın sağladığı yüksek soğutma gücüyle lokal terapötik ajan olarak tüketilir.",
      "Solunum Stimülasyonu ve Laboratuvar Prosesleri: Belirli klinik durumlarda solunum merkezini uyarmak amacıyla medikal oksijen ile kombine edilen özel solunum karışımlarında ve inkübatör ünitelerinde hücreser gelişim için kontrollü atmosfer yaratılmasında rol alır."
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "CO₂" },
      { label: "Depolama / Dolum Standardı", value: "Sıvı Fazda / Hassas Tartım (kg)" },
      { label: "Tedarik Standardı", value: "Net Kilogram Üzerinden Faturalandırma" },
      { label: "Kalite Normları", value: "GMP / CE Medikal / T.C. Sağlık Bakanlığı" }
    ],
    content: "Modern cerrahi prosedürlerin ve minimal invaziv operasyonların en kritik bileşenlerinden biri olan Medikal Karbondioksit (CO₂), Sağlık Bakanlığı tıbbi cihaz ve ilaç mevzuatlarına, CE Medikal direktiflerine ve İyi İmalat Uygulamaları (GMP) normlarına tam uyumlu olarak sunulan yüksek saflıkta tıbbi bir üründür. Karbondioksit gazı, fiziksel özellikleri gereği medikal silindirler içerisinde yüksek basınç altında sıvı fazda depolanır. Bu fiziksel yapısı nedeniyle, miktar tayini ve lojistik takibi basınç göstergeleriyle (bar) değil, mutlak hassas dijital terazilerde kilo (kg) bazında tartılarak gerçekleştirilir. Tinsa Gaz olarak, tam otomatik medikal dolum hatlarımızda her tüpü ve paleti titizlikle tartarak, ameliyathane güvenliğini ve tam gramaj güvencesini garanti altına almaktayız.",
    supplyModels: [
      {
        title: "1. Medikal Karbondioksit Tüpleri",
        desc: "Ameliyathaneler, tüp bebek merkezleri ve endoskopi klinikleri için optimize edilmiş yüksek güvenlikli çözümlerimizdir. Karbondioksitin sıvı faz yapısı gereği, Tinsa Gaz tesislerinde doldurulan tüm tekil medikal CO₂ tüpleri hassas dijital terazilerde kilo (kg) bazında tartılarak sevk edilir ve satışı tamamen net kilogram esasına göre faturalandırılır."
      },
      {
        title: "2. Merkezi Gaz Santrali Palet Sistemleri (Bundle)",
        desc: "Sürekli ve yoğun kapalı cerrahi operasyon döngüsüne sahip genel hastaneler ve tıp fakülteleri için geliştirilmiş hacimli manifold sistemleridir. Tinsa Gaz'ın medikal kalite politikası gereği, tüm merkezi santral palet teslimatlarında da süreçler kilo (kg) bazında mutlak tartım ve emniyet sınırları dahilinde yürütülmektedir. Bu lojistik model, operasyon esnasında hatlarda yaşanabilecek ürün kesintilerini tamamen ortadan kaldırır."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Medikal Karbondioksit gazı zehirli olmamasına rağmen havadan ağır bir gazdır. Olası bir kaçak durumunda zemin seviyesinde birikerek ortamdaki oksijen konsantrasyonunu aşağı çeker ve sinsi bir boğulma riski yaratır. Bu nedenle medikal CO₂ tüp ve paletlerinin depolandığı alanlarda zemin seviyesi havalandırma sistemlerinin ve karbondioksit algılama dedektörlerinin bulunması kritik bir İSG ve hasta emniyeti kuralıdır."
  },
  {
    slug: "medikal-sivi-azot-gazi",
    title: "Medikal Sıvı Azot (Likit Tıbbi Azot / LN₂)",
    badge: "Medikal Gazlar",
    icon: "🏥",
    desc: "Kriyoprezervasyon, kordon kanı saklama ve dermatolojik dondurma tedavileri için -196°C medikal sıvı azot. Özel dewar kaplarında kilo (kg) bazlı güvenli teslimat.",
    features: [
      "Sağlık Bakanlığı, CE Medikal ve GMP standartlarına tam uyumluluk",
      "Mutlak hassas terazilerde net kilo (kg) bazında dolum ve faturalandırma",
      "Yüksek yalıtımlı kriyojenik Dewar kapları ve vakumlu tanker lojistiği"
    ],
    usageAreas: [
      "Kriyobankalar ve Biyolojik Hücre Saklama (Kriyoprezervasyon): Tüp bebek merkezlerinde (IVF), kordon kanı bankalarında ve kök hücre laboratuvarlarında embriyo, sperm, yumurta, kan ve doku örneklerinin hücresel yaşlanmasını durdurarak çok uzun yıllar boyunca canlı ve hasarsız saklanması için mutlak kriyojenik ortamı sağlar.",
      "Dermatoloji ve Kriyocerrahi (Dondurma Tedavisi): Cilt polikliniklerinde ve dermatoloji kliniklerinde siğillerin, anormal cilt dokularının, lezyonların ve belirli benign/malign tümörlerin -196°C soğuklukla dondurularak kontrollü bir şekilde yok edilmesi (kriyoterapi) operasyonlarında primer cerrahi sıvı olarak tüketilir.",
      "Tıbbi Ekipman ve Laboratuvar Soğutma Sistemleri: Hassas genetik analiz cihazlarının, x-ışını detektörlerinin ve bazı süperiletken tıbbi donanımların ekstrem düşük sıcaklıklarda stabil çalışmasını sağlamak amacıyla soğutucu akışkan olarak rol alır."
    ],
    specifications: [
      { label: "Kimyasal Formül", value: "LN₂" },
      { label: "Kaynama Noktası (Atmosfer Basıncında)", value: "-196°C" },
      { label: "Dolum/Teslimat Ölçü Birimi", value: "Net Kilogram (kg)" },
      { label: "Kalite Standartları", value: "CE Medikal / GMP / T.C. Sağlık Bakanlığı / ISO 13485" }
    ],
    content: "Sağlık sektöründe biyolojik materyallerin canlılığını kaybetmeden on yıllar boyunca korunmasını sağlayan ve dermatolojik cerrahide birincil tedavi ajanı olan Medikal Sıvı Azot (Likit Tıbbi Azot / LN₂), Sağlık Bakanlığı tıbbi cihaz mevzuatlarına, CE Medikal standartlarına ve GMP (İyi İmalat Uygulamaları) yönergelerine tam uyumlu olarak sunulan kritik bir kriyojenik üründür. Atmosfer basıncında -196°C gibi ekstrem bir soğukluğa sahip olan bu ürün, sıvı faz yapısı ve sürekli buharlaşma (kaynama) eğilimi nedeniyle standart yüksek basınçlı sınai silindirlerde depolanamaz. Tinsa Gaz olarak, ileri teknoloji medikal dolum tesislerimizde, sıvı azot tedariğini ve lojistik yönetimini mutlak hassas terazilerde kilo (kg) bazında tartarak gerçekleştirmekte, hastanelerin ve laboratuvarların tam gramaj güvencesini yüksek yalıtımlı lojistik altyapımızla sağlamaktayız.",
    supplyModels: [
      {
        title: "1. Vakum Yalıtımlı Kriyojenik Dewar Kapları",
        desc: "Klinikler, laboratuvarlar ve dermatoloji merkezleri için en güvenli ve yaygın lojistik modeldir. Sıvı azotun buharlaşma hızını minimumda tutan çift cidarlı, vakum ve süper yalıtımlı özel alüminyum/paslanmaz çelik Dewar kapları ile sevk edilir. Dolum ve faturalandırma süreçleri, Tinsa Gaz güvencesiyle dijital terazilerde net kilo (kg) bazında tartılarak tamamlanır."
      },
      {
        title: "2. Kriyojenik Likit Tank Tedarik Çözümleri",
        desc: "Büyük ölçekli üniversite hastaneleri, merkezi kordon kanı bankaları ve yüksek hacimli doku saklama tesislerinin bahçelerinde bulunan sabit kriyojenik medikal tanklar için sunulan dökme likit lojistik modeldir. Tıbbi standartlara uygun kriyojenik tankerlerimiz vasıtasıyla, hastane medikal tanklarına güvenli transfer gerçekleştirilir ve teslimat miktarı transfer öncesi/sonrası mutlak ağırlık tartımı (kg) esasına göre kayıt altına alınır."
      }
    ],
    safetyWarning: "Teknik Uyarı ve Güvenlik Standardı: Medikal sıvı azot -196°C sıcaklığı nedeniyle çıplak tenle temas ettiği anda milisaniyeler içinde geri dönüşsüz ağır kriyojenik yanıklara (soğuk ısırığı) ve doku ölümüne yol açar. Bu nedenle transfer ve uygulama esnasında kriyojenik koruyucu eldiven ve yüz siperliği kullanımı mutlak bir İSG zorunluluğudur. Ayrıca, sıvı fazdan gaz fazına geçerken hacmi yaklaşık 700 kat genişlediği için kapalı ortamlardaki oksijeni hızla yerinden ederek fark edilmeden ani boğulma (asfoksi) riski yaratır. Medikal sıvı azot kaplarının depolandığı ve biyobankaların bulunduğu alanlarda üst seviye havalandırma sistemlerinin ve oksijen satürasyon ölçüm cihazlarının bulunması hayati önem taşır."
  }
];
