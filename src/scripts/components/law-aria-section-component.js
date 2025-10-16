class LawAriaSectionComponent extends HTMLElement {
    connectedCallback() {
        const elements = this.innerHTML;
        this.innerHTML = `
                <div class="law-aria-section__content container-l">
                    ${elements}
                </div>`;
                    
        this.style.display = "block";
        this.id = "law-area";
        this.classList.add("law-aria-section");
        this.role = "region";
        this.ariaLabel = "Sekcija Oblasti Pravnog Rada"
    }
}

customElements.define("law-aria-section-component", LawAriaSectionComponent);
