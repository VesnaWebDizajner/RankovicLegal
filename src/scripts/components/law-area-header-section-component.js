class LawHAreaHeaderSectionComponent extends HTMLElement {
    connectedCallback() {
        const text = this.getAttribute('data-text');
        const title = this.getAttribute('data-title');
        this.innerHTML = `
                <div class="law-areas__content container-l">
                    ${text ? `<p class="law-areas__content-text">${text}</p>` : ''}
                    <h1 class="law-areas__content-title">${title}</h1>
                    <a href="#law-area">
                        <div class="arrow"
                            style="width: 32px; height: 32px; border: 1px solid white; border-radius: 50%; display: flex;align-items: center; justify-content: center;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" style="transform:rotate(360deg);">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </a>
                </div>`;
                    
        this.style.display = "block";
        this.classList.add("law-areas");
        this.role = "banner";
        this.ariaLabel = "Naslovna sekcija za oblasti prava"
    }
}

customElements.define("law-area-header-section-component", LawHAreaHeaderSectionComponent);
