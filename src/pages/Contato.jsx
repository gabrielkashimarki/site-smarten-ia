export default function Contato() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-extrabold md:text-5xl">Contato</h1>
      <p className="mt-4 text-white/60">Estamos prontos para ouvir você.</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-xl font-semibold">Fale com a gente</h2>
          <ul className="mt-6 space-y-4 text-white/70">
            <li><strong className="text-white">E-mail:</strong> contato@smarten.digital</li>
            <li><strong className="text-white">WhatsApp:</strong> +55 (41) 9984-8357</li>
            <li><strong className="text-white">Curitiba — PR</strong></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-xl font-semibold">Horário de atendimento</h2>
          <p className="mt-6 text-white/70">Segunda a sexta<br />09:00 às 18:00</p>
        </div>
      </div>
    </section>
  )
}
