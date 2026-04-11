import seoBanner from "@/assets/seo-banner.webp";

const SEOContent = () => (
  <section id="sobre" className="py-12 px-4">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">A Melhor Ferramenta Para Baixar Vídeos do Twitter</h2>
      <img
        src={seoBanner}
        alt="Download de vídeos do Twitter - Ferramenta rápida e gratuita"
        className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-8"
        loading="lazy"
      />
      <div className="prose prose-sm text-muted-foreground space-y-4">
        <p>
          O <strong className="text-foreground">TwitterDown</strong> é a ferramenta mais completa e confiável para baixar vídeos do Twitter (X) sem marca d'água. Com milhões de downloads realizados, nossa plataforma oferece uma experiência rápida, segura e totalmente gratuita para salvar seus conteúdos favoritos do Twitter.
        </p>
        <p>
          Diferente de outras ferramentas, o TwitterDown suporta todos os tipos de conteúdo do Twitter: vídeos de tweets, GIFs animados, vídeos em thread e até vídeos de espaços. Baixe vídeos do Twitter em alta qualidade com apenas 3 cliques, sem necessidade de instalar nenhum programa ou extensão.
        </p>
        <p>
          Nossa ferramenta de <strong className="text-foreground">baixar vídeos do Twitter</strong> funciona em todos os dispositivos — celular, tablet e computador. Compatível com Android, iPhone, Windows, Mac e Linux. Não é necessário criar conta ou fazer login para baixar vídeos do Twitter gratuitamente.
        </p>
        <h3 className="text-foreground font-semibold text-lg mt-6">Por que escolher o TwitterDown?</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Download de vídeos do Twitter em HD, Full HD e 4K</li>
          <li>Sem marca d'água — vídeos limpos e originais</li>
          <li>100% gratuito — sem cobranças ocultas</li>
          <li>Sem necessidade de cadastro ou login</li>
          <li>Compatível com twitter.com e x.com</li>
          <li>Funciona em todos os navegadores e dispositivos</li>
          <li>Downloads ilimitados sem restrições</li>
          <li>Interface simples e intuitiva</li>
        </ul>
        <p>
          Seja para salvar vídeos engraçados, tutoriais, clipes de notícias ou conteúdos educativos, o TwitterDown é a solução perfeita para <strong className="text-foreground">baixar vídeos do Twitter</strong> de forma rápida e segura. Experimente agora e descubra por que somos a ferramenta preferida de milhões de usuários.
        </p>
      </div>
    </div>
  </section>
);

export default SEOContent;
