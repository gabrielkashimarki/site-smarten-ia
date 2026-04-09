import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <h1 className="text-6xl font-extrabold text-brand-accent">404</h1>
      <p className="mt-4 text-white/60">Página não encontrada.</p>
      <Link to="/" className="mt-8 rounded-full bg-brand-accent px-8 py-3 font-semibold text-brand hover:bg-white">
        Voltar para o início
      </Link>
    </section>
  )
}
