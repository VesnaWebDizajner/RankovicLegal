class NavigationSectionComponent extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active-page');
        const stepBackNum = this.getAttribute('data-path-back-num') ?? 0;
        const deepSegment = this.getAttribute('data-deep-segment') ?? "./";
        let pathStepBack = '../'.repeat(stepBackNum);
        this.innerHTML = `
                    <nav class="nav container-l">
                        <input type="checkbox" id="nav-toggle" hidden>

                        <label class="nav__hamburger" id="hamburger" for="nav-toggle">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </label>

                        <a href="${pathStepBack}index.html" class="nav__logo">
                            <img src="${pathStepBack}src/assets/img/rankovic-logo.svg" alt="Ranković logo" class="nav__logo-desktop">
                        </a>

                        <ul class="nav__list">
                            <li>
                                <a href="${pathStepBack}index.html" class="nav__link ${activePage === 'home' ? 'active' : ''}">Početna</a>
                            </li>
                            <li class="dropdown">
                                <a href="${pathStepBack}oblasti-prava.html" class="nav__link ${activePage === 'oblasti-prava' ? 'active' : ''}">Oblasti prava</a>
                                <div class="dropdown-menu">
                                    <a href="${deepSegment}krivicno-pravo.html">Krivično pravo</a>
                                    <a href="${deepSegment}radno-pravo.html">Radno pravo</a>
                                    <a href="${deepSegment}porodicno-pravo.html">Porodično pravo</a>
                                    <a href="${deepSegment}ugovorno-pravo.html">Ugovorno pravo</a>
                                    <a href="${deepSegment}prekrsajno-pravo.html">Prekršajno pravo</a>
                                    <a href="${deepSegment}nasledno-pravo.html">Nasledno pravo</a>
                                    <a href="${deepSegment}imovinsko-pravni-odnosi.html">Imovinsko pravni odnosi</a>
                                </div>
                            </li>
                            <li>
                                <a href="${pathStepBack}o-nama.html" class="nav__link ${activePage === 'about-us' ? 'active' : ''}">O nama</a>
                            </li>
                            <li>
                                <a href="${pathStepBack}blog.html" class="nav__link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
                            </li>
                            <li>
                                <a href="${pathStepBack}kontakt.html" class="nav__link ${activePage === 'contact' ? 'active' : ''}">Kontakt</a>
                            </li>
                            <a href="#kontakt-forma" class="nav__link bttn-primary-l" aria-label="Click to go on contact form section">
                                Zakaži konsultacije
                            </a>
                        </ul>

                        <div class="mobile-menu">
                            <label for="nav-toggle">
                                <i id="close">X</i>
                            </label>
                            
                            <ul class="mobile-menu__list">
                                <li>
                                    <a href="${pathStepBack}index.html" class="mobile-menu__link ${activePage === 'home' ? 'active' : ''}">Početna</a>
                                </li>
                                <li>
                                    <a href="${pathStepBack}oblasti-prava.html" class="mobile-menu__link ${activePage === 'oblasti-prava' ? 'active' : ''}">Oblasti prava</a>
                                </li>
                                <li>
                                    <a href="${pathStepBack}o-nama.html" class="mobile-menu__link ${activePage === 'about-us' ? 'active' : ''}">O nama</a>
                                </li>
                                <li>
                                    <a href="${pathStepBack}blog.html" class="mobile-menu__link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
                                </li>
                                <li>
                                    <a href="${pathStepBack}kontakt.html" class="mobile-menu__link ${activePage === 'contact' ? 'active' : ''}">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                    </nav>`;

        this.style.display = "block";
        this.classList.add("navigation-section");
        this.role = "navigation";
        this.ariaLabel = "Glavna navigacija"
    }
}

customElements.define("navigation-section-component", NavigationSectionComponent);
