import React from 'react'
import htt from '../../img/htt.png'
import cs from '../../img/cs.png'
import jsLogo from '../../img/js.png'
import bootstrapImg from '../../img/boostrap.jfif'
import gitt from '../../img/gitt.png'
import vsual from '../../img/vsualC.png'
import tk from '../../img/tk.png'
import py from '../../img/py.png'
import nodeLogo from '../../img/node.png'
import reactLogo from '../../img/react.png'
import goLogo from '../../img/go.jpg'

// Componente para mostrar grupos de habilidades
const SkillGroup = ({ title, list, iconColor = '#38BDF8' }) => (
  <div className="skill-card">
    <div className="skill-card-header">
      <div
        className="skill-dot"
        style={{ backgroundColor: iconColor }}
      ></div>
      <strong>{title}</strong>
    </div>

    <div className="skill-list-text">
      {list}
    </div>
  </div>
)

export default function Educacion() {
  return (
    <section id="Educacion" className="animated-background">

      {/* Fondo animado */}
      <div id="logos-fondo-container">
        <div className="logos-fondo-animado">
          <img src={htt} alt="HTML Logo" />
          <img src={cs} alt="CSS Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />
          <img src={bootstrapImg} alt="Bootstrap Logo" />
          <img src={gitt} alt="Git Logo" />
          <img src={vsual} alt="Visual Studio Code Logo" />
          <img src={tk} alt="Java Logo" />
          <img src={py} alt="Python Logo" />
          <img src={nodeLogo} alt="Node.js Logo" />
          <img src={reactLogo} alt="React Logo" />
          <img src={goLogo} alt="Go Logo" />

          {/* Repetidos para el efecto infinito */}
          <img src={htt} alt="HTML Logo" />
          <img src={cs} alt="CSS Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />
          <img src={bootstrapImg} alt="Bootstrap Logo" />
          <img src={gitt} alt="Git Logo" />
          <img src={vsual} alt="Visual Studio Code Logo" />
          <img src={tk} alt="Java Logo" />
          <img src={py} alt="Python Logo" />
          <img src={nodeLogo} alt="Node.js Logo" />
          <img src={reactLogo} alt="React Logo" />
          <img src={goLogo} alt="Go Logo" />
        </div>
      </div>

      <div className="contenido-container">
        <div className="contenido-grid">

          {/* EDUCACIÓN */}
          <div className="educacion-panel">
            <h3 id="educacion-title">Educación</h3>

            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-year">2021 – 2024</div>

                <div className="timeline-body">
                  <h4>Técnico Superior en Análisis de Sistemas</h4>
                  <p className="muted">
                    Instituto Superior de Formación Docente y Técnica N.º 210
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-year">2006 – 2009</div>

                <div className="timeline-body">
                  <h4>Licenciatura en Informática (Estudios cursados)</h4>
                  <p className="muted">
                    Universidad Nacional de La Plata (UNLP)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* CONOCIMIENTOS TÉCNICOS */}
          <aside className="habilidades-panel">

            <h3 id="habilidades-title">Conocimientos Técnicos</h3>

            <p className="muted mb-4">
              Tecnologías, herramientas y frameworks con los que he trabajado y en los que me he capacitado.
            </p>

            <SkillGroup
              title="Frontend"
              list="React • HTML5 • CSS3 • JavaScript • Bootstrap"
              iconColor="#2ee6c7"
            />

            <SkillGroup
              title="Backend"
              list="Java • Spring Boot • Spring Security • Python • Django • Flask • Node.js • Micronaut • Go • APIs REST"
              iconColor="#ffb399"
            />

            <SkillGroup
              title="Bases de Datos"
              list="PostgreSQL • MySQL • SQLite"
              iconColor="#8b5cf6"
            />

            <SkillGroup
              title="Herramientas"
              list="Git • GitHub • Docker • Postman • Visual Studio Code • IntelliJ IDEA"
              iconColor="#06b6d4"
            />

          </aside>

        </div>
      </div>

    </section>
  )
}