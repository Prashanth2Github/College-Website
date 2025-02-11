let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 50}%)`;
}

document.querySelector('.slider-next').addEventListener('click', nextSlide);
document.querySelector('.slider-prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 3000);  // Automatically change slide every 3 seconds
