// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Navegación del menú — más robusta: marca el <a> correcto y usa event delegation donde corresponde
    const menuItems = document.querySelectorAll('#menu .menu-item');

    menuItems.forEach(function(li) {
        // Click en toda la 'li' o en el <a> interno
        li.addEventListener('click', function(e) {
            // Encontrar el enlace más cercano
            const link = e.target.closest('a');
            if (!link) return; // si no hubo click sobre un enlace, salir

            // Remover 'active' de todos los enlaces del menú
            const enlaces = document.querySelectorAll('#menu .menu-item a');
            enlaces.forEach(function(a){ a.classList.remove('active'); });

            // Añadir 'active' al enlace clicado
            link.classList.add('active');
        });

        // Hover: aplicar clase al <a> para coherencia con los estilos
        li.addEventListener('mouseover', function(e) {
            const link = e.target.closest('a');
            // remover de cualquier enlace previo
            const prev = document.querySelector('#menu .mouseoverboton');
            if (prev) prev.classList.remove('mouseoverboton');
            if (link) link.classList.add('mouseoverboton');
        });

        li.addEventListener('mouseout', function(e) {
            const link = e.target.closest('a');
            if (link) link.classList.remove('mouseoverboton');
        });
    });

    // Código existente para el botón de hamburguesa (Menú responsive)
    // Crear el botón de hamburguesa dinámicamente y agregarlo al header
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('menu-toggle');
    toggleButton.setAttribute('aria-controls', 'menu');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.innerHTML = `
        <span class="sr-only">Menú</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    `;

    const header = document.querySelector('header');
    if (header) { // Asegurarse de que el header existe
        header.appendChild(toggleButton);
    }


    // Volver a seleccionar el botón después de agregarlo al DOM
    const newMenuToggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('menu');

    if (newMenuToggle && menu) { // Asegurarse de que ambos elementos existen
        newMenuToggle.addEventListener('click', () => {
            const expanded = newMenuToggle.getAttribute('aria-expanded') === 'true' || false;
            newMenuToggle.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('open');
        });
    }

    // --- Lógica del formulario de contacto ---
    const formularioContacto = document.getElementById('formularioContacto');

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

            // Remueve cualquier mensaje de éxito/error previo
            const oldMessage = formularioContacto.nextElementSibling;
            if (oldMessage && (oldMessage.classList.contains('alert-success') || oldMessage.classList.contains('alert-danger'))) {
                oldMessage.remove();
            }

            // Valida el formulario usando la validación de Bootstrap
            if (!formularioContacto.checkValidity()) {
                event.stopPropagation(); // Detiene la propagación del evento si la validación falla
                formularioContacto.classList.add('was-validated'); // Muestra los mensajes de validación de Bootstrap
                return; // Sale de la función si hay errores de validación
            }

            // Recolectar valores del formulario
            const nombre = (document.getElementById('nombre') && document.getElementById('nombre').value) ? document.getElementById('nombre').value.trim() : '';
            const email = (document.getElementById('email') && document.getElementById('email').value) ? document.getElementById('email').value.trim() : '';
            const telefono = (document.getElementById('Telefono') && document.getElementById('Telefono').value) ? document.getElementById('Telefono').value.trim() : '';
            const mensaje = (document.getElementById('mensaje') && document.getElementById('mensaje').value) ? document.getElementById('mensaje').value.trim() : '';

            // Construir un mailto prellenado como fallback (no requiere servicios externos)
            const destinatario = 'ridermc@gmail.com'; // dirección principal
            const asunto = `Contacto desde portafolio: ${nombre || 'Nuevo mensaje'}`;
            const cuerpo = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`;
            const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

            // Intentar abrir el cliente de correo del usuario en una nueva pestaña/ventana
            try {
                window.open(mailtoLink, '_blank');
            } catch (err) {
                // Fallback: asignar a location para intentar abrir el cliente nativo
                window.location.href = mailtoLink;
            }

            // Mostrar mensaje de éxito al usuario (aunque el envío se realice por mailto)
            const mensajeExito = document.createElement('div');
            mensajeExito.classList.add('alert', 'alert-success', 'mt-3', 'animate__animated', 'animate__fadeIn');
            mensajeExito.setAttribute('role', 'alert'); // Para accesibilidad
            mensajeExito.textContent = 'Se abrió tu cliente de correo con el mensaje prellenado. Si no se abre, copia y pega tu mensaje o contáctame por WhatsApp.';
            formularioContacto.parentNode.insertBefore(mensajeExito, formularioContacto.nextSibling);

            // Reiniciar el formulario y clases de validación
            formularioContacto.reset();
            formularioContacto.classList.remove('was-validated');

            // Ocultar el mensaje de éxito después de unos segundos
            setTimeout(function() {
                if (mensajeExito) {
                    mensajeExito.classList.remove('animate__fadeIn');
                    mensajeExito.classList.add('animate__fadeOut');
                    mensajeExito.addEventListener('animationend', () => mensajeExito.remove(), { once: true });
                }
            }, 5000); // Ocultar después de 5 segundos
        });
    }

    // --- Lógica de validación de Bootstrap (asegúrate de que sea solo una vez) ---
    // Este IIFE (Immediately Invoked Function Expression) es común para la validación de Bootstrap
    (function() {
        'use strict';
        // Seleccionamos solo los formularios que no tienen un listener para evitar duplicados
        // o si prefieres, puedes mover la lógica de checkValidity dentro de este listener.
        // Aquí lo mantenemos para que el comportamiento por defecto de Bootstrap siga funcionando
        // en caso de que necesites formularios adicionales sin tu listener personalizado.
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();

    // --- Código existente para Particles.js (ajustado para cargar configs separadas si es necesario) ---
    // Si estás cargando configuraciones desde archivos JSON, asegúrate de que existan.
    // También, si 'particlesJS' ya se inicializa con una configuración por defecto,
    // estas llamadas subsiguientes podrían sobreescribirla o añadir nuevas instancias.

    // Configuración para Particles.js — evitar doble inicialización si ya fue creada por otro script
    if (typeof particlesJS !== 'undefined') {
        // Si el contenedor principal no tiene aún el canvas creado, podemos cargar una config por defecto
        const mainContainerCanvas = document.querySelector('#particles-js > .particles-js-canvas-el');
        if (!mainContainerCanvas) {
            // Cargar config solo si el canvas no existe (evita colisiones con app.js que puede inicializar inline)
            if (typeof particlesJS.load === 'function') {
                particlesJS.load('particles-js', 'config.json', function() {
                    console.log('callback - particles.js config loaded for #particles-js');
                });
            }
        }

        // Obtener todos los contenedores de Particles.js con IDs específicos
        const containers = document.querySelectorAll('[id^="particles-js-"]');

        // Inicializar Particles.js en cada contenedor solo si no existe ya el canvas dentro
        containers.forEach(container => {
            const hasCanvas = container.querySelector('.particles-js-canvas-el');
            if (hasCanvas) return; // ya inicializado por otro script

            // Mapeo sencillo de nombres de config por id
            let configFileName = 'config.json';
            const map = {
                'particles-js-acerca-de-mi': 'config-acerca-de-mi.json',
                'particles-js-curriculum': 'config-curriculum.json',
                'particles-js-contacto': 'config-contacto.json',
                'particles-js-port-folio': 'config-portfolio.json',
                'particles-js-educacion': 'config-educacion.json'
            };
            if (map[container.id]) configFileName = map[container.id];

            if (typeof particlesJS.load === 'function') {
                particlesJS.load(container.id, configFileName, function() {
                    console.log(`callback - particles.js config loaded for #${container.id}`);
                });
            }
        });
    }


    // Tu código para el elemento con animación 'animate' (revisar si 'element' existe)
    const element = document.querySelector('.element');
    if (element) {
        element.addEventListener('click', () => {
            element.classList.add('animate__animated', 'animate'); // 'animate' probablemente debería ser una clase de Animate.css, como 'animate__bounce'
            // Opcional: remover la clase después de la animación para poder repetirla
            element.addEventListener('animationend', () => {
                element.classList.remove('animate__animated', 'animate');
            }, { once: true });
        });
    }


    // El código de PDF.js
    // Nota: pdfjsLib debe estar disponible globalmente. Asegúrate de que el script de PDF.js se cargue ANTES de este script.
    // Además, el canvas con id 'pdf-canvas-vista-previa' debería estar en tu HTML.
    const pdfUrl = 'img/TODOS LOS CERTFICADOS JUNTOS.pdf';
    const canvasVistaPrevia = document.getElementById('pdf-canvas-vista-previa');

    if (canvasVistaPrevia && typeof pdfjsLib !== 'undefined') { // Asegurarse de que el canvas y la lib existen
        function loadPdfVistaPrevia(url) {
            pdfjsLib.getDocument(url).promise.then(function(pdf) {
                pdf.getPage(1).then(function(page) {
                    const scale = 0.75; // Ajusta la escala para la vista previa
                    const viewport = page.getViewport({ scale: scale });

                    canvasVistaPrevia.height = viewport.height;
                    canvasVistaPrevia.width = viewport.width;

                    const renderContext = {
                        canvasContext: canvasVistaPrevia.getContext('2d'),
                        viewport: viewport
                    };

                    page.render(renderContext);
                });
            }).catch(function(error) {
                console.error('Error loading PDF:', error);
            });
        }
        loadPdfVistaPrevia(pdfUrl);
    } else {
        // console.log('PDF.js canvas or library not found, skipping PDF preview.');
    }

    // ===== Animación de entrada para barras de habilidades =====
    const habilidadesPanel = document.querySelector('.habilidades-panel');
    if (habilidadesPanel && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = habilidadesPanel.querySelectorAll('.skill-fill');
                    fills.forEach(fill => {
                        const parent = fill.closest('.skill-bar');
                        const pct = parent ? parent.getAttribute('data-percent') : null;
                        if (pct) {
                            fill.classList.add('animate');
                            // Forzar reflow para asegurar transición
                            void fill.offsetWidth;
                            fill.style.width = pct + '%';
                        }
                    });
                    obs.unobserve(habilidadesPanel); // solo una vez
                }
            });
        }, { threshold: 0.25 });

        observer.observe(habilidadesPanel);
    } else if (habilidadesPanel) {
        // Fallback: aplicar inmediatamente
        const fills = habilidadesPanel.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
            const parent = fill.closest('.skill-bar');
            const pct = parent ? parent.getAttribute('data-percent') : null;
            if (pct) fill.style.width = pct + '%';
        });
    }
});

// Nota: El código de particlesJS directo en el ámbito global (fuera de DOMContentLoaded)
// puede ejecutarse antes de que los elementos estén disponibles. Es mejor si todo lo que
// interactúa con el DOM está dentro del DOMContentLoaded.
// Si particles.js ya inicializa estos IDs directamente, revisa su documentación.
// Las llamadas directas como particlesJS("particles-js-educacion", { ... });
// y particlesJS("particles-js-luces", { ... }); fuera de DOMContentLoaded podrían
// estar intentando inicializar el canvas antes de que exista en el DOM.
// La mejor práctica es que todo esté dentro de DOMContentLoaded o que Particles.js
// maneje su propia carga después de que el DOM esté listo.

// Si usas particlesJS.load('id', 'config.json', cb), es más robusto.
// Si defines la configuración directamente, es mejor que también esté encapsulada.