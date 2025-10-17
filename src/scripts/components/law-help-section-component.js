class LawHelpSectionComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="law-help__content container-l">
                    <div class="law-help__content-container">
                        <h1 class="law-help__content-title">Potrebna Vam je pomoć u prekršajnim postupcima? </h1>
                        <p class="law-help__content-text">
                            Advokatska kancelarija Ranković pruža sveobuhvatne usluge i iz oblasti
                            <i>prekršajnog prava</i>.
                        </p>
                        <a href="#kontakt-forma" class="bttn-primary-m">Zakaži konsultacije</a>
                    </div>
                    <div class="law-help__content-img">
                        <img src="../src/assets/img/Tomas Plastic IG Story 1.png" alt="criminal-law-picture">
                    </div>
                </div>`;
                    
        this.style.display = "block";
        this.classList.add("law-help");
        this.role = "region";
        this.ariaLabel = "Sekcija Pravna pomoć"
    }
}

customElements.define("law-help-section-component", LawHelpSectionComponent);
