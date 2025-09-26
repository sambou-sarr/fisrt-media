  document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('myForm');
      const variantSelect = form.querySelector('select[name="debattons"]');
      const messageDiv = document.getElementById('form-message');
      const paymentDiv = document.getElementById('payment-info');
      let montantConfirmé = false;

      // Afficher le montant selon la sélection
      variantSelect.addEventListener('change', function() {
          const value = this.value;
          montantConfirmé = false; // Réinitialise la confirmation
          if(value === 'lycee') {
              paymentDiv.style.display = 'block';
              paymentDiv.innerHTML = "💰 Pour participer à <strong>Débattons Lycée</strong>, vous devez verser <strong>300 000 FCFA</strong>.";
              montantConfirmé = true;
          } else if(value === 'postbac') {
              paymentDiv.style.display = 'block';
              paymentDiv.innerHTML = "💰 Pour participer à <strong>Débattons Post Bac</strong>, vous devez verser <strong>500 000 FCFA</strong>.";
              montantConfirmé = true;
          } else if(value === 'both') {
              paymentDiv.style.display = 'block';
              paymentDiv.innerHTML = "💰 Pour participer aux <strong>Navetanes de Débattons</strong>, vous devez verser <strong>500 000 FCFA</strong>.";
              montantConfirmé = true;
          } else {
              paymentDiv.style.display = 'none';
          }
      });

      // Gestion de l'envoi du formulaire
      form.addEventListener('submit', function(e) {
          if(!montantConfirmé) {
              e.preventDefault();
              alert("⚠️ Veuillez sélectionner une variante et prendre connaissance du montant à verser !");
              return;
          }
          e.preventDefault();
          messageDiv.style.display = 'block';
          messageDiv.innerHTML = "✅ Merci ! Votre candidature a bien été envoyée. Nous vous recontacterons très bientôt.";
      });
  });