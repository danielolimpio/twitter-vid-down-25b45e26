import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Termos = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Termos de Uso - TwitterDown"
      description="Termos de uso do TwitterDown. Conheça as regras e condições para utilização da nossa ferramenta de download de vídeos do Twitter."
      path="/termos"
      breadcrumbs={[{ name: "Início", path: "/" }, { name: "Termos de Uso", path: "/termos" }]}
    />
    <Sidebar activeSection="" />
    <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
      <Link to="/" className="text-muted-foreground hover:text-foreground"><ArrowLeft className="w-5 h-5" /></Link>
      <span className="font-bold text-foreground">Termos de Uso</span>
    </header>

    <main className="lg:ml-[240px] pb-20 lg:pb-0">
      <article className="py-12 px-4">
        <div className="max-w-2xl mx-auto prose prose-sm">
          <h1 className="text-3xl font-extrabold text-foreground">Termos de Uso</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">1. Aceitação dos Termos</h2>
              <p>Ao acessar e utilizar o TwitterDown (<strong className="text-foreground">baixarvideostwitter.com</strong>), você concorda com estes termos de uso. Se não concordar com qualquer parte destes termos, não utilize o serviço.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">2. Descrição do Serviço</h2>
              <p>O TwitterDown é uma ferramenta online que permite aos usuários baixar vídeos de tweets públicos do Twitter (X). O serviço extrai links de vídeo disponíveis publicamente e os apresenta ao usuário para download.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">3. Uso Adequado</h2>
              <p>Ao utilizar o TwitterDown, você concorda em:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Baixar vídeos apenas para uso pessoal e não comercial</li>
                <li>Respeitar os direitos autorais dos criadores de conteúdo</li>
                <li>Não redistribuir conteúdo sem autorização do criador original</li>
                <li>Não utilizar o serviço para fins ilegais ou não autorizados</li>
                <li>Não tentar sobrecarregar ou comprometer nossos servidores</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">4. Direitos Autorais</h2>
              <p>Os vídeos disponíveis no Twitter são propriedade de seus respectivos criadores. O TwitterDown não reivindica propriedade sobre nenhum conteúdo baixado através do serviço. É de responsabilidade do usuário garantir que o uso do conteúdo baixado esteja em conformidade com as leis de direitos autorais aplicáveis.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">5. Isenção de Responsabilidade</h2>
              <p>O TwitterDown é fornecido "como está", sem garantias de qualquer tipo. Não garantimos que o serviço estará sempre disponível, será ininterrupto ou livre de erros. Não nos responsabilizamos por:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Conteúdo dos vídeos baixados</li>
                <li>Uso que o usuário faz dos vídeos baixados</li>
                <li>Indisponibilidade temporária do serviço</li>
                <li>Alterações na API do Twitter que afetem o funcionamento</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">6. Relação com o Twitter</h2>
              <p>O TwitterDown não é afiliado, associado, autorizado, endossado ou de qualquer forma oficialmente conectado ao Twitter (X) ou qualquer uma de suas subsidiárias. Todos os nomes de produtos e empresas são marcas registradas de seus respectivos proprietários.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">7. Modificações</h2>
              <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor imediatamente após a publicação nesta página. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">8. Contato</h2>
              <p>Para dúvidas sobre estes termos, entre em contato através da nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link>.</p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  </div>
);

export default Termos;
