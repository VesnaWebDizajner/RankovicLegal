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
                                        ${item.heading}
                                    </h3>
                                    <i class="icon-arrow-right"></i>
                                </div>
                                <div class="law-aria-section__accordion-body">
                                    <div class="law-aria-section__accordion-body-inner">
                                        ${item.content.map(element => (
                                            element.text
                                                ? `<p class="text">${element.text}</p>`
                                                : element.title
                                                    ? `<h3 class="title">${element.title}</h3>`
                                                    : element.textBox
                                                        ? `<div class="text-box">
                                                                <h3 class="text-box-title">${element.textBox.title}</h3>
                                                                <p class="text-box-text">${element.textBox.text}</p>
                                                            </div>`
                                                        : element.checkList
                                                            ? `<ul class="check-list">${element.checkList.map(li => `<li><i class="icon-check"></i>${li}</li>`).join('')}</ul>`
                                                            : element.numList
                                                                ? `<ul class="num-list">${element.checkList.map(li => `<li>${li}</li>`).join('')}</ul>`
                                                                : element.buletList
                                                                    ? `<ul class="bulet-list">${element.checkList.map(li => `<li>${li}</li>`).join('')}</ul>`
                                                                    : ''
                                        )).join('')}
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
