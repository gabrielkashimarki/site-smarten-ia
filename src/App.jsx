import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef, useMemo } from 'react'
import manifest from './mirror/manifest.json'

// Load all page HTMLs at build time
const pageModules = import.meta.glob('./mirror/pages/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
})

// Build route → html lookup
const routeHtml = {}
for (const [route, filename] of Object.entries(manifest)) {
  const key = `./mirror/pages/${filename}`
  if (pageModules[key]) routeHtml[route] = pageModules[key]
}

function normalize(p) {
  if (!p) return '/'
  const clean = p.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const ref = useRef(null)

  const html = useMemo(() => {
    const path = normalize(location.pathname)
    return routeHtml[path] || routeHtml['/'] || '<h1>Página não encontrada</h1>'
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const root = ref.current
    if (!root) return
    function onClick(e) {
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
      if (a.target === '_blank') return

      let path = href
      if (path.startsWith('http')) {
        try {
          const u = new URL(path)
          if (!u.hostname.includes('smarten.digital') && u.hostname !== window.location.hostname) return
          path = u.pathname
        } catch {
          return
        }
      }
      const norm = normalize(path)
      if (routeHtml[norm]) {
        e.preventDefault()
        navigate(norm)
      }
    }
    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [navigate, html])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
