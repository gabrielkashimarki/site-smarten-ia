import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import homeHtml from './mirror/home.html?raw'
import sobreHtml from './mirror/sobre.html?raw'
import assessoriaHtml from './mirror/solucoes-assessoria.html?raw'
import execucaoHtml from './mirror/solucoes-execucao.html?raw'
import conteudoHtml from './mirror/conteudo.html?raw'
import diagnosticoHtml from './mirror/diagnostico.html?raw'
import contatoHtml from './mirror/contato.html?raw'
import casesHtml from './mirror/cases.html?raw'
import privacidadeHtml from './mirror/politica-de-privacidade.html?raw'

function MirrorPage({ html }) {
  const ref = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const root = ref.current
    if (!root) return

    // Intercept internal link clicks for SPA navigation
    function onClick(e) {
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      if (href.startsWith('http') && !href.includes('smarten.digital')) return
      if (a.target === '_blank') return

      let path = href
      if (path.startsWith('http')) {
        try { path = new URL(path).pathname } catch { return }
      }
      // Only intercept routes we handle
      const routes = ['/', '/smarten/sobre', '/solucoes-assessoria', '/solucoes-execucao',
                      '/conteudo', '/diagnostico', '/contato', '/cases', '/politica-de-privacidade']
      const clean = path.replace(/\/$/, '') || '/'
      if (routes.includes(clean)) {
        e.preventDefault()
        navigate(clean)
      }
    }
    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [navigate])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MirrorPage html={homeHtml} />} />
      <Route path="/smarten/sobre" element={<MirrorPage html={sobreHtml} />} />
      <Route path="/solucoes-assessoria" element={<MirrorPage html={assessoriaHtml} />} />
      <Route path="/solucoes-execucao" element={<MirrorPage html={execucaoHtml} />} />
      <Route path="/conteudo" element={<MirrorPage html={conteudoHtml} />} />
      <Route path="/diagnostico" element={<MirrorPage html={diagnosticoHtml} />} />
      <Route path="/contato" element={<MirrorPage html={contatoHtml} />} />
      <Route path="/cases" element={<MirrorPage html={casesHtml} />} />
      <Route path="/politica-de-privacidade" element={<MirrorPage html={privacidadeHtml} />} />
      <Route path="*" element={<MirrorPage html={homeHtml} />} />
    </Routes>
  )
}
