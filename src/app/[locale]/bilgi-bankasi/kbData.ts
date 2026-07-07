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
        question: "Kuru buz nedir ve özellikleri nelerdir?",
        answer: "Kuru buz, sıvı karbondioksitin (CO₂) yüksek basınç altında katılaştırılmasıyla elde edilen ve -78,5°C sıcaklığa sahip katı karbondioksittir. Normal buzdan farklı olarak eriyerek sıvıya dönüşmez; süblimleşme adı verilen fiziksel süreçle doğrudan gaz fazına geçer. Bu özelliği sayesinde su, nem veya atık bırakmadan soğutma, lojistik, gıda muhafazası ve endüstriyel temizlik uygulamalarında güvenle kullanılmaktadır.",
        keywords: ["kuru buz nedir", "kuru buz özellikleri", "süblimleşme", "katı karbondioksit"]
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
        answer: "Kuru buz temizliği, kuru buz peletlerinin basınçlı hava ile kirli yüzeylere püskürtülmesi yöntemidir. Temas anında peletler süblimleşer ve kir katmanını mikroskobik patlamalarla yüzeyden ayırır. Avantajları: Aşındırıcı değildir, kimyasal atık veya su bırakmaz, elektrikli bileşenlerde güvenle kullanılabilir ve yerinde kuru buz temizliği sayesinde makine montajını sökmeye gerek kalmaz.",
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
        id: "otomatik-gazli-yangin-sondurme-sistemleri",
        category: "sondurme",
        question: "Otomatik Gazlı Yangın Söndürme Sistemleri nedir ve avantajları nelerdir?",
        answer: "Otomatik gazlı yangın söndürme sistemleri, yangının ilk oluşum anında algılanmasını ve insan müdahalesine ihtiyaç duymadan kontrol altına alınmasını sağlayan yüksek güvenlikli yangın koruma çözümleridir. Özellikle su veya köpük kullanımının elektronik ekipmanlara, hassas makinelere ya da değerli varlıklara zarar verebileceği alanlarda tercih edilen bu sistemler; can güvenliğini, iş sürekliliğini ve kritik altyapıları korumak amacıyla geliştirilmiştir.\n\nSistem, yangın algılama dedektörlerinden aldığı sinyaller doğrultusunda otomatik olarak devreye girer ve korunacak mahallin özelliklerine göre belirlenen söndürme gazını kontrollü şekilde ortama boşaltır. Kullanılan gaz, yangının kimyasal reaksiyonunu durdurarak veya ortamdaki oksijen seviyesini yanmanın sürdürülebileceği sınırın altına indirerek alevlerin kısa sürede söndürülmesini sağlar. Böylece yangının büyümesi önlenirken ekipmanlar, bilgi sistemleri ve üretim süreçleri güvence altına alınır.\n\nGazlı yangın söndürme sistemleri, \"temiz söndürme sistemleri\" sınıfında yer almakta olup söndürme sonrasında su, köpük veya toz kalıntısı bırakmaz. Bu sayede elektronik cihazlar, sunucular, elektrik panoları ve hassas mekanik sistemler zarar görmez; işletmeler temizlik ve onarım maliyetleriyle karşılaşmadan faaliyetlerine kısa sürede devam edebilir.\n\nFirmamız; NFPA, EN 15004 (ISO 14520), VdS, UL ve FM standartlarına uygun olarak otomatik gazlı yangın söndürme sistemlerinin keşif, risk analizi, hidrolik hesaplama, projelendirme, montaj, devreye alma, periyodik bakım ve servis hizmetlerini anahtar teslim olarak sunmaktadır. Her proje, korunacak mahallin hacmi, risk sınıfı ve kullanım amacı dikkate alınarak deneyimli mühendislerimiz tarafından özel olarak tasarlanmaktadır.\n\nSIEMENS BT çözüm ortağı olan firmamız, SIEMENS ve BURSAN teknolojileriyle entegre çalışan güvenilir yangın algılama ve söndürme sistemleri kurarak veri merkezlerinden enerji tesislerine, endüstriyel üretim alanlarından savunma sanayine kadar birçok sektörde uluslararası standartlarda çözümler sunmaktadır.",
        keywords: ["otomatik gazlı söndürme", "gazlı yangın söndürme", "yangın algılama", "siemens", "bursan"]
      },
      {
        id: "otomatik-gazli-yangin-sondurme-sistemleri-rehberi",
        category: "sondurme",
        question: "Otomatik Gazlı Yangın Söndürme Sistemleri Rehberi (Nedir, Nasıl Çalışır, Avantajları)",
        answer: "Otomatik Gazlı Yangın Söndürme Sistemleri Nedir?\n\nYangın, yalnızca fiziksel yapılara zarar veren bir afet değil; aynı zamanda üretim sürekliliğini, kritik verileri, teknolojik altyapıları ve en önemlisi insan hayatını tehdit eden ciddi bir güvenlik riskidir. Özellikle veri merkezleri, elektrik odaları, enerji tesisleri, endüstriyel üretim alanları ve hassas elektronik sistemlerin bulunduğu mahallerde geleneksel söndürme yöntemleri her zaman yeterli çözüm sunamayabilir. Bu tür alanlarda kullanılacak yanlış bir söndürme yöntemi, yangından daha büyük maddi kayıplara neden olabilmektedir.\n\nOtomatik gazlı yangın söndürme sistemleri, yangının henüz başlangıç aşamasında algılanmasını sağlayan gelişmiş algılama teknolojileri ile çalışan ve insan müdahalesine ihtiyaç duymadan otomatik olarak devreye giren yüksek performanslı yangın koruma sistemleridir. Bu sistemler, yangını saniyeler içerisinde kontrol altına alarak hem can güvenliğini hem de korunması gereken kritik ekipmanları güvence altına alır.\n\nGazlı söndürme sistemlerinin en önemli özelliği, söndürme işlemini su, köpük veya kuru kimyevi toz kullanmadan gerçekleştirmesidir. Bunun yerine, korunacak mahallin özelliklerine göre seçilen özel söndürme gazları kontrollü şekilde ortama boşaltılır. Kullanılan gaz; alevin kimyasal zincir reaksiyonunu durdurur veya ortamdaki oksijen seviyesini yanmanın devam edemeyeceği seviyeye düşürerek yangını kısa sürede söndürür.\n\nBu yöntem sayesinde elektronik cihazlar, sunucular, haberleşme sistemleri, kontrol panoları, otomasyon ekipmanları ve yüksek maliyetli üretim makineleri söndürme sonrasında zarar görmez. Ayrıca sistem herhangi bir su, köpük veya toz kalıntısı bırakmadığından temizlik ve yeniden devreye alma süresi minimum seviyeye iner.\n\nGünümüzde otomatik gazlı yangın söndürme sistemleri; veri merkezleri, telekomünikasyon altyapıları, enerji santralleri, hastaneler, laboratuvarlar, bankalar, müzeler, arşiv odaları, savunma sanayi tesisleri, gemiler, açık deniz platformları ve endüstriyel üretim tesisleri gibi yüksek riskli alanlarda uluslararası standartların vazgeçilmez bir parçası haline gelmiştir.\n\n\nOtomatik Gazlı Yangın Söndürme Sistemleri Nasıl Çalışır?\n\nBir gazlı yangın söndürme sistemi yalnızca gaz tüplerinden ibaret değildir. Sistem; algılama, kontrol, uyarı ve söndürme ekipmanlarının birlikte çalıştığı entegre bir yangın güvenlik çözümüdür.\n\nYangın oluşmaya başladığında ilk olarak duman, sıcaklık veya alev dedektörleri ortamda meydana gelen değişiklikleri algılar. Dedektörlerden gelen sinyaller yangın algılama kontrol paneline iletilir ve panel, belirlenen senaryoya göre alarm sürecini başlatır.\n\nAlarm sirenleri ve flaşörler devreye girerek ortamda bulunan kişilerin güvenli şekilde tahliye edilmesini sağlar. Tahliye süresi tamamlandıktan sonra söndürme paneli, gaz tüplerinin üzerindeki elektrikli veya pnömatik tetikleme mekanizmasını aktif hale getirir.\n\nTüpler içerisinde yüksek basınç altında depolanan söndürme gazı, özel tasarlanmış borulama sistemi aracılığıyla hesaplanan nozullardan korunacak mahale homojen şekilde dağıtılır.\n\nSeçilen gaz tipine bağlı olarak;\n- Yangının kimyasal reaksiyonu durdurulur,\n- Ortamdaki oksijen seviyesi güvenli sınırlar içerisinde düşürülür,\n- Isı enerjisi absorbe edilerek alevin yeniden oluşması engellenir.\n\nTüm bu süreç çoğu uygulamada yalnızca birkaç saniye içerisinde tamamlanır. Bu hızlı müdahale sayesinde yangının büyümesi önlenirken, işletmenin faaliyetleri en kısa sürede normale döndürülür.\n\n\nGazlı Yangın Söndürme Sistemlerinin Avantajları\n\nOtomatik gazlı yangın söndürme sistemleri, klasik söndürme yöntemlerine göre birçok önemli avantaj sunmaktadır.\n\n- Kritik Ekipmanları Korur: Su veya köpük kullanımı elektronik sistemlerde ciddi hasarlara neden olabilir. Gazlı söndürme sistemleri ise elektronik cihazlar, sunucular, UPS sistemleri, elektrik panoları ve otomasyon ekipmanlarını zarar vermeden korur.\n- Kalıntı Bırakmaz: Söndürme sonrasında su, köpük veya kimyasal toz oluşmadığı için ilave temizlik gerektirmez. Bu durum özellikle veri merkezleri, laboratuvarlar ve üretim tesisleri için büyük avantaj sağlar.\n- Hızlı Müdahale Sağlar: Yangının ilk saniyelerinde otomatik olarak devreye girerek alevlerin büyümesini önler ve maddi kayıpları minimum seviyeye indirir.\n- İş Sürekliliğini Destekler: Üretim tesislerinde meydana gelen yangınlar yalnızca ekipman kaybına değil, üretim duruşlarına da neden olur. Gazlı söndürme sistemleri, temizlik ve yeniden devreye alma süresini kısalttığı için işletmelerin faaliyetlerine hızla devam etmesini sağlar.\n- Çevre Dostu Çözümler Sunar: Yeni nesil temiz söndürme gazları, çevresel etkileri göz önünde bulundurularak geliştirilmiştir. Özellikle Novec 1230 gibi söndürme ajanları düşük küresel ısınma potansiyeli ve atmosferde kısa kalış süresi sayesinde sürdürülebilir yangın güvenliği çözümleri arasında yer almaktadır.\n\n\nGazlı Yangın Söndürme Sistemleri Neden Tercih Edilir?\n\nGünümüzde işletmeler yalnızca yangını söndürmeyi değil, aynı zamanda üretim sürekliliğini korumayı hedeflemektedir. Bir veri merkezinde meydana gelecek birkaç dakikalık kesinti, milyonlarca liralık veri kaybına neden olabilir. Bir üretim tesisinde yaşanacak yangın ise haftalar sürebilecek üretim duruşlarına yol açabilir.\n\nBu nedenle otomatik gazlı yangın söndürme sistemleri, yangını yalnızca kontrol altına alan bir sistem değil; işletmenin operasyonel sürekliliğini sağlayan stratejik bir yatırım olarak değerlendirilmektedir.\n\nDoğru projelendirilmiş ve uluslararası standartlara uygun olarak kurulmuş bir gazlı yangın söndürme sistemi; can güvenliğini korurken aynı zamanda işletmenin en değerli varlıklarını güvence altına alır, olası maddi kayıpları azaltır ve yangın sonrasında faaliyetlerin en kısa sürede yeniden başlamasına katkı sağlar.",
        keywords: ["yangın söndürme rehberi", "otomatik gazlı söndürme", "avantajları", "nasıl çalışır", "novec 1230", "fm200"]
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
      id: "automatic-gas-fire-suppression-systems",
      category: "sondurme",
      question: "What are Automatic Gas Fire Suppression Systems and how do they work?",
      answer: "Automatic gas fire suppression systems are high-security fire protection solutions that detect fires at their initial stage and control them without human intervention. Especially preferred in areas where water or foam usage could damage electronic equipment, sensitive machinery, or valuable assets, these systems protect lives, business continuity, and critical infrastructure.\n\nThe system activates automatically based on signals from detectors and discharges extinguishing gas. The gas suppresses fire by stopping the chemical reaction or lowering the oxygen level below the combustion threshold, securing equipment and data systems without water or chemical residue.\n\nOur company provides turnkey services including hazard analysis, hydraulic calculations, design, installation, periodic maintenance, and service complying with NFPA, EN 15004, VdS, UL, and FM standards. As a SIEMENS BT solution partner, we deliver international standard solutions integrated with SIEMENS and BURSAN technologies.",
      keywords: ["automatic gas fire suppression", "fire suppression", "siemens", "bursan"]
    },
    {
      id: "automatic-gas-fire-suppression-systems-guide",
      category: "sondurme",
      question: "Automatic Gas Fire Suppression Systems Guide (What is it, How it works, Advantages)",
      answer: "What is Automatic Gas Fire Suppression Systems?\n\nFire is not only a disaster that damages physical structures, but also a serious security risk that threatens production continuity, critical data, technological infrastructure, and most importantly, human life. Especially in data centers, electrical rooms, energy facilities, industrial production areas, and spaces with sensitive electronic systems, traditional suppression methods may not always offer the right solution. Using an incorrect suppression method in such areas can cause greater financial damage than the fire itself.\n\nAutomatic gas fire suppression systems are high-performance fire protection systems that work with advanced detection technologies to detect fire at its initial stage and activate automatically without human intervention. These systems control fire within seconds, securing both human life and critical equipment.\n\nThe most important feature of gas suppression systems is that they perform suppression without using water, foam, or dry chemical powder. Instead, special suppression gases selected according to the characteristics of the space to be protected are discharged in a controlled manner. The gas suppresses the fire by stopping the chemical chain reaction of the flame or by reducing the oxygen level below the combustion threshold.\n\nThanks to this method, electronic devices, servers, communication systems, control panels, automation equipment, and high-cost production machinery are not damaged during and after suppression. Furthermore, since the system leaves no water, foam, or powder residue, cleanup and re-commissioning times are minimized.\n\nToday, automatic gas fire suppression systems have become an indispensable part of international standards in high-risk areas such as data centers, telecommunication infrastructures, energy plants, hospitals, laboratories, banks, museums, archive rooms, defense industry facilities, ships, offshore platforms, and industrial production plants.\n\n\nHow Do Automatic Gas Fire Suppression Systems Work?\n\nA gas fire suppression system is not just composed of gas cylinders. The system is an integrated fire safety solution in which detection, control, warning, and suppression equipment work together.\n\nWhen a fire starts, smoke, heat, or flame detectors first sense the changes occurring in the environment. Signals from detectors are transmitted to the fire detection control panel, which starts the alarm process according to the set scenario.\n\nAlarm sirens and strobes are activated to ensure that people in the room are safely evacuated. After the evacuation time is complete, the suppression panel activates the electrical or pneumatic release mechanism on the gas cylinders.\n\nThe suppression gas, stored under high pressure inside the cylinders, is homogeneously distributed to the protected space through a specially designed piping system and calculated nozzles.\n\nDepending on the selected gas type:\n- The chemical reaction of the fire is stopped,\n- The oxygen level in the environment is reduced within safe limits,\n- Heat energy is absorbed to prevent the re-ignition of the flame.\n\nAll of this process is completed in just a few seconds in most applications. Thanks to this quick response, the growth of the fire is prevented and the operations of the business are returned to normal as quickly as possible.\n\n\nAdvantages of Gas Fire Suppression Systems\n\nAutomatic gas fire suppression systems offer several important advantages over classic suppression methods:\n\n- Protects Critical Equipment: Using water or foam can cause serious damage to electronic systems. Gas suppression systems protect electronic devices, servers, UPS systems, electrical panels, and automation equipment without damage.\n- Leaves No Residue: Since no water, foam, or chemical powder is produced after suppression, no additional cleanup is required. This is a great advantage, especially for data centers, laboratories, and production facilities.\n- Provides Fast Response: It activates automatically in the first seconds of the fire, preventing the flame from growing and minimizing financial losses.\n- Supports Business Continuity: Fires in production facilities cause not only equipment loss but also production downtime. Since gas suppression systems shorten cleanup and re-commissioning times, they allow businesses to resume operations quickly.\n- Offers Eco-Friendly Solutions: New generation clean agent gases are developed taking environmental impacts into account. Especially suppression agents like Novec 1230 are among sustainable fire safety solutions due to their low global warming potential and short atmospheric lifetime.\n\n\nWhy Are Gas Fire Suppression Systems Preferred?\n\nToday, businesses aim not only to extinguish fires but also to protect production continuity. A few minutes of interruption in a data center can cause millions of liras in data loss. A fire in a production facility can lead to production downtime that lasts for weeks.\n\nTherefore, automatic gas fire suppression systems are not evaluated merely as systems that control fire, but as strategic investments that ensure the operational continuity of the business.\n\nA properly designed gas fire suppression system installed in compliance with international standards protects lives while securing the most valuable assets of the business, reducing potential financial losses, and helping operations resume as quickly as possible after a fire.",
      keywords: ["fire suppression guide", "automatic gas suppression", "advantages", "how it works", "novec 1230", "fm200"]
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
