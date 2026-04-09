import { Link } from 'react-router-dom'

const itens = [
  { t: 'Gestão de Tráfego Pago', d: 'Google, Meta e LinkedIn Ads com foco em ROAS.' },
  { t: 'SEO Técnico e de Conteúdo', d: 'Do audit ao ranqueamento no topo do Google.' },
  { t: 'Social Media', d: 'Criação de conteúdo, calendário editorial e gestão.' },
  { t: 'Design & Branding', d: 'Identidade, criativos e materiais institucionais.' },
  { t: 'Automação de Marketing', d: 'Funis, nutrição e integração com CRM.' },
  { t: 'Dashboards e Relatórios', d: 'Visibilidade total sobre o resultado das campanhas.' },
]

export default function SolucoesExecucao() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Soluções</p>
      <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Execução</h1>
      <p className="mt-6 max-w-2xl text-lg text-white/70">
        Nosso time cuida de tudo — da estratégia à entrega diária. Você acompanha os
        resultados, nós fazemos acontecer.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {itens.map((i) => (
          <div key={i.t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white">{i.t}</h3>
            <p className="mt-2 text-sm text-white/60">{i.d}</p>
          </div>
        ))}
      </div>
      <Link to="/diagnostico" className="mt-12 inline-block rounded-full bg-brand-accent px-8 py-3 font-semibold text-brand hover:bg-white">
        Quero contratar execução
      </Link>
    </section>
  )
}
