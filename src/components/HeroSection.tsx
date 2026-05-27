import { Link } from "react-router-dom";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import DownloaderWidget from "@/components/DownloaderWidget";
import { useLocale } from "@/i18n/LocaleProvider";

const HeroSection = () => {
  const { t } = useLocale();
  return (
    <section id="home" className="py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          {t.hero.h1Pre}{" "}
          <span className="text-gradient-twitter">{t.hero.h1Highlight}</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto">
          {t.hero.subtitle}
        </p>

        <DownloaderWidget />

        <ImageWithSkeleton
          src="/hero-banner.webp"
          alt={t.hero.bannerAlt}
          className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mt-8"
          width={672}
          height={378}
          fetchPriority="high"
          decoding="async"
          containerClassName="w-full max-w-2xl mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default HeroSection;
