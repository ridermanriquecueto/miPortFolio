import React from 'react'

export default function Curriculum() {
  return (
    <section id="Curriculum" className="animated-background">
      <div id="particles-js-curriculum"></div>
      <article className="curriculum">
        <h2>¿Quieres descargar mi currículum? Haz clic abajo</h2>
        <a
          href="https://drive.google.com/file/d/1G3cHl5q-CUrN15-7hhkkztvCs85AFfOs/view?usp=drive_link"
          
          aria-label="Descargar currículum"
          target="_blank"
          className="btn"
          id="download-cv"
          rel="noopener noreferrer"
        >
          Descargar mi CV
        </a>
      </article>
    </section>
  )
}
