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

