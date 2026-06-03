import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const categories = [
  {
    title: "Geral",
    faqs: [
      { q: "O que é o TwitterDown?", a: "O TwitterDown é uma ferramenta online gratuita para baixar vídeos do Twitter (X). Com ele, você pode salvar qualquer vídeo publicado em tweets públicos diretamente para o seu dispositivo, sem necessidade de instalar programas ou criar contas." },
      { q: "O TwitterDown é gratuito?", a: "Sim, 100% gratuito! Não cobramos nada para baixar vídeos do Twitter. Não há planos pagos, assinaturas, taxas ocultas ou limitações de uso. Você pode baixar quantos vídeos quiser, sem nenhum custo." },
      { q: "Preciso criar uma conta para usar?", a: "Não! Você não precisa criar conta, fazer login ou fornecer qualquer dado pessoal. Basta acessar o site, colar o link do tweet e baixar o vídeo." },
      { q: "O TwitterDown é seguro?", a: "Sim, completamente seguro! Não armazenamos seus dados pessoais, não temos acesso à sua conta do Twitter e não instalamos nada no seu dispositivo. Todo o processamento é feito em servidores seguros e criptografados." },
    ],
  },
  {
    title: "Downloads",
    faqs: [
      { q: "Como baixar vídeos do Twitter?", a: "É muito simples! 1) Copie o link do tweet que contém o vídeo. 2) Cole o link no campo de download em nosso site. 3) Clique em 'Baixar Agora' e escolha a qualidade desejada. O download começará automaticamente." },
      { q: "Quais qualidades de vídeo estão disponíveis?", a: "Oferecemos download em várias qualidades: SD (480p), HD (720p), Full HD (1080p) e 4K, dependendo da qualidade do vídeo original publicado no tweet. Recomendamos sempre escolher a maior qualidade disponível para a melhor experiência." },
      { q: "Os vídeos são baixados com marca d'água?", a: "Não! Todos os vídeos são baixados na qualidade original, exatamente como foram publicados no Twitter, sem nenhuma marca d'água, logo ou alteração de qualquer tipo." },
      { q: "Posso baixar GIFs do Twitter?", a: "Sim! O Twitter converte GIFs em vídeos MP4 internamente. O TwitterDown baixa esses GIFs no formato MP4 de alta qualidade, que pode ser reproduzido em qualquer dispositivo." },
      { q: "Quantos vídeos posso baixar?", a: "Ilimitados! Não há limite de downloads. Você pode baixar quantos vídeos quiser, sem restrições de quantidade ou tamanho." },
      { q: "Posso baixar vídeos de contas privadas?", a: "Não. Só é possível baixar vídeos de tweets públicos. Se a conta do Twitter for privada (protegida), não será possível acessar o conteúdo do vídeo." },
    ],
  },
  {
    title: "Compatibilidade",
    faqs: [
      { q: "Funciona no celular?", a: "Sim! O TwitterDown funciona perfeitamente em celulares Android e iPhone/iPad. Basta acessar o site pelo navegador do celular (Chrome, Safari, Firefox, etc.), colar o link e baixar." },
      { q: "Funciona no iPhone/iPad?", a: "Sim! No iPhone e iPad, use o Safari para acessar o TwitterDown. Após clicar em baixar, o vídeo será salvo na galeria de Fotos do seu dispositivo. Em algumas versões do iOS, pode ser necessário usar o app 'Arquivos' para salvar." },
      { q: "Quais navegadores são suportados?", a: "O TwitterDown funciona em todos os navegadores modernos: Chrome, Firefox, Safari, Edge, Opera, Brave e outros. Recomendamos manter seu navegador atualizado para a melhor experiência." },
      { q: "Preciso instalar algum programa?", a: "Não! O TwitterDown funciona 100% no navegador. Não é necessário instalar nenhum software, extensão, plugin ou aplicativo. Basta acessar o site e usar." },
    ],
  },
  {
    title: "Problemas",
    faqs: [
      { q: "O download não está funcionando. O que fazer?", a: "Tente as seguintes soluções: 1) Verifique se o link do tweet está correto e completo. 2) Certifique-se de que o tweet é público. 3) Limpe o cache do navegador. 4) Tente em modo anônimo/privado. 5) Tente outro navegador. Se o problema persistir, entre em contato conosco." },
      { q: "O vídeo abre no navegador em vez de baixar", a: "Em alguns navegadores e dispositivos, o vídeo pode abrir em uma nova aba. Nesse caso, toque e segure (celular) ou clique com o botão direito (computador) no vídeo e selecione 'Salvar vídeo como...' para baixar." },
      { q: "Erro 'Vídeo não encontrado'", a: "Este erro pode ocorrer quando: o tweet foi deletado, a conta se tornou privada, o tweet não contém vídeo, ou o link está incorreto. Verifique o link e tente novamente." },
    ],
  },
];

// Flatten all FAQs for structured data
const allFaqItems = categories.flatMap(cat =>
  cat.faqs.map(f => ({ question: f.q, answer: f.a }))
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ "0-0": true });

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Perguntas Frequentes - Baixar Vídeos Twitter | TwitterDown"
        description="Tire suas dúvidas sobre como baixar vídeos do Twitter grátis. FAQ completo sobre qualidade, compatibilidade, segurança e funcionamento do TwitterDown."
        path="/faq"
        breadcrumbs={[{ name: "Início", path: "/" }, { name: "FAQ", path: "/faq" }]}
        faqItems={allFaqItems}
      />
      <Sidebar activeSection="faq" />
      <Header title="FAQ" showBack />

      <main className="lg:ml-[280px] pb-20 lg:pb-0">
        <article className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Perguntas Frequentes</h1>
              <p className="text-muted-foreground text-lg">Encontre respostas para as dúvidas mais comuns sobre o TwitterDown.</p>
            </div>

            {categories.map((cat, ci) => (
              <div key={cat.title} className="mb-8">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  {cat.title}
                </h2>
                <div className="space-y-2">
                  {cat.faqs.map((faq, fi) => {
                    const key = `${ci}-${fi}`;
                    return (
                      <div key={key} className="bg-card border border-border rounded-xl overflow-hidden">
                        <button onClick={() => toggle(key)} className="w-full flex items-center justify-between p-4 text-left">
                          <span className="font-medium text-foreground text-sm">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${openItems[key] ? "rotate-180" : ""}`} />
                        </button>
                        {openItems[key] && (
                          <div className="px-4 pb-4">
                            <p className="text-sm text-muted-foreground">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="text-lg font-bold text-foreground mb-2">Ainda tem dúvidas?</h2>
              <p className="text-sm text-muted-foreground mb-4">Entre em contato conosco e responderemos o mais rápido possível.</p>
              <Link to="/contato" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-5 rounded-xl text-sm transition-colors">
                Fale Conosco
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default FAQ;
