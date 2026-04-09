import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.15),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent">Smarten Digital</p>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Eleve seu negócio para um <span className="text-brand-accent">próximo nível</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Promova sua marca, alcance clientes ultra-qualificados e venda mais com estratégias de marketing digital orientadas a performance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/diagnostico" className="rounded-full bg-brand-accent px-7 py-3 font-semibold text-brand hover:bg-white">
              Diagnóstico gratuito
            </Link>
            <Link to="/solucoes-execucao" className="rounded-full border border-white/20 px-7 py-3 font-semibold hover:border-brand-accent hover:text-brand-accent">
              Nossas soluções
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold md:text-4xl">O que fazemos</h2>
          <p className="mt-3 max-w-2xl text-white/60">
            Estratégia, execução e inteligência de dados — tudo sob um único time.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Tráfego pago', desc: 'Google Ads, Meta Ads e LinkedIn Ads com foco em ROAS real.' },
              { title: 'SEO', desc: 'Posicionamento orgânico sustentável e conteúdo estratégico.' },
              { title: 'Conteúdo & Social', desc: 'Criação de conteúdo que constrói marca e gera autoridade.' },
              { title: 'CRM & Automação', desc: 'Integração de funis, automação e nutrição de leads.' },
              { title: 'Branding', desc: 'Identidade visual e posicionamento de marca.' },
              { title: 'Analytics', desc: 'GA4, dashboards e decisões baseadas em dados.' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-accent/50">
                <div className="mb-4 inline-block rounded-lg bg-brand-accent/10 p-3 text-brand-accent">◆</div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Pronto para vender mais?</h2>
        <p className="mt-4 text-white/60">
          Solicite um diagnóstico gratuito e descubra oportunidades escondidas no seu funil.
        </p>
        <Link to="/contato" className="mt-8 inline-block rounded-full bg-brand-accent px-8 py-3 font-semibold text-brand hover:bg-white">
          Falar com um especialista
        </Link>
      </section>
    </>
  )
}
