import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowToSection from "@/components/HowToSection";
import SEOContent from "@/components/SEOContent";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Mobile header */}
      <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="font-bold text-foreground">TwitterDown</span>
      </header>

      <main className="lg:ml-[240px] pb-20 lg:pb-0">
        <HeroSection />
        <FeaturesSection />
        <HowToSection />
        <SEOContent />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
