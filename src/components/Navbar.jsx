import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { to: '/smarten', label: 'Smarten' },
  { to: '/solucoes-assessoria', label: 'Assessoria' },
  { to: '/solucoes-execucao', label: 'Execução' },
  { to: '/conteudo', label: 'Conteúdo' },
  { to: '/diagnostico', label: 'Diagnóstico' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          Smarten<span className="text-brand-accent">.</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-brand-accent ${
                  isActive ? 'text-brand-accent' : 'text-white/80'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/diagnostico"
          className="hidden rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-brand hover:bg-white md:inline-block"
        >
          Diagnóstico gratuito
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
            <span className="block h-0.5 w-6 bg-white" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-white/80"
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
