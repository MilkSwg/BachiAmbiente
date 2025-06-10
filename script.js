document.addEventListener('DOMContentLoaded', () => {
    // --- Botones que redirigen a otras páginas ---
    const solutionButtons = document.querySelectorAll('.solution-btn');
    const solutionLinks = {
        separacion: 'alimentacion.html',
        huerto: 'tips.html',
        comedores: 'reciclaje.html',
        talleres: 'agua.html',
        reforestacion: 'huella.html'
    };

    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const key = button.getAttribute('data-solution');
            const url = solutionLinks[key];
            if (url) {
                window.location.href = url;
            } else {
                alert('Página no disponible');
            }
        });
    });

    // --- Carrusel de Imágenes ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    carouselSlide.style.transform = `translateX(${-size * counter}px)`;

    nextBtn.addEventListener('click', () => {
        counter = (counter + 1) % carouselImages.length;
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    prevBtn.addEventListener('click', () => {
        counter = (counter - 1 + carouselImages.length) % carouselImages.length;
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    // --- Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        alert(`Sugerencia enviada:\n\nNombre: ${name}\nCorreo: ${email}\nSugerencia: ${suggestion}\n\nNota: Para enviar esto a un correo real, se necesita un servidor (backend).`);
        contactForm.reset();
    });
});
