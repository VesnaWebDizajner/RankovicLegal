class LawAriaNavComponent extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('data-law-aria-active-page');
        this.innerHTML = `
                    <h3 class="law-aria-section__nav-title">Oblasti prava</h3>
                    <ul class="law-aria-section__nav-list">
                        <li class="law-aria-section__nav-list-item ${activePage === 'krivicno-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="krivicno-pravo.html">Krivično pravo</a>
                        </li>
                        <li class="law-aria-section__nav-list-item ${activePage === 'radno-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="radno-pravo.html">Radno pravo</a>
                        </li>
                        <li class="law-aria-section__nav-list-item ${activePage === 'porodicno-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="porodicno-pravo.html">Porodično pravo</a>
                        </li>
                        <li class="law-aria-section__nav-list-item ${activePage === 'nasledno-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="nasledno-pravo.html">Nasledno pravo</a>
                        </li>
                        <li class="law-aria-section__nav-list-item ${activePage === 'prekrsajno-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="prekrsajno-pravo.html">Prekršajno pravo</a>
                        </li>
                        <li class="law-aria-section__nav-list-item ${activePage === 'ugovorno-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="ugovorno-pravo.html">Ugovorno pravo</a>
                        </li>
                        <li class="law-aria-section__nav-list-item ${activePage === 'imovinsko-pravo' ? 'active' : ''}">
                            <i class="icon-circle-arrow-right"></i>
                            <a href="imovinsko-pravni-odnosi.html">Imovinsko-pravni odnosi</a>
                        </li>
                    </ul>`;
                    
        this.style.display = "block";
        this.classList.add("law-aria-section__nav");
        this.role = "navigation";
        this.ariaLabel = "Navigacija za sekciju oblasti prava"
    }
}

customElements.define("law-aria-navigation-component", LawAriaNavComponent);
