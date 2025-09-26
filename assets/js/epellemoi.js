// Animation au scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observer tous les éléments avec animation
            document.querySelectorAll('.concept-card, .variant-card, .impact-stat, .timeline-content').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Smooth scroll pour les liens d'ancrage
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
                const swipers = document.querySelectorAll('.emission-slider');
        swipers.forEach((el) => {
        new Swiper(el, {
            loop: true,
            autoplay: {
            delay: 3000, // 3 secondes
            disableOnInteraction: false, // continuer même après interaction
            },
            pagination: {
            el: el.querySelector('.swiper-pagination'),
            clickable: true,
            },
        });
        });
  
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelectorAll('.dropdown-menu a').forEach(function(element){
                element.addEventListener('click', function () {
                let navbarToggler = document.querySelector('.navbar-toggler');
                let navbarCollapse = document.querySelector('.navbar-collapse');

                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
                });
            });
        });
          // Initialisation de la bibliothèque d'animation
            AOS.init({
                once: true, 
                offset: 100, 
                duration: 600, 
            } );
        document.getElementById("myForm").addEventListener("submit", function(e){
        e.preventDefault(); // empêche le rechargement/redirection

        var form = e.target;
        var data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
            form.reset(); // vide le formulaire
            document.getElementById("form-message").style.display = "block"; // affiche le message
            } else {
            alert("❌ Une erreur est survenue. Réessayez.");
            }
        }).catch(error => {
            alert("⚠️ Impossible d’envoyer le formulaire. Vérifiez votre connexion.");
        });
        });