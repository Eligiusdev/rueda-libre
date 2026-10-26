// Validación local de demostración. No envía datos ni crea una reserva.
const validatedReservationForm = document.querySelector(".needs-validation");
const confirmationAlert = document.querySelector("#reservaConfirmada");

if (validatedReservationForm && confirmationAlert) {
    validatedReservationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validatedReservationForm.checkValidity()) {
            event.stopPropagation();
            validatedReservationForm.classList.add("was-validated");
            validatedReservationForm.querySelector("input:invalid, select:invalid, textarea:invalid")?.focus();
            confirmationAlert.classList.add("d-none");
            return;
        }

        // No borrar los datos: la confirmación solo indica que pasó la validación local.
        validatedReservationForm.classList.add("was-validated");
        confirmationAlert.classList.remove("d-none");
        confirmationAlert.focus();
    });
}
