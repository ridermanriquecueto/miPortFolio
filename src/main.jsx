import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Importa tus estilos desde src/styles.css (que re-exporta ../css/styles.css)
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
