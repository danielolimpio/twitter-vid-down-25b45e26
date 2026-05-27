import seoBanner from "@/assets/seo-banner.webp";
import { useLocale } from "@/i18n/LocaleProvider";

interface Block { h2: string; alt: string; paras: string[]; whyH3: string; why: string[]; }


const CONTENT = {
  en: {
    h2: "The Best Twitter Video Downloader in 2026",
    alt: "Download Twitter videos free in HD, Full HD and 4K - TwitterDown",
    paras: [
      "TwitterDown is the fastest online tool to download Twitter (X) videos without watermark. Used by millions worldwide, the site is free, secure and works on every device — no app, no signup, no extension.",
      "It supports every public Twitter media type: native videos, video replies, quote tweets and animated GIFs. You can save them in SD, HD 720p, Full HD 1080p and 4K when the source tweet was uploaded in that quality.",
      "The downloader works on Android, iPhone, iPad, Windows, macOS and Linux through any modern browser — Chrome, Safari, Firefox, Edge, Brave and Samsung Internet.",
    ],
    whyH3: "Why pick TwitterDown",
    why: [
      "Download Twitter videos in SD, HD 720p, Full HD 1080p and 4K",
      "No watermark — original files served directly by Twitter's CDN",
      "100% free, unlimited and ad-light",
      "No signup, no login, no app to install",
      "Works on twitter.com and x.com links",
      "Built for Android, iPhone, iPad, Windows, macOS and Linux",
      "Supports Twitter GIFs (saved as MP4)",
      "Fast Core Web Vitals, accessible and mobile-first",
    ],
  },
  pt: {
    h2: "A Melhor Ferramenta Para Baixar Vídeos do Twitter (X) em 2026",
    alt: "Baixar vídeos do Twitter grátis em HD, Full HD e 4K - TwitterDown",
    paras: [
      "O TwitterDown é a ferramenta online mais rápida para baixar vídeos do Twitter (X) sem marca d'água. Usado por milhões de pessoas, o site é grátis, seguro e funciona em qualquer dispositivo — sem app, sem cadastro, sem extensão.",
      "Suporta todos os tipos de mídia pública do Twitter: vídeos nativos, respostas em vídeo, quote tweets e GIFs animados, em SD, HD 720p, Full HD 1080p e 4K quando o tweet original foi enviado nessa qualidade.",
      "Funciona em Android, iPhone, iPad, Windows, macOS e Linux através de qualquer navegador moderno.",
    ],
    whyH3: "Por que escolher o TwitterDown",
    why: [
      "Download de vídeos do Twitter em SD, HD 720p, Full HD 1080p e 4K",
      "Sem marca d'água — arquivos originais entregues pela CDN do Twitter",
      "100% grátis, ilimitado e com poucos anúncios",
      "Sem cadastro, sem login, sem instalação",
      "Funciona com links twitter.com e x.com",
      "Pronto para Android, iPhone, iPad, Windows, macOS e Linux",
      "Suporta GIFs do Twitter (salvos como MP4)",
      "Core Web Vitals rápidos, acessível e mobile-first",
    ],
  },
} as const;

const SEOContent = () => {
  const { locale } = useLocale();
  const c = (CONTENT as Record<string, typeof CONTENT.en>)[locale] ?? CONTENT.en;
  return (
    <section id="about" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{c.h2}</h2>
        <img src={seoBanner} alt={c.alt} className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8" loading="lazy" width={800} height={450} />
        <div className="prose prose-sm text-muted-foreground space-y-4">
          {c.paras.map((p, i) => <p key={i}>{p}</p>)}
          <h3 className="text-foreground font-semibold text-lg mt-6">{c.whyH3}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {c.why.map((li, i) => <li key={i}>{li}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
