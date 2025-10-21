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

import { useRef, useEffect, useState } from 'react'

const SkillBar = ({ title, percent, list, colorStart = 'var(--primary)', colorEnd = 'var(--accent)' }) => {
  const fillRef = useRef(null)
  const barRef = useRef(null)
  const percentRef = useRef(null)
  const [displayPercent, setDisplayPercent] = useState(0)

  useEffect(() => {
    const bar = barRef.current
    const fill = fillRef.current
    if (!bar || !fill) return

    // Inicialmente la barra está vacía
    fill.style.width = '0%'

    let rafId = null

    const animateNumber = (from, to, duration = 900) => {
      const start = performance.now()
      const step = (now) => {
        const elapsed = Math.min(now - start, duration)
        const t = elapsed / duration
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t // easeInOutQuad approx
        const value = Math.round(from + (to - from) * eased)
        setDisplayPercent(value)
        if (elapsed < duration) rafId = requestAnimationFrame(step)
      }
      rafId = requestAnimationFrame(step)
    }

    let timeoutId = null
    const onIntersect = (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // animar la anchura CSS (transición declarada en CSS)
          // aplicar color por skill
          fill.style.background = `linear-gradient(90deg, ${colorStart}, ${colorEnd})`
          fill.style.width = `${percent}%`
          // añadir clase 'filling' para glow/efecto extra
          fill.classList.add('filling')
          // animar el número
          animateNumber(0, percent, 1000)
          // añadir clase al número para pequeño pulso
          if (percentRef.current) percentRef.current.classList.add('animate')
          // quitar las clases de animación después de la duración para pulso único
          timeoutId = setTimeout(() => {
            try { fill.classList.remove('filling') } catch(e){}
            try { if (percentRef.current) percentRef.current.classList.remove('animate') } catch(e){}
          }, 1200)
          obs.unobserve(bar)
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.2 })
    observer.observe(bar)

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [percent])

  return (
    <div className="skill">
      <div className="skill-header">
        <strong>{title}</strong>
        <span ref={percentRef} className="skill-percent">{displayPercent}%</span>
      </div>
      <div ref={barRef} className="skill-bar" data-percent={percent}>
        <div ref={fillRef} className="skill-fill" />
      </div>
      <div className="skill-list muted">{list}</div>
    </div>
  )
}

export default function Educacion(){
  return (
    <section id="Educacion" className="animated-background">
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
          <img src={gitt} alt="db" />
          <img src={goLogo} alt="go" />
          {/* Repetidos para scroll */}
          <img src={htt} alt="HTML Logo" />
          <img src={cs} alt="CSS Logo" />
          <img src={jsLogo} alt="JavaScript Logo" />
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

            <SkillBar title="Frontend" percent={90} list="HTML • CSS • JavaScript • React • Bootstrap" colorStart="#2ee6c7" colorEnd="#ffb399" />
            <SkillBar title="Backend" percent={85} list="Python (Django) • Java • Spring Boot • Micronaut • Microservicios" colorStart="#ffb399" colorEnd="#ffd6c2" />
            <SkillBar title="Bases de Datos" percent={80} list="PostgreSQL • MySQL • SQLite3" colorStart="#8b5cf6" colorEnd="#06b6d4" />
            <SkillBar title="Herramientas" percent={85} list="Git • VSCode • IntelliJ • Docker • Postman • Figma" colorStart="#06b6d4" colorEnd="#2ee6c7" />
          </aside>
        </div>
      </div>
    </section>
  )
}
