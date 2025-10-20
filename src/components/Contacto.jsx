import React from 'react'

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

export default function Contacto(){
  return (
    <section id="contacto" className="animated-background">
      <div id="particles-js-contacto"></div>
      <article className="contactame">
        <h2>¡Contáctame!</h2>
        <form id="formularioContacto" className="needs-validation" noValidate>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="Telefono">Teléfono:</label>
            <input type="tel" className="form-control" id="Telefono" name="telefono" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>

        <div className="redes-sociales mt-3">
          <p>Sígueme en las redes sociales: haz clic en el icono que desees</p>
          <div className="row">
            <SocialLink
              href="https://github.com/ridermanriquecueto"
              label="Ir al perfil de GitHub"
              className="github-link"
              text="GitHub"
              iconPath="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.08-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.77 1.07.77 2.16 0 1.56-.01 2.81-.01 3.19 0 .3.2.66.79.55C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z"
            />

            <SocialLink
              href="https://www.linkedin.com/in/rider-manrique-538876240/"
              label="Ir al perfil de LinkedIn"
              className="linkedin-link"
              text="LinkedIn"
              iconPath="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.3h-3v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.55v4.88h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.73z"
            />

            <SocialLink
              href="mailto:ridermc@gmail.com"
              label="Enviar mail"
              className="email-link"
              text="Email"
              iconPath="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm0 2.574l-12-8.727v11.44c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-11.44l-12 8.727z"
            />

            <div className="col-6 col-sm-6 text-center">
              <a href="https://wa.me/542216769436?text=Hola%20Rider%2C%20te%20contacto%20desde%20tu%20portafolio" target="_blank" aria-label="Enviar WhatsApp" className="social-link whatsapp-link" rel="noopener noreferrer">
                <svg className="icon svg-icon" viewBox="0 0 24 24" width="56" height="56" aria-hidden="true">
                  <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0012 .25C5.66.25.75 5.16.75 11.5c0 2.03.53 3.92 1.48 5.58L.02 23.25l6.4-1.66a11.73 11.73 0 005.58 1.43c6.34 0 11.25-4.91 11.25-11.25 0-3.01-1.17-5.83-3.73-7.79zM12 21.5c-1.74 0-3.44-.46-4.94-1.32l-.35-.2-3.81.99 1.02-3.71-.22-.38A8.25 8.25 0 013.75 11.5 8.25 8.25 0 1112 19.75zM17.1 14.3c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15s-.77.96-.95 1.15c-.17.19-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.48.15-.16.2-.27.3-.45.1-.18.05-.34-.02-.49-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.34-.27.27-1.04 1.02-1.04 2.48 0 1.45 1.06 2.86 1.2 3.06.15.2 2.07 3.2 5.02 4.49 2.95 1.3 2.95.87 3.48.81.53-.06 1.76-.72 2.01-1.41.25-.69.25-1.29.18-1.41-.08-.12-.27-.18-.57-.33z" />
                </svg>
                <p className="text-center">WhatsApp</p>
              </a>
            </div>

            <div className="col-6 col-sm-6 text-center">
              <a href="https://instagram.com/ridermc" target="_blank" aria-label="Ir a Instagram" className="social-link instagram-link" rel="noopener noreferrer">
                <svg className="icon svg-icon" viewBox="0 0 24 24" width="56" height="56" aria-hidden="true">
                  <path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM18.5 6a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
                <p className="text-center">Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
