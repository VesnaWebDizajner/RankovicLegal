class ContactSectionComponent extends HTMLElement {
    connectedCallback() {
        let paddingBlock = this.getAttribute('data-padding-block') ?? '11.9rem 13.1rem';
        let title = this.getAttribute('data-title') ?? 'Kontakt';
        let text = this.getAttribute('data-text') ?? 'Imate pitanja? Pošaljite nam poruku ili nas pozovite.';
        this.innerHTML = `
                    <div class="contact-section__content container-m">
                        <h2 class="contact-section__title">${title}</h2>
                        <p class="contact-section__text">${text}</p>
                        <div class="contact-section__box">
                            <div class="text-box">
                                <h3 class="text-box__title">Advokatske usluge Beograd</h3>
                                <ul class="text-box__contact">
                                    <li class="text-box__contact-opt">
                                        <i class="icon-clock"></i>
                                        <span>Pon - Pet</span>
                                        09:00 - 17:00
                                    </li>
                                    <li class="text-box__contact-opt">
                                        <i class="icon-phone"></i>
                                        <a href="tel:+381638799247">
                                            +381 63 87 99 247
                                        </a>
                                    </li>
                                    <li class="text-box__contact-opt">
                                        <i class="icon-envelope"></i>
                                        <a href="mailto:adv.andrijarankovic@gmail.com" target="_blank">
                                            adv.andrijarankovic@gmail.com
                                        </a>
                                    </li>
                                </ul>
                                <a href="https://www.linkedin.com/in/andrija-ranković-23626131b" target="_blank" class="text-box__icon-box">
                                    <i class="icon-in"></i>
                                </a>
                            </div>
                            <form action="" class="form-box">
                                <div class="form-box__heading">
                                    <h3 class="form-box__heading-title">Zakaži konsultacije</h3>
                                    <p class="form-box__heading-text">Odgovorićemo na Vaš upit u najkraćem mogućem roku.</p>
                                </div>
                                <label for="name" class="name">
                                    Ime <span>*</span>
                                    <input type="text" name="name" id="name">
                                </label>
                                <label for="surname" class="surname">
                                    Prezime <span>*</span>
                                    <input type="text" name="surname" id="surname">
                                </label>
                                <label for="email" class="email">
                                    Email <span>*</span>
                                    <input type="email" name="email" id="email">
                                </label>
                                <label for="phone" class="phone">
                                    Telefon <span>*</span>
                                    <input type="tel" name="phone" id="phone">
                                </label>
                                <label for="message" class="message">
                                    poruka <span>*</span>
                                    <textarea name="message" id="message" rows="1"></textarea>
                                </label>
                                <button class="bttn-secondary" type="submit">Pošaljite poruku</button>
                            </form>
                        </div>
                    </div>`;

        this.style.display = "block";
        this.style.paddingBlock = paddingBlock;
        this.classList.add("contact-section");
        this.role = "region";
        this.ariaLabel = "Kontakt forma"
    }
}

customElements.define("contact-section-component", ContactSectionComponent);
