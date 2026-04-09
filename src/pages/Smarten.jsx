export default function Smarten() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-extrabold md:text-5xl">Sobre a Smarten</h1>
      <p className="mt-6 text-lg text-white/70">
        A Smarten Digital é uma agência de marketing focada em performance, estratégia e
        crescimento sustentável para empresas que querem sair do improviso.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { n: '+50', l: 'Clientes atendidos' },
          { n: '10+', l: 'Anos de experiência' },
          { n: '24/7', l: 'Monitoramento de campanhas' },
        ].map((i) => (
          <div key={i.l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <div className="text-4xl font-extrabold text-brand-accent">{i.n}</div>
            <div className="mt-2 text-sm text-white/60">{i.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-16 space-y-6 text-white/70">
        <h2 className="text-2xl font-bold text-white">Nossa missão</h2>
        <p>
          Transformar marketing em ciência. Operamos com processos claros, dados e
          hipóteses testáveis — nada de "achismo" criativo.
        </p>
        <h2 className="text-2xl font-bold text-white">Como trabalhamos</h2>
        <p>
          Do diagnóstico inicial ao acompanhamento mensal, cada decisão é apoiada por
          métricas. Entregamos estratégia, execução e relatórios compreensíveis.
        </p>
      </div>
    </section>
  )
}
