import React, { useEffect, useState } from 'react'
import './styles.css'
import riderPhoto from '../img/rider.jpg'
import capMundoInicio from '../img/LIM_1.png'
import capStock from '../img/shopping-ropa.png'
import capSport from '../img/Captura de pantalla 2025-10-06 132508.png'
import capCatalogo from '../img/captura-catalogo.png'
import capSimef from '../img/img_2023.jpeg'
import capHilos from '../img/inicio_hilos.png'
import capParking from '../img/captura_estacionamiento.png'

const projects = [
  { number: '01', type: 'Plataforma integral', title: 'TalentCircle', description: 'Monitoreo de comunidades tecnológicas, análisis de rendimiento semanal y generación de contenido con Inteligencia Artificial.', technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Gemini API', 'React'], link: 'https://github.com/ridermanriquecueto/S04-26-Equipo-22-Web-App-Development', featured: true },
  { number: '02', type: 'E-commerce + Dashboard', title: 'Mundo Limpieza 526', description: 'Catálogo dinámico, stock en tiempo real, pedidos y panel de administración para una distribuidora.', technologies: ['Python', 'Django', 'PostgreSQL', 'WhatsApp API'], link: 'https://github.com/ridermanriquecueto/tienda-limpieza.git', live: 'https://mundolimpieza526.pythonanywhere.com/', image: capMundoInicio },
  { number: '03', type: 'Gestión + Auditoría', title: 'Stock & Auditoría', description: 'Panel de inventario con monitoreo de IP, seguimiento de movimientos y registros de auditoría.', technologies: ['Python', 'Flask', 'SQLite', 'Bootstrap'], link: 'https://github.com/ridermanriquecueto/shopping-ropa.git', live: 'https://tinyurl.com/indumentaria-popys', image: capStock },
  { number: '04', type: 'E-commerce', title: 'SportRyder', description: 'Carrito, catálogo, gestión de productos y proceso de compra en una interfaz responsive.', technologies: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'], link: 'https://github.com/ridermanriquecueto/lenceria-online.git', image: capSport },
  { number: '05', type: 'E-commerce', title: 'Tienda de Ropa', description: 'Aplicación Django para administrar y vender productos de indumentaria.', technologies: ['Python', 'Django', 'Bootstrap', 'SQLite'], link: 'https://github.com/ridermanriquecueto/fashion-store.git', image: capCatalogo },
  { number: '06', type: 'Sistema académico', title: 'SIMEF', description: 'Gestión de inscripciones a materias y exámenes finales de un instituto.', technologies: ['Django', 'MySQL', 'JavaScript', 'Bootstrap'], link: 'https://github.com/ridermanriquecueto/Instituto_210', image: capSimef },
  { number: '07', type: 'E-commerce', title: 'Casa de Hilos', description: 'Catálogo y carrito para la venta online de hilos y repuestos.', technologies: ['Python', 'Django', 'HTML', 'CSS'], image: capHilos },
  { number: '08', type: 'Aplicación de gestión', title: 'Estacionamiento', description: 'Gestión de reservas y control de espacios con interfaz responsive.', technologies: ['HTML', 'CSS', 'JavaScript'], image: capParking },
]

const skillGroups = [
  { label: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'Python', 'Django', 'Flask', 'Node.js', 'Micronaut', 'Go', 'APIs REST'] },
  { label: 'Datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Modelado de datos'] },
  { label: 'DevOps', items: ['Git', 'GitHub', 'Docker', 'Postman', 'IntelliJ IDEA', 'VS Code'] },
  { label: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'] },
]

const codeFacilitoCredential = (id) => `https://codigofacilito.com/certificates/${id}`
const certifications = [
  { date: 'Jul. 2026', title: 'React JS', institution: 'Ministerio de Educación GCBA', group: 'Vigentes', link: 'https://buenosaires.gob.ar/educacion', detail: 'Certificación en React JS para desarrollo frontend y aplicaciones web modernas.' },
  { date: 'Dic. 2025', title: 'Back-End / Node JS', institution: 'Ministerio de Educación GCBA', group: 'Vigentes', link: 'https://buenosaires.gob.ar/educacion', detail: 'Certificación en desarrollo backend con Node.js.' },
  { date: 'Jul. 2025', title: 'Back-End / Java', institution: 'Ministerio de Educación GCBA', group: 'Vigentes', link: 'https://buenosaires.gob.ar/educacion', detail: 'Certificación en desarrollo backend con Java.' },
  { date: 'Dic. 2024', title: 'Front-End JS', institution: 'Ministerio de Educación GCBA', group: 'Vigentes', link: 'https://buenosaires.gob.ar/educacion', image: 'CER_FRONTEND.png' },
  { date: 'Ago. 2023', title: 'Desarrollo Web Front End', institution: 'Código Pa’Lante · EIDOS Global y Accenture', group: 'Formación complementaria', link: 'https://www.eidosglobal.org/' },
  { date: 'Ago. 2023', title: 'Curso de GraphQL', institution: 'AD+ (Ademass Training Development)', group: 'Formación complementaria', link: 'https://www.ademass.com/' },
  { date: 'Ago. 2023', title: 'Curso de Git y GitHub', institution: 'ADEMÁS (AD+)', group: 'Formación complementaria', link: 'https://www.ademass.com/' },
  { date: 'Ago. 2023', title: 'Curso de React con Firebase', institution: 'Código Facilito', group: 'Formación complementaria', link: 'https://codigofacilito.com/' },
  { date: 'Jul. 2023', title: 'Curso Profesional de Angular', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('5bbf0e13-fd8a-4e13-b617-bb48d4e6ae70') },
  { date: 'Jul. 2023', title: 'Curso Profesional de Deploy en Servidores', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('28a4f8f5-5da1-4a7f-9d0f-522b0d9e615e') },
  { date: 'Jul. 2023', title: 'Curso Profesional de Backend', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('faf992b7-b095-446a-985a-c4bd044ebd2a') },
  { date: 'Jun. 2023', title: 'Curso Profesional de JAVA', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('sYNrOxTbyTzFl83p9skpGFcsPbGqVhVyqB2uKGE') },
  { date: 'Jun. 2023', title: 'Curso de Django + Amazon S3', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('9bec3a7c-94b3-43df-b014-9bf91c9b5ba5') },
  { date: 'Jun. 2023', title: 'Curso Profesional de Desarrollo Web', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('orJZqlnbJNx99himC2rSz3q5a8DAzML_PE') },
  { date: 'Jun. 2023', title: 'Curso profesional de Go', institution: 'Código Facilito', group: 'Formación complementaria', link: 'https://codigofacilito.com/' },
  { date: 'May. 2023', title: 'Curso profesional de Python', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('06hiKgNw_JQh0zOYJV3JVV72TpzfeGtk0') },
  { date: 'Jun. 2022', title: 'Curso de Programación Orientada a Objetos', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('1eskjPZoYESOT2wfpvTH7jI7YhHr4_TADbFg') },
  { date: 'Jun. 2022', title: 'Curso Profesional de Base de Datos', institution: 'Código Facilito', group: 'Formación complementaria', link: codeFacilitoCredential('8eecc9a0-1bbf-4e83-9776-87f3fab52c58') },
  { date: 'Ene. 2022 · vence Ene. 2033', title: 'Curso Profesional de React', institution: 'Código Facilito', group: 'Vigentes', link: codeFacilitoCredential('xgTOgi1RPJzsXlq25CN8Mm_cMcDdNfyD8') },
  { date: 'Nov. 2024', title: 'Consumo de API REST con JavaScript', institution: 'Platzi', group: 'Caducados', link: 'https://platzi.com/', detail: 'Curso enfocado en la integración y consumo de servicios REST desde JavaScript.' },
  { date: 'Ago. 2021', title: 'Curso de HTML5', institution: 'AD+ (Ademass Training Development)', group: 'Caducados', link: 'https://www.ademass.com/' },
]

const certificationGroups = [
  {
    title: 'Backend & Servidores',
    items: [
      { title: 'Back-End / Java', institution: 'Ministerio de Educación GCBA', year: '2025', link: 'https://buenosaires.gob.ar/educacion' },
      { title: 'Back-End / Node JS', institution: 'Ministerio de Educación GCBA', year: '2025', link: 'https://buenosaires.gob.ar/educacion' },
      { title: 'Curso Profesional de Backend & Java', institution: 'Código Facilito', year: '2023', link: codeFacilitoCredential('sYNrOxTbyTzFl83p9skpGFcsPbGqVhVyqB2uKGE') },
      { title: 'Curso Profesional de Python & Django + S3', institution: 'Código Facilito', year: '2023', link: codeFacilitoCredential('9bec3a7c-94b3-43df-b014-9bf91c9b5ba5') },
      { title: 'Curso profesional de Go', institution: 'Código Facilito', year: '2023', link: 'https://codigofacilito.com/' },
    ],
  },
  {
    title: 'Frontend & Interfaces',
    items: [
      { title: 'React JS', institution: 'Ministerio de Educación GCBA', year: '2026', link: 'https://buenosaires.gob.ar/educacion' },
      { title: 'Front-End JS', institution: 'Ministerio de Educación GCBA', year: '2024', link: 'https://buenosaires.gob.ar/educacion' },
      { title: 'Curso Profesional de React & Firebase', institution: 'Código Facilito', link: 'https://codigofacilito.com/' },
      { title: 'Curso Profesional de Angular', institution: 'Código Facilito', year: '2023', link: codeFacilitoCredential('5bbf0e13-fd8a-4e13-b617-bb48d4e6ae70') },
      { title: 'Desarrollo Web Front End', institution: 'EIDOS Global & Accenture', year: '2023', link: 'https://www.eidosglobal.org/' },
    ],
  },
  {
    title: 'Bases de Datos, DevOps & Arquitectura',
    items: [
      { title: 'Curso Profesional de Base de Datos', institution: 'Código Facilito', year: '2022', link: codeFacilitoCredential('8eecc9a0-1bbf-4e83-9776-87f3fab52c58') },
      { title: 'Curso Profesional de Deploy en Servidores', institution: 'Código Facilito', year: '2023', link: codeFacilitoCredential('28a4f8f5-5da1-4a7f-9d0f-522b0d9e615e') },
      { title: 'Curso de Git y GitHub', institution: 'ADEMÁS', year: '2023', link: 'https://www.ademass.com/' },
      { title: 'Curso de GraphQL & POO', institution: 'Código Facilito', link: 'https://codigofacilito.com/' },
    ],
  },
]

const Arrow = () => <span aria-hidden="true">↗</span>

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'dark')
  const nav = [['Sobre mí', 'sobre-mi'], ['Skills', 'skills'], ['Proyectos', 'proyectos'], ['Destacado', 'destacado'], ['Formación', 'formacion'], ['Contacto', 'contacto']]

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Contacto desde el portfolio: ${data.get('nombre')}`)
    const body = encodeURIComponent(`Email: ${data.get('email')}\n\n${data.get('mensaje')}`)
    window.location.href = `mailto:ridermc@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    event.currentTarget.reset()
  }

  return <div className="site-shell" data-theme={theme}>
    <header className="site-header"><a className="brand" href="#inicio" aria-label="Rider Manrique, inicio"><span className="brand-mark">RM</span><strong>rider<span>.</span>dev</strong></a><button className="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button><nav className={menuOpen ? 'is-open' : ''}>{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-cta" href="mailto:ridermc@gmail.com?subject=Contacto%20desde%20rider.dev">Contactar <Arrow /></a><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'} title={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}><span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span><small>{theme === 'dark' ? 'Claro' : 'Oscuro'}</small></button></nav></header>

    <main>
      <section className="hero section-wrap" id="inicio"><div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> Disponible para trabajar</p><h1>Rider<br /><em>Manrique</em></h1><p className="hero-role">Analista de Sistemas <span>&</span> Backend Developer</p><p className="hero-description">Construyo APIs REST, sistemas de gestión y soluciones web robustas. Trabajo con Java, Spring Boot, Python y Django para convertir necesidades reales en software claro y mantenible.</p><div className="hero-tech-list">{['Java', 'Spring Boot', 'Python', 'Django', 'PostgreSQL', 'Docker', 'React'].map((item) => <span key={item}>{item}</span>)}</div><div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver proyectos <Arrow /></a><a className="button button-ghost" href="https://drive.google.com/file/d/1MOBdBj3GtJoMSWIydg1MR8X8Z_yyuDJQ/view?usp=drive_link" target="_blank" rel="noreferrer">Descargar CV <span>↓</span></a></div><a className="scroll-cue" href="#sobre-mi"><span>↓</span> scroll para conocer más</a></div><div className="hero-aside"><div className="profile-photo-wrap"><img src={riderPhoto} alt="Rider Manrique" /><div><span className="status-dot" /> La Plata, Argentina</div></div><p className="hero-note">Analizo el problema, modelo los datos y construyo la solución.</p></div></section>

      <section className="section-wrap about-section" id="sobre-mi"><div className="section-kicker">01 / Sobre mí</div><div className="about-grid"><h2>Backend con<br /><span>visión de producto.</span></h2><div><p className="lead">Soy Rider, Técnico Superior en Análisis de Sistemas y desarrollador backend. Me gusta entender cómo funciona un negocio antes de decidir cómo debe funcionar su software.</p><p>Mi trabajo combina análisis, arquitectura, lógica de negocio y una atención especial a la trazabilidad de los datos. Aprendo construyendo y convierto cada proyecto en una oportunidad para resolver mejor.</p></div></div><div className="stats-grid"><div><strong>08</strong><span>proyectos publicados</span></div><div><strong>04</strong><span>áreas técnicas</span></div><div><strong>10+</strong><span>tecnologías</span></div><div><strong>AR</strong><span>La Plata, Argentina</span></div></div></section>

      <section className="section-wrap projects-section" id="proyectos"><div className="section-heading"><div><div className="section-kicker">02 / Proyectos</div><h2>Una evolución<br /><span>construida.</span></h2></div><p>Desde e-commerce y paneles operativos hasta plataformas con IA, cada proyecto resuelve un problema concreto.</p></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-visual">{project.image ? <img src={project.image} alt={`Captura de ${project.title}`} loading="lazy" /> : <div className="project-code"><span>{project.number}</span><b>{project.featured ? 'AI + API' : 'backend.system'}</b></div>}</div><div className="project-content"><div className="project-meta"><span>{project.number} / {project.type}</span><div>{project.live && <a href={project.live} target="_blank" rel="noreferrer">Demo <Arrow /></a>}<a href={project.link} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div></section>

      <section className="featured-section" id="destacado"><div className="section-wrap"><div className="section-kicker">03 / Proyectos destacados</div><div className="featured-projects"><article className="featured-project"><div className="featured-project-copy"><div className="featured-project-meta"><span>01</span><span>TalentCircle · Plataforma integral</span></div><h2>TalentCircle:<br /><span>datos que activan.</span></h2><p>Plataforma web para automatizar el monitoreo de comunidades tecnológicas, centralizar datos de rendimiento y generar borradores de contenido optimizados mediante Gemini API.</p><p>Desarrollado con metodología Scrum. Mi rol combinó Project Management y Backend Development.</p><a className="button button-primary" href="https://github.com/ridermanriquecueto/S04-26-Equipo-22-Web-App-Development" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div><div className="featured-panel"><span className="featured-label">case_study / talentcircle</span><div className="pipeline"><span>Spring Boot</span><i>→</i><span>REST API</span><i>→</i><span>PostgreSQL</span><i>→</i><span>Gemini API</span></div><div className="featured-metrics"><div><strong>IA</strong><small>contenido asistido</small></div><div><strong>API</strong><small>arquitectura REST</small></div><div><strong>MVP</strong><small>listo para producción</small></div></div></div></article><article className="featured-project featured-project-secondary"><div className="featured-project-copy"><div className="featured-project-meta"><span>02</span><span>CAPACIA · Infrastructure & PDF API</span></div><h2>CAPACIA:<br /><span>infraestructura con datos.</span></h2><p>Aplicación para la industria de Data Centers con reporte de industria, calculadora de estimación y benchmark de madurez.</p><ul className="featured-details"><li><strong>Mi rol:</strong> Backend Developer en Java, Spring Boot y PostgreSQL.</li><li><strong>Implementación:</strong> desarrollo de APIs REST, lógica de negocio y generación de reportes institucionales en PDF.</li><li><strong>Despliegue:</strong> configuración del backend en Render, variables de entorno y conexión con la base de datos en producción.</li></ul><div className="featured-actions"><a className="button button-primary" href="https://lnkd.in/d84X2xpR" target="_blank" rel="noreferrer">MVP <Arrow /></a><a className="button button-ghost" href="https://github.com/No-Country-simulation/S06-26-NC-EQUIPO--72" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div><div className="featured-panel"><span className="featured-label">case_study / capacia</span><div className="pipeline"><span>Java</span><i>→</i><span>Spring Boot</span><i>→</i><span>PostgreSQL</span><i>→</i><span>Render</span></div><div className="featured-metrics"><div><strong>PDF</strong><small>reportes automáticos</small></div><div><strong>API</strong><small>servicios REST</small></div><div><strong>MVP</strong><small>en producción</small></div></div></div></article><article className="featured-project featured-project-secondary"><div className="featured-project-copy"><div className="featured-project-meta"><span>03</span><span>No Country · Panel de Datos Públicos · App BiT B2G</span></div><h2>App BiT:<br /><span>datos públicos, mejor visión.</span></h2><p>Aplicación de Business Intelligence y GovTech orientada al análisis de infraestructura, procesamiento de datos públicos y generación de reportes institucionales.</p><ul className="featured-details"><li><strong>Mi rol:</strong> Backend Developer e integración de datos en la simulación No Country S06-26-NC-Equipo 72.</li><li><strong>Integración:</strong> conexión y procesamiento de datasets públicos, desarrollo de endpoints robustos y lógica de backend.</li><li><strong>Colaboración:</strong> trabajo coordinado con Backend, Frontend, QA y Project Management bajo Scrum.</li></ul><div className="featured-actions"><a className="button button-primary" href="https://www.youtube.com/watch?v=6J1Fv5hbul0" target="_blank" rel="noreferrer">Video <Arrow /></a><a className="button button-ghost" href="https://github.com/No-Country-simulation/S06-26-NC-EQUIPO--72" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a className="button button-ghost" href="https://companies.nocountry.tech/simulation/team/cmq1z3ova00afi20156b11b0s" target="_blank" rel="noreferrer">Ver equipo <Arrow /></a></div></div><div className="featured-panel"><span className="featured-label">case_study / public-data-bit-b2g</span><div className="pipeline"><span>Java</span><i>→</i><span>Spring Boot</span><i>→</i><span>PostgreSQL</span><i>→</i><span>REST API</span></div><div className="featured-metrics"><div><strong>DATA</strong><small>datasets públicos</small></div><div><strong>API</strong><small>integración REST</small></div><div><strong>B2G</strong><small>GovTech & BI</small></div></div></div></article></div></div></section>

      <section className="section-wrap skills-section" id="skills"><div className="section-kicker">04 / Stack técnico</div><div className="skills-intro"><h2>Herramientas<br /><span>para construir.</span></h2><p>Un stack práctico para crear soluciones mantenibles, conectadas y preparadas para crecer.</p></div><div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>

      <section className="section-wrap education-section" id="formacion"><div className="section-kicker">05 / Formación</div><div className="education-list"><div className="education-item"><span>01</span><div><h3>Técnico Superior en Análisis de Sistemas</h3><p>Instituto Superior de Formación Docente y Técnica N.º 210 · <strong>2021 — 2024</strong></p><small>Formación en análisis, diseño y desarrollo de sistemas, con base en datos, arquitectura de software y metodologías ágiles. Proyecto final con participación en Front-End, Back-End y configuración de servidores.</small></div><strong>2021 — 2024</strong></div><div className="education-item"><span>02</span><div><h3>Licenciatura en Informática <em>(Estudios cursados)</em></h3><p>Universidad Nacional de La Plata (UNLP) · <strong>2006 — 2009</strong></p><small>Base inicial en programación, lógica computacional, matemáticas aplicadas y fundamentos de bases de datos.</small></div><strong>2006 — 2009</strong></div></div><div className="certifications-heading"><div><span className="section-kicker">06 / Certificaciones & Formación continua</span><h3>Actualización tecnológica.</h3></div><p>Especialización técnica organizada por área.</p></div><div className="compact-certifications">{certificationGroups.map((group) => <div className="compact-certification-group" key={group.title}><h4>[ {group.title} ]</h4><ul>{group.items.map((item) => <li key={item.title}><a href={item.link} target="_blank" rel="noreferrer"><span>{item.title}</span><small>{item.institution}{item.year ? ` · ${item.year}` : ''}</small><b>↗</b></a></li>)}</ul></div>)}</div></section>

      <section className="contact-section" id="contacto"><div className="section-wrap contact-grid"><div><div className="section-kicker">06 / Contacto</div><h2>Hablemos de<br /><span>lo próximo.</span></h2><p>Disponible para oportunidades como Analista de Sistemas, Backend Developer o proyectos donde pueda aportar desde el análisis y la construcción.</p><div className="social-links"><a href="https://github.com/ridermanriquecueto" target="_blank" rel="noreferrer"><strong>GitHub</strong><span>@ridermanriquecueto</span></a><a href="https://www.linkedin.com/in/rider-manrique-538876240/" target="_blank" rel="noreferrer"><strong>LinkedIn</strong><span>Perfil profesional</span></a><a href="mailto:ridermc@gmail.com"><strong>Email</strong><span>ridermc@gmail.com</span></a></div></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="nombre">Nombre<input id="nombre" name="nombre" placeholder="Tu nombre" required /></label><label htmlFor="email">Email<input id="email" name="email" type="email" placeholder="tu@email.com" required /></label><label htmlFor="mensaje">Mensaje<textarea id="mensaje" name="mensaje" rows="4" placeholder="¿En qué puedo ayudarte?" required /></label><button className="button button-primary" type="submit">{sent ? 'Mensaje preparado' : 'Enviar mensaje'} <Arrow /></button></form></div></section>
    </main><footer className="site-footer"><div className="section-wrap footer-inner"><span>© 2026 Rider Manrique</span><span>La Plata, Buenos Aires · Argentina</span><div><a href="https://github.com/ridermanriquecueto" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/rider-manrique-538876240/" target="_blank" rel="noreferrer">LinkedIn</a></div></div></footer>
  </div>
}
