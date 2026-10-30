const signupForm = document.querySelector("#formulario-inscripcion");
const signupStatus = document.querySelector("#inscripcion-estado");
const routeSelect = document.querySelector("#ruta");
const routeChoices = document.querySelectorAll("[data-route-choice]");

if (routeChoices.length && !(routeSelect instanceof HTMLSelectElement)) {
  throw new Error("El selector de ruta no está disponible para los planes.");
}

for (const choice of routeChoices) {
  const route = choice.getAttribute("data-route-choice");
  const hasOption = [...routeSelect.options].some((option) => option.value === route);

  if (!route || !hasOption) {
    throw new Error(`El plan apunta a una ruta no disponible: ${route}`);
  }

  choice.addEventListener("click", () => {
    routeSelect.value = route;
  });
}

signupForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  signupStatus.textContent = "Tus datos cumplen las validaciones. En esta versión no se envían ni se guardan.";
  signupStatus.hidden = false;
});
