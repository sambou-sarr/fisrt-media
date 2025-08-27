<?php
// Vérifie si le formulaire a été soumis et si l'email n'est pas vide
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST["email"])) {

    // 1. Récupérer et nettoyer l'email de l'utilisateur
    $subscriber_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    // 2. Définir l'adresse email de l'administrateur
    $admin_email = "votre_adresse_admin@exemple.com"; // <-- REMPLACEZ PAR L'EMAIL DE L'ADMIN

    // 3. Préparer l'email à envoyer à l'administrateur
    $subject = "Nouvelle inscription à la newsletter";
    $message = "Un nouvel utilisateur s'est inscrit à la newsletter avec l'adresse e-mail suivante : " . $subscriber_email;
    $headers = "From: no-reply@votresite.com" . "\r\n" . // Adresse d'envoi (peut être fictive)
               "Reply-To: " . $subscriber_email;

    // 4. Envoyer l'email à l'administrateur
    // La fonction mail() de PHP est utilisée ici.
    // Pour qu'elle fonctionne, votre serveur d'hébergement doit être configuré pour envoyer des emails.
    if (mail($admin_email, $subject, $message, $headers)) {
        // Message de succès si l'email est envoyé
        echo "Merci pour votre inscription !";
    } else {
        // Message d'erreur si l'envoi échoue
        echo "Une erreur est survenue. Veuillez réessayer plus tard.";
    }

    // (Optionnel) Vous pouvez aussi enregistrer l'email dans une base de données ou un fichier ici.

} else {
    // Si quelqu'un accède directement au fichier PHP sans soumettre le formulaire
    echo "Accès non autorisé.";
}

// Rediriger l'utilisateur vers la page d'accueil après quelques secondes
header("refresh:3;url=../index.html"); // Redirige vers la page précédente
exit();
?>
