import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

interface FAQSectionProps {
  items?: { q: string; a: string }[];
  title?: string;
  subtitle?: string;
}

const FAQSection = ({ items, title, subtitle }: FAQSectionProps) => {
  const { t } = useLocale();
  const faqs = items ?? t.faqs;
  const heading = title ?? t.faqTitle;
  const sub = subtitle ?? t.faqSubtitle;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">{heading}</h2>
        <p className="text-muted-foreground text-center mb-8">{sub}</p>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left"
                aria-expanded={open === i}
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
