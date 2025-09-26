document.addEventListener("DOMContentLoaded", function () {
    // Bootstrap dropdown automatique pour mobile
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function () {
            let navbarToggler = document.querySelector('.navbar-toggler');
            let navbarCollapse = document.querySelector('.navbar-collapse');

            if (navbarToggler && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // AOS init
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Swiper init
    document.querySelectorAll('.emission-slider').forEach((el) => {
      new Swiper(el, {
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: el.querySelector('.swiper-pagination'), clickable: true },
      });
    });
});