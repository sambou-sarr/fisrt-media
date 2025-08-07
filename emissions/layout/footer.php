  <!-- ======= Footer ======= -->
<footer class="footer-modern bg-dark w-100">
    <div class="container pt-5">
        <div class="row g-4">
            <!-- Section À propos -->
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="footer-about">
                    <h5 class="text-uppercase text-white mb-4">À propos</h5>
                    <p class="text-white-70 mb-4">
                        First Media - Première structure de communication audiovisuelle sénégalaise spécialisée dans la production de contenus éducatifs et innovants.
                    </p>
                </div>
            </div>

            <!-- Liens rapides -->
            <div class="col-6 col-md-4 col-lg-2 mb-4">
                <h5 class="text-uppercase text-white mb-4">Navigation</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="#" class="text-white-70 d-block py-1"><i class="fas fa-chevron-right me-2 small"></i>Accueil</a></li>
                    <li><a href="#" class="text-white-70 d-block py-1"><i class="fas fa-chevron-right me-2 small"></i>Équipe</a></li>
                    <li><a href="#" class="text-white-70 d-block py-1"><i class="fas fa-chevron-right me-2 small"></i>Réalisations</a></li>
                    <li><a href="#" class="text-white-70 d-block py-1"><i class="fas fa-chevron-right me-2 small"></i>Contact</a></li>
                </ul>
            </div>

            <!-- Coordonnées -->
            <div class="col-md-4 col-lg-3 mb-4">
                <h5 class="text-uppercase text-white mb-4">Coordonnées</h5>
                <ul class="list-unstyled contact-info">
                    <li class="mb-3 d-flex">
                        <i class="fas fa-map-marker-alt text-primary mt-1 me-3"></i>
                        <div>
                            <span class="text-white-70 d-block">03 rue Beranger Feraud Immeuble CTIC Dakar</span>
                            <span class="text-white-70">Dakar , Senegal</span>
                        </div>
                    </li>
                    <li class="mb-3">
                        <a href="tel:+221776317892" class="text-white-70 text-decoration-none d-flex align-items-center">
                            <i class="fas fa-phone text-primary me-3"></i>
                            <div>
                                <span class="d-block">+221 33 842 49 00</span>
                                <span class="d-block">+221 77 631 78 92</span>
                            </div>
                        </a>
                    </li>
                    <li class="mb-3">
                        <a href="mailto:info@first-media-groupe.com" class="text-white-70 text-decoration-none d-flex align-items-center">
                            <i class="fas fa-envelope text-primary me-3"></i>
                            info@first-media-groupe.com
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Réseaux sociaux -->
            <div class="col-md-4 col-lg-4 mb-4">
                <h5 class="text-uppercase text-white mb-4">Réseaux sociaux</h5>
                <div class="social-links mb-4">
                    <a href="#" class="btn btn-outline-light btn-social rounded-circle me-2 mb-2"><i class="fab fa-tiktok"></i></a>
                    <a href="#" class="btn btn-outline-light btn-social rounded-circle me-2 mb-2"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="btn btn-outline-light btn-social rounded-circle me-2 mb-2"><i class="fab fa-youtube"></i></a>
                    <a href="#" class="btn btn-outline-light btn-social rounded-circle me-2 mb-2"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="btn btn-outline-light btn-social rounded-circle me-2 mb-2"><i class="fab fa-linkedin-in"></i></a>
                </div>

                <div class="newsletter">
                    <h6 class="text-white mb-3">Abonnez-vous à notre newsletter</h6>
                    <form class="input-group">
                        <input type="email" class="form-control border-0" placeholder="Votre email">
                        <button class="btn btn-primary" type="submit">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Mentions légales -->
        <div class="footer-legal py-4 border-top border-dark">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <div class="legal-links">
                        <a href="#" class="text-white-70 me-3">Mentions légales</a>
                        <a href="#" class="text-white-70 me-3">Conditions</a>
                        <a href="#" class="text-white-70">Politique de confidentialité</a>
                    </div>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <p class="text-white-70 mb-0">
                        &copy; <span class="current-year"></span> FIRST MEDIA Group — Tous droits réservés — Développé par
                        <a href="#" class="text-primary text-decoration-none">sambou sarr</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- End  Footer -->
<script>
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

</script>



  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/typed.js/typed.umd.js"></script>
  <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>