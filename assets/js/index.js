// assets/js/index.js
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 60) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });

document.getElementById("contact-link").addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  
  // Récupère la balise footer (premier <footer> trouvé dans la page)
  const footer = document.querySelector("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll fluide jusqu’au footer
  }
});

  // Quand un lien de la navbar est cliqué
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
      // Retirer 'active' de tous les liens
      document.querySelectorAll('.navbar-nav .nav-link').forEach(nav => nav.classList.remove('active'));
      // Ajouter 'active' au lien cliqué
      this.classList.add('active');
    });
  });


document.addEventListener('DOMContentLoaded', function () {
  const navbarCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.nav-link');

  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();  // Ici on ferme la navbar
      }
    });
  });
});
const aboutSlides = document.querySelectorAll(".about-slider img");
let aboutCurrent = 0;

function showAboutSlide(index) {
  aboutSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// afficher la première image
showAboutSlide(aboutCurrent);

// défiler toutes les 5s
setInterval(() => {
  aboutCurrent = (aboutCurrent + 1) % aboutSlides.length;
  showAboutSlide(aboutCurrent);
}, 5000);

