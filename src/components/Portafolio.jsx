import React from 'react'
import ProjectCard from './ProjectCard'

export default function Portafolio(){
  const projects = [
    {
      imgSrc: "/img/Captura de pantalla 2025-10-06 132508.png",
      title: "SportRyder",
      description: "E-commerce para venta de lencería con carrito, gestión de productos y proceso de compra. Interfaz responsiva y experiencia enfocada en conversión.",
      technologies: "Java (Spring Boot) · HTML · CSS · Bootstrap · JavaScript · Rol: Full‑Stack.",
      repoLink: "https://github.com/ridermanriquecueto/lenceria-online.git"
    },
    {
      imgSrc: "/img/captura-catalogo.png",
      title: "Tienda de Ropa",
      description: "Aplicación web de comercio electrónico desarrollada con Django (Python) para la gestión y venta de ropa.",
      technologies: "Python 3, Django, Bootstrap, HTML, CSS, JavaScript, SQLite. Rol: Desarrollador Individual.",
      repoLink: "https://github.com/ridermanriquecueto/fashion-store.git"
    },
    {
      imgSrc: "/img/captura_estacionamiento.png",
      title: "Estacionamiento - Gestión",
      description: "Aplicación / demo de gestión de estacionamiento y reservas. Interfaz responsiva con control de espacios.",
      technologies: "HTML · CSS · JavaScript · Backend simple",
      repoLink: ""
    },
    {
      imgSrc: "/img/img_2023.jpeg",
      title: "SIMEF - Sistema de Gestión de Instituto",
      description: "Sistema web para gestión de inscripciones a materias y exámenes finales.",
      technologies: "HTML, CSS, Bootstrap, JavaScript, Python, Django, MySQL.",
      repoLink: "https://github.com/ridermanriquecueto/Instituto_210"
    },
    {
      imgSrc: "/img/inicio_hilos.png",
      title: "La Casa de Hilos y Repuestos",
      description: "E-commerce para venta de hilos y repuestos con catálogo y carrito.",
      technologies: "Python, Django, HTML, CSS, JavaScript.",
      repoLink: ""
    }
  ]

  return (
    <section id="PortFolio" className="animated-background">
      <div id="particles-js-port-folio"></div>
      <h2>Proyectos Realizados</h2>

      {projects.map((p, i) => (
        <ProjectCard key={i} imgSrc={p.imgSrc} title={p.title} description={p.description} technologies={p.technologies} repoLink={p.repoLink} />
      ))}
    </section>
  )
}
