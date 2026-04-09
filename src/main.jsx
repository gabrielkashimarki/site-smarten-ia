import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import headHtml from './mirror/head.html?raw'
import './index.css'

// Inject the original Smarten Digital CSS/styles into document.head
const container = document.createElement('div')
container.innerHTML = headHtml
Array.from(container.childNodes).forEach((n) => {
  if (n.nodeType === 1) {
    const tag = n.tagName
    if (tag === 'LINK' || tag === 'STYLE') {
      const clone = document.createElement(tag)
      for (const attr of n.attributes) clone.setAttribute(attr.name, attr.value)
      clone.innerHTML = n.innerHTML
      document.head.appendChild(clone)
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
