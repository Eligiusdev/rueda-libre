const signupForm = document.querySelector("#formulario-inscripcion");
const signupStatus = document.querySelector("#inscripcion-estado");

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  signupStatus.textContent = "Tus datos cumplen las validaciones. En esta versión no se envían ni se guardan.";
  signupStatus.hidden = false;
});
