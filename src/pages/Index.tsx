import Sidebar from "@/components/Sidebar";
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
        title="Baixar Vídeos Twitter - Download Grátis HD | TwitterDown"
        description="Baixar vídeos do Twitter (X) grátis em HD, Full HD e 4K. Sem marca d'água, sem cadastro. A melhor ferramenta para download de vídeos do Twitter. Rápido e fácil!"
        path="/"
        breadcrumbs={[{ name: "Início", path: "/" }]}
        faqItems={homeFaqs}
        softwareApp
      />
      <Sidebar />

      <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="font-bold text-foreground">TwitterDown</span>
      </header>

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
