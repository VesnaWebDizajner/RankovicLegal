class CountersComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <div class="counters" id="counters">
                    <div class="counters__item">
                        <p class="counters__item__number" data-target="500" data-key="counter">0+</p>
                        <p class="counters__item__text">USPEŠNO REŠENIH SLUČAJEVA</p>
                    </div>
                    <div class="counters__item">
                        <p class="counters__item__number" data-target="10" data-key="counter">0+</p>
                        <p class="counters__item__text">GODINA ISKUSTVA U PRAVNOJ PRAKSI</p>
                    </div>
                    <div class="counters__item">
                        <p class="counters__item__number" data-target="150" data-key="counter">0+</p>
                        <p class="counters__item__text">ZADOVOLJNIH KLIJENATA</p>
                    </div>
                    <div class="counters__item">
                        <p class="counters__item__number" data-target="100" data-percent="true" data-key="counter">0%</p>
                        <p class="counters__item__text">Posvećeni vašim pravima</p>
                    </div>
                </div>`;

        const numbers = document.querySelectorAll('[data-key="counter"]');
        let countingStarted = false;

        function counting(number) {
            let target = parseInt(number.getAttribute("data-target"));
            let count = 0;
            let speed = 15;

            let counting = setInterval(() => {
                if (count <= target) {
                    count += Math.ceil(target / 100);
                    number.innerHTML = count;
                } else {
                    if (number.getAttribute("data-percent"))
                        number.innerHTML = `${target}%`;
                    else
                        number.innerHTML = `${target}+`;
                    clearInterval(counting);
                }
            }, speed);
        }

        window.addEventListener("scroll", () => {
            let sectionPosition =
                numbers[0].closest("section").getBoundingClientRect().top * 1.3;
            let screenHeight = window.innerHeight;

            if (sectionPosition < screenHeight && !countingStarted) {
                numbers.forEach((number) => counting(number));
                countingStarted = true;
            }
        });
    }
}

customElements.define("counters-component", CountersComponent);
