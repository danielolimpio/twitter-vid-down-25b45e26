import { Link } from "react-router-dom";
import { AlertTriangle, Shield, BookOpen, Users, Heart, Globe, Lock, Ban, Scale, FileText, CheckCircle, XCircle, HelpCircle, Mail, Gavel, ClipboardCheck, Eye, Info } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";

const SectionCard = ({ icon: Icon, title, children, variant = "default" }: { icon: React.ElementType; title: string; children: React.ReactNode; variant?: "default" | "warning" | "danger" | "success" }) => {
  const borderColor = {
    default: "border-border",
    warning: "border-yellow-500/30",
    danger: "border-destructive/30",
    success: "border-green-500/30",
  }[variant];

  const iconBg = {
    default: "bg-primary/10 text-primary",
    warning: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    danger: "bg-destructive/10 text-destructive",
    success: "bg-green-500/10 text-green-600 dark:text-green-400",
  }[variant];

  return (
    <div className={`bg-card border ${borderColor} rounded-2xl p-6`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="text-lg font-bold text-foreground">{title}</h2>
      </div>
      <div className="text-sm text-muted-foreground space-y-3">{children}</div>
    </div>
  );
};

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const DenyItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const SubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-4">
    <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
    {children}
  </div>
);

const dataAtual = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

const UsoResponsavel = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Uso Responsável - TwitterDown | Política de Download"
      description="Termos de uso responsável e política de download do TwitterDown. Conheça seus direitos e responsabilidades ao utilizar nossa ferramenta."
      path="/uso-responsavel"
      breadcrumbs={[{ name: "Início", path: "/" }, { name: "Uso Responsável", path: "/uso-responsavel" }]}
    />
    <Sidebar activeSection="" />
    <header className="lg:hidden sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3 flex items-center gap-3">
      <Link to="/" className="text-muted-foreground hover:text-foreground"><ArrowLeft className="w-5 h-5" /></Link>
      <span className="font-bold text-foreground">Uso Responsável</span>
    </header>

    <main className="lg:ml-[240px] pb-20 lg:pb-0">
      <article className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Documento Legal
              </Badge>
            </div>
            <h1 className="text-3xl font-extrabold text-foreground mb-2">Termos de Uso e Política de Download Responsável</h1>
            <p className="text-xs text-muted-foreground">Última atualização: {dataAtual}</p>
          </div>

          <div className="space-y-6">
            {/* 1. Aviso Legal */}
            <SectionCard icon={AlertTriangle} title="1. Aviso Legal Importante" variant="warning">
              <p>Esta ferramenta é fornecida exclusivamente para <strong className="text-foreground">uso pessoal, privado, educacional e sem fins lucrativos</strong>. Ao acessar e utilizar nossos serviços, você declara estar ciente e concordar em cumprir integralmente as leis de direitos autorais vigentes, os termos de serviço das plataformas originais e todas as disposições aqui estabelecidas.</p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mt-3">
                <p className="text-xs font-medium text-destructive">O descumprimento destas diretrizes pode resultar em responsabilização civil e criminal conforme a legislação brasileira e internacional aplicável.</p>
              </div>
            </SectionCard>

            {/* 2. Finalidade */}
            <SectionCard icon={Shield} title="2. Finalidade Legítima da Ferramenta">
              <p>Nossa plataforma foi desenvolvida para atender a necessidades reais e legítimas de usuários que enfrentam limitações técnicas, geográficas ou pessoais no acesso a conteúdo online.</p>

              <SubSection title="2.1. Acessibilidade e Conectividade Limitada">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Áreas com infraestrutura precária: usuários em regiões com internet instável onde o streaming não é viável</CheckItem>
                  <CheckItem>Economia de dados móveis: pessoas com planos limitados que precisam otimizar o consumo</CheckItem>
                  <CheckItem>Profissionais em trânsito: trabalhadores que permanecem longos períodos sem conexão adequada</CheckItem>
                  <CheckItem>Estudantes de zonas rurais: alunos que necessitam de material educacional offline</CheckItem>
                  <CheckItem>Navegação em transporte público: metrôs, ônibus ou aviões onde a conexão é indisponível</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="2.2. Necessidades Especiais e Terapêuticas">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Crianças e adultos com necessidades especiais: vídeos educativos e terapêuticos como parte do tratamento</CheckItem>
                  <CheckItem>Terapias e reabilitação: conteúdo para exercícios, relaxamento ou estimulação cognitiva</CheckItem>
                  <CheckItem>Acesso offline em consultórios: profissionais da saúde com conectividade limitada</CheckItem>
                  <CheckItem>Inclusão digital: pessoas que necessitam revisar conteúdos múltiplas vezes sem conexão constante</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="2.3. Educação e Desenvolvimento Pessoal">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Estudo e pesquisa: material para revisão e preparação sem consumir dados</CheckItem>
                  <CheckItem>Capacitação profissional: tutoriais e treinamentos offline</CheckItem>
                  <CheckItem>Aprendizado de idiomas: conteúdo para prática repetitiva</CheckItem>
                  <CheckItem>Preparação de aulas: material didático em locais sem acesso à internet</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="2.4. Preservação de Memórias e Conteúdo Pessoal">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Backup de momentos especiais: vídeos de família e ocasiões importantes</CheckItem>
                  <CheckItem>Conteúdo próprio: cópia de segurança de seus próprios vídeos publicados</CheckItem>
                  <CheckItem>Documentação histórica: registros que podem ser removidos das plataformas</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="2.5. Privacidade e Segurança">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Proteção de dados pessoais: evitar rastreamento de hábitos de visualização</CheckItem>
                  <CheckItem>Controle de privacidade: assistir conteúdos sem deixar histórico em plataformas</CheckItem>
                  <CheckItem>Segurança da informação: preferência por conteúdo offline</CheckItem>
                </ul>
              </SubSection>
            </SectionCard>

            {/* 3. Proibido */}
            <SectionCard icon={Ban} title="3. O Que é Estritamente Proibido" variant="danger">
              <SubSection title="3.1. Violação de Direitos Autorais">
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Baixar músicas, filmes, séries ou conteúdo protegido sem autorização expressa dos titulares</DenyItem>
                  <DenyItem>Utilizar a ferramenta para contornar sistemas de proteção contra cópia (DRM)</DenyItem>
                  <DenyItem>Acessar conteúdo pago ou restrito sem a devida licença</DenyItem>
                  <DenyItem>Violar marcas registradas, direitos de imagem, voz ou propriedade intelectual</DenyItem>
                </ul>
              </SubSection>

              <SubSection title="3.2. Redistribuição e Compartilhamento">
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Republicar vídeos em outras plataformas (YouTube, TikTok, Instagram, Facebook, etc.)</DenyItem>
                  <DenyItem>Compartilhar arquivos em redes sociais, grupos de mensagens, fóruns ou sites</DenyItem>
                  <DenyItem>Fazer upload em servidores de armazenamento para distribuição</DenyItem>
                  <DenyItem>Incorporar vídeos baixados em sites, blogs ou aplicações sem autorização</DenyItem>
                  <DenyItem>Transmitir ou exibir publicamente o conteúdo baixado</DenyItem>
                </ul>
              </SubSection>

              <SubSection title="3.3. Uso Comercial e Lucrativo">
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Utilizar vídeos para fins comerciais, publicitários ou promocionais</DenyItem>
                  <DenyItem>Lucrar direta ou indiretamente com conteúdo de terceiros</DenyItem>
                  <DenyItem>Incluir vídeos em produtos vendidos ou distribuídos</DenyItem>
                  <DenyItem>Monetizar conteúdo em plataformas que geram receita</DenyItem>
                </ul>
              </SubSection>

              <SubSection title="3.4. Usos Ilícitos e Danosos">
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Utilizar vídeos para assédio, perseguição, difamação, calúnia ou injúria</DenyItem>
                  <DenyItem>Violar privacidade, intimidade ou honra de terceiros</DenyItem>
                  <DenyItem>Criar deepfakes ou edições enganosas</DenyItem>
                  <DenyItem>Praticar discurso de ódio, discriminação ou apologia à violência</DenyItem>
                </ul>
              </SubSection>

              <SubSection title="3.5. Contorno de Medidas de Proteção">
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Burlar restrições de privacidade (baixar vídeos privados sem autorização)</DenyItem>
                  <DenyItem>Acessar contas de terceiros para realizar downloads</DenyItem>
                  <DenyItem>Utilizar métodos automatizados em massa (bots, scrapers)</DenyItem>
                  <DenyItem>Violar medidas tecnológicas de proteção das plataformas</DenyItem>
                </ul>
              </SubSection>
            </SectionCard>

            {/* 4. Responsabilidades */}
            <SectionCard icon={ClipboardCheck} title="4. Suas Responsabilidades e Obrigações">
              <SubSection title="4.1. Verificação Prévia">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Confirmar se possui direito legal de baixar o conteúdo</CheckItem>
                  <CheckItem>Verificar se o vídeo possui restrições de uso ou licenciamento</CheckItem>
                  <CheckItem>Assegurar-se de que o download não viola termos de serviço da plataforma</CheckItem>
                  <CheckItem>Confirmar que o uso pretendido está em conformidade com a legislação</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="4.2. Uso Adequado">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Utilizar os vídeos exclusivamente para fins pessoais e privados</CheckItem>
                  <CheckItem>Manter o conteúdo em dispositivos de acesso restrito e seguro</CheckItem>
                  <CheckItem>Não remover marcas d'água, créditos ou informações de autoria</CheckItem>
                  <CheckItem>Apoiar os criadores originais através de interações positivas</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="4.3. Armazenamento Seguro">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Guardar os arquivos em local seguro e de acesso controlado</CheckItem>
                  <CheckItem>Excluir conteúdos quando solicitado pelos titulares dos direitos</CheckItem>
                  <CheckItem>Manter registro de autorizações quando aplicável</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="4.4. Conformidade Legal">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Cumprir a Lei de Direitos Autorais (Lei 9.610/98)</CheckItem>
                  <CheckItem>Observar o Marco Civil da Internet (Lei 12.965/14)</CheckItem>
                  <CheckItem>Respeitar a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/18)</CheckItem>
                  <CheckItem>Atender à legislação penal e civil aplicável</CheckItem>
                </ul>
              </SubSection>
            </SectionCard>

            {/* 5. Isenção */}
            <SectionCard icon={Info} title="5. Isenção de Responsabilidade da Plataforma">
              <SubSection title="5.1. Natureza da Ferramenta">
                <p>Nossa plataforma funciona como um meio técnico neutro — similar a um navegador web, player de vídeo ou ferramenta de busca. Não criamos, hospedamos, distribuímos ou controlamos o conteúdo original das plataformas de terceiros.</p>
              </SubSection>

              <SubSection title="5.2. Limitação de Responsabilidade">
                <p className="font-medium text-foreground mb-2">Não somos responsáveis por:</p>
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Como você utiliza os vídeos após o download</DenyItem>
                  <DenyItem>Violações de direitos autorais cometidas pelos usuários</DenyItem>
                  <DenyItem>Consequências legais do uso inadequado</DenyItem>
                  <DenyItem>Conteúdo original das plataformas de origem</DenyItem>
                  <DenyItem>Danos diretos, indiretos ou consequenciais decorrentes do uso</DenyItem>
                </ul>
              </SubSection>

              <SubSection title="5.3. Ausência de Endosso">
                <p>A disponibilidade desta ferramenta não constitui endosso do conteúdo das plataformas originais, autorização para violar direitos de terceiros, permissão para uso comercial ou garantia de legalidade do download em todas as jurisdições.</p>
              </SubSection>

              <SubSection title="5.4. Variações Jurídicas">
                <p>As leis de direitos autorais variam significativamente entre países. É sua responsabilidade verificar a legalidade do download em sua jurisdição específica e consultar um advogado especializado em caso de dúvidas.</p>
              </SubSection>
            </SectionCard>

            {/* 6. Direitos Autorais */}
            <SectionCard icon={BookOpen} title="6. Direitos Autorais e Exceções Legais">
              <SubSection title="6.1. O Que é Protegido">
                <p>Conforme a Lei 9.610/98, estão protegidos: obras audiovisuais, composições musicais, obras fotográficas, textos, roteiros, coreografias, programas de computador e qualquer criação expressa por qualquer meio.</p>
              </SubSection>

              <SubSection title="6.2. Exceções e Limitações (Uso Justo)">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Citação para estudo, crítica ou polêmica (com indicação do autor e origem)</CheckItem>
                  <CheckItem>Uso em estabelecimentos de ensino para fins didáticos</CheckItem>
                  <CheckItem>Reprodução de pequenos trechos para uso privado do copista</CheckItem>
                  <CheckItem>Acesso para deficientes visuais ou auditivos</CheckItem>
                </ul>
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-3 mt-3">
                  <p className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Estas exceções são restritas e específicas. Não constituem autorização geral para download indiscriminado.</p>
                </div>
              </SubSection>

              <SubSection title="6.3. Domínio Público e Licenças Livres">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>O conteúdo estiver em domínio público (geralmente 70 anos após morte do autor)</CheckItem>
                  <CheckItem>Possuir licença Creative Commons que permita download e uso</CheckItem>
                  <CheckItem>O autor tiver autorizado explicitamente o download e redistribuição</CheckItem>
                  <CheckItem>For conteúdo de sua própria autoria</CheckItem>
                </ul>
              </SubSection>
            </SectionCard>

            {/* 7. DMCA */}
            <SectionCard icon={FileText} title="7. Política de Notificação e Remoção (DMCA)">
              <p>Respeitamos integralmente os direitos dos titulares de propriedade intelectual e agimos prontamente mediante notificação válida de violação.</p>

              <SubSection title="7.2. Como Enviar uma Notificação">
                <p>Se você é detentor de direitos autorais, envie uma notificação contendo:</p>
                <ul className="space-y-1.5 list-none mt-2">
                  <CheckItem>Identificação da obra protegida com descrição detalhada</CheckItem>
                  <CheckItem>URL do conteúdo infringente</CheckItem>
                  <CheckItem>Prova de titularidade e documentação comprobatória</CheckItem>
                  <CheckItem>Declaração de boa-fé</CheckItem>
                  <CheckItem>Informações de contato e assinatura</CheckItem>
                </ul>
                <p className="mt-2">Entre em contato pela nossa <Link to="/dmca" className="text-primary hover:underline font-medium">página DMCA</Link>.</p>
              </SubSection>

              <SubSection title="7.3. Prazos e Procedimentos">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-foreground">Análise inicial</p>
                    <p className="text-xs">Até 48 horas úteis</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-foreground">Ação de remoção</p>
                    <p className="text-xs">Imediata após confirmação</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-foreground">Contranotificação</p>
                    <p className="text-xs">Até 10 dias úteis</p>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-foreground">Notificações falsas</p>
                    <p className="text-xs">Responsabilização civil</p>
                  </div>
                </div>
              </SubSection>
            </SectionCard>

            {/* 8. Sanções */}
            <SectionCard icon={Gavel} title="8. Sanções e Consequências do Descumprimento" variant="danger">
              <SubSection title="8.1. Medidas da Plataforma">
                <ul className="space-y-1.5 list-none">
                  <DenyItem>Suspender ou encerrar contas de usuários reincidentes</DenyItem>
                  <DenyItem>Bloquear acesso a endereços IP que violem reiteradamente os termos</DenyItem>
                  <DenyItem>Cooperar com autoridades mediante ordem judicial</DenyItem>
                </ul>
              </SubSection>

              <SubSection title="8.2. Consequências Legais">
                <div className="space-y-3 mt-2">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                    <p className="text-xs font-semibold text-foreground mb-1">Responsabilidade Civil</p>
                    <p className="text-xs">Indenização por danos materiais, compensação por danos morais e perda de equipamentos utilizados na violação.</p>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                    <p className="text-xs font-semibold text-foreground mb-1">Responsabilidade Criminal (Art. 184 do Código Penal)</p>
                    <p className="text-xs">Detenção de 3 meses a 1 ano (violação simples). Reclusão de 2 a 4 anos (violação com fins lucrativos). Multa proporcional ao dano causado.</p>
                  </div>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                    <p className="text-xs font-semibold text-foreground mb-1">Responsabilidade Administrativa</p>
                    <p className="text-xs">Multas de órgãos de fiscalização, bloqueio de sites e inclusão em cadastros restritivos.</p>
                  </div>
                </div>
              </SubSection>
            </SectionCard>

            {/* 9. Boas Práticas */}
            <SectionCard icon={Eye} title="9. Recomendações de Boas Práticas" variant="success">
              <SubSection title="9.1. Antes de Baixar">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Pergunte-se: "Eu tenho direito legal de baixar este conteúdo?"</CheckItem>
                  <CheckItem>Verifique: O vídeo é de minha autoria? Tenho autorização por escrito?</CheckItem>
                  <CheckItem>Considere: O criador oferece download oficial? Há opção de compra?</CheckItem>
                  <CheckItem>Avalie: Meu uso se enquadra em exceções legais específicas?</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="9.2. Após o Download">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Armazene com segurança em dispositivo pessoal e protegido</CheckItem>
                  <CheckItem>Não compartilhe — mantenha o arquivo em uso estritamente pessoal</CheckItem>
                  <CheckItem>Dê créditos quando for pertinente e autorizado</CheckItem>
                  <CheckItem>Apoie o criador: curta, inscreva-se, compartilhe oficialmente</CheckItem>
                  <CheckItem>Exclua quando necessário se receber notificação ou perder autorização</CheckItem>
                </ul>
              </SubSection>

              <SubSection title="9.3. Alternativas Legais">
                <ul className="space-y-1.5 list-none">
                  <CheckItem>Assinaturas oficiais: YouTube Premium, Netflix, Spotify, etc.</CheckItem>
                  <CheckItem>Download oficial: muitas plataformas oferecem download dentro do app</CheckItem>
                  <CheckItem>Conteúdo gratuito legal: Creative Commons, domínio público</CheckItem>
                  <CheckItem>Contato direto com criadores: solicite autorização</CheckItem>
                </ul>
              </SubSection>
            </SectionCard>

            {/* 10. FAQ */}
            <SectionCard icon={HelpCircle} title="10. Perguntas Frequentes">
              {[
                { q: "Posso baixar vídeos para assistir offline?", a: "Sim, desde que seja para uso estritamente pessoal, você tenha direito legal sobre o conteúdo ou esteja amparado por exceções legais específicas." },
                { q: "É permitido baixar meus próprios vídeos?", a: "Sim, você pode baixar vídeos de sua própria autoria para backup e uso pessoal." },
                { q: "Posso usar vídeos baixados em trabalhos escolares?", a: "A legislação permite citação para fins didáticos, mas com limitações. Consulte seu educador sobre as regras específicas da instituição." },
                { q: "É crime baixar vídeos do Twitter?", a: "Depende do uso. Para visualização pessoal de conteúdo público, geralmente não há crime. Porém, redistribuir, lucrar ou violar direitos autorais é ilegal." },
                { q: "O que acontece se eu republicar um vídeo baixado?", a: "Você pode receber notificação de remoção, ter sua conta suspensa na plataforma, e ser responsabilizado civil e criminalmente por violação de direitos autorais." },
                { q: "Como sei se um vídeo está protegido por direitos autorais?", a: "Praticamente todo conteúdo criativo está automaticamente protegido. A ausência de símbolo de copyright não significa que é livre. Na dúvida, presuma que está protegido." },
                { q: "E se o criador não se manifestar contra?", a: "A tolerância não significa autorização. O titular pode exercer seus direitos a qualquer momento." },
              ].map((faq, i) => (
                <div key={i} className="bg-secondary/50 rounded-xl p-4 mt-2">
                  <p className="text-xs font-semibold text-foreground mb-1">{faq.q}</p>
                  <p className="text-xs">{faq.a}</p>
                </div>
              ))}
            </SectionCard>

            {/* 11. Atualizações */}
            <SectionCard icon={FileText} title="11. Atualizações e Modificações">
              <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio, para adequação a mudanças legais, tecnológicas ou operacionais. Versões atualizadas serão publicadas nesta página com data de vigência. O uso continuado da ferramenta após alterações constitui aceitação dos novos termos.</p>
              <p className="mt-2">Recomendamos que você revise periodicamente esta página para manter-se informado sobre suas responsabilidades e direitos.</p>
            </SectionCard>

            {/* 12. Contato */}
            <SectionCard icon={Mail} title="12. Contato e Suporte">
              <p>Para dúvidas sobre uso legítimo, interpretação destes termos, direitos autorais ou notificações DMCA, entre em contato antes de realizar o download:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
                <div className="bg-secondary/50 rounded-xl p-3 text-center">
                  <p className="text-xs font-semibold text-foreground">Dúvidas gerais</p>
                  <p className="text-xs">Até 5 dias úteis</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-3 text-center">
                  <p className="text-xs font-semibold text-foreground">Notificações DMCA</p>
                  <p className="text-xs">Até 48 horas úteis</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-3 text-center">
                  <p className="text-xs font-semibold text-foreground">Urgências legais</p>
                  <p className="text-xs">Imediatamente</p>
                </div>
              </div>
              <p className="mt-3">Acesse nossa <Link to="/contato" className="text-primary hover:underline font-medium">página de contato</Link> para enviar sua mensagem.</p>
            </SectionCard>

            {/* 13. Disposições Finais */}
            <SectionCard icon={Scale} title="13. Disposições Finais">
              <SubSection title="13.1. Legislação Aplicável">
                <p>Estes termos são regidos pelas leis da República Federativa do Brasil, especialmente: Lei de Direitos Autorais (Lei 9.610/98), Marco Civil da Internet (Lei 12.965/14), Código Civil (Lei 10.406/02) e Código Penal (Decreto-Lei 2.848/40).</p>
              </SubSection>
              <SubSection title="13.2. Divisibilidade">
                <p>Se qualquer disposição destes termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito.</p>
              </SubSection>
              <SubSection title="13.3. Integralidade">
                <p>Estes termos constituem o acordo completo entre você e nossa plataforma em relação ao uso da ferramenta de download, substituindo todos os acordos anteriores.</p>
              </SubSection>
            </SectionCard>

            {/* 14. Aceite */}
            <SectionCard icon={CheckCircle} title="14. Aceite dos Termos" variant="success">
              <p>Ao clicar no botão "Baixar" ou utilizar qualquer funcionalidade desta plataforma, você declara que:</p>
              <ul className="space-y-1.5 list-none mt-2">
                <CheckItem>Leu e compreendeu integralmente estes termos</CheckItem>
                <CheckItem>Concorda em cumprir todas as disposições aqui estabelecidas</CheckItem>
                <CheckItem>Assume total responsabilidade pelo uso da ferramenta</CheckItem>
                <CheckItem>Está ciente das consequências do descumprimento</CheckItem>
                <CheckItem>Possui capacidade legal para celebrar este acordo</CheckItem>
              </ul>
              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-3 mt-3">
                <p className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Menores de 18 anos devem obter consentimento dos pais ou responsáveis legais antes de utilizar esta ferramenta.</p>
              </div>
            </SectionCard>

            {/* Resumo Prático */}
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-primary" />
                Resumo Prático
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-2">PODE BAIXAR QUANDO:</p>
                  <ul className="space-y-1.5 list-none text-xs">
                    <CheckItem>É seu próprio conteúdo</CheckItem>
                    <CheckItem>Tem autorização por escrito do titular</CheckItem>
                    <CheckItem>Está em domínio público</CheckItem>
                    <CheckItem>Possui licença Creative Commons adequada</CheckItem>
                    <CheckItem>É para uso estritamente pessoal e privado</CheckItem>
                    <CheckItem>Se enquadra em exceções legais específicas</CheckItem>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  <p className="text-xs font-bold text-destructive mb-2">NÃO PODE BAIXAR QUANDO:</p>
                  <ul className="space-y-1.5 list-none text-xs">
                    <DenyItem>É conteúdo protegido sem autorização</DenyItem>
                    <DenyItem>Pretende redistribuir ou compartilhar</DenyItem>
                    <DenyItem>Vai usar para fins comerciais</DenyItem>
                    <DenyItem>É conteúdo privado de terceiros</DenyItem>
                    <DenyItem>Viola termos da plataforma original</DenyItem>
                    <DenyItem>É para exibição pública</DenyItem>
                  </ul>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4 text-center">
                <p className="text-xs text-muted-foreground">Na dúvida: não baixe, consulte um advogado, <Link to="/contato" className="text-primary hover:underline">entre em contato conosco</Link> ou busque alternativas legais.</p>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                Esta ferramenta é um recurso técnico para facilitar o acesso offline a conteúdos que você tem direito legal de acessar. O respeito aos direitos autorais e aos criadores de conteúdo é fundamental para um ecossistema digital justo e sustentável. Apoie os criadores que você admira através de meios oficiais.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  </div>
);

export default UsoResponsavel;
