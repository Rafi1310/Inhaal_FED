// ==========================================
// 1. HERO CAROUSEL
// ==========================================
let currentHeroIndex = 0;
// Zoek naar alle elementen met de class 'slide' BINNEN de 'hero-carousel'
const heroSlides = document.querySelectorAll('.hero-carousel .slide');

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

// ==========================================
// 2. PRODUCT CAROUSEL
// ==========================================
let currentProductIndex = 0;
// Zoek naar alle elementen met de class 'slide' BINNEN de 'product-section'
const productSlides = document.querySelectorAll('.product-section .slide');

function moveProduct(direction) {
    productSlides[currentProductIndex].classList.remove('active');
    
    currentProductIndex = currentProductIndex + direction;
    
    if (currentProductIndex >= productSlides.length) {
        currentProductIndex = 0;
    } else if (currentProductIndex < 0) {
        currentProductIndex = productSlides.length - 1;
    }
    
    productSlides[currentProductIndex].classList.add('active');
}

// ==========================================
// 3. MERCH CAROUSEL
// ==========================================
let currentMerchIndex = 0;
// Zoek naar alle elementen met de class 'slide' BINNEN de 'merch-section'
const merchSlides = document.querySelectorAll('.merch-section .slide');

function moveMerch(direction) {
    merchSlides[currentMerchIndex].classList.remove('active');
    
    currentMerchIndex = currentMerchIndex + direction;
    
    if (currentMerchIndex >= merchSlides.length) {
        currentMerchIndex = 0;
    } else if (currentMerchIndex < 0) {
        currentMerchIndex = merchSlides.length - 1;
    }
    
    merchSlides[currentMerchIndex].classList.add('active');
}