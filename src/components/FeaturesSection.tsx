import { ShieldCheck, Star, Infinity, Gift, Zap } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Sem Marca d'Água", desc: "Vídeos limpos e originais" },
  { icon: Star, title: "Alta Qualidade", desc: "Até 1080p Full HD" },
  { icon: Infinity, title: "Download Ilimitado", desc: "Sem limite de downloads" },
  { icon: Gift, title: "100% Grátis", desc: "Sem cadastro necessário" },
  { icon: Zap, title: "Super Rápido", desc: "Download instantâneo" },
];

const FeaturesSection = () => (
  <section className="py-12 px-4">
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Vídeos</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {features.map((f) => (
          <div key={f.title} className="bg-card border border-border rounded-2xl p-4 text-center hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
