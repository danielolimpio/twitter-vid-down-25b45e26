import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 mt-8">
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-xs">
        <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">Sobre</Link>
        <Link to="/contato" className="text-muted-foreground hover:text-foreground transition-colors">Contato</Link>
        <Link to="/privacidade" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</Link>
        <Link to="/termos" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</Link>
        <Link to="/dmca" className="text-muted-foreground hover:text-foreground transition-colors">DMCA</Link>
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
