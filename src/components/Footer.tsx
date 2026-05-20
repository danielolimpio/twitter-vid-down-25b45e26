import { Link } from "react-router-dom";
import instagramImg from "@/assets/baixar-instagram.png";
import facebookImg from "@/assets/baixar-facebook.png";
import youtubeImg from "@/assets/baixar-youtube.png";
import tiktokImg from "@/assets/baixar-tiktok.png";
import kwaiImg from "@/assets/baixar-kwai.png";

const externalLinks = [
  { label: "Baixar Instagram", url: "https://baixarvideosinstagram.com", img: instagramImg },
  { label: "Baixar Facebook", url: "https://baixarvideosfacebook.com", img: facebookImg },
  { label: "Baixar Youtube", url: "https://baixarvideoyoutube.com", img: youtubeImg },
  { label: "Baixar TikTok", url: "https://baixarvideostiktok.com", img: tiktokImg },
  { label: "Baixar Kwai", url: "https://baixarvideoskwai.com", img: kwaiImg },
];

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 mt-8">
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-xs">
        <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
        <Link to="/contato" className="text-muted-foreground hover:text-foreground transition-colors">Contato</Link>
        <Link to="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link>
        <Link to="/termos" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link>
        <Link to="/dmca" className="text-muted-foreground hover:text-foreground transition-colors">DMCA</Link>
        <Link to="/uso-responsavel" className="text-muted-foreground hover:text-foreground transition-colors">Uso Responsável</Link>
      </div>

      {/* External download links */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        {externalLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <img src={link.img} alt={link.label} width={16} height={16} loading="lazy" decoding="async" className="w-4 h-4 rounded" />
            {link.label}
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground text-center mb-2">
        TwitterDown não é afiliado ao Twitter/X. Todos os direitos sobre os vídeos pertencem aos seus respectivos criadores.
      </p>
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} baixarvideostwitter.com — Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
