// ==========================================
// 1. HERO CAROUSEL
// ==========================================
let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll('.hero-carousel .slide');

// Zoek alle knoppen in de hero-sectie
const heroButtons = document.querySelectorAll('.hero-carousel button');

function moveHero(direction) {
    heroSlides[currentHeroIndex].classList.remove('active');
    currentHeroIndex = currentHeroIndex + direction;
    
    if (currentHeroIndex >= heroSlides.length) currentHeroIndex = 0;
    else if (currentHeroIndex < 0) currentHeroIndex = heroSlides.length - 1;
    
    heroSlides[currentHeroIndex].classList.add('active');
}

// heroButtons[0] is de eerste knop (vorige), heroButtons[1] is de tweede (volgende)
heroButtons[0].addEventListener('click', function() { moveHero(-1); });
heroButtons[1].addEventListener('click', function() { moveHero(1); });


// ==========================================
// 2. PRODUCT CAROUSEL
// ==========================================
let currentProductIndex = 0;
const productSlides = document.querySelectorAll('.product-section .slide');

// Zoek alle knoppen in de product-sectie
const productButtons = document.querySelectorAll('.product-section button');

function moveProduct(direction) {
    productSlides[currentProductIndex].classList.remove('active');
    currentProductIndex = currentProductIndex + direction;
    
    if (currentProductIndex >= productSlides.length) currentProductIndex = 0;
    else if (currentProductIndex < 0) currentProductIndex = productSlides.length - 1;
    
    productSlides[currentProductIndex].classList.add('active');
}

productButtons[0].addEventListener('click', function() { moveProduct(-1); });
productButtons[1].addEventListener('click', function() { moveProduct(1); });


// ==========================================
// 3. MERCH CAROUSEL
// ==========================================
let currentMerchIndex = 0;
const merchSlides = document.querySelectorAll('.merch-section .slide');

// Zoek alle knoppen in de merch-sectie
const merchButtons = document.querySelectorAll('.merch-section button');

function moveMerch(direction) {
    merchSlides[currentMerchIndex].classList.remove('active');
    currentMerchIndex = currentMerchIndex + direction;
    
    if (currentMerchIndex >= merchSlides.length) currentMerchIndex = 0;
    else if (currentMerchIndex < 0) currentMerchIndex = merchSlides.length - 1;
    
    merchSlides[currentMerchIndex].classList.add('active');
}

merchButtons[0].addEventListener('click', function() { moveMerch(-1); });
merchButtons[1].addEventListener('click', function() { moveMerch(1); });

// ==========================================
// 4. REVIEWS CAROUSEL
// ==========================================
let currentReviewIndex = 0;
const reviewSlides = document.querySelectorAll('.reviews-section .slide');

// Zoek alle knoppen in de reviews-sectie
const reviewButtons = document.querySelectorAll('.reviews-section button');

function moveReview(direction) {
    reviewSlides[currentReviewIndex].classList.remove('active');
    currentReviewIndex = currentReviewIndex + direction;
    
    if (currentReviewIndex >= reviewSlides.length) currentReviewIndex = 0;
    else if (currentReviewIndex < 0) currentReviewIndex = reviewSlides.length - 1;
    
    reviewSlides[currentReviewIndex].classList.add('active');
}

// reviewButtons[0] is vorige, reviewButtons[1] is volgende
if(reviewButtons.length > 0) {
    reviewButtons[0].addEventListener('click', function() { moveReview(-1); });
    reviewButtons[1].addEventListener('click', function() { moveReview(1); });
}