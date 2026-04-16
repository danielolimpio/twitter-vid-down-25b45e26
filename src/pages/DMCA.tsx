import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const DMCA = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Política DMCA - TwitterDown"
      description="Política DMCA do TwitterDown. Saiba como reportar violações de direitos autorais em nossa ferramenta de download de vídeos do Twitter."
      path="/dmca"
      breadcrumbs={[{ name: "Início", path: "/" }, { name: "DMCA", path: "/dmca" }]}
    />
    <Sidebar activeSection="" />
    <Header title="DMCA" showBack />

    <main className="lg:ml-[240px] pb-20 lg:pb-0">
      <article className="py-12 px-4">
        <div className="max-w-2xl mx-auto prose prose-sm">
          <h1 className="text-3xl font-extrabold text-foreground">Política DMCA</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">Respeito aos Direitos Autorais</h2>
              <p>O TwitterDown respeita os direitos de propriedade intelectual de terceiros e espera que seus usuários façam o mesmo. Respondemos a notificações de suposta violação de direitos autorais que estejam em conformidade com o Digital Millennium Copyright Act (DMCA).</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">Notificação de Violação</h2>
              <p>Se você acredita que seu conteúdo protegido por direitos autorais está sendo utilizado de forma inadequada, envie uma notificação DMCA contendo:</p>
              <ol className="list-decimal pl-5 mt-2 space-y-2">
                <li>Identificação do trabalho protegido por direitos autorais que foi violado</li>
                <li>Identificação do material que está violando os direitos autorais, incluindo URL</li>
                <li>Suas informações de contato (nome, endereço, e-mail, telefone)</li>
                <li>Uma declaração de que você acredita de boa-fé que o uso não é autorizado</li>
                <li>Uma declaração, sob pena de perjúrio, de que as informações são precisas e que você é o detentor dos direitos autorais</li>
                <li>Sua assinatura física ou eletrônica</li>
              </ol>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">Importante</h2>
              <p>O TwitterDown não armazena vídeos em seus servidores. Atuamos como uma ferramenta que extrai links de vídeo publicamente disponíveis no Twitter. O conteúdo é hospedado exclusivamente nos servidores do Twitter/X.</p>
              <p className="mt-2">Para remoção de conteúdo do Twitter, recomendamos que entre em contato diretamente com o Twitter através de seus canais oficiais de denúncia.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">Contato para DMCA</h2>
              <p>Envie sua notificação DMCA para:</p>
              <p className="mt-2"><strong className="text-foreground">E-mail:</strong> dmca@baixarvideostwitter.com</p>
              <p className="mt-1">Ou utilize nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link>.</p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  </div>
);

export default DMCA;
