const carouselSlide = document.querySelector('.carousel-slide');
const carouselDates = document.querySelectorAll('.tour-date');

const prevBtn = document.querySelector('.control-button img[alt="Left"]');
const nextBtn = document.querySelector('.control-button img[alt="Right"]');

let counter = 0;
const size = carouselDates[0].clientWidth;

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

nextBtn.addEventListener('click', () => {
    if (counter >= carouselDates.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
