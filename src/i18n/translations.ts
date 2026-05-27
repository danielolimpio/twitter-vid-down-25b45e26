import type { Locale } from "./config";

export interface Dict {
  // Brand
  tagline: string;
  // Nav
  nav: {
    home: string;
    download: string;
    downloader: string;
    toMp4: string;
    gif: string;
    hd: string;
    iphone: string;
    android: string;
    faq: string;
    history: string;
  };
  // Hero / downloader
  hero: {
    h1Pre: string;
    h1Highlight: string;
    subtitle: string;
    placeholder: string;
    paste: string;
    clear: string;
    download: string;
    processing: string;
    disclaimer: string;
    learnMore: string;
    errInvalid: string;
    errProcess: string;
    errConnection: string;
    errNotFound: string;
    chooseQuality: string;
    best: string;
    downloadVideo: string;
    downloadGif: string;
    video: string;
    gif: string;
    thumbAlt: string;
    bannerAlt: string;
  };
  features: {
    title: string;
    items: { title: string; desc: string }[];
  };
  howTo: {
    title: string;
    subtitle: string;
    step: string;
    steps: { title: string; desc: string }[];
  };
  faqTitle: string;
  faqSubtitle: string;
  faqs: { q: string; a: string }[];
  footer: {
    disclaimer: string;
    rights: string;
    privacy: string;
    terms: string;
    dmca: string;
    about: string;
    contact: string;
  };
}

const en: Dict = {
  tagline: "Twitter Video Downloader",
  nav: {
    home: "Home",
    download: "Download Twitter Video",
    downloader: "Twitter Video Downloader",
    toMp4: "Twitter to MP4",
    gif: "Twitter GIF Downloader",
    hd: "Twitter Video HD",
    iphone: "Twitter Video for iPhone",
    android: "Twitter Video for Android",
    faq: "FAQ",
    history: "Downloads",
  },
  hero: {
    h1Pre: "Download Twitter Videos",
    h1Highlight: "Free & Fast",
    subtitle: "The fastest online Twitter / X video downloader. Save videos in MP4, HD and Full HD without watermark. 100% free, no signup.",
    placeholder: "Paste the Twitter / X link here...",
    paste: "Paste",
    clear: "Clear",
    download: "Download Now",
    processing: "Processing...",
    disclaimer: "Please respect third-party rights when downloading from Twitter (X). Copyrighted content cannot be downloaded with this tool.",
    learnMore: "Learn more",
    errInvalid: "Please enter a valid Twitter / X link.",
    errProcess: "Failed to process the video. Please try again.",
    errConnection: "Connection error. Please try again.",
    errNotFound: "Video not found.",
    chooseQuality: "Choose quality:",
    best: " (Best)",
    downloadVideo: "Download Video",
    downloadGif: "Download GIF",
    video: "Video",
    gif: "GIF",
    thumbAlt: "Video thumbnail",
    bannerAlt: "Twitter video downloader - fast & free",
  },
  features: {
    title: "Features",
    items: [
      { title: "No Watermark", desc: "Clean original videos" },
      { title: "High Quality", desc: "Up to 1080p Full HD" },
      { title: "Unlimited", desc: "No download limits" },
      { title: "100% Free", desc: "No signup required" },
      { title: "Super Fast", desc: "Instant downloads" },
    ],
  },
  howTo: {
    title: "How to Download Twitter Videos",
    subtitle: "Saving Twitter videos has never been easier. Just 3 steps:",
    step: "Step",
    steps: [
      { title: "Copy the Link", desc: "Open Twitter / X, find the video you want and copy the tweet URL." },
      { title: "Paste the Link", desc: "Paste the tweet URL into the field above on this page." },
      { title: "Download the Video", desc: "Click 'Download Now' and choose your preferred quality." },
    ],
  },
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Everything you need to know about downloading Twitter videos.",
  faqs: [
    { q: "How do I download videos from Twitter?", a: "Copy the link of the tweet that contains the video, paste it into the field on our site and click 'Download Now'. Pick the quality and the file is yours." },
    { q: "Is the Twitter video downloader free?", a: "Yes — 100% free. There are no plans, subscriptions or hidden fees." },
    { q: "Do I need to install an app?", a: "No. The downloader runs in your browser on any device, no extension or app required." },
    { q: "Are videos downloaded without watermark?", a: "Yes — every video is saved in its original quality, with no watermark or alteration." },
    { q: "Does it work on iPhone and Android?", a: "Yes, it works perfectly on iPhone, Android phones, tablets and desktop browsers." },
    { q: "What video quality can I download?", a: "We offer SD, HD, Full HD 1080p and 4K when available in the source tweet." },
    { q: "Is the Twitter downloader safe?", a: "Yes. We never ask you to log in, we don't store your data and we never access your Twitter account." },
    { q: "Can I download Twitter GIFs?", a: "Yes — animated GIFs from Twitter can be saved as MP4 files using the same flow." },
  ],
  footer: {
    disclaimer: "This site is not affiliated with Twitter / X. All rights to the videos belong to their respective creators.",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    dmca: "DMCA",
    about: "About",
    contact: "Contact",
  },
};

const pt: Dict = {
  tagline: "Baixar Vídeos do Twitter",
  nav: {
    home: "Início",
    download: "Baixar Vídeo do Twitter",
    downloader: "Baixar Vídeos do Twitter",
    toMp4: "Twitter para MP4",
    gif: "Baixar GIF do Twitter",
    hd: "Vídeo do Twitter em HD",
    iphone: "Twitter no iPhone",
    android: "Twitter no Android",
    faq: "Perguntas",
    history: "Downloads",
  },
  hero: {
    h1Pre: "Baixar Vídeos do Twitter",
    h1Highlight: "Grátis e Rápido",
    subtitle: "A melhor ferramenta online para baixar vídeos do Twitter (X) em MP4, HD e Full HD. Sem marca d'água, sem cadastro, 100% grátis.",
    placeholder: "Cole o link do Twitter / X aqui...",
    paste: "Colar",
    clear: "Limpar",
    download: "Baixar Agora",
    processing: "Processando...",
    disclaimer: "Respeite os direitos de terceiros ao baixar do Twitter (X). Conteúdo protegido por direitos autorais não pode ser baixado com esta ferramenta.",
    learnMore: "Saiba mais",
    errInvalid: "Por favor, insira um link válido do Twitter / X.",
    errProcess: "Erro ao processar o vídeo. Tente novamente.",
    errConnection: "Erro de conexão. Tente novamente.",
    errNotFound: "Vídeo não encontrado.",
    chooseQuality: "Escolha a qualidade:",
    best: " (Melhor)",
    downloadVideo: "Baixar Vídeo",
    downloadGif: "Baixar GIF",
    video: "Vídeo",
    gif: "GIF",
    thumbAlt: "Thumbnail do vídeo",
    bannerAlt: "Baixar vídeos do Twitter - rápido e grátis",
  },
  features: {
    title: "Recursos",
    items: [
      { title: "Sem Marca d'Água", desc: "Vídeos limpos e originais" },
      { title: "Alta Qualidade", desc: "Até 1080p Full HD" },
      { title: "Ilimitado", desc: "Sem limite de downloads" },
      { title: "100% Grátis", desc: "Sem cadastro" },
      { title: "Super Rápido", desc: "Download instantâneo" },
    ],
  },
  howTo: {
    title: "Como Baixar Vídeos do Twitter",
    subtitle: "Baixar vídeos do Twitter nunca foi tão fácil. Em 3 passos:",
    step: "Passo",
    steps: [
      { title: "Copie o Link", desc: "Abra o Twitter / X, encontre o vídeo e copie o link do tweet." },
      { title: "Cole o Link", desc: "Cole o link no campo acima desta página." },
      { title: "Baixe o Vídeo", desc: "Clique em 'Baixar Agora' e escolha a qualidade." },
    ],
  },
  faqTitle: "Perguntas Frequentes",
  faqSubtitle: "Tudo o que você precisa saber sobre baixar vídeos do Twitter.",
  faqs: [
    { q: "Como baixar vídeos do Twitter?", a: "Copie o link do tweet com o vídeo, cole no campo do site e clique em 'Baixar Agora'. Escolha a qualidade e pronto." },
    { q: "É realmente grátis?", a: "Sim, 100% grátis. Sem planos, sem assinaturas, sem taxas escondidas." },
    { q: "Preciso instalar algum programa?", a: "Não. Funciona direto no navegador, em qualquer dispositivo." },
    { q: "Os vídeos vêm com marca d'água?", a: "Não. Os vídeos são baixados na qualidade original, sem alterações." },
    { q: "Funciona no iPhone e Android?", a: "Sim, funciona em iPhone, Android, tablets e computadores." },
    { q: "Qual a qualidade dos vídeos?", a: "SD, HD, Full HD 1080p e 4K quando disponível no tweet original." },
    { q: "É seguro usar?", a: "Sim. Não pedimos login, não guardamos seus dados e nunca acessamos sua conta." },
    { q: "Posso baixar GIFs do Twitter?", a: "Sim. GIFs do Twitter são salvos como MP4 usando o mesmo fluxo." },
  ],
  footer: {
    disclaimer: "Este site não é afiliado ao Twitter / X. Todos os direitos sobre os vídeos pertencem aos seus criadores.",
    rights: "Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
    dmca: "DMCA",
    about: "Sobre",
    contact: "Contato",
  },
};

const es: Dict = {
  tagline: "Descargar Videos de Twitter",
  nav: {
    home: "Inicio",
    download: "Descargar Video de Twitter",
    downloader: "Descargador de Twitter",
    toMp4: "Twitter a MP4",
    gif: "Descargar GIF de Twitter",
    hd: "Video Twitter HD",
    iphone: "Twitter en iPhone",
    android: "Twitter en Android",
    faq: "Preguntas",
    history: "Descargas",
  },
  hero: {
    h1Pre: "Descargar Videos de Twitter",
    h1Highlight: "Gratis y Rápido",
    subtitle: "El mejor descargador online de videos de Twitter (X) en MP4, HD y Full HD. Sin marca de agua, sin registro, 100% gratis.",
    placeholder: "Pega el enlace de Twitter / X aquí...",
    paste: "Pegar",
    clear: "Borrar",
    download: "Descargar Ahora",
    processing: "Procesando...",
    disclaimer: "Respeta los derechos de terceros al descargar de Twitter (X). El contenido con derechos de autor no puede descargarse con esta herramienta.",
    learnMore: "Más información",
    errInvalid: "Introduce un enlace válido de Twitter / X.",
    errProcess: "Error al procesar el video. Inténtalo de nuevo.",
    errConnection: "Error de conexión. Inténtalo de nuevo.",
    errNotFound: "Video no encontrado.",
    chooseQuality: "Elige la calidad:",
    best: " (Mejor)",
    downloadVideo: "Descargar Video",
    downloadGif: "Descargar GIF",
    video: "Video",
    gif: "GIF",
    thumbAlt: "Miniatura del video",
    bannerAlt: "Descargar videos de Twitter - rápido y gratis",
  },
  features: {
    title: "Características",
    items: [
      { title: "Sin Marca de Agua", desc: "Videos limpios y originales" },
      { title: "Alta Calidad", desc: "Hasta 1080p Full HD" },
      { title: "Ilimitado", desc: "Sin límites de descarga" },
      { title: "100% Gratis", desc: "Sin registro" },
      { title: "Súper Rápido", desc: "Descarga instantánea" },
    ],
  },
  howTo: {
    title: "Cómo Descargar Videos de Twitter",
    subtitle: "Descargar videos de Twitter nunca fue tan fácil. Solo 3 pasos:",
    step: "Paso",
    steps: [
      { title: "Copia el Enlace", desc: "Abre Twitter / X, encuentra el video y copia el enlace del tweet." },
      { title: "Pega el Enlace", desc: "Pega el enlace en el campo de arriba." },
      { title: "Descarga el Video", desc: "Pulsa 'Descargar Ahora' y elige la calidad." },
    ],
  },
  faqTitle: "Preguntas Frecuentes",
  faqSubtitle: "Todo lo que necesitas saber sobre descargar videos de Twitter.",
  faqs: [
    { q: "¿Cómo descargo videos de Twitter?", a: "Copia el enlace del tweet con el video, pégalo en el campo del sitio y pulsa 'Descargar Ahora'." },
    { q: "¿Es realmente gratis?", a: "Sí, 100% gratis. Sin planes, suscripciones ni costes ocultos." },
    { q: "¿Necesito instalar una app?", a: "No. Funciona en el navegador en cualquier dispositivo." },
    { q: "¿Los videos llevan marca de agua?", a: "No. Se descargan en la calidad original, sin alteraciones." },
    { q: "¿Funciona en iPhone y Android?", a: "Sí, funciona perfectamente en iPhone, Android, tabletas y PC." },
    { q: "¿Qué calidad puedo descargar?", a: "SD, HD, Full HD 1080p y 4K cuando esté disponible en el tweet." },
    { q: "¿Es seguro de usar?", a: "Sí. No pedimos inicio de sesión y no almacenamos tus datos." },
    { q: "¿Puedo descargar GIFs?", a: "Sí. Los GIFs de Twitter se guardan como MP4 con el mismo flujo." },
  ],
  footer: {
    disclaimer: "Este sitio no está afiliado a Twitter / X. Los derechos pertenecen a sus respectivos creadores.",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
    dmca: "DMCA",
    about: "Acerca de",
    contact: "Contacto",
  },
};

const id: Dict = {
  tagline: "Pengunduh Video Twitter",
  nav: {
    home: "Beranda",
    download: "Unduh Video Twitter",
    downloader: "Pengunduh Twitter",
    toMp4: "Twitter ke MP4",
    gif: "Unduh GIF Twitter",
    hd: "Video Twitter HD",
    iphone: "Twitter di iPhone",
    android: "Twitter di Android",
    faq: "Tanya Jawab",
    history: "Unduhan",
  },
  hero: {
    h1Pre: "Unduh Video Twitter",
    h1Highlight: "Gratis & Cepat",
    subtitle: "Pengunduh video Twitter (X) online tercepat. Simpan video dalam MP4, HD, dan Full HD tanpa watermark. 100% gratis, tanpa daftar.",
    placeholder: "Tempel tautan Twitter / X di sini...",
    paste: "Tempel",
    clear: "Hapus",
    download: "Unduh Sekarang",
    processing: "Memproses...",
    disclaimer: "Hormati hak pihak ketiga saat mengunduh dari Twitter (X). Konten berhak cipta tidak boleh diunduh dengan alat ini.",
    learnMore: "Pelajari lebih lanjut",
    errInvalid: "Masukkan tautan Twitter / X yang valid.",
    errProcess: "Gagal memproses video. Coba lagi.",
    errConnection: "Kesalahan koneksi. Coba lagi.",
    errNotFound: "Video tidak ditemukan.",
    chooseQuality: "Pilih kualitas:",
    best: " (Terbaik)",
    downloadVideo: "Unduh Video",
    downloadGif: "Unduh GIF",
    video: "Video",
    gif: "GIF",
    thumbAlt: "Thumbnail video",
    bannerAlt: "Pengunduh video Twitter - cepat & gratis",
  },
  features: {
    title: "Fitur",
    items: [
      { title: "Tanpa Watermark", desc: "Video bersih dan asli" },
      { title: "Kualitas Tinggi", desc: "Hingga 1080p Full HD" },
      { title: "Tidak Terbatas", desc: "Tanpa batas unduhan" },
      { title: "100% Gratis", desc: "Tanpa pendaftaran" },
      { title: "Sangat Cepat", desc: "Unduhan instan" },
    ],
  },
  howTo: {
    title: "Cara Mengunduh Video Twitter",
    subtitle: "Mengunduh video Twitter belum pernah semudah ini. Hanya 3 langkah:",
    step: "Langkah",
    steps: [
      { title: "Salin Tautan", desc: "Buka Twitter / X, temukan video, dan salin URL tweet." },
      { title: "Tempel Tautan", desc: "Tempel tautan ke kolom di atas." },
      { title: "Unduh Video", desc: "Klik 'Unduh Sekarang' dan pilih kualitas." },
    ],
  },
  faqTitle: "Pertanyaan yang Sering Diajukan",
  faqSubtitle: "Semua yang perlu Anda ketahui tentang mengunduh video Twitter.",
  faqs: [
    { q: "Bagaimana cara mengunduh video Twitter?", a: "Salin tautan tweet yang berisi video, tempel di kolom situs, lalu klik 'Unduh Sekarang'." },
    { q: "Apakah benar-benar gratis?", a: "Ya — 100% gratis. Tidak ada paket berbayar atau biaya tersembunyi." },
    { q: "Perlu instal aplikasi?", a: "Tidak. Berjalan langsung di peramban Anda." },
    { q: "Apakah video punya watermark?", a: "Tidak. Video disimpan dalam kualitas asli tanpa perubahan." },
    { q: "Apakah bekerja di iPhone dan Android?", a: "Ya, bekerja sempurna di iPhone, Android, tablet, dan desktop." },
    { q: "Kualitas apa yang bisa diunduh?", a: "SD, HD, Full HD 1080p, dan 4K bila tersedia di tweet sumber." },
    { q: "Apakah aman digunakan?", a: "Ya. Kami tidak meminta login dan tidak menyimpan data Anda." },
    { q: "Bisa unduh GIF dari Twitter?", a: "Ya. GIF Twitter disimpan sebagai berkas MP4." },
  ],
  footer: {
    disclaimer: "Situs ini tidak berafiliasi dengan Twitter / X. Hak atas video milik pembuat masing-masing.",
    rights: "Hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Layanan",
    dmca: "DMCA",
    about: "Tentang",
    contact: "Kontak",
  },
};

const tr: Dict = {
  tagline: "Twitter Video İndirici",
  nav: {
    home: "Ana Sayfa",
    download: "Twitter Video İndir",
    downloader: "Twitter Video İndirici",
    toMp4: "Twitter MP4",
    gif: "Twitter GIF İndir",
    hd: "Twitter Video HD",
    iphone: "iPhone için Twitter",
    android: "Android için Twitter",
    faq: "SSS",
    history: "İndirilenler",
  },
  hero: {
    h1Pre: "Twitter Videolarını İndir",
    h1Highlight: "Ücretsiz ve Hızlı",
    subtitle: "En hızlı çevrimiçi Twitter (X) video indirici. Videoları MP4, HD ve Full HD olarak filigransız kaydedin. %100 ücretsiz, kayıt yok.",
    placeholder: "Twitter / X bağlantısını buraya yapıştırın...",
    paste: "Yapıştır",
    clear: "Temizle",
    download: "Şimdi İndir",
    processing: "İşleniyor...",
    disclaimer: "Twitter (X) üzerinden indirme yaparken üçüncü taraf haklarına saygı gösterin. Telif hakkıyla korunan içerik bu araçla indirilemez.",
    learnMore: "Daha fazla",
    errInvalid: "Geçerli bir Twitter / X bağlantısı girin.",
    errProcess: "Video işlenemedi. Tekrar deneyin.",
    errConnection: "Bağlantı hatası. Tekrar deneyin.",
    errNotFound: "Video bulunamadı.",
    chooseQuality: "Kalite seçin:",
    best: " (En İyi)",
    downloadVideo: "Videoyu İndir",
    downloadGif: "GIF İndir",
    video: "Video",
    gif: "GIF",
    thumbAlt: "Video küçük resmi",
    bannerAlt: "Twitter video indirici - hızlı ve ücretsiz",
  },
  features: {
    title: "Özellikler",
    items: [
      { title: "Filigransız", desc: "Temiz ve orijinal videolar" },
      { title: "Yüksek Kalite", desc: "1080p Full HD'ye kadar" },
      { title: "Sınırsız", desc: "İndirme limiti yok" },
      { title: "%100 Ücretsiz", desc: "Kayıt gerekmez" },
      { title: "Çok Hızlı", desc: "Anında indirme" },
    ],
  },
  howTo: {
    title: "Twitter Videoları Nasıl İndirilir",
    subtitle: "Twitter videoları indirmek hiç bu kadar kolay olmamıştı. Sadece 3 adım:",
    step: "Adım",
    steps: [
      { title: "Bağlantıyı Kopyala", desc: "Twitter / X'i aç, videoyu bul ve tweet URL'sini kopyala." },
      { title: "Bağlantıyı Yapıştır", desc: "URL'yi yukarıdaki kutuya yapıştır." },
      { title: "Videoyu İndir", desc: "'Şimdi İndir' butonuna tıkla ve kaliteyi seç." },
    ],
  },
  faqTitle: "Sık Sorulan Sorular",
  faqSubtitle: "Twitter videolarını indirme hakkında bilmeniz gereken her şey.",
  faqs: [
    { q: "Twitter videolarını nasıl indiririm?", a: "Video içeren tweet bağlantısını kopyala, sitedeki kutuya yapıştır ve 'Şimdi İndir'e tıkla." },
    { q: "Gerçekten ücretsiz mi?", a: "Evet, %100 ücretsiz. Plan, abonelik veya gizli ücret yok." },
    { q: "Uygulama yüklemem gerekir mi?", a: "Hayır. Doğrudan tarayıcıda çalışır." },
    { q: "Videolarda filigran var mı?", a: "Hayır. Videolar orijinal kalitede, değişiklik yapılmadan indirilir." },
    { q: "iPhone ve Android'de çalışır mı?", a: "Evet, iPhone, Android, tablet ve masaüstünde mükemmel çalışır." },
    { q: "Hangi kalitede indirebilirim?", a: "SD, HD, Full HD 1080p ve kaynak tweet'te varsa 4K." },
    { q: "Kullanması güvenli mi?", a: "Evet. Giriş istemeyiz ve verilerinizi saklamayız." },
    { q: "Twitter GIF'lerini indirebilir miyim?", a: "Evet. GIF'ler MP4 dosyası olarak kaydedilir." },
  ],
  footer: {
    disclaimer: "Bu site Twitter / X ile bağlantılı değildir. Tüm video hakları yaratıcılarına aittir.",
    rights: "Tüm hakları saklıdır.",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    dmca: "DMCA",
    about: "Hakkında",
    contact: "İletişim",
  },
};

const hi: Dict = {
  tagline: "ट्विटर वीडियो डाउनलोडर",
  nav: {
    home: "होम",
    download: "ट्विटर वीडियो डाउनलोड",
    downloader: "ट्विटर वीडियो डाउनलोडर",
    toMp4: "ट्विटर से MP4",
    gif: "ट्विटर GIF डाउनलोड",
    hd: "ट्विटर वीडियो HD",
    iphone: "iPhone पर ट्विटर",
    android: "Android पर ट्विटर",
    faq: "सामान्य प्रश्न",
    history: "डाउनलोड",
  },
  hero: {
    h1Pre: "ट्विटर वीडियो डाउनलोड करें",
    h1Highlight: "मुफ्त और तेज़",
    subtitle: "सबसे तेज़ ऑनलाइन ट्विटर (X) वीडियो डाउनलोडर। MP4, HD और Full HD में बिना वॉटरमार्क के सेव करें। 100% मुफ्त, बिना साइन-अप।",
    placeholder: "यहाँ ट्विटर / X लिंक पेस्ट करें...",
    paste: "पेस्ट",
    clear: "साफ़",
    download: "अभी डाउनलोड करें",
    processing: "प्रोसेस हो रहा है...",
    disclaimer: "ट्विटर (X) से डाउनलोड करते समय तीसरे पक्ष के अधिकारों का सम्मान करें। कॉपीराइट सामग्री इस टूल से डाउनलोड नहीं की जा सकती।",
    learnMore: "और जानें",
    errInvalid: "कृपया एक मान्य ट्विटर / X लिंक डालें।",
    errProcess: "वीडियो प्रोसेस नहीं हो सका। पुनः प्रयास करें।",
    errConnection: "कनेक्शन त्रुटि। पुनः प्रयास करें।",
    errNotFound: "वीडियो नहीं मिला।",
    chooseQuality: "गुणवत्ता चुनें:",
    best: " (सर्वोत्तम)",
    downloadVideo: "वीडियो डाउनलोड",
    downloadGif: "GIF डाउनलोड",
    video: "वीडियो",
    gif: "GIF",
    thumbAlt: "वीडियो थंबनेल",
    bannerAlt: "ट्विटर वीडियो डाउनलोडर - तेज़ और मुफ्त",
  },
  features: {
    title: "विशेषताएँ",
    items: [
      { title: "बिना वॉटरमार्क", desc: "साफ-सुथरे मूल वीडियो" },
      { title: "उच्च गुणवत्ता", desc: "1080p Full HD तक" },
      { title: "असीमित", desc: "कोई डाउनलोड सीमा नहीं" },
      { title: "100% मुफ्त", desc: "साइन-अप ज़रूरी नहीं" },
      { title: "बहुत तेज़", desc: "तुरंत डाउनलोड" },
    ],
  },
  howTo: {
    title: "ट्विटर वीडियो कैसे डाउनलोड करें",
    subtitle: "ट्विटर वीडियो डाउनलोड करना अब बहुत आसान है — सिर्फ़ 3 स्टेप्स:",
    step: "स्टेप",
    steps: [
      { title: "लिंक कॉपी करें", desc: "ट्विटर / X खोलें, वीडियो ढूँढें और ट्वीट का URL कॉपी करें।" },
      { title: "लिंक पेस्ट करें", desc: "ऊपर दिए गए बॉक्स में लिंक पेस्ट करें।" },
      { title: "वीडियो डाउनलोड करें", desc: "'अभी डाउनलोड करें' पर क्लिक करें और गुणवत्ता चुनें।" },
    ],
  },
  faqTitle: "सामान्य प्रश्न",
  faqSubtitle: "ट्विटर वीडियो डाउनलोड करने के बारे में आपको जो जानना चाहिए।",
  faqs: [
    { q: "ट्विटर से वीडियो कैसे डाउनलोड करें?", a: "वीडियो वाले ट्वीट का लिंक कॉपी करें, साइट में पेस्ट करें और 'अभी डाउनलोड करें' पर क्लिक करें।" },
    { q: "क्या यह वाकई मुफ्त है?", a: "हाँ, 100% मुफ्त। कोई प्लान, सब्सक्रिप्शन या छिपा शुल्क नहीं।" },
    { q: "क्या मुझे ऐप इंस्टॉल करनी होगी?", a: "नहीं। यह सीधे आपके ब्राउज़र में चलता है।" },
    { q: "क्या वीडियो में वॉटरमार्क होता है?", a: "नहीं। वीडियो मूल गुणवत्ता में बिना बदलाव के डाउनलोड होते हैं।" },
    { q: "क्या यह iPhone और Android पर काम करता है?", a: "हाँ — iPhone, Android, टैबलेट और डेस्कटॉप पर बेहतरीन काम करता है।" },
    { q: "मैं कौन-सी क्वालिटी डाउनलोड कर सकता हूँ?", a: "SD, HD, Full HD 1080p और स्रोत ट्वीट में उपलब्ध हो तो 4K।" },
    { q: "क्या इसका उपयोग सुरक्षित है?", a: "हाँ। हम लॉगिन नहीं माँगते और आपका डेटा सेव नहीं करते।" },
    { q: "क्या ट्विटर GIF डाउनलोड कर सकते हैं?", a: "हाँ। ट्विटर GIF MP4 फ़ाइल के रूप में सेव होते हैं।" },
  ],
  footer: {
    disclaimer: "यह साइट ट्विटर / X से संबद्ध नहीं है। सभी वीडियो अधिकार उनके संबंधित निर्माताओं के हैं।",
    rights: "सर्वाधिकार सुरक्षित।",
    privacy: "गोपनीयता नीति",
    terms: "उपयोग की शर्तें",
    dmca: "DMCA",
    about: "हमारे बारे में",
    contact: "संपर्क",
  },
};

export const TRANSLATIONS: Record<Locale, Dict> = { en, pt, es, id, tr, hi };
