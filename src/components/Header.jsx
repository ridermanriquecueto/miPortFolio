import React, { useState } from 'react'
import logoImg from '../../img/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <a href="#about" aria-label="Ir al inicio">
        <img src={logoImg} alt="RyderMan" className="logo" />
      </a>

      <nav aria-label="Menú principal">
        <button
          className="menu-toggle"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <ul id="menu" className={open ? 'open' : ''}>
          {/* IMPORTANTE: Los href deben coincidir con los id de App.jsx */}
          <li className="menu-item"><a href="#about">Acerca de mí</a></li>
          <li className="menu-item"><a href="#projects">Proyectos</a></li> 
          <li className="menu-item"><a href="#education">Educación</a></li>
          <li className="menu-item"><a href="#cv">Currículum</a></li>
          <li className="menu-item"><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}