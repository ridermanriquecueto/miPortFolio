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

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = [
        'img/10 Lima NO.m4a',
        'img/Chichi Peralta - La Ciguapa.mp3',
        'img/saliditas contigo - manolito y su trabuco.mp3'
    ];
    let currentTrack = 0;

    audioPlayer.src = playlist[currentTrack];
    audioPlayer.play();

    audioPlayer.addEventListener('ended', () => {
        // Reproducir la siguiente pista cuando la actual haya terminado
        currentTrack = (currentTrack + 1) % playlist.length;
        audioPlayer.src = playlist[currentTrack];
        audioPlayer.play();
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

const pdfUrl = 'img/TODOS LOS CERTFICADOS JUNTOS.pdf';

function loadPdf(url) {
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        pdf.getPage(1).then(function(page) {
            const scale = 1.5;
            const viewport = page.getViewport({ scale: scale });

            const canvas = document.getElementById('pdf-canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };

            page.render(renderContext).promise.then(function() {
                document.getElementById('overlay-text').style.display = 'block';
            });
        });
    });
}

window.onload = function() {
    loadPdf(pdfUrl);
};
document.addEventListener("DOMContentLoaded", function () {
  const pdfUrl = 'img/TODOS LOS CERTFICADOS JUNTOS.pdf';
  const pdfContainer = document.getElementById('pdf-container');
  const canvas = document.getElementById('pdf-canvas');
  const overlayText = document.getElementById('overlay-text');

  // Cargar el PDF al hacer clic en el enlace
  overlayText.addEventListener('click', function(e) {
      e.preventDefault();
      loadPdf(pdfUrl);
  });

  function loadPdf(url) {
      pdfjsLib.getDocument(url).promise.then(function(pdf) {
          pdf.getPage(1).then(function(page) {
              const scale = 1.5;
              const viewport = page.getViewport({ scale: scale });

              canvas.height = viewport.height;
              canvas.width = viewport.width;

              const renderContext = {
                  canvasContext: canvas.getContext('2d'),
                  viewport: viewport
              };

              page.render(renderContext).promise.then(function() {
                  pdfContainer.style.display = 'block';
                  overlayText.style.display = 'none';
              });
          });
      }).catch(function(error) {
          console.error('Error al cargar el PDF:', error);
      });
  }

  // Cargar el PDF automáticamente al cargar la página
  loadPdf(pdfUrl);
});
particlesJS("particles-js-educacion", {
  // Configuración de Particles.js
  particles: {
      // Configuración de partículas
  },
  // Otras configuraciones
});


particlesJS("particles-js-lluvia", {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: { detect_on: "canvas", events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
    retina_detect: true,
});
