// Elements du DOM
/*récupère l'élément du DOM avec l'ID "myTopnav" et le stocke dans la variable `topNav`.*/
const topNav = document.getElementById("myTopnav");

/*-------Modification de la Navigation Responsive-------*/
function editNav() {
  topNav.classList.toggle("responsive");
}
