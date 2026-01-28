import React from 'react'

export default function ProjectCard({
  imgSrc,
  title,
  description,
  technologies,
  repoLink,
  liveLink
}) {
  const handleOpen = () => {
    if (window && typeof window.__openProjectModal === 'function') {
      window.__openProjectModal(imgSrc)
    }
  }

  return (
    <div className="proyecto-card">
      <img
        loading="lazy"
        src={imgSrc}
        alt={`Captura de ${title}`}
        className="imagen-proyecto-card modal-trigger"
        onClick={handleOpen}
      />

      <div className="proyecto-info">
        <h3 className="proyecto-titulo">{title}</h3>

        <p className="proyecto-descripcion">{description}</p>

        <p className="proyecto-descripcion">
          <strong>Tecnologías:</strong> {technologies}
        </p>

        <div className="proyecto-links">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            Ver proyecto
          </a>
        )}

        {repoLink && (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            GitHub
          </a>
        )}
      </div>

      </div>
    </div>
  )
}
