import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.json())

// Exemplo de rota de API segura (chaves ficam no servidor, nunca no frontend)
// app.post('/api/contato', async (req, res) => {
//   const apiKey = process.env.SMARTEN_API_KEY
//   // chame a API externa aqui usando apiKey
//   res.json({ ok: true })
// })

// Servir frontend em produção
app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
