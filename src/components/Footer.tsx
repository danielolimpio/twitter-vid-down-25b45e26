import { Link } from "react-router-dom";
import instagramImg from "@/assets/baixar-instagram.png";
import facebookImg from "@/assets/baixar-facebook.png";
import youtubeImg from "@/assets/baixar-youtube.png";
import tiktokImg from "@/assets/baixar-tiktok.png";
import kwaiImg from "@/assets/baixar-kwai.png";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";

const externalLinks = [
  { label: "Instagram Downloader", url: "https://baixarvideosinstagram.com", img: instagramImg },
  { label: "Facebook Downloader", url: "https://baixarvideosfacebook.com", img: facebookImg },
  { label: "YouTube Downloader", url: "https://baixarvideoyoutube.com", img: youtubeImg },
  { label: "TikTok Downloader", url: "https://baixarvideostiktok.com", img: tiktokImg },
  { label: "Kwai Downloader", url: "https://baixarvideoskwai.com", img: kwaiImg },
];

const Footer = () => {
  const { t, locale } = useLocale();
  return (
    <footer className="border-t border-border py-8 px-4 mt-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-xs">
          <Link to={localizedPath(locale, "/sobre")} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.about}</Link>
          <Link to={localizedPath(locale, "/contato")} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.contact}</Link>
          <Link to={localizedPath(locale, "/privacidade")} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.privacy}</Link>
          <Link to={localizedPath(locale, "/termos")} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.terms}</Link>
          <Link to={localizedPath(locale, "/dmca")} className="text-muted-foreground hover:text-foreground transition-colors">{t.footer.dmca}</Link>
        </div>

        <nav aria-label="Landing pages" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-xs">
          <Link to={localizedPath(locale, "/download-twitter-video")} className="text-muted-foreground hover:text-foreground">{t.nav.download}</Link>
          <Link to={localizedPath(locale, "/twitter-video-downloader")} className="text-muted-foreground hover:text-foreground">{t.nav.downloader}</Link>
          <Link to={localizedPath(locale, "/twitter-to-mp4")} className="text-muted-foreground hover:text-foreground">{t.nav.toMp4}</Link>
          <Link to={localizedPath(locale, "/download-twitter-gif")} className="text-muted-foreground hover:text-foreground">{t.nav.gif}</Link>
          <Link to={localizedPath(locale, "/download-twitter-video-hd")} className="text-muted-foreground hover:text-foreground">{t.nav.hd}</Link>
          <Link to={localizedPath(locale, "/download-twitter-video-iphone")} className="text-muted-foreground hover:text-foreground">{t.nav.iphone}</Link>
          <Link to={localizedPath(locale, "/download-twitter-video-android")} className="text-muted-foreground hover:text-foreground">{t.nav.android}</Link>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {externalLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <img src={link.img} alt={link.label} width={16} height={16} loading="lazy" decoding="async" className="w-4 h-4 rounded" />
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mb-2">{t.footer.disclaimer}</p>
        <p className="text-xs text-muted-foreground text-center">© {new Date().getFullYear()} TwitterDown — {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
