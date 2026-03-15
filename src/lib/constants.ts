export const GOOGLE_FORM_URL = "https://forms.gle/fRgfkU62A5R9Q2LKA";
export const WHATSAPP_NUMBER = "905325824453";
export const SITE_URL = "https://endamreklam.com";

export const PACKAGES = [
  {
    id: "paket-1",
    name: "Paket 1 — \"Dijital Vitrin\"",
    price: "1.299 TL",
    priceLabel: "+ KDV",
    term: "Tek Seferlik",
    features: [
      "Hızlı yüklenen, mobil uyumlu modern web sitesi",
      "Mevcut alan adınız sitenize bağlanır",
      "SSL güvenlik sertifikası (tarayıcıda kilit ikonu)",
      "WhatsApp ile iletişim butonu",
      "İletişim formu",
      "Instagram & Facebook profil bağlantıları",
      "Sekme ikonu (favicon)",
      "WhatsApp'ta güzel görünen link önizlemesi",
      "Google Analytics bağlantısı",
      "1 revizyon hakkı",
    ],
    notes: [
      "Sadece yıllık alan adı yenileme ücreti ödersiniz (~400 TL/yıl) — başka hiçbir hosting veya bakım faturası yoktur",
      "Form doldurulduktan sonra 2 iş günü içinde siteniz teslim edilir",
      "Teslim öncesi 1 revizyon hakkınız vardır",
    ],
    buttonText: "Bu Paketi İstiyorum",
    highlight: false,
  },
  {
    id: "paket-2",
    name: "Paket 2 — \"Hazır İşletme\" ⭐",
    price: "1.999 TL",
    priceLabel: "+ KDV",
    term: "Tek Seferlik",
    features: [
      "Paket 1'deki her şey",
      "Size özel alan adı seçimi ve kaydı dahil",
      "Google Harita üzerinde konumunuz sitede gösterilir",
      "Cloudflare altyapısında barındırma — hesap ve şifre size teslim edilir",
    ],
    notes: [
      "Sadece yıllık alan adı yenileme ücreti ödersiniz (~400 TL/yıl) — başka hiçbir hosting veya bakım faturası yoktur",
      "Form doldurulduktan sonra 2 iş günü içinde siteniz teslim edilir",
      "Teslim öncesi 1 revizyon hakkınız vardır",
    ],
    buttonText: "Bu Paketi İstiyorum",
    highlight: true,
  },
  {
    id: "paket-3",
    name: "Paket 3 — \"Dijital İşletme\"",
    price: "2.999 TL",
    priceLabel: "+ KDV",
    term: "Tek Seferlik",
    features: [
      "Paket 2'deki her şey",
      "Google İşletmem kaydı (Google'da arandığınızda sağ tarafta işletme bilgileriniz çıkar)",
      "Yandex Harita kaydı",
      "Google Arama Reklamı hesabı açılması ve kampanya kurulumu",
      "Instagram & Facebook Reklamı hesabı açılması ve kampanya kurulumu",
    ],
    notes: [
      "Sadece yıllık alan adı yenileme ücreti ödersiniz (~400 TL/yıl) — başka hiçbir hosting veya bakım faturası yoktur",
      "Form doldurulduktan sonra 2 iş günü içinde siteniz teslim edilir",
      "Teslim öncesi 1 revizyon hakkınız vardır",
      "⚠️ Reklam yayını için Google ve Meta'ya ayrıca reklam bütçesi ödenir (aylık minimum 500 TL önerilir) — bu tutar bize değil, direkt reklam platformlarına gider",
    ],
    buttonText: "Bu Paketi İstiyorum",
    highlight: false,
  },
];

export const FAQS = [
  {
    question: "Neden bu kadar ucuz?",
    answer: "Vibe Coding ve modern geliştirme araçlarını kullanarak süreçlerimizi %90 oranında hızlandırdık. Gereksiz maliyetleri eleyip sadece ihtiyacınız olan dijital varlığı sunuyoruz.",
  },
  {
    question: "Bu siteyle neler yapabilirim?",
    answer: "Sitenizle işletmenizi tanıtabilir, form toplayabilir, WhatsApp üzerinden müşteri alabilir ve Google/Meta reklamları verebilirsiniz. Landing page ve kurumsal kimlik için idealdir.",
  },
  {
    question: "Ekstra masrafım olacak mı?",
    answer: "Ekonomik pakette hosting ve domain size aittir. Kapsamlı pakette ise ilk yıl hiçbir ekstra masrafınız olmaz.",
  },
  {
    question: "SSL sertifikası var mı?",
    answer: "Kapsamlı paketimizde SSL sertifikası ömür boyu ücretsiz olarak sunulmaktadır.",
  },
  {
    question: "Google reklamı verebilir miyim?",
    answer: "Evet, tüm sitelerimiz reklam performansına uygun olarak (LightSpeed) geliştirilmektedir.",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    id: "classic",
    style: "Classic",
    title: "Klasik Hukuk Bürosu",
    category: "Hukuk",
    description: "Güçlü, kurumsal ve ağırbaşlı. Deneyim ve güvenilirliği ön plana çıkaran geleneksel bir tasarım dili.",
    image: "/images/classic.webp",
    imageWidth: 1452,
    imageHeight: 4244,
    accentColor: "text-amber-700",
  },
  {
    id: "modern",
    style: "Modern",
    title: "Modern Hukuk Bürosu",
    category: "Hukuk",
    description: "Dinamik, çarpıcı ve çağdaş. Fark yaratmak isteyen ofisler için bold ve özgüvenli bir yaklaşım.",
    image: "/images/modern.webp",
    imageWidth: 1452,
    imageHeight: 4087,
    accentColor: "text-blue-600",
  },
  {
    id: "minimal",
    style: "Minimal",
    title: "Minimalist Hukuk Bürosu",
    category: "Hukuk",
    description: "Sade, şık ve odaklı. İçeriğin konuştuğu, gürültüsüz ve zarif bir tasarım anlayışı.",
    image: "/images/minimal.webp",
    imageWidth: 1452,
    imageHeight: 5056,
    accentColor: "text-gray-500",
  },
];

export const COMPLETED_PROJECTS = [
  {
    id: "akratek",
    title: "Akratek",
    url: "https://akratek.com",
    image: "/images/akratek_com.webp",
  },
  {
    id: "fortinge",
    title: "Fortinge",
    url: "https://fortinge.com",
    image: "/images/fortinge_com.webp",
  },
  {
    id: "mefamekanik",
    title: "Mefa Mekanik",
    url: "https://mefamekanik.com",
    image: "/images/mefamekanik_com.webp",
  },
  {
    id: "mts",
    title: "MTS Ltd Şti",
    url: "https://mtsltdsti.com",
    image: "/images/mtsltdsti_com.webp",
  },
  {
    id: "soyer",
    title: "Soyer Avukatlık",
    url: "https://soyer.av.tr",
    image: "/images/soyer_av_tr.webp",
  },
  {
    id: "ultrasonmakina",
    title: "Ultrason Makina",
    url: "https://ultrasonmakina.com",
    image: "/images/ultrasonmakina_com.webp",
  },
];
