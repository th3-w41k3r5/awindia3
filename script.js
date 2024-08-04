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

//music
document.addEventListener('DOMContentLoaded', function() {
    const musicControl = document.querySelector('.music-control');
    const musicIcon = document.getElementById('music-icon');
    const backgroundMusic = document.getElementById('background-music');
    
    musicControl.addEventListener('click', function(e) {
        e.preventDefault();
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicIcon.src = 'assests/icons/audio_off.svg'; // Update with the path to your pause icon
        } else {
            backgroundMusic.pause();
            musicIcon.src = 'assests/icons/audio_on.svg'; // Update with the path to your play icon
        }
    });

    // Auto play the music when the page loads
    backgroundMusic.play();
    musicIcon.src = 'assests/icons/audio_on.svg'; // Set the initial state to pause
});
