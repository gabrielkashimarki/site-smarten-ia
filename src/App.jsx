import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Smarten from './pages/Smarten.jsx'
import SolucoesAssessoria from './pages/SolucoesAssessoria.jsx'
import SolucoesExecucao from './pages/SolucoesExecucao.jsx'
import Conteudo from './pages/Conteudo.jsx'
import Diagnostico from './pages/Diagnostico.jsx'
import Contato from './pages/Contato.jsx'
import Privacidade from './pages/Privacidade.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smarten" element={<Smarten />} />
          <Route path="/solucoes-assessoria" element={<SolucoesAssessoria />} />
          <Route path="/solucoes-execucao" element={<SolucoesExecucao />} />
          <Route path="/conteudo" element={<Conteudo />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
