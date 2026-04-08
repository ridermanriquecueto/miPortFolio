import React, { useState } from 'react'

const SocialLink = ({ href, label, className, iconPath, text }) => (
  <div className="col-6 col-sm-4 text-center">
    <a href={href} target="_blank" aria-label={label} className={`social-link ${className}`} rel="noopener noreferrer">
      <svg className="icon svg-icon" viewBox="0 0 24 24" width="56" height="56" aria-hidden="true">
        <path fill="currentColor" d={iconPath} />
      </svg>
      <p className="text-center">{text}</p>
    </a>
  </div>
)

export default function Contacto() {
  const [enviando, setEnviando] = useState(false);
  const [mensajeStatus, setMensajeStatus] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();
    setEnviando(true);
    
    const formData = new FormData(e.target);
    
    // Conexión directa con tu ID de Formspree meepzjra
    const response = await fetch("https://formspree.io/f/meepzjra", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setMensajeStatus("¡Mensaje enviado con éxito! La Vaca Saturnina lo entregará pronto. Tralalero tralará...");
      e.target.reset(); // Limpia el formulario
    } else {
      setMensajeStatus("Ocurrió un error. Por favor, intenta de nuevo.");
    }
    setEnviando(false);
  };

  return (
    <section id="contact" className="animated-background">
      <div id="particles-js-contacto"></div>
      <article className="contactame">
        <h2>¡Contáctame!</h2>
        
        <form id="formularioContacto" onSubmit={manejarEnvio}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" className="form-control" id="telefono" name="telefono" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={enviando}>
            {enviando ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {mensajeStatus && <p className="mt-3 text-center" style={{color: '#38BDF8', fontWeight: 'bold'}}>{mensajeStatus}</p>}
        </form>

        <div className="redes-sociales mt-3">
          <p className="text-center">Sígueme en las redes sociales</p>
          <div className="row">
            <SocialLink
              href="https://github.com/ridermanriquecueto"
              label="GitHub"
              className="github-link"
              text="GitHub"
              iconPath="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.08-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.77 1.07.77 2.16 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z"
            />
            <SocialLink
              href="https://www.linkedin.com/in/rider-manrique-538876240/"
              label="LinkedIn"
              className="linkedin-link"
              text="LinkedIn"
              iconPath="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.3h-3v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.55v4.88h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z"
            />
            <SocialLink
              href="mailto:ridermc@gmail.com"
              label="Email"
              className="email-link"
              text="Email"
              iconPath="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.727v11.44c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-11.44l-12 8.727z"
            />
          </div>
        </div>
      </article>
    </section>
  )
}