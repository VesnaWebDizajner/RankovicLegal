class PracticeSectionTileComponent extends HTMLElement {
    connectedCallback() {
        let title = this.getAttribute('data-title') ?? '';
        let text = this.getAttribute('data-text') ?? '';
        let link = this.getAttribute('data-link') ?? '#';
        let backgroundImg = this.getAttribute('data-background-img') ?? '';
        this.innerHTML = `
                    <a href="${link}">
                        <h3 class="title">${title}</h3>
                        <p class="text">${text}</p>
                        <i class="icon-circle-arrow-right"></i>
                    </a>`;

        this.classList.add("practice-section__content-tile");
        this.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImg}) no-repeat center/cover`;
    }
}

customElements.define("practice-section-tile-component", PracticeSectionTileComponent);
