import "./components/navigation-section-component.js";
import "./components/practice-section-tile-component.js";
import "./components/practice-section-component.js";
import "./components/contact-section-component.js";
import "./components/footer-section-component.js";
import "./components/counters-component.js";
import "./components/top-bar-component.js";
import "./components/law-aria-section-component.js";
import "./components/law-aria-navigation-component.js";
import "./components/law-area-aside-component.js";
import "./components/law-help-section-component.js";

// Function to toggle the background color visibility of the navigation bar on scrolling
(function () {
  const nav = document.querySelector(".navigation-section");
  const className = "scrolled";

  document.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add(className);
    } else {
      nav.classList.remove(className);
    }
  });
})();

// Function to hide the navigation menu when the user scrolls or resizes the window
(function () {
  const navToogler = document.querySelector("#nav-toggle");

  navToogler.addEventListener("change", () => {
    if (navToogler.checked) {
      const uncheckNavToggler = () => {
        navToogler.checked = false;
        window.removeEventListener("scroll", uncheckNavToggler);
        window.removeEventListener("resize", uncheckNavToggler);
      };

      window.addEventListener("scroll", uncheckNavToggler);
      window.addEventListener("resize", uncheckNavToggler);
    }
  });
})();
