// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});

// Close menu on click
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("is-open"));
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
