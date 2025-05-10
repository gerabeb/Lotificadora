document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("animated-element");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        element.classList.remove("opacity-0", "translate-y-10");
        element.classList.add("opacity-100", "translate-y-0");
        observer.unobserve(element); // Opcional: para que la animación ocurra solo una vez
      }
    });
  });

  observer.observe(element);
});