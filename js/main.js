const menuPrincipalItems = document.querySelectorAll('.menu-item');

menuPrincipalItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        const actualItem = document.querySelector('.active');
        if (actualItem) {
            actualItem.classList.remove('active');
        }
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



particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

const element = document.querySelector('.element');

element.addEventListener('click', () => {
    element.classList.add('animate__animated', 'animate');
});

particlesJS.load('particles-js', 'config.json', function() {
    console.log('callback - particles.js config loaded');
});

// Configuración de Particles.js
const particlesConfig = {
    // Configuración de Particles.js
};

// Obtener todos los contenedores de Particles.js
const containers = document.querySelectorAll('[id^="particles-js-"]');

// Inicializar Particles.js en cada contenedor
containers.forEach(container => {
    particlesJS.load(container.id, 'config.json', function() {
        console.log('callback - particles.js config loaded');
    });
});

particlesJS.load('particles-js-acerca-de-mi', 'config-acerca-de-mi.json', function() {
    console.log('callback - particles.js config loaded');
});





particlesJS("particles-js-educacion", {
  // Configuración de Particles.js
  particles: {
      // Configuración de partículas
  },
  // Otras configuraciones
});

particlesJS("particles-js-luces", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true
        }
    },
    retina_detect: true
});
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

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
header.appendChild(toggleButton);

// Volver a seleccionar el botón después de agregarlo al DOM
const newMenuToggle = document.querySelector('.menu-toggle');

newMenuToggle.addEventListener('click', () => {
    const expanded = newMenuToggle.getAttribute('aria-expanded') === 'true' || false;
    newMenuToggle.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    const pdfUrl = 'img/TODOS LOS CERTFICADOS JUNTOS.pdf';
    const canvasVistaPrevia = document.getElementById('pdf-canvas-vista-previa');

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
        });
    }

    // Cargar la vista previa del PDF
    loadPdfVistaPrevia(pdfUrl);
});

document.addEventListener('DOMContentLoaded', function() {
    const formularioContacto = document.getElementById('formularioContacto');

    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        // Simulación de un envío exitoso (puedes agregar lógica más compleja aquí)
        const simulacionExitosa = true; // Cambia a 'false' para simular un error

        if (simulacionExitosa) {
            // Mostrar mensaje de éxito
            const mensajeExito = document.createElement('div');
            mensajeExito.classList.add('alert', 'alert-success', 'mt-3');
            mensajeExito.textContent = '¡Mensaje enviado con éxito!';
            formularioContacto.parentNode.insertBefore(mensajeExito, formularioContacto.nextSibling);

            // Opcional: Resetear el formulario después de la simulación
            formularioContacto.reset();

            // Opcional: Ocultar el mensaje de éxito después de unos segundos
            setTimeout(function() {
                mensajeExito.remove();
            }, 3000); // Ocultar después de 3 segundos
        } else {
            // Mostrar mensaje de error
            const mensajeError = document.createElement('div');
            mensajeError.classList.add('alert', 'alert-danger', 'mt-3');
            mensajeError.textContent = 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.';
            formularioContacto.parentNode.insertBefore(mensajeError, formularioContacto.nextSibling);

            // Opcional: Ocultar el mensaje de error después de unos segundos
            setTimeout(function() {
                mensajeError.remove();
            }, 3000); // Ocultar después de 3 segundos
        }
    });
});
