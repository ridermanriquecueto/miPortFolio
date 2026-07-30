import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">

      {/* Navegación */}
      <div className="footer-column">
        <h3>Navegación</h3>

        <ul>
          <li><a href="#about">Acerca de mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#Educacion">Conocimientos Técnicos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      {/* Información */}
      <div className="footer-column">
        <h3>Información</h3>

        <ul>
          <li>Analista de Sistemas</li>
          <li>Backend Developer</li>
          <li>📍 La Plata, Buenos Aires</li>
          <li>💼 Disponible para trabajo Remoto · Híbrido · Presencial</li>
        </ul>
      </div>

      {/* Contacto */}
      <div className="footer-column">
        <h3>Contacto</h3>

        <ul>
          <li>
            <a href="mailto:ridermc@gmail.com">
              📧 ridermc@gmail.com
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ridermanriquecueto"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/rider-manrique"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/TU_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <hr />

        <p>
          © 2026 Rider Manrique | Analista de Sistemas & Backend Developer
        </p>

        <p>
          Desarrollado con React, JavaScript y Bootstrap.
        </p>
      </div>

    </footer>
  )
}