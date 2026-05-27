import { Copy, Link as LinkIcon, Download } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const ICONS = [Copy, LinkIcon, Download];

const HowToSection = () => {
  const { t } = useLocale();
  return (
    <section id="how-to" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">{t.howTo.title}</h2>
        <p className="text-muted-foreground text-center mb-8">{t.howTo.subtitle}</p>
        <div className="space-y-4">
          {t.howTo.steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-2xl p-5">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.howTo.step} {i + 1}: {s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
