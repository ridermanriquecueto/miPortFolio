import React from 'react'
import riderImg from '../../img/rider.jpg'

export default function AcercaDeMi() {
  return (
    /* Cambiamos el ID a 'about' para que coincida con el Header que arreglamos antes */
    <section id="about" className="animated-background presentacion-section">
      <div className="presentacion-content">
        
        <figure className="presentacion-img">
          <img src={riderImg} alt="Foto de Rider Manrique" className="perfil-img-mejorada" />
        </figure>

        <article className="presentacion">
          <div className="presentacion-text-box">
            {/* Un título claro para que sepa quién sos */}
            <h2 className="titulo-seccion">Acerca de mí</h2> 
            
            <h1>¡Hola! Soy Rider Manrique</h1>
            
            <p>
              <strong>Analista de Sistemas y Desarrollador Web Full-Stack</strong> con experiencia en la creación de aplicaciones web completas. 
            </p>
            
            <p>
              Domino el <strong>Frontend</strong> con React, HTML, CSS y JavaScript, y el <strong>Backend</strong> con Python (Django) y Java (Spring Boot, Micronaut), incluyendo microservicios.
            </p>
            
            <p>
              Tengo experiencia en bases de datos como <strong>MySQL y PostgreSQL</strong>, y manejo de herramientas como <strong>Git y Postman</strong>. Mi enfoque es desarrollar soluciones robustas, responsivas y optimizadas para la experiencia del usuario.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}