import React from 'react'

const SkillBar = ({ title, percent, list }) => (
  <div className="skill">
    <div className="skill-header">
      <strong>{title}</strong>
      <span className="skill-percent">{percent}%</span>
    </div>
    <div className="skill-bar" data-percent={percent}>
      <div className="skill-fill" style={{ width: `${percent}%` }}></div>
    </div>
    <div className="skill-list muted">{list}</div>
  </div>
)

export default function Educacion(){
  return (
    <section id="Educacion" className="animated-background">
      <div id="logos-fondo-container">
        <div className="logos-fondo-animado">
          <img src="/img/htt.png" alt="HTML Logo" />
          <img src="/img/cs.png" alt="CSS Logo" />
          <img src="/img/js.png" alt="JavaScript Logo" />
          <img src="/img/boostrap.jfif" alt="Bootstrap Logo" />
          <img src="/img/gitt.png" alt="Git Logo" />
          <img src="/img/vsualC.png" alt="VisualCode" />
          <img src="/img/tk.png" alt="tk" />
          <img src="/img/py.png" alt="py" />
          <img src="/img/node.png" alt="node" />
          <img src="/img/react.png" alt="react" />
          <img src="/img/gitt.png" alt="db" />
          <img src="/img/go.jpg" alt="go" />
          {/* Repetidos para scroll */}
          <img src="/img/htt.png" alt="HTML Logo" />
          <img src="/img/cs.png" alt="CSS Logo" />
          <img src="/img/js.png" alt="JavaScript Logo" />
        </div>
      </div>
      <div className="contenido-container">
        <div className="contenido-grid">
          <div className="educacion-panel" aria-labelledby="educacion-title">
            <h3 id="educacion-title">Educación</h3>
            <div className="timeline" role="list">
              <div className="timeline-item" role="listitem">
                <div className="timeline-year">2024</div>
                <div className="timeline-body">
                  <h4>Instituto Superior de Formación Docente y Técnico 210</h4>
                  <p className="muted">Analista de Sistemas</p>
                </div>
              </div>
              <div className="timeline-item" role="listitem">
                <div className="timeline-year">2021–2022</div>
                <div className="timeline-body">
                  <h4>Universitas Estudios Superiores</h4>
                  <p className="muted">Analista de Sistemas</p>
                </div>
              </div>
              <div className="timeline-item" role="listitem">
                <div className="timeline-year">2006–2009</div>
                <div className="timeline-body">
                  <h4>Universidad Nacional de La Plata (UNLP)</h4>
                  <p className="muted">Licenciatura en Informática</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="habilidades-panel" aria-labelledby="habilidades-title">
            <h3 id="habilidades-title">Habilidades</h3>
            <p className="muted">Resumen de competencias basado en el currículum.</p>

            <SkillBar title="Frontend" percent={90} list="HTML • CSS • JavaScript • React • Bootstrap" />
            <SkillBar title="Backend" percent={85} list="Python (Django) • Java • Spring Boot • Micronaut • Microservicios" />
            <SkillBar title="Bases de Datos" percent={80} list="PostgreSQL • MySQL • SQLite3" />
            <SkillBar title="Herramientas" percent={85} list="Git • VSCode • IntelliJ • Docker • Postman • Figma" />
          </aside>
        </div>
      </div>
    </section>
  )
}
