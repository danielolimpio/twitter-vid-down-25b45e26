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

const META = {
  en: { title: "Twitter Video Downloader - Download X Videos Free in HD | TwitterDown", desc: "Free Twitter / X video downloader. Save videos and GIFs in MP4, HD and Full HD 1080p without watermark. No signup. Works on iPhone, Android and desktop." },
  pt: { title: "Baixar Vídeos do Twitter (X) Grátis em HD | TwitterDown", desc: "Baixar vídeos do Twitter (X) grátis em HD, Full HD 1080p e 4K. Sem marca d'água, sem cadastro. Funciona no celular (Android, iPhone) e no PC." },
  es: { title: "Descargar Videos de Twitter (X) Gratis en HD | TwitterDown", desc: "Descarga videos de Twitter (X) gratis en MP4, HD y Full HD 1080p. Sin marca de agua, sin registro. iPhone, Android y PC." },
  id: { title: "Pengunduh Video Twitter (X) Gratis HD | TwitterDown", desc: "Unduh video Twitter (X) gratis dalam MP4, HD dan Full HD 1080p. Tanpa watermark, tanpa pendaftaran. iPhone, Android, dan PC." },
  tr: { title: "Twitter (X) Video İndirici - Ücretsiz HD İndir | TwitterDown", desc: "Twitter / X videolarını ücretsiz MP4, HD ve Full HD 1080p olarak indirin. Filigransız, kayıtsız. iPhone, Android ve masaüstü." },
  hi: { title: "ट्विटर वीडियो डाउनलोडर - मुफ्त HD डाउनलोड | TwitterDown", desc: "ट्विटर (X) वीडियो मुफ्त MP4, HD और Full HD 1080p में डाउनलोड करें। बिना वॉटरमार्क, बिना साइन-अप। iPhone, Android, और PC।" },
} as const;

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
      <main className="lg:ml-[240px] pb-20 lg:pb-0">
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
