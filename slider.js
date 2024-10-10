let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;

            slides.forEach(slide => slide.style.display = 'none');
            dots.forEach(dot => dot.classList.remove('active'));

            slides[slideIndex].style.display = 'block';
            dots[slideIndex].classList.add('active');
        }

        function nextSlide() {
            slideIndex++;
            showSlide(slideIndex);
        }

        showSlide(slideIndex);
        setInterval(nextSlide, 5000);