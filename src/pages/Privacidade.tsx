import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const Privacidade = () => (
  <div className="min-h-screen bg-background">
    <Sidebar activeSection="" />
    <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
      <Link to="/" className="text-muted-foreground hover:text-foreground"><ArrowLeft className="w-5 h-5" /></Link>
      <span className="font-bold text-foreground">Política de Privacidade</span>
    </header>

    <main className="lg:ml-[240px] pb-20 lg:pb-0">
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto prose prose-sm">
          <h1 className="text-3xl font-extrabold text-foreground">Política de Privacidade</h1>
          <p className="text-xs text-muted-foreground mb-6">Última atualização: {new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</p>

          <div className="space-y-6 text-sm text-muted-foreground">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">1. Informações que Coletamos</h2>
              <p>O TwitterDown (<strong className="text-foreground">baixarvideostwitter.com</strong>) valoriza sua privacidade. Não coletamos informações pessoais identificáveis quando você utiliza nosso serviço. Especificamente:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Não exigimos cadastro ou login</li>
                <li>Não coletamos nome, e-mail ou dados pessoais</li>
                <li>Não armazenamos os links dos tweets processados</li>
                <li>Não armazenamos os vídeos baixados em nossos servidores</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">2. Cookies e Armazenamento Local</h2>
              <p>Utilizamos armazenamento local (localStorage) do navegador para salvar seu histórico de downloads. Esses dados são armazenados exclusivamente no seu dispositivo e não são transmitidos para nossos servidores. Você pode limpar esses dados a qualquer momento limpando os dados do navegador.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">3. Dados de Uso</h2>
              <p>Podemos coletar dados anônimos de uso, como número de visitas e páginas acessadas, através de ferramentas de análise. Esses dados são agregados e não identificam usuários individuais.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">4. Compartilhamento de Dados</h2>
              <p>Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros. Como não coletamos dados pessoais, não há informações para compartilhar.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">5. Segurança</h2>
              <p>Utilizamos conexões criptografadas (HTTPS) para proteger a comunicação entre seu navegador e nossos servidores. Nossos servidores são monitorados e atualizados regularmente para garantir a segurança.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">6. Links de Terceiros</h2>
              <p>Os links de download gerados apontam diretamente para os servidores do Twitter. Não temos controle sobre as políticas de privacidade do Twitter/X. Recomendamos que leia a política de privacidade do Twitter para entender como seus dados são tratados naquela plataforma.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">7. Alterações nesta Política</h2>
              <p>Reservamo-nos o direito de atualizar esta política de privacidade a qualquer momento. Alterações significativas serão comunicadas nesta página. Recomendamos que revise esta página periodicamente.</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3">8. Contato</h2>
              <p>Se tiver dúvidas sobre esta política de privacidade, entre em contato conosco através da nossa <Link to="/contato" className="text-primary hover:underline">página de contato</Link> ou pelo e-mail contato@baixarvideostwitter.com.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  </div>
);

export default Privacidade;
