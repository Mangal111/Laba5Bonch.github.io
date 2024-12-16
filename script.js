  const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

let slideInterval = setInterval(nextSlide, 3000); // Смена слайдов каждые 3 секунды