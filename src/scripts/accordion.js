let openedItem;

document.addEventListener('DOMContentLoaded', () => document.querySelectorAll('.law-aria-section__accordion-head')
    .forEach(head => 
        head.addEventListener('click', () => {
            head.parentElement.classList.toggle('open');
            if (openedItem && openedItem !== head.parentElement) 
                openedItem.classList.remove('open');

            openedItem = head.parentElement.classList.contains('open') ? head.parentElement : null;
        })
    )
);