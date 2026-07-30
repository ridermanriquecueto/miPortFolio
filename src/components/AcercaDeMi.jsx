import React from 'react'
import riderImg from '../../img/rider.jpg'

export default function AcercaDeMi() {
  return (
    <section id="about" className="animated-background presentacion-section">
      <div className="presentacion-content">

        <figure className="presentacion-img">
          <img
            src={riderImg}
            alt="Foto de Rider Manrique"
            className="perfil-img-mejorada"
          />
        </figure>

        <article className="presentacion">
          <div className="presentacion-text-box">

            <h2 className="titulo-seccion">Acerca de mí</h2>

            <h1>¡Hola! Soy Rider Manrique</h1>

            <p>
              <strong>Analista de Sistemas y Backend Developer</strong> apasionado por el
              desarrollo de aplicaciones web escalables y de alto rendimiento.
            </p>

            <p>
              Tengo experiencia en el desarrollo de soluciones backend utilizando
              <strong> Java (Spring Boot)</strong> y
              <strong> Python (Django/Flask)</strong>, creando
              <strong> APIs REST</strong>, implementando autenticación mediante
              <strong> JWT</strong> y diseñando bases de datos con
              <strong> PostgreSQL</strong> y
              <strong> MySQL</strong>.
            </p>

            <p>
              También he trabajado en la integración de servicios backend con
              aplicaciones frontend desarrolladas en
              <strong> React</strong>. Actualmente participo como
              <strong> Backend Developer en No Country</strong>, trabajando con
              metodologías ágiles (<strong>Scrum</strong>), Git/GitHub y buenas
              prácticas de desarrollo para construir soluciones robustas,
              mantenibles y orientadas a una excelente experiencia de usuario.
            </p>

          </div>
        </article>

      </div>
    </section>
  )
}