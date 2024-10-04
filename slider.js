let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const intervalTime = 5000; // 5 seconds

function showNextSlide() {
    // Reset all slides
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    // Increment slideIndex
    slideIndex++;

    // Reset slideIndex when reaching the end
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
}

// Set interval for automatic slide change
setInterval(showNextSlide, intervalTime);

// Initialize the first slide as active when the page loads
showNextSlide();
