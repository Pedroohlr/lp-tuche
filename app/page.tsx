"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@heroui/react";
import Image from "next/image";

const primaryCta =
  "https://wa.me/5511944661100?text=Ola%2C%20quero%20entender%20como%20a%20Tuche%20pode%20me%20ajudar%20com%20meu%20patrimonio.";

const tickerItems = [
  "Gestao independente e regulamentada pela CVM",
  "Wealth Management com acompanhamento proximo",
  "Solucoes para pessoas, familias e empresas",
  "Atendimento com metodo, clareza e controle de risco",
  "Operacoes de cambio com agilidade e criterio",
  "Tuche One para acesso simples a gestao profissional",
];

const topCards = [
  {
    title: "Clareza estrategica",
    description: "Leitura patrimonial antes de qualquer recomendacao.",
    icon: "grid",
  },
  {
    title: "Atendimento proximo",
    description: "Relacao consultiva, didatica e personalizada.",
    icon: "people",
  },
  {
    title: "Controle de risco",
    description: "Decisoes alinhadas ao seu perfil e horizonte.",
    icon: "shield",
  },
];

const authorityCards = [
  {
    title: "Asset Management",
    subtitle: "Gestao independente para private, capital advisory e family office.",
  },
  {
    title: "Wealth Management",
    subtitle: "Planejamento patrimonial conectado ao presente e ao futuro.",
  },
  {
    title: "Tuche One",
    subtitle: "Fundo multimercado com gestao ativa e carteira balanceada.",
  },
  {
    title: "Cambio",
    subtitle: "Operacoes internacionais com praticidade, agilidade e suporte.",
  },
];

const negativePoints = [
  "Carteira montada em conflito de interesse ou produto empurrado.",
  "Atendimento padrao que nao considera patrimonio, liquidez e objetivos.",
  "Decisoes financeiras isoladas, sem visao do todo e sem processo claro.",
];

const positivePoints = [
  "Alocacao isenta com acesso a produtos de diferentes instituicoes financeiras.",
  "Leitura abrangente do patrimonio com foco em tranquilidade e performance sustentavel.",
  "Processo consultivo em tres etapas: entrevista, analise e proposta personalizada.",
];

const benefitCards = [
  {
    title: "Patrimonio organizado",
    description: "Estruture reserva, liquidez, crescimento e protecao com coerencia.",
    icon: "chart",
  },
  {
    title: "Decisao com previsibilidade",
    description: "Saiba por que cada movimento faz sentido para seu momento.",
    icon: "arrow",
  },
  {
    title: "Atendimento para familias",
    description: "Planejamento para sucessao, patrimonio e rotina financeira.",
    icon: "family",
  },
  {
    title: "Acesso a operacoes globais",
    description: "Cambio e estrutura internacional com suporte proximo da equipe.",
    icon: "globe",
  },
];

const solutionCards = [
  {
    label: "Solucao 01",
    title: "Asset",
    description:
      "Para quem precisa de gestao independente com foco em renda fixa, perfil conservador e leitura criteriosa de risco.",
    bullets: [
      "Postura isenta e imparcial",
      "Acesso a produtos de varias instituicoes",
      "Visao adequada para clientes private e familias",
    ],
  },
  {
    label: "Solucao 02",
    title: "Wealth",
    description:
      "Para quem quer unir investimento, planejamento patrimonial e assessoria financeira em uma mesma conversa estrategica.",
    bullets: [
      "Visao completa do patrimonio",
      "Acompanhamento de objetivos e perfil",
      "Planejamento para presente e futuro",
    ],
    featured: true,
  },
  {
    label: "Solucao 03",
    title: "Cambio e Tuchê One",
    description:
      "Para demandas de diversificacao, acesso a fundo multimercado e operacoes internacionais com agilidade operacional.",
    bullets: [
      "Fundo acessivel com gestao profissional",
      "Envio e recebimento em moeda estrangeira",
      "Suporte para manutencao, servicos e investimento",
    ],
  },
];

const credibilityStats = [
  { value: "CVM", label: "Gestora regulamentada" },
  { value: "4", label: "frentes estrategicas" },
  { value: "3", label: "etapas do atendimento" },
];

const faqItems = [
  {
    question: "A Tuche atende apenas pessoa fisica?",
    answer:
      "Nao. A gestora atende pessoas fisicas, juridicas e familias com leitura patrimonial e proposta adequada a cada contexto.",
  },
  {
    question: "A recomendacao fica presa a uma instituicao financeira?",
    answer:
      "Nao. O posicionamento da casa e independente e imparcial, com possibilidade de usar produtos de diferentes instituicoes.",
  },
  {
    question: "O atendimento comeca com produto ou com diagnostico?",
    answer:
      "O processo comunicado pela Tuche comeca por entrevista e analise. A recomendacao vem depois, dentro de uma proposta personalizada.",
  },
  {
    question: "Existe suporte para cambio e operacoes internacionais?",
    answer:
      "Sim. O site atual informa atendimento para envio e recebimento de recursos em moeda estrangeira para servicos, manutencao, viagens e investimento.",
  },
  {
    question: "O que e o Tuche One?",
    answer:
      "E o fundo multimercado da gestora, pensado para quem quer investir de forma simples e acessivel em uma carteira balanceada com gestao profissional.",
  },
];

function Keyword({ children }: { children: string }) {
  return <span className="lp-keyword">{children}</span>;
}

function SectionMark() {
  return (
    <div className="mb-6 flex justify-center lg:mb-7">
      <div className="h-px w-20 bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]" />
    </div>
  );
}

function BrandLockup({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`${centered ? "flex justify-center" : ""}`}>
      <Image
        src="/logo.avif"
        alt="Logo Tuche"
        width={220}
        height={84}
        className="h-auto w-[190px] object-contain sm:w-[220px]"
        priority
      />
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const baseClass = "h-7 w-7 text-[var(--accent-strong)]";

  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9.5" cy="7" r="3.5" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M15 4.13a3.5 3.5 0 0 1 0 5.74" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <path d="M12 3l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <path d="M4 19h16" />
        <path d="M7 16V9" />
        <path d="M12 16V5" />
        <path d="M17 16v-4" />
      </svg>
    );
  }

  if (name === "arrow") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <path d="M4 16l6-6 4 4 6-8" />
        <path d="M14 6h6v6" />
      </svg>
    );
  }

  if (name === "family") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="7" r="2.5" />
        <circle cx="12" cy="13" r="2.5" />
        <path d="M4 20a4 4 0 0 1 8 0" />
        <path d="M12 20a4 4 0 0 1 8 0" />
        <path d="M8 20a4 4 0 0 1 8 0" />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
      <path d="M4 4h7v7H4z" />
      <path d="M13 4h7v7h-7z" />
      <path d="M4 13h7v7H4z" />
      <path d="M13 13h7v7h-7z" />
    </svg>
  );
}

function openLink(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const marqueeItems = [...tickerItems, ...tickerItems];

  return (
    <main className="overflow-x-hidden bg-[var(--page)] text-[var(--ink)]">
      <section className="lp-gradient-hero lp-grain relative overflow-hidden">
        <div className="absolute inset-y-0 right-[-12rem] w-[32rem] rounded-full bg-[var(--blue-glow)] blur-3xl" />
        <div className="absolute left-[-10rem] top-24 h-64 w-64 rounded-full bg-[color:rgba(187,141,77,0.18)] blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 pb-18 pt-8 lg:px-8 lg:pb-24 lg:pt-10">
          <div className="flex items-center justify-between gap-4">
            <BrandLockup />

            <Button
              className="rounded-full border border-[var(--line)] bg-[color:rgba(255,255,255,0.7)] px-5 font-semibold text-[var(--ink)] hover:bg-white"
              onPress={() => openLink(primaryCta)}
            >
              Falar com a equipe
            </Button>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,620px)] lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--ink)]/90">
                Sorocaba, SP  <span className="mx-2 text-[var(--accent-strong)]">•</span> Gestao independente
              </p>

              <h1 className="mt-7 text-4xl font-semibold leading-[1.02] text-[var(--ink)] sm:text-5xl lg:text-[64px] xl:text-[68px]">
                Uma gestao de <Keyword>patrimonio</Keyword> feita para quem busca clareza, seguranca e tranquilidade.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-[22px] sm:leading-9">
                A Tuche Asset Management organiza investimentos, planejamento patrimonial e operacoes internacionais com uma leitura completa do seu momento e dos seus objetivos.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  className="h-16 rounded-[1.2rem] bg-[var(--accent)] px-8 text-base font-bold text-white shadow-[0_18px_50px_rgba(187,141,77,0.22)] hover:bg-[var(--accent-strong)]"
                  onPress={() => openLink(primaryCta)}
                >
                  AGENDAR ATENDIMENTO
                </Button>
                <Button
                  className="h-16 rounded-[1.2rem] border border-[var(--line-strong)] bg-white/60 px-8 text-base font-semibold text-[var(--ink)] hover:bg-white"
                  onPress={() => scrollToSection("solucoes")}
                >
                  Conhecer solucoes
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[620px]">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_25%,rgba(187,141,77,0.34),transparent_40%),radial-gradient(circle_at_60%_65%,rgba(27,102,153,0.28),transparent_38%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[color:rgba(255,255,255,0.72)] p-3 shadow-[0_30px_90px_rgba(17,35,52,0.12)]">
                <div className="relative aspect-[1.18/1] overflow-hidden rounded-[1.4rem] bg-[radial-gradient(circle_at_50%_35%,rgba(86,154,206,0.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(237,243,248,0.95))]">
                  <Image
                    src="/image-hero.avif"
                    alt="Simbolo Tuche"
                    fill
                    sizes="(max-width: 1024px) 100vw, 620px"
                    className="object-contain px-2 py-0"
                    priority
                  />
                </div>
                <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-[var(--line)] bg-[color:rgba(255,255,255,0.8)] px-5 py-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    Seu dinheiro, sua liberdade
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    Atendimento proximo para pessoas, familias e empresas que querem organizar o patrimonio com criterio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[color:rgba(255,255,255,0.82)] py-5">
        <div className="lp-marquee">
          <div className="lp-marquee-track">
            {marqueeItems.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-5 px-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:px-8">
                <span>{item}</span>
                <span className="text-[var(--accent-strong)]">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-gradient-band border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {topCards.map((item) => (
              <Card key={item.title} className="lp-panel rounded-[1.75rem] bg-[var(--card)] px-1 py-1 text-[var(--ink)]">
                <CardContent className="p-7">
                  <div className="mb-5 inline-flex rounded-2xl bg-[var(--accent-soft)] p-3">
                    <Icon name={item.icon} />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[var(--ink)]">{item.title}</CardTitle>
                  <CardDescription className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-gradient-section border-b border-[var(--line)]">
        <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-24">
          <SectionMark />
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Especialidades que sustentam a <Keyword>experiencia</Keyword> da Tuche.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
              Em vez de uma oferta unica, a pagina organiza as frentes da gestora em uma narrativa mais forte, elegante e comercial.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {authorityCards.map((item, index) => (
              <Card key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-[color:rgba(255,255,255,0.82)] text-[var(--ink)] transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="relative flex h-[330px] flex-col justify-between overflow-hidden p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(86,154,206,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,246,248,0.96))]" />
                  <div className="absolute -right-10 top-6 text-[120px] font-semibold leading-none text-[color:rgba(18,33,49,0.04)]">
                    0{index + 1}
                  </div>
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="rounded-full border border-[color:rgba(215,168,100,0.22)] bg-[color:rgba(215,168,100,0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                      Frente estrategica
                    </span>
                  </div>
                  <div className="relative z-10 flex flex-col items-start gap-3">
                    <CardTitle className="max-w-[10ch] text-[42px] leading-[0.96] text-[var(--ink)]">{item.title}</CardTitle>
                    <CardDescription className="max-w-[18ch] text-base leading-8 text-[var(--muted)]">
                      {item.subtitle}
                    </CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              className="h-14 rounded-[1.1rem] bg-[var(--accent)] px-8 text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
              onPress={() => openLink(primaryCta)}
            >
              QUERO ENTENDER MEU CENARIO
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[color:rgba(255,255,255,0.7)] py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="lp-panel rounded-[2rem] bg-[color:rgba(255,255,255,0.84)] p-2 text-[var(--ink)]">
              <CardContent className="p-8 sm:p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[color:rgba(215,168,100,0.34)] bg-transparent text-3xl text-[var(--ink)]">
                  ×
                </div>
                <CardTitle className="text-4xl font-semibold leading-tight text-[var(--ink)]">
                  O que a Tuche <Keyword>nao e</Keyword>
                </CardTitle>
                <ul className="mt-8 space-y-5 text-lg leading-8 text-[var(--muted)]">
                  {negativePoints.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span className="mt-1 text-[var(--accent-strong)]">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border border-[color:rgba(215,168,100,0.2)] bg-[radial-gradient(circle_at_75%_20%,rgba(86,154,206,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,246,248,0.98))] p-2 text-[var(--ink)] shadow-[0_30px_80px_rgba(17,35,52,0.08)]">
              <CardContent className="p-8 sm:p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)] text-3xl text-white">
                  ✓
                </div>
                <CardTitle className="text-4xl font-semibold leading-tight text-[var(--ink)]">
                  O que a Tuche <Keyword>e</Keyword>
                </CardTitle>
                <ul className="mt-8 space-y-5 text-lg leading-8 text-[var(--ink)]/90">
                  {positivePoints.map((item) => (
                    <li key={item} className="flex gap-4 text-[var(--muted)]">
                      <span className="mt-1 text-[var(--accent-strong)]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="lp-gradient-section border-y border-[var(--line)] py-18 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionMark />
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Viva a <Keyword>experiencia</Keyword> de um atendimento mais estrategico.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Quando patrimonio e decisao financeira entram no mesmo desenho, a conversa muda de nivel.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[var(--line)] bg-[color:rgba(255,255,255,0.82)] p-4 shadow-[0_35px_90px_rgba(17,35,52,0.1)]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/image-hero.avif"
                alt="Simbolo Tuche"
                fill
                sizes="100vw"
                className="object-contain p-10 opacity-75"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(18,33,49,0.08))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[color:rgba(187,141,77,0.86)] text-4xl text-white shadow-[0_18px_50px_rgba(187,141,77,0.28)]">
                  ▶
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              className="h-14 rounded-[1.1rem] bg-[var(--accent)] px-8 text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
              onPress={() => openLink(primaryCta)}
            >
              FALAR COM A TUCHE
            </Button>
          </div>
        </div>
      </section>

      <section className="lp-gradient-section py-18 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionMark />
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              O que voce vai <Keyword>encontrar</Keyword> com a Tuche.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefitCards.map((item) => (
              <Card key={item.title} className="lp-panel rounded-[1.75rem] bg-[color:rgba(255,255,255,0.84)] p-2 text-center text-[var(--ink)]">
                <CardContent className="flex min-h-[260px] flex-col items-center justify-center p-8">
                  <div className="mb-6 inline-flex rounded-2xl bg-[var(--accent-soft)] p-3">
                    <Icon name={item.icon} />
                  </div>
                  <CardTitle className="text-3xl font-semibold text-[var(--ink)]">{item.title}</CardTitle>
                  <CardDescription className="mt-4 max-w-sm text-lg leading-8 text-[var(--muted)]">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button
              className="h-14 rounded-[1.1rem] bg-[var(--accent)] px-8 text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
              onPress={() => scrollToSection("solucoes")}
            >
              VER ESTRUTURA DE SOLUCOES
            </Button>
          </div>
        </div>
      </section>

      <section id="solucoes" className="bg-[color:rgba(255,255,255,0.74)] py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionMark />
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 inline-flex rounded-[1.25rem] border border-[var(--line)] bg-white px-5 py-4 shadow-[0_18px_50px_rgba(17,35,52,0.08)]">
              <Image
                src="/logo-10-anos-tuche.avif"
                alt="Tuche 10 anos"
                width={170}
                height={68}
                className="h-auto w-[150px] object-contain"
              />
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Solucoes pensadas para quem quer um relacionamento mais <Keyword>inteligente</Keyword> com o patrimonio.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 xl:grid-cols-3">
            {solutionCards.map((item) => (
              <Card
                key={item.title}
                className={`overflow-hidden rounded-[1.8rem] border p-2 text-[var(--ink)] shadow-[0_30px_80px_rgba(17,35,52,0.08)] ${
                  item.featured
                    ? "border-[color:rgba(215,168,100,0.28)] bg-[radial-gradient(circle_at_50%_20%,rgba(86,154,206,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,246,248,0.98))]"
                    : "border-[var(--line)] bg-[color:rgba(255,255,255,0.86)]"
                }`}
              >
                <CardContent className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                    {item.label}
                  </p>
                  <CardTitle className="mt-4 max-w-[11ch] text-4xl font-semibold leading-[1.02] text-[var(--ink)] sm:text-[48px]">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-5 text-base leading-8 text-[var(--muted)]">
                    {item.description}
                  </CardDescription>

                  <ul className="mt-8 space-y-4 border-t border-[var(--line)] pt-6 text-sm leading-7 text-[var(--ink)]/90">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[var(--muted)]">
                        <span className="text-[var(--accent-strong)]">✦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-0 pb-8 px-8">
                  <Button
                    className="h-12 w-full rounded-[1rem] bg-[var(--accent)] text-sm font-bold text-white hover:bg-[var(--accent-strong)]"
                    onPress={() => openLink(primaryCta)}
                  >
                    QUERO CONVERSAR SOBRE ISSO
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--line)] py-20">
        <div className="absolute inset-0">
          <Image
            src="/image-hero.avif"
            alt="Fundo institucional Tuche"
            fill
            sizes="100vw"
            className="object-contain opacity-10"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(242,246,248,0.9))]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <SectionMark />
          <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
            Quer uma gestao mais <Keyword>elegante</Keyword> para o seu patrimonio?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            A Tuche combina atendimento proximo, visao ampla de patrimonio e uma estrutura regulada para quem quer decidir melhor hoje sem perder o horizonte de longo prazo.
          </p>

          <div className="mt-10 grid gap-4 rounded-[1.75rem] border border-[color:rgba(215,168,100,0.24)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,246,248,0.96))] p-6 shadow-[0_24px_70px_rgba(17,35,52,0.08)] sm:grid-cols-3">
            {credibilityStats.map((item) => (
              <div key={item.value} className="border-b border-[color:rgba(18,33,49,0.08)] pb-4 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 last:sm:border-r-0">
                <p className="text-5xl font-semibold text-[var(--ink)] sm:text-6xl">{item.value}</p>
                <p className="mt-2 text-lg text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-7 text-base italic text-[var(--ink)]/80">
            Uma conversa certa no momento certo pode reorganizar completamente sua relacao com o dinheiro.
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              className="h-16 rounded-[1.2rem] bg-[var(--accent)] px-8 text-base font-bold text-white shadow-[0_18px_50px_rgba(187,141,77,0.18)] hover:bg-[var(--accent-strong)]"
              onPress={() => openLink(primaryCta)}
            >
              QUERO FALAR COM UM ESPECIALISTA
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="lp-gradient-section py-18 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionMark />
          <div className="text-center">
            <h2 className="text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Duvidas <Keyword>frequentes</Keyword>
            </h2>
          </div>

          <Accordion hideSeparator className="lp-faq mt-12 space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} id={`faq-${index}`} className="rounded-[1.35rem] border border-[var(--line)] bg-[color:rgba(255,255,255,0.86)] px-6 py-2 text-[var(--ink)] shadow-[0_20px_50px_rgba(17,35,52,0.08)]">
                <AccordionHeading>
                  <AccordionTrigger className="flex w-full items-center justify-between gap-4 rounded-[1rem] py-5 text-left text-lg font-bold text-[var(--ink)] outline-none">
                    <span>{item.question}</span>
                    <AccordionIndicator className="shrink-0 text-[var(--accent-strong)]" />
                  </AccordionTrigger>
                </AccordionHeading>
                <AccordionPanel>
                  <AccordionBody className="pb-5 pr-8 text-base leading-8 text-[var(--muted)]">
                    {item.answer}
                  </AccordionBody>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-[color:rgba(255,255,255,0.7)] pb-20 pt-8 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-[2.2rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,246,248,1))] p-8 text-center shadow-[0_35px_90px_rgba(17,35,52,0.08)] sm:p-12">
            <BrandLockup centered />
            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              Se o objetivo e investir com mais <Keyword>tranquilidade</Keyword>, a proxima conversa precisa ser com metodo.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Fale com a equipe da Tuche para entender seu contexto patrimonial e desenhar uma estrategia coerente com seu momento, sua familia e seus objetivos.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                className="h-16 rounded-[1.2rem] bg-[var(--accent)] px-8 text-base font-bold text-white hover:bg-[var(--accent-strong)]"
                onPress={() => openLink(primaryCta)}
              >
                CHAMAR NO WHATSAPP
              </Button>
              <Button
                className="h-16 rounded-[1.2rem] border border-[var(--line-strong)] bg-transparent px-8 text-base font-semibold text-[var(--ink)] hover:bg-white"
                onPress={() => openLink("mailto:contato@tucheasset.com.br")}
              >
                ENVIAR E-MAIL
              </Button>
            </div>

            <div className="mt-8 text-sm leading-7 text-[var(--muted)]">
              <p>Tel.: (11) 94466-1100</p>
              <p>R.I.: (11) 94313-3339</p>
              <p>Avenida Gisele Constantino, 1850, salas 112 e 113, Sorocaba - SP</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
