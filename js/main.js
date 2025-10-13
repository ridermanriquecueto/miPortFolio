document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menu = document.getElementById('menu');

    // ======================================================================
    // 1. Menú Responsive (Botón de Hamburguesa) 🍔
    // ======================================================================
    if (header && menu) {
        // Creación del botón y lógica para abrir/cerrar menú
        const toggleButton = document.createElement('button');
        toggleButton.className = 'menu-toggle';
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-controls', 'menu');
        toggleButton.innerHTML = `
            <span class="sr-only">Abrir menú</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        `;
        const nav = header.querySelector('nav');
        header.insertBefore(toggleButton, nav.nextSibling);

        toggleButton.addEventListener('click', () => {
            const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
            toggleButton.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('open');
        });
        
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Cierra el menú en móvil al hacer clic en un enlace
                if (window.innerWidth <= 900) { 
                    menu.classList.remove('open');
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ======================================================================
    // 2. Logos Flotantes Globales (Movimiento y Parpadeo) 🚀
    // ======================================================================
    const globalContainer = document.getElementById('logos-fondo-global-container');
    
    if (globalContainer) {
        const logoSources = [
            'img/htt.png', 'img/cs.png', 'img/js.png', 'img/boostrap.jfif', 
            'img/gitt.png', 'img/py.png', 'img/react.png', 'img/java.png',
            'img/go.jpg', 'img/node.png', 'img/vsualC.png', 'img/docker.png'
        ];

        const logosToInject = logoSources.concat(logoSources, logoSources, logoSources); 

        logosToInject.forEach((src, index) => {
            const logo = document.createElement('img');
            logo.src = src;
            logo.alt = `Logo de tecnología ${index}`;
            logo.className = 'logo-fondo-global';
            
            // 1. POSICIÓN INICIAL ALEATORIA
            const initialX = Math.random() * 100; 
            const initialY = Math.random() * 100; 
            logo.style.left = `${initialX}vw`;
            logo.style.top = `${initialY}vh`;
            
            // 2. TAMAÑO Y OPACIDAD BASE SUTILMENTE DIFERENTE
            const size = 30 + Math.random() * 20; 
            logo.style.width = `${size}px`;
            logo.style.height = `${size}px`;
            
            // 3. COMBINAR ANIMACIONES ALEATORIAS
            
            // Parámetros para el MOVIMIENTO (diagonal-float)
            const moveDuration = 10 + Math.random() * 15; // 10s a 25s
            const moveDirection = (Math.random() < 0.5) ? 'normal' : 'alternate';
            const moveDelay = Math.random() * 10; 

            // Parámetros para el PARPADEO (logo-glow-pulse)
            const pulseDuration = 3 + Math.random() * 5; // 3s a 8s (más rápido)
            const pulseDelay = Math.random() * 5; 
            
            // Aplicar las dos animaciones separadas en la misma propiedad 'animation'
            logo.style.animation = 
                `diagonal-float ${moveDuration}s linear infinite ${moveDirection}, ` + 
                `logo-glow-pulse ${pulseDuration}s ease-in-out infinite alternate`;
            
            // Aplicar los retrasos
            logo.style.animationDelay = `-${moveDelay}s, -${pulseDelay}s`;
            

            globalContainer.appendChild(logo);
        });
    }


    // ======================================================================
    // 3. Animación de Barras de Habilidad (Skill Bars)
    // ======================================================================
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const percent = skillBar.getAttribute('data-percent');
                const fill = skillBar.querySelector('.skill-fill');
                
                fill.style.width = percent + '%';
                observer.unobserve(skillBar); 
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });

    // ======================================================================
    // 4. Scroll Suave para Enlaces del Menú
    // ======================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
