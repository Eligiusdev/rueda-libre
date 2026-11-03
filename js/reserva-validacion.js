const validatedReservationForm = document.querySelector(".needs-validation");
const confirmationAlert = document.querySelector("#reservaConfirmada");
const bikeTypeInputs = validatedReservationForm?.querySelectorAll('input[name="tipo_bicicleta"]');
const bikeQuantityInputs = validatedReservationForm?.querySelectorAll('input[name^="cantidad_bicicletas["]');

if (bikeTypeInputs?.length) {
    const updateBikeTypeValidity = () => {
        const hasSelectedBikeType = [...bikeTypeInputs].some((input) => input.checked);
        bikeTypeInputs[0].required = !hasSelectedBikeType;

        bikeTypeInputs.forEach((input) => {
            const option = input.closest(".bike-option");
            const quantityContainer = option?.querySelector(".bike-quantity");
            const quantityInput = quantityContainer?.querySelector('input[type="number"]');

            if (quantityContainer && quantityInput) {
                quantityContainer.classList.toggle("d-none", !input.checked);
                quantityInput.required = input.checked;
                quantityInput.disabled = !input.checked;

                if (!input.checked) {
                    quantityInput.value = "";
                    quantityInput.setCustomValidity("");
                }
            }
        });

        const totalQuantity = [...(bikeQuantityInputs ?? [])]
            .filter((input) => !input.disabled && input.value !== "")
            .reduce((total, input) => total + Number(input.value), 0);

        bikeQuantityInputs?.forEach((input) => {
            input.setCustomValidity(
                totalQuantity > 6 ? "El total no puede superar 6 bicicletas." : ""
            );
        });
    };

    bikeTypeInputs.forEach((input) => {
        input.addEventListener("change", updateBikeTypeValidity);
    });
    bikeQuantityInputs?.forEach((input) => {
        input.addEventListener("input", updateBikeTypeValidity);
    });
    validatedReservationForm.addEventListener("reset", () => {
        window.setTimeout(updateBikeTypeValidity);
    });
    updateBikeTypeValidity();
}

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

        validatedReservationForm.classList.remove("was-validated");
        validatedReservationForm.reset();
        confirmationAlert.classList.remove("d-none");
        confirmationAlert.focus();
    });
}
