import { Copy, Link, Download } from "lucide-react";

const steps = [
  { icon: Copy, step: "1", title: "Copie o Link", desc: "Abra o Twitter/X, encontre o vídeo desejado e copie o link do tweet." },
  { icon: Link, step: "2", title: "Cole o Link", desc: "Cole o link do tweet no campo acima em nosso site." },
  { icon: Download, step: "3", title: "Baixe o Vídeo", desc: "Clique em 'Baixar Agora' e escolha a qualidade desejada." },
];

const HowToSection = () => (
  <section id="como-usar" className="py-12 px-4">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Como Baixar Vídeos do Twitter</h2>
      <p className="text-muted-foreground text-center mb-8">Baixar vídeos do Twitter nunca foi tão fácil. Siga os 3 passos simples:</p>
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <s.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Passo {s.step}: {s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToSection;
