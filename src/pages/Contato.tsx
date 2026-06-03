import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Send, Clock, CheckCircle2 } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Contato = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contato - Fale Conosco | TwitterDown"
        description="Entre em contato com o TwitterDown. Tire dúvidas, envie sugestões ou reporte problemas sobre o download de vídeos do Twitter."
        path="/contato"
        breadcrumbs={[{ name: "Início", path: "/" }, { name: "Contato", path: "/contato" }]}
      />
      <Sidebar activeSection="contato" />
      <Header title="Contato" showBack />

      <main className="lg:ml-[280px] pb-20 lg:pb-0">
        <article className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Fale Conosco</h1>
            <p className="text-muted-foreground text-lg mb-10">
              Tem alguma dúvida, sugestão ou problema? Entre em contato e responderemos o mais rápido possível.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Mail, title: "E-mail", desc: "contato@baixarvideostwitter.com" },
                { icon: Clock, title: "Resposta", desc: "Em até 24 horas úteis" },
                { icon: MessageSquare, title: "Suporte", desc: "Segunda a sexta, 9h-18h" },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {sent ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-2">Mensagem Enviada!</h2>
                <p className="text-sm text-muted-foreground mb-6">Obrigado por entrar em contato. Responderemos o mais rápido possível.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }} className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring" placeholder="seu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Assunto</label>
                  <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring" placeholder="Assunto da mensagem" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Escreva sua mensagem..." />
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                  <Send className="w-4 h-4" /> Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default Contato;
