import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Link as LinkIcon, Download, Smartphone, Monitor, HelpCircle, CheckCircle2 } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const steps = [
  {
    num: "1",
    icon: Copy,
    title: "Copie o Link do Tweet",
    desc: "Abra o Twitter (X) no seu navegador ou aplicativo. Encontre o tweet que contém o vídeo que deseja baixar. Toque nos três pontos (⋯) no canto superior direito do tweet e selecione 'Copiar link do tweet'. Você também pode copiar o link diretamente da barra de endereço do navegador.",
    tips: [
      "Certifique-se de que o tweet é público",
      "O link deve conter twitter.com ou x.com",
      "Funciona com tweets de qualquer usuário público",
    ],
  },
  {
    num: "2",
    icon: LinkIcon,
    title: "Cole o Link no TwitterDown",
    desc: "Acesse baixarvideostwitter.com e cole o link copiado no campo de download. Você pode usar o botão 'Colar' para colar automaticamente da área de transferência, ou usar o atalho Ctrl+V (Windows) / Cmd+V (Mac).",
    tips: [
      "Use o botão 'Colar' para facilitar",
      "O link é validado automaticamente",
      "Suporta links de twitter.com e x.com",
    ],
  },
  {
    num: "3",
    icon: Download,
    title: "Escolha a Qualidade e Baixe",
    desc: "Clique em 'Baixar Agora' e aguarde o processamento. Em segundos, serão exibidas as opções de qualidade disponíveis. Escolha a qualidade desejada (480p, 720p, 1080p ou 4K) e o download começará automaticamente.",
    tips: [
      "1080p é recomendado para melhor qualidade",
      "720p é ideal para economizar espaço",
      "4K disponível quando o vídeo original suporta",
    ],
  },
];

const platforms = [
  {
    icon: Smartphone,
    title: "Android",
    steps: ["Abra o app do Twitter e encontre o vídeo", "Toque em 'Compartilhar' → 'Copiar link'", "Abra o Chrome e acesse baixarvideostwitter.com", "Cole o link e toque em 'Baixar Agora'", "Escolha a qualidade e salve o vídeo"],
  },
  {
    icon: Smartphone,
    title: "iPhone / iPad",
    steps: ["Abra o app do Twitter e encontre o vídeo", "Toque em 'Compartilhar' → 'Copiar link'", "Abra o Safari e acesse baixarvideostwitter.com", "Cole o link e toque em 'Baixar Agora'", "O vídeo será salvo na galeria de Fotos"],
  },
  {
    icon: Monitor,
    title: "Computador (Windows/Mac/Linux)",
    steps: ["Abra o Twitter no navegador", "Clique com o botão direito no tweet → 'Copiar link'", "Acesse baixarvideostwitter.com em outra aba", "Cole o link (Ctrl+V) e clique em 'Baixar Agora'", "Escolha a qualidade e o arquivo será baixado"],
  },
];

const comoUsarFaqs = [
  { question: "Como baixar vídeos do Twitter no celular?", answer: "Abra o app do Twitter, toque nos 3 pontos do tweet, copie o link, acesse baixarvideostwitter.com no navegador, cole o link e toque em Baixar Agora." },
  { question: "Posso baixar vídeos do Twitter em HD 1080p?", answer: "Sim! O TwitterDown oferece download em HD (720p), Full HD (1080p) e até 4K quando disponível no tweet original." },
  { question: "Funciona com links do X.com?", answer: "Sim! O TwitterDown suporta tanto links de twitter.com quanto de x.com." },
];

const ComoUsar = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Como Baixar Vídeos do Twitter - Guia Completo | TwitterDown"
      description="Aprenda como baixar vídeos do Twitter (X) passo a passo no celular, iPhone e computador. Guia completo para download em HD, Full HD e 4K."
      path="/como-usar"
      breadcrumbs={[{ name: "Início", path: "/" }, { name: "Como Usar", path: "/como-usar" }]}
      faqItems={comoUsarFaqs}
    />
    <Sidebar activeSection="como-usar" />
    <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
      <Link to="/" className="text-muted-foreground hover:text-foreground"><ArrowLeft className="w-5 h-5" /></Link>
      <span className="font-bold text-foreground">Como Usar</span>
    </header>

    <main className="lg:ml-[240px] pb-20 lg:pb-0">
      <article className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Como Baixar Vídeos do Twitter</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Guia completo passo a passo para baixar vídeos do Twitter (X) em qualquer dispositivo.
          </p>

          <div className="space-y-6 mb-12">
            {steps.map((s) => (
              <div key={s.num} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-foreground mb-2">Passo {s.num}: {s.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                    <div className="space-y-2">
                      {s.tips.map((tip) => (
                        <div key={tip} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-6">Guia por Dispositivo</h2>
          <div className="space-y-4 mb-12">
            {platforms.map((p) => (
              <div key={p.title} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{p.title}</h3>
                </div>
                <ol className="space-y-2">
                  {p.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Dicas Importantes</h2>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Tweets protegidos:</strong> Não é possível baixar vídeos de contas privadas. O tweet precisa ser público.</li>
              <li>• <strong className="text-foreground">Qualidade do vídeo:</strong> A qualidade máxima depende do vídeo original publicado no Twitter.</li>
              <li>• <strong className="text-foreground">GIFs:</strong> GIFs do Twitter são tecnicamente vídeos MP4 curtos e são baixados nesse formato.</li>
              <li>• <strong className="text-foreground">Direitos autorais:</strong> Respeite sempre os direitos dos criadores do conteúdo.</li>
              <li>• <strong className="text-foreground">Problemas?</strong> Limpe o cache do navegador ou tente em modo anônimo se encontrar erros.</li>
            </ul>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">Pronto para começar?</h2>
            <p className="text-muted-foreground text-sm mb-4">Baixe seu primeiro vídeo do Twitter agora mesmo!</p>
            <Link to="/" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-6 rounded-xl text-sm transition-colors">
              <Download className="w-4 h-4" /> Baixar Vídeo
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  </div>
);

export default ComoUsar;
