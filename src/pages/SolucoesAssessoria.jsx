import { Link } from 'react-router-dom'

const itens = [
  'Planejamento estratégico de marketing digital',
  'Consultoria em funil de vendas e CRM',
  'Auditoria de campanhas pagas e SEO',
  'Treinamento de times internos',
  'Mentoria mensal com especialistas',
  'Roadmap de crescimento trimestral',
]

export default function SolucoesAssessoria() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Soluções</p>
      <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Assessoria</h1>
      <p className="mt-6 max-w-2xl text-lg text-white/70">
        Para empresas que já têm time interno e precisam de direção estratégica e
        processo — nós orientamos, você executa.
      </p>
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {itens.map((i) => (
          <li key={i} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <span className="text-brand-accent">✓</span>
            <span className="text-white/80">{i}</span>
          </li>
        ))}
      </ul>
      <Link to="/contato" className="mt-12 inline-block rounded-full bg-brand-accent px-8 py-3 font-semibold text-brand hover:bg-white">
        Quero assessoria
      </Link>
    </section>
  )
}
