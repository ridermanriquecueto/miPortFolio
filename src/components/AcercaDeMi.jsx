import React from 'react'
import riderImg from '../../img/rider.jpg'

export default function AcercaDeMi(){
  return (
    <section id="AcercaDeMi" className="animated-background presentacion-section">
      <div className="presentacion-content">
        <figure className="presentacion-img">
          <img src={riderImg} alt="Foto de Rider Manrique" className="perfil-img-mejorada" />
        </figure>
        <article className="presentacion">
          <div className="presentacion-text-box">
            <h1>¡Hola! Soy Rider Manrique, Analista de Sistemas y Desarrollador Web Full-Stack con experiencia en la creación de aplicaciones web completas. Domino el Frontend con React, HTML, CSS y JavaScript, y el Backend con Python (Django) y Java (Spring Boot, Micronaut), incluyendo microservicios. Experiencia en bases de datos como MySQL y PostgreSQL, y manejo de herramientas como Git y Postman. Mi enfoque es desarrollar soluciones robustas, responsivas y optimizados para la experiencia del usuario, contribuyendo a proyectos innovadores.</h1>
          </div>
        </article>
      </div>
    </section>
  )
}
