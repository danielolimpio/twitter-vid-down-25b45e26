import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como baixar vídeos do Twitter?",
    a: "É muito simples! Copie o link do tweet que contém o vídeo, cole no campo de download em nosso site e clique em 'Baixar Agora'. Escolha a qualidade desejada e pronto!",
  },
  {
    q: "O TwitterDown é gratuito?",
    a: "Sim, 100% gratuito! Não cobramos nada para baixar vídeos do Twitter. Não há planos pagos, assinaturas ou taxas ocultas.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "Não! O TwitterDown funciona diretamente no navegador. Não é necessário instalar nenhum software, extensão ou aplicativo.",
  },
  {
    q: "Os vídeos são baixados com marca d'água?",
    a: "Não! Todos os vídeos são baixados na qualidade original, sem nenhuma marca d'água ou alteração.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim! O TwitterDown funciona perfeitamente em celulares Android e iPhone, tablets e computadores. Basta acessar pelo navegador.",
  },
  {
    q: "Qual a qualidade dos vídeos baixados?",
    a: "Oferecemos download em várias qualidades: SD (480p), HD (720p), Full HD (1080p) e 4K quando disponível no tweet original.",
  },
  {
    q: "É seguro usar o TwitterDown?",
    a: "Sim, completamente seguro! Não armazenamos seus dados pessoais, não pedimos login e não temos acesso à sua conta do Twitter.",
  },
  {
    q: "Posso baixar GIFs do Twitter?",
    a: "Sim! Além de vídeos, você também pode baixar GIFs animados do Twitter usando o TwitterDown.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Perguntas Frequentes</h2>
        <p className="text-muted-foreground text-center mb-8">Tire suas dúvidas sobre como baixar vídeos do Twitter</p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-foreground text-sm">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
