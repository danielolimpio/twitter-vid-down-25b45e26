import seoBanner from "@/assets/seo-banner.webp";
import { useLocale } from "@/i18n/LocaleProvider";

interface Block { h2: string; alt: string; paras: string[]; whyH3: string; why: string[]; }


const CONTENT: Record<string, Block> = {
  en: {
    h2: "The Best Twitter Video Downloader in 2026",
    alt: "Download Twitter videos free in HD, Full HD and 4K - TwitterDown",
    paras: [
      "TwitterDown is the fastest online tool to download Twitter (X) videos without watermark. Used by millions worldwide, the site is free, secure and works on every device — no app, no signup, no extension.",
      "It supports every public Twitter media type: native videos, video replies, quote tweets and animated GIFs. You can save them in SD, HD 720p, Full HD 1080p and 4K when the source tweet was uploaded in that quality.",
      "The downloader works on Android, iPhone, iPad, Windows, macOS and Linux through any modern browser — Chrome, Safari, Firefox, Edge, Brave and Samsung Internet.",
    ],
    whyH3: "Why pick TwitterDown",
    why: [
      "Download Twitter videos in SD, HD 720p, Full HD 1080p and 4K",
      "No watermark — original files served directly by Twitter's CDN",
      "100% free, unlimited and ad-light",
      "No signup, no login, no app to install",
      "Works on twitter.com and x.com links",
      "Built for Android, iPhone, iPad, Windows, macOS and Linux",
      "Supports Twitter GIFs (saved as MP4)",
      "Fast Core Web Vitals, accessible and mobile-first",
    ],
  },
  pt: {
    h2: "A Melhor Ferramenta Para Baixar Vídeos do Twitter (X) em 2026",
    alt: "Baixar vídeos do Twitter grátis em HD, Full HD e 4K - TwitterDown",
    paras: [
      "O TwitterDown é a ferramenta online mais rápida para baixar vídeos do Twitter (X) sem marca d'água. Usado por milhões de pessoas, o site é grátis, seguro e funciona em qualquer dispositivo — sem app, sem cadastro, sem extensão.",
      "Suporta todos os tipos de mídia pública do Twitter: vídeos nativos, respostas em vídeo, quote tweets e GIFs animados, em SD, HD 720p, Full HD 1080p e 4K quando o tweet original foi enviado nessa qualidade.",
      "Funciona em Android, iPhone, iPad, Windows, macOS e Linux através de qualquer navegador moderno.",
    ],
    whyH3: "Por que escolher o TwitterDown",
    why: [
      "Download de vídeos do Twitter em SD, HD 720p, Full HD 1080p e 4K",
      "Sem marca d'água — arquivos originais entregues pela CDN do Twitter",
      "100% grátis, ilimitado e com poucos anúncios",
      "Sem cadastro, sem login, sem instalação",
      "Funciona com links twitter.com e x.com",
      "Pronto para Android, iPhone, iPad, Windows, macOS e Linux",
      "Suporta GIFs do Twitter (salvos como MP4)",
      "Core Web Vitals rápidos, acessível e mobile-first",
    ],
  },
  es: {
    h2: "El Mejor Descargador de Videos de Twitter en 2026",
    alt: "Descargar videos de Twitter gratis en HD, Full HD y 4K - TwitterDown",
    paras: [
      "TwitterDown es la herramienta online más rápida para descargar videos de Twitter (X) sin marca de agua. Usada por millones de personas en todo el mundo, es gratis, segura y funciona en cualquier dispositivo — sin app, sin registro y sin extensión.",
      "Admite todos los tipos de medios públicos de Twitter: videos nativos, respuestas en video, quote tweets y GIFs animados. Puedes guardarlos en SD, HD 720p, Full HD 1080p y 4K cuando el tweet original se subió en esa calidad.",
      "El descargador funciona en Android, iPhone, iPad, Windows, macOS y Linux mediante cualquier navegador moderno — Chrome, Safari, Firefox, Edge, Brave y Samsung Internet.",
    ],
    whyH3: "Por qué elegir TwitterDown",
    why: [
      "Descarga videos de Twitter en SD, HD 720p, Full HD 1080p y 4K",
      "Sin marca de agua — archivos originales servidos por la CDN de Twitter",
      "100% gratis, ilimitado y con pocos anuncios",
      "Sin registro, sin login, sin app que instalar",
      "Funciona con enlaces twitter.com y x.com",
      "Hecho para Android, iPhone, iPad, Windows, macOS y Linux",
      "Soporta GIFs de Twitter (guardados como MP4)",
      "Core Web Vitals rápidos, accesible y mobile-first",
    ],
  },
  id: {
    h2: "Pengunduh Video Twitter Terbaik di 2026",
    alt: "Unduh video Twitter gratis dalam HD, Full HD, dan 4K - TwitterDown",
    paras: [
      "TwitterDown adalah alat online tercepat untuk mengunduh video Twitter (X) tanpa watermark. Digunakan oleh jutaan orang di seluruh dunia, situs ini gratis, aman, dan bekerja di setiap perangkat — tanpa aplikasi, tanpa pendaftaran, tanpa ekstensi.",
      "Mendukung semua jenis media publik Twitter: video asli, balasan video, quote tweet, dan GIF animasi. Anda dapat menyimpannya dalam SD, HD 720p, Full HD 1080p, dan 4K bila tweet sumber diunggah dalam kualitas tersebut.",
      "Pengunduh ini bekerja di Android, iPhone, iPad, Windows, macOS, dan Linux melalui peramban modern apa pun — Chrome, Safari, Firefox, Edge, Brave, dan Samsung Internet.",
    ],
    whyH3: "Mengapa memilih TwitterDown",
    why: [
      "Unduh video Twitter dalam SD, HD 720p, Full HD 1080p, dan 4K",
      "Tanpa watermark — berkas asli langsung dari CDN Twitter",
      "100% gratis, tanpa batas, dan minim iklan",
      "Tanpa pendaftaran, tanpa login, tanpa aplikasi",
      "Bekerja dengan tautan twitter.com dan x.com",
      "Dibuat untuk Android, iPhone, iPad, Windows, macOS, dan Linux",
      "Mendukung GIF Twitter (disimpan sebagai MP4)",
      "Core Web Vitals cepat, aksesibel, dan mobile-first",
    ],
  },
  tr: {
    h2: "2026'nın En İyi Twitter Video İndirici",
    alt: "Twitter videolarını HD, Full HD ve 4K olarak ücretsiz indirin - TwitterDown",
    paras: [
      "TwitterDown, Twitter (X) videolarını filigransız indirmek için en hızlı çevrimiçi araçtır. Dünya çapında milyonlarca kişi tarafından kullanılan site ücretsiz, güvenli ve her cihazda çalışır — uygulama, kayıt veya eklenti gerekmez.",
      "Tüm genel Twitter medya türlerini destekler: yerel videolar, video yanıtları, alıntı tweetler ve animasyonlu GIF'ler. Kaynak tweet o kalitede yüklendiyse SD, HD 720p, Full HD 1080p ve 4K olarak kaydedebilirsiniz.",
      "İndirici; Android, iPhone, iPad, Windows, macOS ve Linux'ta Chrome, Safari, Firefox, Edge, Brave ve Samsung Internet gibi modern tarayıcılar üzerinden çalışır.",
    ],
    whyH3: "Neden TwitterDown",
    why: [
      "Twitter videolarını SD, HD 720p, Full HD 1080p ve 4K indirin",
      "Filigransız — orijinal dosyalar doğrudan Twitter CDN'inden",
      "%100 ücretsiz, sınırsız ve az reklamlı",
      "Kayıt yok, giriş yok, kurulum gereksiz",
      "twitter.com ve x.com bağlantılarıyla çalışır",
      "Android, iPhone, iPad, Windows, macOS ve Linux için",
      "Twitter GIF'lerini destekler (MP4 olarak kaydedilir)",
      "Hızlı Core Web Vitals, erişilebilir ve mobil öncelikli",
    ],
  },
  hi: {
    h2: "2026 का सबसे अच्छा ट्विटर वीडियो डाउनलोडर",
    alt: "ट्विटर वीडियो HD, Full HD और 4K में मुफ्त डाउनलोड करें - TwitterDown",
    paras: [
      "TwitterDown ट्विटर (X) वीडियो को बिना वॉटरमार्क डाउनलोड करने का सबसे तेज़ ऑनलाइन टूल है। दुनिया भर में लाखों लोगों द्वारा उपयोग की जाने वाली यह साइट मुफ्त, सुरक्षित है और हर डिवाइस पर काम करती है — कोई ऐप, साइन-अप या एक्सटेंशन नहीं।",
      "यह सभी सार्वजनिक ट्विटर मीडिया प्रकारों का समर्थन करता है: मूल वीडियो, वीडियो उत्तर, quote tweets और एनिमेटेड GIFs। आप उन्हें SD, HD 720p, Full HD 1080p और 4K में सहेज सकते हैं यदि स्रोत ट्वीट उसी गुणवत्ता में अपलोड किया गया हो।",
      "डाउनलोडर Android, iPhone, iPad, Windows, macOS और Linux पर किसी भी आधुनिक ब्राउज़र — Chrome, Safari, Firefox, Edge, Brave और Samsung Internet — के माध्यम से काम करता है।",
    ],
    whyH3: "TwitterDown क्यों चुनें",
    why: [
      "ट्विटर वीडियो SD, HD 720p, Full HD 1080p और 4K में डाउनलोड करें",
      "बिना वॉटरमार्क — मूल फाइलें सीधे ट्विटर CDN से",
      "100% मुफ्त, असीमित और कम विज्ञापन",
      "कोई साइन-अप नहीं, कोई लॉगिन नहीं, कोई ऐप नहीं",
      "twitter.com और x.com लिंक के साथ काम करता है",
      "Android, iPhone, iPad, Windows, macOS और Linux के लिए बनाया गया",
      "ट्विटर GIFs का समर्थन (MP4 के रूप में सहेजे गए)",
      "तेज़ Core Web Vitals, सुलभ और मोबाइल-फर्स्ट",
    ],
  },
};

const SEOContent = () => {
  const { locale } = useLocale();
  const c = CONTENT[locale] ?? CONTENT.en;
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{c.h2}</h2>
        <img src={seoBanner} alt={c.alt} className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8" loading="lazy" width={800} height={450} />
        <div className="prose prose-sm text-muted-foreground space-y-4">
          {c.paras.map((p, i) => <p key={i}>{p}</p>)}
          <h3 className="text-foreground font-semibold text-lg mt-6">{c.whyH3}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {c.why.map((li, i) => <li key={i}>{li}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
