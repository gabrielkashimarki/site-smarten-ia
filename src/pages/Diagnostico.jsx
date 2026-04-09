import { useState } from 'react'

export default function Diagnostico() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const data = Object.fromEntries(new FormData(e.target).entries())
    try {
      // Chama o backend seguro (server.js) — nunca exponha chaves no frontend
      const res = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-extrabold md:text-5xl">Diagnóstico gratuito</h1>
      <p className="mt-4 text-white/60">
        Responda algumas perguntas rápidas e um especialista entra em contato com um plano inicial.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <Field name="nome" label="Nome" required />
        <Field name="email" label="E-mail" type="email" required />
        <Field name="empresa" label="Empresa" />
        <Field name="faturamento" label="Faturamento mensal aproximado" />
        <div>
          <label className="mb-2 block text-sm font-medium text-white/80">Conte seu desafio</label>
          <textarea name="mensagem" rows="4" className="w-full rounded-lg border border-white/10 bg-brand px-4 py-3 text-white outline-none focus:border-brand-accent" />
        </div>
        <button type="submit" disabled={status === 'loading'} className="rounded-full bg-brand-accent px-8 py-3 font-semibold text-brand hover:bg-white disabled:opacity-50">
          {status === 'loading' ? 'Enviando...' : 'Solicitar diagnóstico'}
        </button>
        {status === 'ok' && <p className="text-sm text-emerald-400">Recebido! Em breve entraremos em contato.</p>}
        {status === 'error' && <p className="text-sm text-rose-400">Erro ao enviar. Tente novamente.</p>}
      </form>
    </section>
  )
}

function Field({ name, label, type = 'text', required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/80">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border border-white/10 bg-brand px-4 py-3 text-white outline-none focus:border-brand-accent" />
    </div>
  )
}
