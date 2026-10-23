// Muestra cada panel al entrar en pantalla; si no hay soporte o se reduce movimiento,
// el contenido permanece visible sin depender de JavaScript.
const presentation = document.querySelector(".presentacion");
const panels = presentation?.querySelectorAll(".presentacion-panel");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (presentation && panels?.length && !prefersReducedMotion.matches && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                // Cada panel solo necesita observarse hasta su primera aparición.
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px"
    });

    panels.forEach((panel) => observer.observe(panel));
    presentation.classList.add("reveal-ready");
}
