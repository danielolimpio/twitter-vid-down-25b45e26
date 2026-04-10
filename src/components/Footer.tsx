const Footer = () => (
  <footer className="border-t border-border py-8 px-4 mt-8">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-xs text-muted-foreground mb-2">
        TwitterDown não é afiliado ao Twitter/X. Todos os direitos sobre os vídeos pertencem aos seus respectivos criadores.
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} baixarvideostwitter.com — Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
