let currentHeroIndex = 0;
    const heroSlides = document.querySelectorAll('.hero-slide');

    function moveHero(direction) {
        // 1. Haal de 'active' class weg bij de huidige afbeelding
        heroSlides[currentHeroIndex].classList.remove('active');
        
        // 2. Bereken welke afbeelding de volgende is
        currentHeroIndex = currentHeroIndex + direction;
        
        // Zorg dat hij weer bij 0 begint als je voorbij de laatste gaat
        if (currentHeroIndex >= heroSlides.length) {
            currentHeroIndex = 0;
        } 
        // Zorg dat hij naar de laatste gaat als je bij de eerste naar achteren klikt
        else if (currentHeroIndex < 0) {
            currentHeroIndex = heroSlides.length - 1;
        }
        
        // 3. Geef de nieuwe afbeelding de 'active' class zodat deze verschijnt
        heroSlides[currentHeroIndex].classList.add('active');
    }