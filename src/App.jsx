import React, { useEffect } from 'react'
import './styles.css'
import Header from './components/Header'
import AcercaDeMi from './components/AcercaDeMi'
import Curriculum from './components/Curriculum'
import Contacto from './components/Contacto'
import Portafolio from './components/Portafolio'
import Educacion from './components/Educacion'
import Footer from './components/Footer'
import Modal from './components/Modal'
import FloatingLogos from './components/FloatingLogos'

export default function App(){
  useEffect(() => {
    // Cargar scripts legacy que controlan partículas y otras animaciones
    const scripts = ['/js/particles.js', '/js/app.js']
    const created = scripts.map(src => {
      const s = document.createElement('script')
      s.src = src
      s.async = false
      document.body.appendChild(s)
      return s
    })

    return () => created.forEach(s => s.remove())
  }, [])

  return (
    <>
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}></div>
      <FloatingLogos />
      <div id="logos-fondo-global-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}></div>

      <Header />

      <main>
        <AcercaDeMi />
        <Curriculum />
        <Contacto />
        <Portafolio />
        <Educacion />
      </main>

      <Footer />

      <Modal />
    </>
  )
}
