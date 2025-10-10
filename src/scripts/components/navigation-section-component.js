class NavigationSectionComponent extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active-page');
        this.innerHTML = `
                    <nav class="nav container-l">
                        <input type="checkbox" id="nav-toggle" hidden>

                        <label class="nav__hamburger" id="hamburger" for="nav-toggle">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </label>

                        <a href="./index.html" class="nav__logo">
                            <img src="./src/assets/img/rankovic.png" alt="Tiny's desktop logo" class="nav__logo-desktop">
                        </a>

                        <ul class="nav__list">
                            <li>
                                <a href="./index.html" class="nav__link ${activePage === 'projects' ? 'active' : ''}">Početna</a>
                            </li>
                            <li>
                                <a href="./low-area.html" class="nav__link ${activePage === 'services' ? 'active' : ''}">Oblasti prava</a>
                            </li>
                            <li>
                                <a href="./about-us.html" class="nav__link ${activePage === 'about-us' ? 'active' : ''}">O nama</a>
                            </li>
                            <li>
                                <a href="./blog.html" class="nav__link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
                            </li>
                            <li>
                                <a href="./contact.html" class="nav__link ${activePage === 'contact' ? 'active' : ''}">Kontakt</a>
                            </li>
                        </ul>

                        <div class="mobile-menu">
                            <label for="nav-toggle">
                                <i class="fa-regular fa-circle-xmark" id="close"></i>
                            </label>
                            
                            <ul class="mobile-menu__list">
                                <li>
                                    <a href="./index.html" class="mobile-menu__link ${activePage === 'projects' ? 'active' : ''}">Početna</a>
                                </li>
                                <li>
                                    <a href="./low-area.html" class="mobile-menu__link ${activePage === 'services' ? 'active' : ''}">Oblasti prava</a>
                                </li>
                                <li>
                                    <a href="./about-us.html" class="mobile-menu__link ${activePage === 'about-us' ? 'active' : ''}">O nama</a>
                                </li>
                                <li>
                                    <a href="./blog.html" class="mobile-menu__link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
                                </li>
                                <li>
                                    <a href="./contact.html" class="mobile-menu__link ${activePage === 'contact' ? 'active' : ''}">Kontact</a>
                                </li>
                            </ul>

                            <p class="mobile-menu__text">
                                Transforming spaces, building dreams - <span>together</span> !
                            </p>

                            <div class="mobile-menu__icons">
                                <a href="mailto:remodelingtiny@gmail.com" aria-label="Click to send email">
                                    <i class="fa-regular fa-envelope"></i>
                                </a>
                                <a href="tel:+1 321 265 9840" aria-label="Click to call phone number">
                                    <i class="fa-solid fa-phone"></i>
                                </a>
                                <a href="https://www.instagram.com/tinys_remodeling/" target="_blank"
                                    aria-label="Click to see Instagram profile">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </nav>`;

        this.style.display = "block";
        this.classList.add("navigation-section");
        this.role = "navigation";
        this.ariaLabel = "Glavna navigacija"
    }
}

customElements.define("navigation-section-component", NavigationSectionComponent);
