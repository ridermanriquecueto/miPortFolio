import React from 'react'

export default function Footer(){
  return (
    <footer>
      <div className="footer-column">
        <h3>Enlaces Importantes</h3>
        <ul>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/precios">Precios</a></li>
          <li><a href="/preguntas-frecuentes">Preguntas Frecuentes</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Políticas</h3>
        <ul>
          <li><a href="/politica-de-privacidad">Política de Privacidad</a></li>
          <li><a href="/politica-de-cookies">Política de Cookies</a></li>
          <li><a href="/terminos-de-servicio">Términos de Servicio</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Redes Sociales</h3>
        <ul>
          <li><a href="https://www.facebook.com/tudominio" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/tudominio" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com/tudominio" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}
