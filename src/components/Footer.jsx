import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold">Smarten<span className="text-brand-accent">.</span></div>
          <p className="mt-3 text-sm text-white/60">
            Agência de marketing digital focada em performance, estratégia e resultados reais.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Empresa</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/smarten" className="hover:text-brand-accent">Sobre</Link></li>
            <li><Link to="/conteudo" className="hover:text-brand-accent">Blog</Link></li>
            <li><Link to="/contato" className="hover:text-brand-accent">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Soluções</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/solucoes-assessoria" className="hover:text-brand-accent">Assessoria</Link></li>
            <li><Link to="/solucoes-execucao" className="hover:text-brand-accent">Execução</Link></li>
            <li><Link to="/diagnostico" className="hover:text-brand-accent">Diagnóstico</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Legal</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link to="/politica-de-privacidade" className="hover:text-brand-accent">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Smarten Digital. Todos os direitos reservados.
      </div>
    </footer>
  )
}
