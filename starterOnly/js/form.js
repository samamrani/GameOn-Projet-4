/*----------- la gestion des erreurs dans un formulaire HTML------------ */
function setError(input) {
  const formControl = input.closest(".formData");
  formControl.setAttribute("data-error-visible", "true");
}

function removeError(input) {
  const formControl = input.closest(".formData");

  formControl.removeAttribute("data-error-visible");
}

/*-------fonction pour traiter le formulaire avec succès-----*/
function handleFormSubmission() {
  // Placez ici le code pour traiter le formulaire (envoi au serveur, etc.)
  console.log("Formulaire soumis avec succès !");
}

/*-------------Traiter le formulaire lors de la soumission-------*/
document.forms.contact.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validate()) {
    // Traiter le formulaire ici
    closeModal(); // Fermer le modal après le traitement réussi si nécessaire
  }
});
// Déclaration de la fonction init
async function init() {
  // Appelle la fonction pour afficher les photographes
  await displayCadre();
}
