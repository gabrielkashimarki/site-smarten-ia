const posts = [
  { slug: 'marketing-digital-curitiba', title: 'Marketing digital em Curitiba: guia para crescer seu negócio', date: '2025-11-20', excerpt: 'Um panorama prático para empresas curitibanas que querem sair do lugar.' },
  { slug: 'como-escolher-agencias', title: 'Como escolher agências de marketing digital', date: '2025-11-04', excerpt: 'Critérios objetivos para não errar na contratação.' },
  { slug: 'google-analytics-4-pme', title: 'Google Analytics 4 para PMEs: monitoramento essencial', date: '2025-11-27', excerpt: 'O que medir e como configurar sem complicar.' },
  { slug: 'linkedin-ads-b2b', title: 'LinkedIn Ads: guia prático para gerar leads B2B qualificados', date: '2025-11-19', excerpt: 'Segmentação, formatos e orçamento para B2B.' },
  { slug: 'google-meu-negocio', title: 'Google Meu Negócio: guia de visibilidade local', date: '2025-11-26', excerpt: 'Aumente sua presença nas buscas locais.' },
  { slug: 'redes-sociais-imobiliario', title: '7 boas práticas de redes sociais para o setor imobiliário', date: '2025-11-28', excerpt: 'Conteúdo que converte no mercado imobiliário.' },
]

export default function Conteudo() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-extrabold md:text-5xl">Conteúdo</h1>
      <p className="mt-4 text-white/60">Insights, guias e estudos de caso sobre marketing digital.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.slug} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-accent/50">
            <div className="mb-3 text-xs text-white/40">{new Date(p.date).toLocaleDateString('pt-BR')}</div>
            <h2 className="text-lg font-semibold leading-snug group-hover:text-brand-accent">{p.title}</h2>
            <p className="mt-3 text-sm text-white/60">{p.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand-accent">Ler mais →</span>
          </article>
        ))}
      </div>
    </section>
  )
}
