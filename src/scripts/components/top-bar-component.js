class TopBarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <ul class="top-bar__info container-l">
                <li class="top-bar__info-item">
                    <i class="icon-clock"></i>
                    <span>Pon - Pet</span> 
                    09:00 - 17:00
                </li>
                <li class="top-bar__info-item">
                    <i class="icon-envelope-2"></i>
                    <a href="mailto:adv.andrijarankovic@gmail.com" target="_blank">
                        adv.andrijarankovic@gmail.com
                    </a>
                </li>
                <li class="top-bar__info-item">
                    <i class="icon-phone"></i>
                    <a href="tel:+381638799247">
                        +381 63 87 99 247
                    </a>
                </li>
                <li class="top-bar__info-item">
                    <a href="" target="_blank">
                        <i class="icon-in"></i>
                    </a>
                </li>
            </ul>`;

        this.style.display = "block";
        this.classList.add("top-bar");
        this.role = "region";
        this.ariaLabel = "Top bar informacije"
    }
}

customElements.define("top-bar-component", TopBarComponent);
