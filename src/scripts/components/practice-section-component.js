class PracticeSectionComponent extends HTMLElement {
    connectedCallback() {
        const elements = this.innerHTML;
        let paddingBlock = this.getAttribute('data-padding-block') ?? '11.9rem 11.8rem';
        this.innerHTML = `
                    <div class="practice-section__content container-l">
                        <div class="practice-section__content-text">
                            <h2 class="title">
                                <span>oblasti</span>
                                pravnog rada
                            </h2>
                            <h3 class="subtitle">AdvokatskE USLUGE BEOGRAD</h3>
                        </div>
                        ${elements}
                    </div>`;

        this.style.display = "block";
        this.style.paddingBlock = paddingBlock;
        this.classList.add("practice-section");
        this.role = "region";
        this.ariaLabel = "Oblasti Pravnog Rada"
    }
}

customElements.define("practice-section-component", PracticeSectionComponent);
