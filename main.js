document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        preloader.style.display = 'none';
    });

    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#F5C6D6' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#FFFFFF', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Vanilla Tilt
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5
    });

    // Typed.js for Home Section Only
    if (typeof Typed !== 'undefined') {
        try {
            new Typed('.text', {
                strings: ['Software Developer', 'Automation Tester', 'AI Enthusiast', 'Innovator'],
                typeSpeed: 30,
                backSpeed: 10,
                loop: true,
                startDelay: 700
            });
        } catch (error) {
            console.error('Error initializing Typed.js for home section:', error);
        }
    } else {
        console.error('Typed.js not loaded. Please check the script source.');
    }

    // Theme Toggle
    const toggle = document.querySelector('.theme-toggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Project Carousel
const carousel = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.project-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

if (!carousel || !slides.length || !prevBtn || !nextBtn) {
    console.error('Carousel elements not found:', { carousel, slides, prevBtn, nextBtn });
} else {
    console.log('Carousel initialized with', slides.length, 'slides');

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        console.log(`Slide Width: ${slideWidth}px`);
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        console.log(`Current Index: ${currentIndex}, Transform: translateX(-${currentIndex * slideWidth}px)`);
    }

    function nextSlide() {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        console.log('Next Slide:', currentIndex);
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        console.log('Previous Slide:', currentIndex);
        updateCarousel();
    }

    prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked');
        prevSlide();
    });

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked');
        nextSlide();
    });

    window.addEventListener('resize', () => {
        console.log('Window resized, updating carousel');
        updateCarousel();
    });

    // Initial update
    updateCarousel();
}
    // Certification Modal
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');
    const closeBtn = document.querySelector('.close');
    const certCards = document.querySelectorAll('.cert-card');

    certCards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = card.getAttribute('data-image');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // // Skills Progress Bars
    // const progressBars = document.querySelectorAll('.progress');
    // progressBars.forEach(progress => {
    //     const width = progress.getAttribute('data-width');
    //     setTimeout(() => {
    //         progress.style.width = width;
    //     }, 500); // Delay to ensure visibility
    // });
// Skills Progress Bars
// const progressBars = document.querySelectorAll('.progress');
// progressBars.forEach(progress => {
//     const width = progress.parentElement.querySelector('.progress-label').textContent.match(/\((\d+%)\)/)[1]; // Extract the percentage (e.g., "90%")
//     progress.style.width = width; // Set the width directly from the label
// });
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / height) * 100;
        document.getElementById('scroll-progress').style.width = scrolled + '%';
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     // Preloader
//     window.addEventListener('load', () => {
//         const preloader = document.getElementById('preloader');
//         preloader.style.display = 'none';
//     });

//     // AOS Initialization
//     AOS.init({
//         duration: 1000,
//         once: true,
//     });

//     // Particles.js
//     particlesJS('particles-js', {
//         particles: {
//             number: { value: 80, density: { enable: true, value_area: 800 } },
//             color: { value: '#F5C6D6' },
//             shape: { type: 'circle' },
//             opacity: { value: 0.5, random: false },
//             size: { value: 3, random: true },
//             line_linked: { enable: true, distance: 150, color: '#FFFFFF', opacity: 0.4, width: 1 },
//             move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
//         },
//         interactivity: {
//             detect_on: 'canvas',
//             events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
//             modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
//         },
//         retina_detect: true
//     });

//     // Vanilla Tilt
//     VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
//         max: 25,
//         speed: 400,
//         glare: true,
//         'max-glare': 0.5
//     });

//     // Typed.js for Home Section Only
//     if (typeof Typed !== 'undefined') {
//         try {
//             new Typed('.text', {
//                 strings: ['Software Developer', 'Automation Tester', 'AI Enthusiast', 'Innovator'],
//                 typeSpeed: 50,
//                 backSpeed: 30,
//                 loop: true,
//                 startDelay: 500
//             });
//         } catch (error) {
//             console.error('Error initializing Typed.js for home section:', error);
//         }
//     } else {
//         console.error('Typed.js not loaded. Please check the script source.');
//     }

//     // Theme Toggle
//     const toggle = document.querySelector('.theme-toggle');
//     toggle.addEventListener('click', () => {
//         document.body.classList.toggle('dark-mode');
//         toggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
//     });

//     // Project Carousel
//     const carousel = document.querySelector('.carousel-slides');
//     const slides = document.querySelectorAll('.project-slide');
//     const prevBtn = document.querySelector('.prev');
//     const nextBtn = document.querySelector('.next');
//     let currentIndex = 0;
//     let autoPlay = setInterval(nextSlide, 5000);

//     function updateCarousel() {
//         const slideWidth = slides[0].clientWidth;
//         carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
//         updateCarousel();
//     }

//     prevBtn.addEventListener('click', () => {
//         clearInterval(autoPlay);
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
//         updateCarousel();
//         autoPlay = setInterval(nextSlide, 5000);
//     });

//     nextBtn.addEventListener('click', () => {
//         clearInterval(autoPlay);
//         nextSlide();
//         autoPlay = setInterval(nextSlide, 5000);
//     });

//     window.addEventListener('resize', updateCarousel);

//     // Certification Modal
//     const modal = document.getElementById('certModal');
//     const modalImg = document.getElementById('certImage');
//     const closeBtn = document.querySelector('.close');
//     const certCards = document.querySelectorAll('.cert-card');

//     certCards.forEach(card => {
//         card.addEventListener('click', () => {
//             modal.style.display = 'flex';
//             modalImg.src = card.getAttribute('data-image');
//         });
//     });

//     closeBtn.addEventListener('click', () => {
//         modal.style.display = 'none';
//     });

//     window.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             modal.style.display = 'none';
//         }
//     });

//     // Skills Progress Bars
//     const progressBars = document.querySelectorAll('.progress');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const progress = entry.target;
//                 const width = progress.getAttribute('data-width');
//                 progress.style.width = width;
//             }
//         });
//     }, { threshold: 0.5 });

//     progressBars.forEach(bar => observer.observe(bar));

//     // Custom Cursor
//     const cursor = document.querySelector('.cursor');
//     const follower = document.querySelector('.cursor-follower');
//     document.addEventListener('mousemove', (e) => {
//         cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//         follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });

//     // Scroll Progress
//     window.addEventListener('scroll', () => {
//         const scrollTop = window.scrollY;
//         const height = document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled = (scrollTop / height) * 100;
//         document.getElementById('scroll-progress').style.width = scrolled + '%';
//     });

//     // Back to Top Button
//     const backToTop = document.querySelector('.back-to-top');
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 300) {
//             backToTop.classList.add('show');
//         } else {
//             backToTop.classList.remove('show');
//         }
//     });
// });
