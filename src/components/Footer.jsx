import React from 'react'

export default function Footer(){
  return (
    <footer>
      {/* Columna 1: Navegación técnica */}
      <div className="footer-column">
        <h3>// Endpoints</h3>
        <ul>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#educacion">Formación</a></li>
        </ul>
      </div>

      {/* Columna 2: Info Legal o de Contacto */}
      <div className="footer-column">
        <h3>// Protocolos</h3>
        <ul>
          <li><a href="/politica-de-privacidad">Privacidad</a></li>
          <li><a href="/terminos-de-servicio">Términos</a></li>
          <li><a href="mailto:tu-email@ejemplo.com">Contacto Directo</a></li>
        </ul>
      </div>

      {/* Columna 3: Tus Redes Reales */}
      <div className="footer-column">
        <h3>// Social Sync</h3>
        <ul>
          <li>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}