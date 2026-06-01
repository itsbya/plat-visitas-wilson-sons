import { createFileRoute } from "@tanstack/react-router";
import {
  Anchor,
  Ship,
  Compass,
  Boxes,
  GraduationCap,
  ShieldCheck,
  ClipboardCheck,
  Clock,
  FileCheck2,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-port.jpg";
import logo from "@/assets/wilson-sons-logo.png";
import galleryPlatform from "@/assets/gallery-platform.jpg";
import galleryShip from "@/assets/gallery-ship.jpg";
import galleryTugboat from "@/assets/gallery-tugboat.jpg";
import gallerySupply from "@/assets/gallery-supply.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema de Gestão de Visitas — Wilson Sons" },
      {
        name: "description",
        content:
          "Agende sua visita à Wilson Sons de forma simples, organizada e segura. Plataforma oficial de solicitação de visitas.",
      },
      { property: "og:title", content: "Sistema de Gestão de Visitas — Wilson Sons" },
      {
        property: "og:description",
        content:
          "Agende sua visita à Wilson Sons de forma simples, organizada e segura.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Wilson Sons"
              className="h-9 w-auto sm:h-10"
              width={1536}
              height={1024}
            />
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#galeria" className="hover:text-primary">Galeria</a>
            <a href="#seguranca" className="hover:text-primary">Segurança</a>
            <a href="#agendar" className="hover:text-primary">Agendar</a>
          </nav>
          <Button asChild variant="accent" size="sm">
            <a href="#agendar">Agendar visita</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <img
          src={heroImg}
          alt="Porto da Wilson Sons ao entardecer com navio e rebocadores"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/90" />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              <Anchor className="h-3.5 w-3.5" /> Plataforma oficial de visitas
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Conheça a Wilson Sons
            </h1>
            <p className="mt-5 text-xl text-primary-foreground/90 sm:text-2xl">
              Agende sua visita de forma simples, organizada e segura.
            </p>
            <p className="mt-5 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
              Esta plataforma foi desenvolvida para centralizar as solicitações
              de visitas, facilitar o controle das informações e tornar o
              processo de agendamento mais eficiente.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#agendar">
                  <CalendarCheck className="h-4 w-4" /> Agendar visita
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href="#sobre">Saiba mais</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Sobre a Wilson Sons
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Tradição no setor marítimo e portuário
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A Wilson Sons atua no setor marítimo, portuário e logístico,
            contribuindo para operações essenciais relacionadas ao transporte,
            infraestrutura portuária e serviços navais. Por despertar o
            interesse de estudantes, profissionais, instituições e visitantes,
            é importante que o processo de visitas seja organizado, seguro e
            eficiente.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Ship, title: "Setor marítimo e portuário", desc: "Operações de transporte marítimo e atracação." },
            { icon: Compass, title: "Operações navais", desc: "Serviços de rebocagem e apoio offshore." },
            { icon: Boxes, title: "Logística e infraestrutura", desc: "Terminais e movimentação de cargas." },
            { icon: GraduationCap, title: "Conhecimento e visita técnica", desc: "Aproximando estudantes e profissionais do setor." },
          ].map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary group-hover:bg-accent/15 group-hover:text-accent">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GALERIA MARÍTIMA */}
      <section id="galeria" className="bg-muted/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Nossas operações
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Plataformas e navios navais
            </h2>
            <p className="mt-4 text-muted-foreground">
              Conheça de perto a infraestrutura e a frota que sustentam as
              operações marítimas e portuárias da Wilson Sons.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={galleryPlatform}
                alt="Plataforma offshore em operação no oceano"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                width={1024}
                height={768}
                loading="lazy"
              />
              <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                Plataforma offshore
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={galleryShip}
                alt="Navio cargueiro em terminal portuário"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                width={1024}
                height={768}
                loading="lazy"
              />
              <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                Navio cargueiro
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={galleryTugboat}
                alt="Rebocador auxiliando manobra portuária"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                width={1024}
                height={768}
                loading="lazy"
              />
              <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                Rebocador
              </figcaption>
            </figure>
            <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <img
                src={gallerySupply}
                alt="Navio de suprimento próximo à plataforma"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                width={1024}
                height={768}
                loading="lazy"
              />
              <figcaption className="p-4 text-sm font-medium text-muted-foreground">
                Navio de suprimento
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section id="seguranca" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Regras de segurança
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Sua segurança é prioridade
          </h2>
          <p className="mt-4 text-muted-foreground">
            Para garantir uma visita segura, algumas orientações devem ser
            observadas antes da confirmação do agendamento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Uso de EPI",
              desc: "O uso de equipamentos de proteção individual poderá ser obrigatório durante a visita, conforme orientação da equipe responsável.",
            },
            {
              icon: ClipboardCheck,
              title: "Confirmação prévia",
              desc: "A visita só será considerada confirmada após análise da solicitação e retorno da equipe responsável.",
            },
            {
              icon: Clock,
              title: "Pontualidade",
              desc: "O visitante deverá comparecer no horário informado e seguir as orientações recebidas.",
            },
            {
              icon: FileCheck2,
              title: "Dados corretos",
              desc: "As informações enviadas devem estar completas e corretas para facilitar o contato e a validação da visita.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition hover:border-accent/40 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section
        id="agendar"
        className="border-t border-border bg-muted/40 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Formulário de agendamento
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Agende sua visita
            </h2>
            <p className="mt-4 text-muted-foreground">
              Preencha o formulário abaixo para solicitar uma visita. A equipe
              responsável analisará os dados e entrará em contato para
              confirmação.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSe69iu5-oAbfS871oydbkvb9qyMgOj4qkXzl9dBDQDYZQWgnQ/viewform?embedded=true"
                className="h-[1423px] w-full"
                title="Formulário de agendamento Wilson Sons"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
          <img
            src={logo}
            alt="Wilson Sons"
            className="h-8 w-auto brightness-0 invert"
            width={1536}
            height={1024}
            loading="lazy"
          />
          <p className="text-sm text-primary-foreground/80">
            Projeto desenvolvido para fins educativos na KODIE Academy
          </p>
        </div>
      </footer>
    </main>
  );
}
