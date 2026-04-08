import React, { useEffect } from 'react'
import './styles.css'
import Header from './components/Header'
import AcercaDeMi from './components/AcercaDeMi'
import Curriculum from './components/Curriculum'
import Contacto from './components/Contacto'
import Proyectos from './components/Proyectos.jsx'
import Educacion from './components/Educacion'
import Footer from './components/Footer'
import Modal from './components/Modal'
import FloatingLogos from './components/FloatingLogos'

export default function App(){
  useEffect(() => {
    // IMPORTANTE: Quitamos la barra inicial '/' para que sea ruta relativa './'
    // Estos archivos DEBEN estar en tu carpeta 'public/js/' de tu proyecto
    const scripts = ['js/particles.js', 'js/app.js']
    
    const created = scripts.map(src => {
      const s = document.createElement('script')
      // Usamos el nombre del repo si es necesario, o simplemente ruta relativa
      s.src = src 
      s.async = false
      document.body.appendChild(s)
      return s
    })

    // Limpieza al desmontar el componente
    return () => {
      created.forEach(s => {
        if (document.body.contains(s)) {
          document.body.removeChild(s)
        }
      })
    }
  }, [])

  return (
    <>
      {/* Fondo y efectos */}
      <div id="particles-js" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}></div>
      <FloatingLogos />
      <div id="logos-fondo-global-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}></div>

      <Header />

      {/* Contenedor principal con IDs para el menú */}
      <main className="container-main">
        
        <section id="about">
          <AcercaDeMi />
        </section>

        <section id="projects"> {/* Este ID es el que busca el menú "Proyectos" */}
          <Proyectos />
        </section>

        <section id="education">
          <Educacion />
        </section>

        <section id="cv">
          <Curriculum />
        </section>

        <section id="contact">
          <Contacto />
        </section>

      </main>

      <Footer />
      <Modal />
    </>
  )
}