import React from 'react'
import ProjectCard from './ProjectCard'

// Importaciones corregidas (Asegurate que los archivos estén en src/img)
import capMundoInicio from '../../img/LIM_1.png' 
import capMundoAdmin from '../../img/ADMIN_5.png'

// Tus otros imports que ya funcionaban
import cap1 from '../../img/Captura de pantalla 2025-10-06 132508.png'
import capCatalogo from '../../img/captura-catalogo.png'
import capEstacionamiento from '../../img/captura_estacionamiento.png'
import img2023 from '../../img/img_2023.jpeg'
import inicioHilos from '../../img/inicio_hilos.png'
import capStock from '../../img/shopping-ropa.png'

export default function Portafolio(){
  const projects = [
    {
      imgSrc: capMundoInicio, 
      title: "Mundo Limpieza 526 – E-commerce Engine & Dashboard",
      description: "Solución integral para distribuidora. Incluye catálogo dinámico, gestión de stock en tiempo real y un panel de administración avanzado para pedidos y auditoría.",
      technologies: "Python (Django) · PostgreSQL/SQLite · Bootstrap 5 · JavaScript (WhatsApp API). Rol: Backend Developer & Analista.",
      repoLink: "https://github.com/ridermanriquecueto/tienda-limpieza.git",
      liveLink: "https://mundolimpieza526.pythonanywhere.com/" 
    },
    {
      imgSrc: capStock, 
      title: "Sistema de Gestión de Stock & Auditoría",
      description: "Sistema productivo para administración de inventarios con panel de control. Incluye lógica de seguridad avanzada y seguimiento de movimientos.",
      technologies: "Python (Flask) · SQLite · Bootstrap · Seguridad: Monitoreo de IP y Logs de Auditoría. Rol: Analista Backend.",
      repoLink: "https://github.com/ridermanriquecueto/shopping-ropa.git",
      liveLink: "https://tinyurl.com/indumentaria-popys"
    },
    {
      imgSrc: cap1,
      title: "SportRyder",
      description: "E-commerce para venta de lencería con carrito, gestión de productos y proceso de compra. Interfaz responsiva y experiencia enfocada en conversión.",
      technologies: "Java (Spring Boot) · HTML · CSS · Bootstrap · JavaScript · Rol: Full‑Stack.",
      repoLink: "https://github.com/ridermanriquecueto/lenceria-online.git"
    },
    {
      imgSrc: capCatalogo,
      title: "Tienda de Ropa",
      description: "Aplicación web de comercio electrónico desarrollada con Django (Python) para la gestión y venta de ropa.",
      technologies: "Python 3, Django, Bootstrap, HTML, CSS, JavaScript, SQLite. Rol: Desarrollador Individual.",
      repoLink: "https://github.com/ridermanriquecueto/fashion-store.git"
    },
    {
      imgSrc: capEstacionamiento,
      title: "Estacionamiento - Gestión",
      description: "Aplicación / demo de gestión de estacionamiento y reservas. Interfaz responsiva con control de espacios.",
      technologies: "HTML · CSS · JavaScript · Backend simple",
      repoLink: ""
    },
    {
      imgSrc: img2023,
      title: "SIMEF - Sistema de Gestión de Instituto",
      description: "Sistema web para gestión de inscripciones a materias y exámenes finales.",
      technologies: "HTML, CSS, Bootstrap, JavaScript, Python, Django, MySQL.",
      repoLink: "https://github.com/ridermanriquecueto/Instituto_210"
    },
    {
      imgSrc: inicioHilos,
      title: "La Casa de Hilos y Repuestos",
      description: "E-commerce para venta de hilos y repuestos con catálogo y carrito.",
      technologies: "Python, Django, HTML, CSS, JavaScript.",
      repoLink: ""
    }
  ]

  return (
    <section id="PortFolio" className="animated-background">
      <div id="particles-js-port-folio"></div>
      <h2>Proyectos </h2>

      {/* TARJETA MANUAL PARA TALENTCIRCLE */}
      <div className="project-card" style={{ marginBottom: '30px', padding: '20px', borderRadius: '8px' }}>
        <div className="project-video-container" style={{ width: '100%', maxWidth: '560px', margin: '0 auto 15px auto' }}>
          <iframe 
            width="100%" 
            height="315" 
            /* IMPORTANTE: Fijate que al final le sumamos '?start=15'. 
              Cambiá el '15' por la cantidad de segundos que quieras saltearte.
            */
            src="https://www.youtube.com/embed/8cBgyq6NUqU?start=15" 
            title="TalentCircle — Plataforma Integral con IA" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            style={{ borderRadius: '6px', display: 'block' }}
          ></iframe>
        </div>

        <div className="project-info">
          <h4>TalentCircle — Plataforma Integral con IA</h4>
          <p className="project-description">
            Plataforma web diseñada para automatizar el monitoreo de comunidades tecnológicas, analizar datos de rendimiento semanal de forma centralizada y generar borradores de contenido optimizados mediante la integración de Inteligencia Artificial (Gemini API). Desarrollado bajo metodologías ágiles (Scrum), logrando entregar un MVP completo y listo para producción.
          </p>
          <p className="project-tech">
            <strong>Tecnologías:</strong> Java (Spring Boot) · PostgreSQL · Docker · Gemini API · React · Bootstrap. Rol: Project Manager & Backend Developer.
          </p>
          
          <div className="project-buttons" style={{ marginTop: '15px' }}>
            <a href="https://github.com/ridermanriquecueto/S04-26-Equipo-22-Web-App-Development" target="_blank" rel="noreferrer" className="btn-repo" style={{ marginRight: '15px', fontWeight: 'bold' }}>
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* RENDERIZADO CLÁSICO DE TUS OTROS PROYECTOS */}
      {projects.map((p, i) => (
        <ProjectCard key={i} imgSrc={p.imgSrc} title={p.title} description={p.description} technologies={p.technologies} repoLink={p.repoLink} liveLink={p.liveLink} />
      ))}
    </section>
  )
}