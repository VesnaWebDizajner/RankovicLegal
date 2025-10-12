// Hamburger ikona na responsive dizajnu sajta

const hamburger = document.getElementById("hamburger");
const navWrapper = document.querySelector(".nav_wrapper");

hamburger.addEventListener("click", () => {
  navWrapper.classList.toggle("open");
});

document.querySelectorAll(".nav_link").forEach((link) => {
  link.addEventListener("click", () => {
    navWrapper.classList.remove("open");
  });
});

// Kada se skroluje ekran nav sekcija dobija tamnu pozadinu i ostaje na vrhu ekrana

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});
