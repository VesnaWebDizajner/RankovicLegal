class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                    <footer class="footer">
                        <div class="footer__content container-m">
                            <div class="footer__about">
                                <img class="footer__about-logo" src="./src/assets/img/logo-footer.png" alt="Ranković Legal Logo - Text">
                                <p class="footer__about-text">
                                    Vaš pravni partner u svim situacijama.
                                    <br />
                                    Posvećeni zaštiti Vaših interesa.
                                </p>
                                <a href="https://www.linkedin.com/in/andrija-ranković-23626131b" target="_blank"
                                    class="footer__about-link" rel="noopener noreferrer">
                                    <i class="icon-in"></i>
                                </a>
                            </div>
                            <div class="footer__nav">
                                <div class="footer__nav-section">
                                    <h3 class="nav-title">Istražite</h3>
                                    <ul role="nav" class="nav">
                                        <li class="nav__list">
                                            <a href="">
                                                Početna
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                O nama
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Blog
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Kontakt
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer__nav-section">
                                    <h3 class="nav-title">Usluge</h3>
                                    <ul role="nav" class="nav">
                                        <li class="nav__list">
                                            <a href="">
                                                Krivično pravo
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Radno pravo
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Porodično pravo
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Ugovorno pravo
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Prekršajno pravo
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Nasledno pravo
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <a href="">
                                                Imovinsko-pravni odnosi
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer__nav-section">
                                    <h3 class="nav-title">Kontakt</h3>
                                    <ul role="navigation" class="nav">
                                        <li class="nav__list">
                                            <i class="icon-clock"></i>
                                            <span>Pon - Pet</span>
                                            09:00 - 17:00
                                        </li>
                                        <li class="nav__list">
                                            <i class="icon-phone"></i>
                                            <a href="tel:+381638799247">
                                                +381 63 87 99 247
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <i class="icon-envelope"></i>
                                            <a href="mailto:adv.andrijarankovic@gmail.com" target="_blank">
                                                adv.andrijarankovic@gmail.com
                                            </a>
                                        </li>
                                        <li class="nav__list">
                                            <i class="icon-map"></i>
                                            <a href="https://maps.app.goo.gl/KFEwKPZ3pivcY5bu7" target="_blank">
                                                Vuka Karadžića 37, 14000 Valjevo
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="footer__copyright container-m">
                            <p>
                                <span>© 2024 Ranković Legal.</span>
                                <span>Sva prava zadržana.</span>
                            </p>
                            <p>
                                Designed by
                                <span>DinaDoesIt</span>
                            </p>
                        </div>
                    </footer>`;
    }
}

customElements.define("footer-component", FooterComponent);
