import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Zap, Globe, Heart, Users, Award } from "lucide-react";
import sobreBanner from "@/assets/sobre-banner.jpg";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Sobre = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Sobre o TwitterDown - Baixar Vídeos do Twitter Grátis"
      description="Conheça o TwitterDown, a ferramenta mais completa para baixar vídeos do Twitter (X) em HD, Full HD e 4K. Gratuito, seguro e sem marca d'água."
      path="/sobre"
      breadcrumbs={[{ name: "Início", path: "/" }, { name: "Sobre", path: "/sobre" }]}
    />
    <Sidebar activeSection="sobre" />
    <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
      <Link to="/" className="text-muted-foreground hover:text-foreground"><ArrowLeft className="w-5 h-5" /></Link>
      <span className="font-bold text-foreground">Sobre</span>
    </header>

    <main className="lg:ml-[240px] pb-20 lg:pb-0">
      <article className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Sobre o TwitterDown</h1>
          <p className="text-muted-foreground text-lg mb-8">
            A ferramenta mais completa e confiável para baixar vídeos do Twitter (X) em alta qualidade, sem marca d'água e 100% grátis.
          </p>

          <div className="prose prose-sm max-w-none space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">Nossa Missão</h2>
              <p className="text-muted-foreground">
                O TwitterDown nasceu com o objetivo de tornar o download de vídeos do Twitter acessível para todos. Acreditamos que o conteúdo compartilhado nas redes sociais deve ser facilmente acessível para visualização offline, backup pessoal e compartilhamento em outras plataformas — sempre respeitando os direitos dos criadores.
              </p>
              <p className="text-muted-foreground mt-3">
                Desde nossa criação, já ajudamos milhões de usuários em todo o mundo a salvar seus vídeos favoritos do Twitter. Nossa plataforma é constantemente atualizada para garantir compatibilidade com as últimas mudanças na API do Twitter/X.
              </p>
            </div>

            <h2 className="text-xl font-bold text-foreground">Por que escolher o TwitterDown?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "Seguro e Privado", desc: "Não armazenamos dados pessoais nem exigimos login. Sua privacidade é nossa prioridade." },
                { icon: Zap, title: "Ultra Rápido", desc: "Processamento instantâneo com servidores otimizados para downloads em alta velocidade." },
                { icon: Globe, title: "Funciona em Todo Lugar", desc: "Compatível com todos os navegadores e dispositivos: Android, iOS, Windows, Mac e Linux." },
                { icon: Heart, title: "100% Gratuito", desc: "Sem planos pagos, sem assinaturas, sem cobranças ocultas. Sempre grátis." },
                { icon: Users, title: "Milhões de Usuários", desc: "Confiável por milhões de pessoas ao redor do mundo para baixar vídeos do Twitter." },
                { icon: Award, title: "Melhor Qualidade", desc: "Download em SD, HD, Full HD 1080p e até 4K quando disponível no tweet original." },
              ].map((f) => (
                <div key={f.title} className="bg-card border border-border rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">O que você pode baixar</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm">
                <li><strong className="text-foreground">Vídeos de tweets</strong> — Qualquer vídeo publicado em tweets públicos</li>
                <li><strong className="text-foreground">GIFs animados</strong> — Baixe GIFs do Twitter em formato MP4 de alta qualidade</li>
                <li><strong className="text-foreground">Vídeos em threads</strong> — Salve vídeos de qualquer tweet em uma thread</li>
                <li><strong className="text-foreground">Múltiplas qualidades</strong> — Escolha entre 480p, 720p, 1080p e 4K</li>
                <li><strong className="text-foreground">Sem marca d'água</strong> — Vídeos originais sem alterações</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-3">Tecnologia</h2>
              <p className="text-muted-foreground text-sm">
                O TwitterDown utiliza tecnologia avançada para extrair URLs de vídeo diretamente dos servidores do Twitter. Nosso sistema processa as informações do tweet em tempo real, identificando todas as variantes de qualidade disponíveis para que você possa escolher a melhor opção de download.
              </p>
              <p className="text-muted-foreground text-sm mt-3">
                Todo o processamento é feito em servidores seguros, e nenhum vídeo é armazenado em nossos servidores. Os links de download apontam diretamente para os servidores do Twitter, garantindo a máxima velocidade e a qualidade original do conteúdo.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
              <h2 className="text-xl font-bold text-foreground mb-2">Comece a baixar agora!</h2>
              <p className="text-muted-foreground text-sm mb-4">É simples, rápido e totalmente gratuito.</p>
              <Link to="/" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-6 rounded-xl text-sm transition-colors">
                Baixar Vídeo do Twitter
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  </div>
);

export default Sobre;
