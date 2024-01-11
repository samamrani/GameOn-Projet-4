// Elements du DOM
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");

const closeElement = document.querySelectorAll(".close, .red-button");
const modalBodyConfirmation = document.querySelector("#confirmation");

const form = document.querySelector('form[name="reserve"]');

/*----Initialisation des Événements de Modal----*/
// launch modal even
function initEvent() {
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", launchModal);
  });
  closeElement.forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
}

/*-------#1 - fermeture / ouverture modale----*/
//actions pour fermer le modal
function closeModal() {
  modalbg.style.display = "none";
  form.classList.remove("hidden");
  modalBodyConfirmation.classList.add("hidden");
}

// action pour ouvrir le modal
function launchModal() {
  console.log("reset du formulaire");
  form.reset();
  modalbg.style.display = "block";
}

function main() {
  initEvent();
}

main();
