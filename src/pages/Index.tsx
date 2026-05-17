import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToSection from "@/components/HowToSection";
import SEOContent from "@/components/SEOContent";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const homeFaqs = [
  { question: "Como baixar vídeos do Twitter?", answer: "Copie o link do tweet que contém o vídeo, cole no campo de download em nosso site e clique em 'Baixar Agora'. Escolha a qualidade desejada e pronto!" },
  { question: "O TwitterDown é gratuito?", answer: "Sim, 100% gratuito! Não cobramos nada para baixar vídeos do Twitter. Não há planos pagos, assinaturas ou taxas ocultas." },
  { question: "Preciso instalar algum programa?", answer: "Não! O TwitterDown funciona diretamente no navegador. Não é necessário instalar nenhum software, extensão ou aplicativo." },
  { question: "Funciona no celular?", answer: "Sim! Funciona perfeitamente em celulares Android e iPhone, tablets e computadores." },
  { question: "Os vídeos são baixados com marca d'água?", answer: "Não! Todos os vídeos são baixados na qualidade original, sem nenhuma marca d'água ou alteração." },
  { question: "Qual a qualidade dos vídeos baixados?", answer: "Oferecemos download em várias qualidades: SD (480p), HD (720p), Full HD (1080p) e 4K quando disponível no tweet original." },
  { question: "É seguro usar o TwitterDown?", answer: "Sim, completamente seguro! Não armazenamos seus dados pessoais, não pedimos login e não temos acesso à sua conta do Twitter." },
  { question: "Posso baixar GIFs do Twitter?", answer: "Sim! Além de vídeos, você também pode baixar GIFs animados do Twitter usando o TwitterDown." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Baixar Vídeos Twitter - Download Grátis HD, Full HD e 4K | TwitterDown"
        description="Baixar vídeos do Twitter (X) grátis, online e sem marca d'água. Download em HD, Full HD 1080p e 4K. Funciona no celular (Android, iPhone) e PC. Sem cadastro, rápido e ilimitado."
        path="/"
        keywords="baixar vídeos twitter, baixar video do twitter, baixar video twitter sem marca d'agua, baixar video twitter hd, baixar video twitter 1080p, baixar video twitter 4k, download video twitter, baixar gif twitter, baixar tweet, baixar video x, baixar video twitter no celular, baixar video twitter no iphone, twitterdown"
        breadcrumbs={[{ name: "Início", path: "/" }]}
        faqItems={homeFaqs}
        softwareApp
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
