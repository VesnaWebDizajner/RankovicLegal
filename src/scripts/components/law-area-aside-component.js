class ContentData {
    constructor(data) {
        this.title = data.title || 'Default Title';
        this.texts = data.texts || ['Default text 1', 'Default text 2'];
        this.accordions = data.accordions || {}
    }
}


class LawAriaAsideComponent extends HTMLElement {
    connectedCallback() {
        const data = JSON.parse(document.getElementById('aside-data').textContent);
        this.innerHTML = `
                    <h2 class="law-aria-section__aside-title">
                        ${data.title}
                    </h2>
                    ${data.texts.map(text => `<p class="law-aria-section__aside-text">${text}</p>`).join('')}
                    <div class="law-aria-section__accordion">
                        ${data.accordion.map(item => `
                            <div class="law-aria-section__accordion-item">
                                <div class="law-aria-section__accordion-head">
                                    <h3 class="law-aria-section__accordion-head-title">
                                        ${item.title}
                                    </h3>
                                    <i class="icon-arrow-right"></i>
                                </div>
                                <div class="law-aria-section__accordion-body">
                                    <div class="law-aria-section__accordion-body-inner">
                                        ${item.list
                                            ? `<ul>${item.list.map(li => `<li><i class="icon-check"></i>${li}</li>`).join('')}</ul>`
                                            : item.text ? `<p>${item.text}</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>`;

        this.style.display = "block";
        this.classList.add("law-aria-section__aside");
        this.role = "complementary";
        this.ariaLabel = "Tekst sadržaj za sekciju oblasti prava"
    }
}

customElements.define("law-aria-aside-component", LawAriaAsideComponent);
