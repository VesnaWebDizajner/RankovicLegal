import "./components/navigation-section-component.js";
import "./components/practice-section-tile-component.js";
import "./components/practice-section-component.js";
import "./components/contact-section-component.js";
import "./components/footer-section-component.js";
import "./components/counters-component.js";

// // Function to toggle the background color visibility of the navigation bar on scrolling
// (function () {
//   const nav = document.querySelector(".navigation-section");
//   const className = "scrolled";

//   document.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       nav.classList.add(className);
//     } else {
//       nav.classList.remove(className);
//     }
//   });
// })();

// // Function to hide the navigation menu when the user scrolls or resizes the window
// (function () {
//   const navToogler = document.querySelector("#nav-toggle");

//   navToogler.addEventListener("change", () => {
//     if (navToogler.checked) {
//       const uncheckNavToggler = () => {
//         navToogler.checked = false;
//         window.removeEventListener("scroll", uncheckNavToggler);
//         window.removeEventListener("resize", uncheckNavToggler);
//       };

//       window.addEventListener("scroll", uncheckNavToggler);
//       window.addEventListener("resize", uncheckNavToggler);
//     }
//   });
// })();

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
