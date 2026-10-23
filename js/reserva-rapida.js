// Lee opciones permitidas desde los enlaces de tarifas para agilizar la reserva.
const reservationForm = document.querySelector("form");
const query = new URLSearchParams(window.location.search);

// Convierte los identificadores simples de URL en los valores del formulario.
const bikeValues = {
    urbana: "urbana",
    montana: "montaña",
    electric: "eléctrica"
};
const bike = bikeValues[query.get("tipo_bicicleta")];
const route = query.get("recorrido_guiado");

// Solo selecciona una bicicleta si existe una opción correspondiente en el formulario.
if (reservationForm && bike) {
    const bikeInput = [...reservationForm.querySelectorAll('input[name="tipo_bicicleta"]')]
        .find((input) => input.value === bike);

    if (bikeInput) {
        bikeInput.checked = true;
    }
}

// Valida la ruta contra las opciones reales antes de cambiar el selector.
if (reservationForm && route) {
    const routeSelect = reservationForm.querySelector('select[name="recorrido_guiado"]');
    const routeOption = [...(routeSelect?.options ?? [])]
        .find((option) => option.value === route);

    if (routeSelect && routeOption) {
        routeSelect.value = route;
    }
}
