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

// Nuevo componente para las habilidades (más limpio, sin porcentajes)
const SkillGroup = ({ title, list, iconColor = '#38BDF8' }) => (
  <div className="skill-card">
    <div className="skill-card-header">
      <div className="skill-dot" style={{ backgroundColor: iconColor }}></div>
      <strong>{title}</strong>
    </div>
    <div className="skill-list-text">{list}</div>
  </div>
)

export default function Educacion() {
  return (
    <section id="Educacion" className="animated-background">
      {/* Mantenemos tu genial fondo de logos animados */}
      <div id="logos-fondo-container">
        <div className="logos-fondo-animado">
          <img src={htt} alt="HTML Logo" />
          <img src={cs} alt="CSS Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />
          <img src={bootstrapImg} alt="Bootstrap Logo" />
          <img src={gitt} alt="Git Logo" />
          <img src={vsual} alt="VisualCode" />
          <img src={tk} alt="tk" />
          <img src={py} alt="py" />
          <img src={nodeLogo} alt="node" />
          <img src={reactLogo} alt="react" />
          <img src={goLogo} alt="go" />
          {/* Repetidos para el efecto de scroll infinito */}
          <img src={htt} alt="HTML Logo" />
          <img src={cs} alt="CSS Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />
        </div>
      </div>

      <div className="contenido-container">
        <div className="contenido-grid">
          
          {/* PANEL DE EDUCACIÓN */}
          <div className="educacion-panel">
            <h3 id="educacion-title">Educación</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2021–2024</div>
                <div className="timeline-body">
                  <h4>Analista de Sistemas</h4>
                  <p className="muted">Instituto Superior de Formación Docente y Técnico 210</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2006–2009</div>
                <div className="timeline-body">
                  <h4>Licenciatura en Informática</h4>
                  <p className="muted">Universidad Nacional de La Plata (UNLP)</p>
                </div>
              </div>
            </div>
          </div>

          {/* PANEL DE HABILIDADES (Ahora sin barras de carga) */}
          <aside className="habilidades-panel">
            <h3 id="habilidades-title">Stack Tecnológico</h3>
            <p className="muted mb-4">Competencias técnicas y herramientas de desarrollo.</p>

            <SkillGroup 
              title="Frontend" 
              list="HTML5 • CSS3 • JavaScript • React • Bootstrap" 
              iconColor="#2ee6c7" 
            />
            <SkillGroup 
              title="Backend" 
              list="Python (Django) • Java (Spring Boot, Micronaut) • Microservicios" 
              iconColor="#ffb399" 
            />
            <SkillGroup 
              title="Bases de Datos" 
              list="PostgreSQL • MySQL • SQLite3" 
              iconColor="#8b5cf6" 
            />
            <SkillGroup 
              title="Herramientas" 
              list="Git • Docker • Postman • VSCode • IntelliJ" 
              iconColor="#06b6d4" 
            />
          </aside>

        </div>
      </div>
    </section>
  )
}