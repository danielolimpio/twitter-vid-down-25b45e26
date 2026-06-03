import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import DownloaderWidget from "@/components/DownloaderWidget";
import FAQSection from "@/components/FAQSection";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";

export interface LandingPageProps {
  /** Path slug without locale, e.g. "/download-twitter-video". */
  path: string;
  title: string;
  description: string;
  keywords?: string;
  h1: string;
  intro: string;
  /** Long-form content blocks (rendered with H2/H3 hierarchy). */
  sections: { h2: string; body: ReactNode; h3?: { h3: string; body: ReactNode }[] }[];
  /** 4-6 FAQs, used both for visible accordion and FAQPage JSON-LD. */
  faqs: { question: string; answer: string }[];
  /** Internal links to other landing pages. */
  related: { label: string; path: string }[];
  breadcrumbName: string;
}

const LandingPageTemplate = ({
  path, title, description, keywords, h1, intro, sections, faqs, related, breadcrumbName,
}: LandingPageProps) => {
  const { t, locale } = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        path={path}
        keywords={keywords}
        breadcrumbs={[
          { name: t.nav.home, path: "/" },
          { name: breadcrumbName, path },
        ]}
        faqItems={faqs}
        webApp
      />
      <Sidebar />
      <Header />
      <main className="lg:ml-[280px] pb-20 lg:pb-0">
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              {h1}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto">
              {intro}
            </p>
            <DownloaderWidget />
          </div>
        </section>

        <article className="px-4 py-8 max-w-3xl mx-auto prose-section">
          {sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{s.h2}</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">{s.body}</div>
              {s.h3?.map((sub, j) => (
                <div key={j} className="mt-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">{sub.h3}</h3>
                  <div className="text-muted-foreground leading-relaxed space-y-3">{sub.body}</div>
                </div>
              ))}
            </section>
          ))}

          <nav className="mt-12 pt-8 border-t border-border" aria-label="Related tools">
            <h2 className="text-xl font-bold mb-4 text-foreground">{t.nav.downloader}</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {related.map((r) => (
                <li key={r.path}>
                  <Link
                    to={localizedPath(locale, r.path)}
                    className="block p-3 bg-card border border-border rounded-xl text-sm text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>

        <FAQSection items={faqs.map(f => ({ q: f.question, a: f.answer }))} title={t.faqTitle} subtitle={t.faqSubtitle} />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPageTemplate;
