// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Código existente para la navegación del menú
    const menuPrincipalItems = document.querySelectorAll('.menu-item');

    menuPrincipalItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            const actualItem = document.querySelector('.active');
            if (actualItem) {
                actualItem.classList.remove('active');
            }
            // Asegurarse de que el 'active' se añada al elemento 'a' dentro del 'li'
            // O a la 'li' misma, dependiendo de tu CSS. Si es el 'a', usa e.target.classList.add('active');
            // Si es la 'li', usa item.classList.add('active');
            // Para un click en el 'a' (el enlace), e.target es el 'a'
            e.target.classList.add('active');
        });

        item.addEventListener('mouseover', function(e) {
            const actualItem = document.querySelector('.mouseoverboton');
            if (actualItem) {
                actualItem.classList.remove('mouseoverboton');
            }
            e.target.classList.add('mouseoverboton');
        });

        item.addEventListener('mouseout', function(e) {
            e.target.classList.remove('mouseoverboton');
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

            // Si el formulario es válido, procede con la simulación de envío
            console.log("Simulando envío del mensaje...");

            // Simulación de un envío exitoso (puedes cambiar a 'false' para probar el error)
            const simulacionExitosa = true;

            if (simulacionExitosa) {
                // Crear y mostrar mensaje de éxito
                const mensajeExito = document.createElement('div');
                mensajeExito.classList.add('alert', 'alert-success', 'mt-3', 'animate__animated', 'animate__fadeIn');
                mensajeExito.setAttribute('role', 'alert'); // Para accesibilidad
                mensajeExito.textContent = '¡Mensaje enviado con éxito! Gracias por contactarme.';
                formularioContacto.parentNode.insertBefore(mensajeExito, formularioContacto.nextSibling);

                // Opcional: Reiniciar el formulario después de la simulación
                formularioContacto.reset();
                // Quitar la clase de validación para que no aparezcan los mensajes al resetear
                formularioContacto.classList.remove('was-validated');

                // Opcional: Ocultar el mensaje de éxito después de unos segundos
                setTimeout(function() {
                    if (mensajeExito) {
                        mensajeExito.classList.remove('animate__fadeIn');
                        mensajeExito.classList.add('animate__fadeOut');
                        mensajeExito.addEventListener('animationend', () => mensajeExito.remove(), { once: true });
                    }
                }, 3000); // Ocultar después de 3 segundos
            } else {
                // Crear y mostrar mensaje de error
                const mensajeError = document.createElement('div');
                mensajeError.classList.add('alert', 'alert-danger', 'mt-3', 'animate__animated', 'animate__fadeIn');
                mensajeError.setAttribute('role', 'alert'); // Para accesibilidad
                mensajeError.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
                formularioContacto.parentNode.insertBefore(mensajeError, formularioContacto.nextSibling);

                // Opcional: Ocultar el mensaje de error después de unos segundos
                setTimeout(function() {
                    if (mensajeError) {
                        mensajeError.classList.remove('animate__fadeIn');
                        mensajeError.classList.add('animate__fadeOut');
                        mensajeError.addEventListener('animationend', () => mensajeError.remove(), { once: true });
                    }
                }, 3000); // Ocultar después de 3 segundos
            }
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

    // Configuración para el #particles-js principal
    // Si tienes un config.json, usa particlesJS.load, de lo contrario, define la configuración aquí.
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'config.json', function() {
            console.log('callback - particles.js config loaded for #particles-js');
        });

        // Obtener todos los contenedores de Particles.js con IDs específicos
        const containers = document.querySelectorAll('[id^="particles-js-"]');

        // Inicializar Particles.js en cada contenedor
        containers.forEach(container => {
            // Asumiendo que tienes un archivo de configuración para cada uno o que todos usan 'config.json'
            let configFileName = 'config.json'; // Por defecto
            if (container.id === 'particles-js-acerca-de-mi') {
                configFileName = 'config-acerca-de-mi.json'; // Si tienes una config específica
            }
            // Agrega más 'if' o un mapeo si tienes otras configuraciones por ID
            if (container.id === 'particles-js-curriculum') {
                configFileName = 'config-curriculum.json'; // Ejemplo
            }
            if (container.id === 'particles-js-contacto') {
                configFileName = 'config-contacto.json'; // Ejemplo
            }
            if (container.id === 'particles-js-port-folio') {
                configFileName = 'config-portfolio.json'; // Ejemplo
            }
            if (container.id === 'particles-js-educacion') {
                configFileName = 'config-educacion.json'; // Ejemplo
            }


            particlesJS.load(container.id, configFileName, function() {
                console.log(`callback - particles.js config loaded for #${container.id}`);
            });
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