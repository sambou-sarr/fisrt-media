// assets/js/index.js

document.getElementById("contact-link").addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  
  // Récupère la balise footer (premier <footer> trouvé dans la page)
  const footer = document.querySelector("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" }); // Scroll fluide jusqu’au footer
  }
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

 document.getElementById("newsletterForm").addEventListener("submit", function(e){
    e.preventDefault(); // empêcher le rechargement de la page

    var form = e.target;
    var data = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset(); // vide le champ email
        var message = document.getElementById("newsletter-message");
        message.style.display = "block"; // affiche l'alerte verte

        // Faire disparaître le message après 5 secondes (5000 ms)
        setTimeout(function(){
          message.style.display = "none";
        }, 5000);

      } else {
        alert("❌ Une erreur est survenue. Veuillez réessayer.");
      }
    }).catch(error => {
      alert("⚠️ Impossible d’envoyer le formulaire. Vérifiez votre connexion.");
    });
  });
  new Typed("#typed", {
  strings: [
    "Première structure audiovisuelle sénégalaise. Spécialisée dans la production de contenus éducatifs et innovants."
  ],
  typeSpeed: 45,
  showCursor: false,
  loop: false
});