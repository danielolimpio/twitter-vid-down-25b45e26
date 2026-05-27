import { ShieldCheck, Star, Infinity as InfinityIcon, Gift, Zap } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const ICONS = [ShieldCheck, Star, InfinityIcon, Gift, Zap];

const FeaturesSection = () => {
  const { t } = useLocale();
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="sr-only">{t.features.title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {t.features.items.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <div key={f.title} className="bg-card border border-border rounded-2xl p-4 text-center hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
