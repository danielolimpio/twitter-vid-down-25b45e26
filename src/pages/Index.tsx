import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToSection from "@/components/HowToSection";
import SEOContent from "@/components/SEOContent";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLocale } from "@/i18n/LocaleProvider";

const META: Record<string, { title: string; desc: string; keywords: string }> = {
  en: {
    title: "Twitter Video Downloader - Download X Videos Free MP4 HD 1080p 4K",
    desc: "Free Twitter (X) video downloader online. Save Twitter videos, GIFs and tweets to MP4 in HD, Full HD 1080p and 4K without watermark. No app, no signup. Works on iPhone, Android, PC and Mac. Best ssstwitter, twittervideodownloader and twmate alternative.",
    keywords: "twitter video downloader, download twitter video, x video downloader, twitter to mp4, twitter video download, save twitter video, twitter gif downloader, download video from twitter, twitter mp4 download, twitter video hd, twitter video 1080p, twitter video 4k, download tweet video, tweet downloader, twitter video saver, twitter downloader online, free twitter video downloader, twitter video downloader without watermark, x downloader, x to mp4, ssstwitter, twmate, snaptwitter, twittervideodownloader, x2twitter, savetwitter, download twitter video iphone, download twitter video android, download twitter video pc, download twitter video chrome, twitter video downloader hd, twitter video downloader free",
  },
  pt: {
    title: "Baixar Vídeos do Twitter (X) Grátis Online - MP4 HD 1080p 4K Sem Marca D'água",
    desc: "Baixar vídeos do Twitter (X) grátis em MP4, HD, Full HD 1080p e 4K sem marca d'água. Salvar vídeos, GIFs e tweets do Twitter online, sem cadastro e sem instalar app. Funciona no celular Android, iPhone, PC e Mac. Melhor alternativa ao ssstwitter, twittervideodownloader e savetwitter em português.",
    keywords: "baixar videos twitter, baixar video do twitter, baixar video twitter, download twitter video, baixar video do x, baixar video twitter online, baixar twitter, salvar video twitter, baixar gif twitter, baixar video twitter hd, baixar video twitter mp4, baixar video twitter 1080p, baixar video twitter 4k, baixar video twitter sem marca dagua, baixar video twitter gratis, download video twitter, baixar videos do twitter no celular, baixar video twitter iphone, baixar video twitter android, baixar video twitter pc, como baixar video do twitter, site para baixar videos do twitter, baixar tweet video, twitter downloader portugues, ssstwitter portugues, twmate portugues",
  },
  es: {
    title: "Descargar Videos de Twitter (X) Gratis - MP4 HD 1080p 4K Sin Marca de Agua",
    desc: "Descargar videos de Twitter (X) gratis en MP4, HD, Full HD 1080p y 4K sin marca de agua. Guarda videos, GIFs y tweets de Twitter online, sin registro y sin instalar apps. Funciona en iPhone, Android, PC y Mac. Mejor alternativa a ssstwitter, twittervideodownloader y savetwitter en español.",
    keywords: "descargar videos twitter, descargar video twitter, descargar videos de twitter, descargar video de twitter, descargar video x, bajar videos twitter, guardar video twitter, descargar gif twitter, descargar video twitter hd, descargar video twitter mp4, descargar video twitter 1080p, descargar video twitter sin marca de agua, descargar video twitter gratis, descargar video twitter online, descargar video twitter iphone, descargar video twitter android, descargar video twitter pc, como descargar video de twitter, pagina para descargar videos de twitter, twitter downloader español, ssstwitter español, twmate español",
  },
  id: {
    title: "Download Video Twitter (X) Gratis - MP4 HD 1080p 4K Tanpa Watermark",
    desc: "Download video Twitter (X) gratis dalam MP4, HD, Full HD 1080p, dan 4K tanpa watermark. Simpan video, GIF, dan tweet dari Twitter online, tanpa daftar dan tanpa aplikasi. Bekerja di iPhone, Android, PC, dan Mac. Alternatif terbaik ssstwitter, twittervideodownloader, dan savetwitter.",
    keywords: "download video twitter, unduh video twitter, twitter video downloader, download video x, download video twitter hd, download video twitter mp4, download video twitter 1080p, download video twitter tanpa watermark, download video twitter gratis, simpan video twitter, download gif twitter, download video twitter online, cara download video twitter, download video twitter di iphone, download video twitter di android, download video twitter di pc, situs download video twitter, ssstwitter indonesia, twmate indonesia, snaptwitter indonesia",
  },
  tr: {
    title: "Twitter (X) Video İndirici - Ücretsiz MP4 HD 1080p 4K Filigransız",
    desc: "Twitter (X) videolarını ücretsiz MP4, HD, Full HD 1080p ve 4K olarak filigransız indirin. Twitter videolarını, GIF'leri ve tweetleri çevrimiçi kaydedin, kayıt veya uygulama gerekmez. iPhone, Android, PC ve Mac'te çalışır. ssstwitter, twittervideodownloader ve savetwitter alternatifi.",
    keywords: "twitter video indir, twitter video indirici, x video indir, twitter video download, twitter mp4 indir, twitter gif indir, twitter video hd indir, twitter video 1080p indir, twitter video 4k indir, twitter video filigransiz indir, ucretsiz twitter video indir, twitter video kaydet, tweet video indir, twitter video indirme sitesi, iphone twitter video indir, android twitter video indir, pc twitter video indir, online twitter video indir, ssstwitter turkce, twmate turkce, snaptwitter turkce",
  },
  hi: {
    title: "ट्विटर वीडियो डाउनलोडर - X वीडियो मुफ्त MP4 HD 1080p 4K डाउनलोड बिना वॉटरमार्क",
    desc: "ट्विटर (X) वीडियो को मुफ्त MP4, HD, Full HD 1080p और 4K में बिना वॉटरमार्क डाउनलोड करें। ट्विटर वीडियो, GIF और ट्वीट ऑनलाइन सेव करें - कोई ऐप नहीं, कोई साइन-अप नहीं। iPhone, Android, PC और Mac पर काम करता है। ssstwitter, twittervideodownloader और savetwitter का सर्वश्रेष्ठ विकल्प।",
    keywords: "ट्विटर वीडियो डाउनलोड, ट्विटर वीडियो डाउनलोडर, twitter video download hindi, twitter video downloader hindi, twitter se video download kaise kare, twitter video kaise download kare, ट्विटर से वीडियो डाउनलोड, twitter video download hd, twitter video download mp4, twitter video download 1080p, twitter video download without watermark, twitter video download free, twitter gif download, x video download, twitter video save, twitter video download iphone, twitter video download android, twitter video download pc, ssstwitter hindi, twmate hindi",
  },
};

const Index = () => {
  const { locale, t } = useLocale();
  const meta = (META as Record<string, { title: string; desc: string }>)[locale] ?? META.en;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={meta.title}
        description={meta.desc}
        path="/"
        keywords="twitter video downloader, download twitter video, x video downloader, twitter to mp4, twitter gif downloader, save twitter video, twitter mp4 download, twitter video hd"
        breadcrumbs={[{ name: t.nav.home, path: "/" }]}
        faqItems={t.faqs.map(f => ({ question: f.q, answer: f.a }))}
        webApp
      />
      <Sidebar />
      <Header />
      <main className="lg:ml-[280px] pb-20 lg:pb-0">
        <HeroSection />
        <FeaturesSection />
        <HowToSection />
        <SEOContent />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
