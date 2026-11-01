// Algemene functie die elke carrousel op de pagina kan aansturen
function setupCarousel(sectionNumber, slideTag) {
    const slides = document.querySelectorAll(`main > section:nth-of-type(${sectionNumber}) ${slideTag}`);
    const buttons = document.querySelectorAll(`main > section:nth-of-type(${sectionNumber}) button`);

    // Controleer of de sectie en knoppen bestaan op deze pagina
    if (slides.length > 0 && buttons.length >= 2) {
        let currentIndex = 0;

        function moveSlide(direction) {
            slides[currentIndex].classList.remove('active');
            currentIndex = currentIndex + direction;

            if (currentIndex >= slides.length) currentIndex = 0;
            else if (currentIndex < 0) currentIndex = slides.length - 1;

            slides[currentIndex].classList.add('active');
        }

        buttons[0].addEventListener('click', function() { moveSlide(-1); });
        buttons[1].addEventListener('click', function() { moveSlide(1); });
    }
}

// Activeer de 4 carrousels op basis van hun sectie-nummer en HTML-tag:
setupCarousel(1, 'picture'); // Sectie 1: Hero
setupCarousel(2, 'article'); // Sectie 2: Producten
setupCarousel(5, 'article'); // Sectie 5: Reviews
setupCarousel(6, 'article'); // Sectie 6: Merch