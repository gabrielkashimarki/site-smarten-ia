# Site Smarten IA

Site institucional da Smarten Digital em **React + Vite + Tailwind CSS**, compatível com os dois ambientes da Hostinger:

- **Hospedagem Compartilhada** (Apache/LiteSpeed) — build estático
- **Hospedagem Node.js** — Express servindo o build + rotas de API seguras

## Scripts

```bash
npm install       # instala dependências
npm run dev       # desenvolvimento (Vite)
npm run build     # gera build em dist/
npm run preview   # preview local do build
npm start         # inicia server.js (produção Node)
```

## Deploy — Hostinger Compartilhada

1. `npm run build` localmente
2. Faça upload do conteúdo de `dist/` para `public_html/`
3. Faça upload de `public/.htaccess` para `public_html/.htaccess`

## Deploy — Hostinger Node.js

1. Faça upload do projeto inteiro
2. No terminal da Hostinger: `npm install && npm run build`
3. A Hostinger roda `npm start` automaticamente
4. Configure variáveis de ambiente (chaves de API) no painel

## Segurança

- Chaves de API **nunca** vão no frontend
- Frontend chama `/api/...` no próprio servidor
- `server.js` consome APIs externas usando `process.env.*`

## Estrutura

```
/
├── public/.htaccess      # SPA fallback para Apache/LiteSpeed
├── src/                  # React
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server.js             # Express (Hostinger Node)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── index.html
```
