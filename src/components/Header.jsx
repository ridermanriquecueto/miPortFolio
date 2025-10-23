import React, { useState } from 'react'
import logoImg from '../../img/logo.png'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header>
      <a href="#AcercaDeMi" aria-label="Ir a la sección de AcercaDeMi">
        <img src={logoImg} alt="RyderMan" className="logo" />
      </a>

      <nav aria-label="Menú principal">
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Abrir menú</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <ul id="menu" className={open ? 'open' : ''}>
          <li className="menu-item"><a href="#AcercaDeMi" className="active">Acerca de mí</a></li>
          <li className="menu-item"><a href="#PortFolio" className="active">Portafolio</a></li>
          <li className="menu-item"><a href="#Educacion" className="active">Educación</a></li>
          <li className="menu-item"><a href="#Curriculum" id="curriculum-link" className="active">Currículum</a></li>
          <li className="menu-item"><a href="#contacto" className="active">Contacto</a></li>
          
          
        </ul>
      </nav>
    </header>
  )
}
