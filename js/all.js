// products images slider
let index = 0;
const sliders = document.getElementById('sliders');
const totalProducts = document.querySelectorAll('.product-card').length;
const productsPerSlide = 4;
const totalSlides = Math.ceil(totalProducts / productsPerSlide);

function updateSlidersPosition() {
    sliders.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    if (index < totalSlides - 1) {
        index++;
        updateSlidersPosition();
    }
}

function prevSlide() {
    if (index > 0) {
        index--;
        updateSlidersPosition();
    }
}
